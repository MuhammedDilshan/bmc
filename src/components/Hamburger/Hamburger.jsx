import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./Hamburger.scss";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
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

  const handleHamburger = () => {
    setIsActive(!isActive);
    document.body.classList.add("hidden");
  };

  return (
    <div className={`hamburger ${isActive ? "active" : ""}`}>
      <div className="icon" onClick={handleHamburger}>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${isActive ? "menuActive" : ""}`}>
        {window?.innerWidth <= 650 && (
          <div className="left_container_search">
            <IoSearch />
            <input type="text" placeholder="Search Creators" />
          </div>
        )}
        <ul>
          {menu?.map((item, i) => (
            <li key={i}>
              <Link to={item?.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {window.innerWidth <= 650 && (
          <div className="buttonGroup">
            <button className="header_left_container_btn">Sign in</button>
            <button className="active">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
