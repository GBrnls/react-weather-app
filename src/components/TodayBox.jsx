import React from "react";
import { convertC, convertShortTime } from "../helpers/Converters";

import { Swiper, SwiperSlide } from "swiper/react";

const TodayBox = ({ data }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={2}
    breakpoints={{
      640: {
        width: 640,
        slidesPerView: 4
      },
      768: {
        width: 768,
        slidesPerView: 5
      },
      991: {
        width: 991,
        slidesPerView: 6
      },
      1024: {
        width: 1024,
        slidesPerView: 6
      }
    }}
    className="box_container"
  >
    {data &&
      data.map((hour, i) => (
        <SwiperSlide key={i.toString()} className="box">
          <div>
            <div>{convertShortTime(hour.dt)}</div>
            <img
              src={require(`../icons/${hour.weather[0].icon}.png`)}
              alt={hour.weather[0].description}
              width="100"
            />
            <div className="temp_info">
              <span>{convertC(hour.temp).toFixed(0)}°C</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
  </Swiper>
);

export default TodayBox;
