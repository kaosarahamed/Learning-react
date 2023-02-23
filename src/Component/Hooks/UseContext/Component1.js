import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UseContextHook";
function Component1() {
  const [user, setUser] = useState({
    name: "kaosar ahamed",
    age: 26,
  });

  const [profession, setprofession] = useState("I am Mern Stack Developer");

  const setPro = () => {
    setprofession("heelo");
    setUser({ name: "tanvir", age: 25 });
  };

  return (
    <UserContext.Provider value={{ user, profession }}>
      <Component2 setPro={setPro} />
    </UserContext.Provider>
  );
}

export default Component1;
