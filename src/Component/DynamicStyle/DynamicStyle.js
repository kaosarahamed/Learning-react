import React, { useEffect, useState } from "react";

function DynamicStyle() {
  const [valid, setValid] = useState("");
  const addCss = false;
  const [color, setColor] = useState(true);

  useEffect(() => {
    if (valid.length >= 2) {
      setColor(false);
    } else {
      setColor(true);
    }
  }, [valid]);

  const handleChange = (e) => {
    setValid(e.target.value);
  };
  console.log(valid);
  return (
    <div>
      <h2 style={{ color: addCss ? "red" : "blue" }}>
        I am Mern Stack Developer
      </h2>
      <input
        type="text"
        value={valid}
        onChange={handleChange}
        style={{ backgroundColor: color ? "red" : "green" }}
      />
    </div>
  );
}

export default DynamicStyle;
