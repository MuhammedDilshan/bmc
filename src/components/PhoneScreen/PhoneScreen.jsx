import React from "react";
import { assets } from "../../assets/assets";
import UserReply from "../UserReply/UserReply";
import "./PhoneScreen.scss";

const PhoneScreen = () => {
  return (
    <div className="phone-screen">
      <div className="screen">
        <img src={assets?.Main_screen} alt="Phone Screen" />
      </div>
      <div className="container">
        <UserReply />
      </div>
      <div className="container-gift">
        <UserReply type="gift" />
      </div>
    </div>
  );
};

export default PhoneScreen;
