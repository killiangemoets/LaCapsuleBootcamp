import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// const handleRemoveWhishMovie = function (name) {
//   console.log("Remove");
// };

export default function Navbar(props) {
  const createWishMovies = function (wishMovies) {
    const MovieCards = wishMovies.map((movie, i) => {
      return (
        <DropdownItem
          onClick={() => props.handleRemoveWhishMovie(movie.name)}
          key={i}
          className="dropdown-item"
        >
          <div className="wish-movie">
            <div className="img-div">
              <img src={movie.img} alt="movie" className="wishlist-img" />
            </div>
            <div className="title-div">
              <p className="wish-title">{movie.name}</p>
            </div>
          </div>
        </DropdownItem>
      );
    });

    return MovieCards;
  };
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropDown = function () {
    setOpenDropdown(!openDropdown);
  };

  return (
    <Nav className="navbar" pills>
      <NavItem className="logo-page">
        <img src="images/logo.png" className="logo-img" alt="logo" />
        <h3 className="page-title">Last Releases</h3>
      </NavItem>
      <Dropdown isOpen={openDropdown} nav toggle={function noRefCheck() {}}>
        <DropdownToggle
          onClick={() => handleOpenDropDown()}
          className="wishlist-btn"
          caret
        >
          {props.likesCount} films
        </DropdownToggle>
        <DropdownMenu className="wishlist">
          <DropdownItem header className="dropdown-header">
            Wishlist
          </DropdownItem>
          {createWishMovies(props.wishList)}
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}
