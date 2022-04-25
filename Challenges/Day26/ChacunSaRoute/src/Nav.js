import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Nav() {
  const [isLogin, setIsLogin] = useState(true);

  var handleClick = () => {
    setIsLogin(!isLogin);
  };

  let redirection = null;
  if (!isLogin) {
    redirection = <Redirect to="/" />;
  }

  return (
    <nav style={{ backgroundColor: "#182C61" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link style={{ color: "#FFFFFF" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "#FFFFFF" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: "#FFFFFF" }} to="/account">
            Account
          </Link>
        </li>
        <li style={{ color: "#FFFFFF" }}>
          {isLogin ? "Hello John " : null}
          <button
            style={{ padding: "6px", border: "0px" }}
            onClick={() => handleClick()}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
      {redirection}
    </nav>
  );
}

export default Nav;
