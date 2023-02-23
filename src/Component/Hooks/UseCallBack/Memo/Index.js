import React, { useCallback, useState } from "react";
import Child from "./Child";

function Index() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const onHandleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  console.log("memo render");
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "on" : "off"}
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increement</button>
      <Child count={count} onHandleClick={onHandleClick} />
    </div>
  );
}

export default Index;
