import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCreators } from "./useCreators";
import "./Creators.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Autoplay, Navigation]);

const Creators = () => {
  const { data } = useCreators();
  return (
    <div className="creators">
      <div className="creators_wrapper">
        <h2>Around 5M+ creators</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut la
        </p>
      </div>
      <ul>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {data?.map((creator) => (
            <SwiperSlide key={creator?.login?.uuid}>
              <li>
                <div className="topBox">
                  <span
                    className={`status ${
                      creator?.isActive ? "status_active" : ""
                    }`}
                  >
                    <GiPlainCircle />
                    {creator?.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="image">
                  <img src={creator?.picture?.large} alt="" />
                </div>
                <h3>{creator?.name?.first + creator?.name?.last}</h3>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};

export default Creators;
