import React from "react";
import "./App.css";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
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

        <Menu.Item key="app" onClick={() => props.removeToken()}>
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

    removeToken: function (token) {
      dispatch({ type: "removeToken", token });
    },
  };
}

export default connect(null, mapDispatchToProps)(Nav);

// export default Nav;
