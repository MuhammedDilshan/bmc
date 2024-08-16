import React, { useEffect } from "react";
import Spotlight from "../../components/Spotlight/Spotlight";
import ExpressSection from "../../components/Express/Express";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Creators from "../../components/Creators/Creators";
import Footer from "../../components/Footer/Footer";
import PreLoader from "../../PreLoader/PreLoader";
import { useStore } from "react-redux";
import { useCreators } from "../../components/Creators/useCreators";

const Home = () => {
  const { isLoading } = useCreators();
  const ExpressSections = [
    {
      icon: <FaSmile />,
      heading: "Express yourself <br/> freely",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "",
    },
    {
      icon: <IoRadioButtonOn />,
      heading: "Create and <br/> share",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "share",
    },
    {
      icon: <MdLocationOn />,
      heading: "Share live <br/> location",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      type: "location",
    },
  ];
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Spotlight />
          {ExpressSections?.map(({ heading, icon, description, type }) => (
            <ExpressSection
              icon={icon}
              heading={heading}
              description={description}
              type={type}
            />
          ))}

          <Creators />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
