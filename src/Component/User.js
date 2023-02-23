import React from "react";

function User(props) {
  const Styles = {
    fontSize: "20px",
    color: "red",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <div style={Styles}>
      <li style={{ listStyle: "none", backgroundColor: "blue" }}>
        {props.name}
      </li>
      <li style={{ listStyle: "none", backgroundColor: "blue" }}>
        {props.age}
      </li>
      <li style={{ listStyle: "none", backgroundColor: "blue" }}>
        {props.postion}
      </li>
      {props.phones.map((phone, index) => (
        <div key={index}>
          <li>{phone.number}</li>
          <li>{phone.fax}</li>
        </div>
      ))}
    </div>
  );
}

export default User;
