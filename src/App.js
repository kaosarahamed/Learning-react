import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsememoHook from "./Component/Hooks/useMemo/UsememoHook";
import About from "./Component/Pages/About";
import Blog from "./Component/Pages/Blog";
import Blogs from "./Component/Pages/Blogs";
import Contact from "./Component/Pages/Contact";
import Error from "./Component/Pages/Error";
import Home from "./Component/Pages/Home";
import Menu from "./Component/Pages/Menu";
import Login from "./Component/Pages/Protect Route/Login";
import QueryParameter from "./Component/Pages/QueryParameter";

function App() {
  const [islogin, setisLogin] = useState(true);
  return (
    <BrowserRouter>
      <Menu />
      {islogin ? (
        <button
          onClick={() => {
            setisLogin(!islogin);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setisLogin(!islogin);
          }}
        >
          Login
        </button>
      )}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/blogs"}
          element={
            <Login islogin={islogin}>
              <Blogs />
            </Login>
          }
        />
        <Route path={"/blogs/:title"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"*"} element={<Error />} />
        <Route path={"/queryparameter"} element={<QueryParameter />} />
        <Route path={"/memo"} element={<UsememoHook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
