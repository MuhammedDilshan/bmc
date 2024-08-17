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
      <div className="right_container">
        <div className="logo">
          <Link to="/">
            <img src={assets?.Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav">
          {menu?.map((item, i) => (
            <li className="mx-2" key={i}>
              <Link to={item?.link}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!admin ? (
        <div className="left-container">
          <div className="search">
            <IoSearch />
            <input type="text" placeholder="Search Creators" />
          </div>
          <button className="btn">Sign in</button>
          <button className="btn-active">Sign Up</button>
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
