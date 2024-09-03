import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  //useEffect - 1
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };
  // useEffect(iRunOnlyOnce, []);

  //useEffect - 2
  useEffect(() => {
    console.log("call api");
  }, []);

  // 검색 바 -> 버튼을 눌러도 재 랜더링됨
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // 해결법 - 내가 검색한 단어가 바뀔때만 랜더링
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' changes.");
  }, [counter, keyword]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>clike me</button>
    </div>
  );
}

export default App;
