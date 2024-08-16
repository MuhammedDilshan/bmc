import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import UserReply from "../UserReply/UserReply";
import "./Express.scss";

function Express({ heading, description, icon, type }) {
  return (
    <div
      className={`${
        type === "share" && "express_section_flip"
      } express_section`}
    >
      <div className="left_container">
        <span>{icon}</span>
        <h3 dangerouslySetInnerHTML={{ __html: heading }} />
        <p>{description}</p>
        <button>
          Learn more <FaArrowRightLong />
        </button>
      </div>
      <div className="rightBox">
        {type === "share" ? (
          <>
            <div className="share_phone">
              <img src={assets?.share_phone} alt="Share" />
            </div>
          </>
        ) : type === "location" ? (
          <>
            <div className="right_container" style={{ "--bg": "#faf4ff" }}>
              <div className="image_container">
                <img src={assets?.men_user} alt="User" className="men_user" />
              </div>
            </div>
            <div className="map">
              <img src={assets.map_icon} alt="Emoji" />
            </div>
            <div className="voiceMessage">
              <UserReply richColor reply={type === "location"} />
            </div>
            <div className="Splash_reverse">
              <img src={assets.splash_icon} alt="Splash" />
            </div>
          </>
        ) : (
          <>
            <div className="right_container" style={{ "--bg": "#faf4ff" }}>
              <div className="image_container">
                <img src={assets?.lady_user} alt="User" />
              </div>
            </div>
            <div className="emoji">
              <img src={assets.emoji_bar} alt="Emoji" />
            </div>
            <div className="voiceMessage">
              <UserReply richColor />
            </div>
            <div className="Splash">
              <img src={assets.splash_icon} alt="Splash" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Express;
