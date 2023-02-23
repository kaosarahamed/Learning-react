import React from "react";
import { Link } from "react-router-dom";
import "../Pages/Blog.css";
function Menu() {
  return (
    <div className="menu">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blogs"}>Blogs</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/queryparameter"}>QueryParameter</Link>
        <Link to={"/memo"}>Memo</Link>
      </nav>
    </div>
  );
}

export default Menu;
