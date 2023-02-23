import React, { useContext } from "react";
import { UserContext } from "./UseContextHook";

function Component3() {
  const { user, profession } = useContext(UserContext);

  return (
    <div>
      <h1>{profession}</h1>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
    </div>
  );
}

export default Component3;
