import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import "./UserReply.scss"; // Updated import for Sass

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
        <div className="giftContainer">
          <div className="giftBox">
            <div className="rightContainer">
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
        <div className="messageContainer">
          <div className="avatar">
            <img src={assets?.green_memoji} alt="User" />
          </div>
          <div
            className={`message ${reply ? "reply" : ""} ${
              richColor ? "richColor" : ""
            }`}
          >
            {reply ? (
              <div>I am here!</div>
            ) : (
              <>
                <div className="rightContainer">
                  <small className={`richIcon ${richColor ? "richColor" : ""}`}>
                    <FaPlay />
                  </small>
                  <span className={richColor ? "richColor" : ""}></span>
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
