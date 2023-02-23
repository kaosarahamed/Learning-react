import React from "react";
import PropUser from "./PropUser";

function Proptypes() {
  const title = "i am full stack developer";
  const age = 26;
  return (
    <div>
      <PropUser title={title} age={age} />
    </div>
  );
}

export default Proptypes;
