import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import "./UserReply.scss";

const UserReply = ({ type, richColor, reply }) => {
  const [time, setTime] = useState(16);

  useEffect(() => {
    if (time >= 60) {
      setTime(16);
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 130);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <>
      {type === "gift" ? (
        <div className="gift-container">
          <div className="gift-box">
            <div className="right-container">
              <img src={assets.gift_icon} alt="Gift" />
              <span>
                You received <br />a Gift
              </span>
              <button>View gift</button>
            </div>
          </div>
          <div className="avatar">
            <img src={assets?.blue_memoji} alt="User" />
          </div>
        </div>
      ) : (
        <div className="message-container">
          <div className="avatar">
            <img src={assets?.green_memoji} alt="User" />
          </div>
          <div
            className={`message ${reply ? "reply" : ""} ${
              richColor ? "rich-color" : ""
            }`}
          >
            {reply ? (
              <div>I am here!</div>
            ) : (
              <>
                <div className="right-container">
                  <small
                    className={`rich-icon ${richColor ? "rich-color" : ""}`}
                  >
                    <FaPlay />
                  </small>
                  <span className={richColor ? "rich-color" : ""}></span>
                </div>
                <p>{formatTime(time)}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserReply;
