import React from "react";
import { assets } from "../../assets/assets";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.scss";

const Header = ({ admin }) => {
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Explore Creators",
      link: "/explore-creators",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];

  return (
    <header className="header">
      <div className="header-right-container">
        <div className="header-right-container-logo">
          <Link to="/">
            <img src={assets?.Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="header-right-container-nav">
          {menu?.map((item, i) => (
            <li className="mx-2" key={i}>
              <Link to={item?.link}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!admin ? (
        <div className="header-left-container">
          <div className="header-left-container-search">
            <IoSearch />
            <input type="text" placeholder="Search Creators" />
          </div>
          <button className="header-left-container-btn">Sign in</button>
          <button className="header-left-container-btn-active">Sign Up</button>
          <Hamburger />
        </div>
      ) : (
        <div className="admin">
          <span>Admin</span>
          <div className="avatar">
            <img src={assets?.user} alt="Admin" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
