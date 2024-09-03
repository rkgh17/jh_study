import React from "react";
import ReactDOM from "react-dom/client";
import Coin from "./Coin";
import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // console.log 두번씩찍힘
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <div>
    {/* <Coin /> */}
    {/* <CoinTracker /> */}
    <MovieApp />
  </div>
);
