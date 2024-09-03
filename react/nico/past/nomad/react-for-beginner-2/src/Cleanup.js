import { useState, useEffect } from "react";

function Hello() {
  //   function byFn() {
  //     console.log("bye");
  //   }
  //   function hiFn() {
  //     console.log("created");
  //     return byFn;
  //   }

  //   useEffect(hiFn, []);
  //   return <h1>Hello</h1>;

  // 위의 방법과 똑같음
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("bye");
    };
  }, []);
  return <h1>Hello</h1>;
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <hr />
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default Cleanup;
