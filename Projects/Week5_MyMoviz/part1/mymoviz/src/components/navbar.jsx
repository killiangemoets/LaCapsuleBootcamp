import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Navbar() {
  return (
    <Nav className="navbar" pills>
      <NavItem className="logo-page">
        <img src="images/logo.png" className="logo-img" alt="logo" />
        <h3 className="page-title">Last Releases</h3>
      </NavItem>
      <Dropdown nav toggle={function noRefCheck() {}}>
        <DropdownToggle className="wishlist-btn" caret>
          2 films
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}
