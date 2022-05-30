import React from "react";
import { convertC, convertShortDay } from "../helpers/Converters";

import { Swiper, SwiperSlide } from "swiper/react";

const WeekBox = ({ data }) => (
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
      data.map((day, i) => (
        <SwiperSlide key={i.toString()} className="box">
          <div className="box_info">
            <div>{convertShortDay(day.dt)}</div>
            <img
              src={require(`../icons/${day.weather[0].icon}.png`)}
              alt={day.weather[0].description}
              width="100"
            />
            <div className="temp_info">
              <span className="light-text">
                {convertC(day.temp.min).toFixed(0)}
                °C
              </span>
              <span> - </span>
              <span>{convertC(day.temp.max).toFixed(0)}°C </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
  </Swiper>
);
export default WeekBox;
