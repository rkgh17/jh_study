import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [usd, setUsd] = useState(0);

  const coinChange = (event) => {
    setSelectedCoin(event.target.value);
    setUsd(0);
  };
  const inputChange = (event) => {
    console.log(selectedCoin.split("$")[1]);
    setUsd(event.target.value / Number(selectedCoin.split("$")[1]));
  };

  useEffect(() => {
    // api서버로부터 응답을 요청하고, response를 받는다
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinChange}>
          <option value="">
            ==========================Select Coin==========================
          </option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <br />
      <br />
      <hr />
      {selectedCoin === "" ? null : (
        <div>
          {" "}
          <h2>How much do you have?</h2>
          <div>
            <input
              type="number"
              min="0"
              onChange={inputChange}
              placeholder="dollor"
            />
            &nbsp;USD
          </div>
          {isNaN(usd) ? null : (
            <h2>
              You can get {usd} {selectedCoin.split(")")[0] + ")"}
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
