import React from "react";
import { convertLongTime } from "../helpers/Converters";

import { Swiper, SwiperSlide } from "swiper/react";

const HighlightsBox = ({ data }) => (
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
    <SwiperSlide className="box" id="sun">
      <div className="box_info">
        <span>Sunrise & Sunset</span>
        <div className="box_info">
          <span>🌅 {convertLongTime(data.sunrise)}</span>
          <span>🌇 {convertLongTime(data.sunset)}</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className="box" id="extremes">
      <div className="box_info">
        <span>UV Index</span>
        <div>
          <span>⬆️ {Math.round(data.uvi)}</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className="box" id="visibility">
      <div className="box_info">
        <span>Visibility </span>
        <span>👀{(data.visibility / 1000).toFixed(2)} km</span>
      </div>
    </SwiperSlide>
    <SwiperSlide className="box" id="wind">
      <div className="box_info">
        <span>Wind</span>
        <span>🌬️{data.wind_speed} km/h</span>
      </div>
    </SwiperSlide>
    <SwiperSlide className="box" id="humidity">
      <div className="box_info">
        <span>Humidity</span>
        <span> 💧{data.humidity} %</span>
      </div>
    </SwiperSlide>
    <SwiperSlide className="box" id="pressure">
      <div className="box_info">
        <span>Pressure</span>
        <span> 🎚️ {data.pressure} hPA</span>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default HighlightsBox;
