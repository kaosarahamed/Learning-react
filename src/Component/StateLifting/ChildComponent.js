import React from "react";

function ChildComponent(props) {
  const data = "i am from child component";
  props.collectData(data);
  return <div>ChildComponent</div>;
}

export default ChildComponent;
