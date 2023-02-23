import { useLocation } from "react-router-dom";
import "../Pages/Blog.css";

function Blog(props) {
  const location = useLocation();
  const { id, title, body } = location.state;

  console.log(location.state.title);
  return (
    <div className="singleBlog">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Blog;
