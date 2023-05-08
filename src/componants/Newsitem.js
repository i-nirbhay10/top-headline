const Newsitem = (props) => {
  return (
    <>
      <div className="container mt-3">
        <div className="card ">
          <div className="position-relative">
            <span className=" position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">
              {props.source}
            </span>
          </div>
          <img
            src={
              !props.urlToImage
                ? "https://gumlet.assettype.com/freepressjournal/2023-05/8072ae61-62fa-4ea8-a76c-f1e3c205efbe/FvY0ZkXaUAA6OJd.jfif?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true"
                : props.urlToImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{!props.author ? "" : props.author}</h5>
            <span className="card-text">{props.description}</span>
            <h6>date :- {props.publishdate ? props.publishdate : ""}</h6>
            <a href={props.url} target={"blank"} className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
