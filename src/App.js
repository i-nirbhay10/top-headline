import News from "./componants/News";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<News key="general" country={"us"} catagry={"general"} />}
        />
        <Route
          exact
          path="top-headline"
          element={<News key="general" country={"us"} catagry={"general"} />}
        />
        <Route
          exact
          path="business"
          element={<News key="business" country={"us"} catagry={"business"} />}
        />
        <Route
          exact
          path="entertainment"
          element={
            <News
              key="entertainment"
              country={"us"}
              catagry={"entertainment"}
            />
          }
        />
        <Route
          exact
          path="health"
          element={<News key="health" country={"us"} catagry={"health"} />}
        />
        <Route
          exact
          path="science"
          element={<News key="science" country={"us"} catagry={"science"} />}
        />
        <Route
          exact
          path="technology"
          element={
            <News key="technology" country={"us"} catagry={"technology"} />
          }
        />
        <Route
          exact
          path="sports"
          element={<News key="sports" country={"us"} catagry={"sports"} />}
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
