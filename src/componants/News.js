import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Nav from "./Nav";
import Spin from "./Spin";

const News = (props) => {
  const [article, setartical] = useState("");
  const [page, setpage] = useState(1);
  const [result, setresult] = useState("");
  const [spin, setspin] = useState(true);

  const next = () => {
    setpage(page + 1);
    console.log(page + 1);
    fetchApi();
  };

  const previes = () => {
    setpage(page - 1);
    console.log(page - 1);
    fetchApi();
  };

  const fetchApi = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagry}&apiKey=${process.env.REACT_APP_KEY}&page=${page}&pagesize=12`;
    setspin(true);
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);

    setresult(res.totalResults);
    console.log(result);
    setartical(
      <div className="row">
        {res.articles.map((data) => (
          <div className="col-lg-4 col-md-4 col-xl-4" key={data.url}>
            <Newsitem
              source={data.source.name}
              urlToImage={data.urlToImage}
              author={data.author}
              description={data.description}
              url={data.url}
              publishdate={data.publishedAt}
            />
          </div>
        ))}
      </div>
    );
    setspin(false);
  };
  useEffect(() => {
    fetchApi();
  }, [setartical]);

  return (
    <>
      <Nav title={"Khabar.com"} />
      <div className="container" style={{ marginTop: "75px" }}>
        <div className="text-center text-capitalize">
          <h1>{props.catagry}- top Headlines</h1>
        </div>
        {spin && <Spin />}
        <span>{article}</span>
      </div>
      <div className="mx-lg-5 " style={{ marginBottom: "90px" }}>
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-danger text-light float-start"
          onClick={previes}
        >
          previes
        </button>

        <button
          disabled={page + 1 > Math.ceil(result / 12)}
          type="button"
          className="btn btn-danger text-light float-end"
          onClick={next}
        >
          next
        </button>
      </div>
      <div className=" fixed-bottom text-center text-light bg-secondary p-1 ">
        <h4>All Right Reserved To &#169; Khabar.com</h4>
      </div>
    </>
  );
};

export default News;
