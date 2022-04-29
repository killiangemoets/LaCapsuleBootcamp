import React from "react";
import "./App.css";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  const logout = function () {
    props.cleanWishList();
    props.removeToken();
  };

  return (
    <nav>
      <Menu style={{ textAlign: "center" }} mode="horizontal" theme="dark">
        <Menu.Item key="mail">
          <Link to="/sources">
            <Icon type="home" />
            Sources
          </Link>
        </Menu.Item>
        <Menu.Item key="test">
          <Link to="/myarticles">
            <Icon type="read" />
            My Articles
          </Link>
        </Menu.Item>

        <Menu.Item key="app" onClick={() => logout()}>
          <Link to="/">
            <Icon type="logout" />
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: "addToken", token });
    },

    removeToken: function () {
      dispatch({ type: "removeToken" });
    },

    cleanWishList: function () {
      dispatch({ type: "cleanArticles" });
    },
  };
}

export default connect(null, mapDispatchToProps)(Nav);

// export default Nav;
