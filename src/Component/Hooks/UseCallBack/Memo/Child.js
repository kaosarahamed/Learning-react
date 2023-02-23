import React, { memo } from "react";

function Child(props) {
  console.log("I am child");
  return (
    <div>
      {props.count}
      <button onClick={props.onHandleClick}>Increment +</button>
    </div>
  );
}

export default memo(Child);
