import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          eveniet! Magni perferendis minus delectus nulla in iste quos commodi,
          soluta accusantium exercitationem reprehenderit ipsam eum temporibus
          placeat veniam praesentium cupiditate vero voluptatibus totam fuga rem
          atque pariatur? Rem, itaque. Deleniti dolorem consequuntur praesentium
          nihil deserunt culpa debitis, facere harum animi.
        </p>
      ) : null}
      <div>
        {/* {toggle ? <button onClick={() => {setToggle(false)}}>Hide</button> : <button onClick={() => {setToggle(true)}}>Show</button>} */}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default Toggle;
