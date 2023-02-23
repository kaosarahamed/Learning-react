import React, { useRef } from "react";

function UserRef() {
  const userName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={userName} name="name" id="name" />
        <input type="password" ref={userName} name="password" id="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserRef;
