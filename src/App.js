import News from "./componants/News";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<News key="general" country={"in"} catagry={"general"} />}
        />
        <Route
          exact
          path="business"
          element={<News key="business" country={"in"} catagry={"business"} />}
        />
        <Route
          exact
          path="entertainment"
          element={
            <News
              key="entertainment"
              country={"in"}
              catagry={"entertainment"}
            />
          }
        />
        <Route
          exact
          path="health"
          element={<News key="health" country={"in"} catagry={"health"} />}
        />
        <Route
          exact
          path="science"
          element={<News key="science" country={"in"} catagry={"science"} />}
        />
        <Route
          exact
          path="technology"
          element={
            <News key="technology" country={"in"} catagry={"technology"} />
          }
        />
        <Route
          exact
          path="sports"
          element={<News key="sports" country={"in"} catagry={"sports"} />}
        />
        <Route
          path="*"
          element={
            <div>
              <h1>erorr 404 this page is not exist!</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
