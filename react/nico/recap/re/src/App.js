import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClickF = () => setValue((prev) => prev + 1);
  const onChangeF = (event) => setKeyword(event.target.value);

  // 코드가 딱 한번만 실핼될 수 있도록 보호함.
  useEffect(() => {
    console.log("i run only once.");
  }, []);

  // keyworkd가 변화할 때만 실행할 수 있도록 있게 함.
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);

  // counter 변화할 때만 실행할 수 있도록 있게 함.
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);

  // 둘다
  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  // cleanup
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  function Hello() {
    function hiFn() {
      console.log("created");

      // 컴포넌트가 없어질때 아래가 수행된
      return byFn;
    }
    function byFn() {
      console.log("destroyed");
    }
    useEffect(hiFn, []);
    return <h1>Hello</h1>;
  }

  return (
    <div>
      <input
        value={keyword}
        onChange={onChangeF}
        type="text"
        placeholder="Search here...."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClickF}>Click me</button>
      {/* <Button text={"Continue"} /> */}
      <div>
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        {showing ? <Hello /> : null}
      </div>
    </div>
  );
}

export default App;
