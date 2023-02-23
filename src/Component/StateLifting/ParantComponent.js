import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParantComponent() {
  const [Data, setData] = useState("");

  const collectData = (data) => {
    setData(data);
  };
  return (
    <div>
      <h2>{Data}</h2>
      <ChildComponent collectData={collectData} />
    </div>
  );
}

export default ParantComponent;
