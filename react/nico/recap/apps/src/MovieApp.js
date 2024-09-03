import { useEffect, useState } from "react";
import MovieDtl from "./components/MovieDtl";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function MovieApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/movie/:param"}
          element={<Detail />}
        ></Route>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default MovieApp;
