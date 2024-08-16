import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo_box">
        <img src={assets.Logo} alt="Logo" />
      </div>
      <div className="footer_links">
        <div className="link_box">
          {links?.map((item) => (
            <div className="nav" key={item?.key}>
              <h6>{item?.heading}</h6>
              <ul>
                {item.links?.map((link) => (
                  <li key={link?.id}>
                    <Link to={link?.path}>{link?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="store">
          <Link to={"https://www.apple.com/in/app-store/"}>
            <img src={assets?.app_store} alt="App Store" />
          </Link>
          <Link to={"https://play.google.com/store"}>
            <img src={assets?.google_play} alt="Google Play" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Privacy Terms</p>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    heading: "Company",
    links: [
      {
        id: 0,
        name: "About",
        path: "/about",
      },
      {
        id: 1,
        name: "Privacy",
        path: "/privacy",
      },
      {
        id: 2,
        name: "Privacy & Terms",
        path: "/privacy-terms",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        id: 0,
        name: "Chat with us",
        path: "/chat-with-us",
      },
      {
        id: 1,
        name: "Help center",
        path: "/help-center",
      },
      {
        id: 2,
        name: "Feature request",
        path: "/feature-request",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        id: 0,
        name: "Twitter",
        path: "https://twitter.com/",
      },
      {
        id: 1,
        name: "Facebook",
        path: "/https://facebook.com/",
      },
      {
        id: 2,
        name: "Discord",
        path: "/discord",
      },
    ],
  },
  {
    heading: "More",
    links: [
      {
        id: 0,
        name: "Button",
        path: "/button",
      },
      {
        id: 1,
        name: "Brand assets",
        path: "/brand-assets",
      },
      {
        id: 2,
        name: "Careers",
        path: "/careers",
      },
    ],
  },
];
