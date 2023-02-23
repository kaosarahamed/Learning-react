import React, { useState } from "react";

function ControllForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [passowrd, setPassword] = useState("");

  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  const onsubmit = (e) => {
    e.preventDefault();
    setUser({ name: "", email: "", password: "" });
    console.log(user);
  };
  const handleChane = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form action="" onSubmit={onsubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleChane}
          name="name"
          id="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChane}
          name="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChane}
          name="password"
          id="password"
          placeholder="Enter your password"
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default ControllForm;
