import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function QueryParameter() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [searchparams, setsearchparams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchparams({ name: name, age: age });
  };
  console.log(searchparams.name);
  return (
    <div>
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueryParameter;
