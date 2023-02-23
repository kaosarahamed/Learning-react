import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Blog.css";
import { Data } from "./Data";
function Blogs() {
  const [data, setData] = useState(Data);

  const trunkBody = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  return (
    <div className="blogContent">
      <h5>Blog Page</h5>
      <div className="blogs">
        {data.map((res, index) => {
          const { id, title, body } = res;
          return (
            <div key={index} className="blog">
              <h2>{id}</h2>
              <h2>{title}</h2>
              <p>{trunkBody(body, 200)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
