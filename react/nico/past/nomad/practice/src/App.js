import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// https://reactrouter.com/en/main/routers/create-browser-router
// react router dom 버전업그레이드되면서 바뀜
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //6.6.2
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// route시 파라미터를 가져가는법
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "movie/:id", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
