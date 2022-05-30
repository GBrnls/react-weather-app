import React, { useState } from "react";
import { StyledMain } from "../styles/MainStyles";

import HighlightsBox from "../components/HighlightsBox";
import WeekBox from "../components/WeekBox";
import TodayBox from "../components/TodayBox";

const Main = ({ data, themeToggler }) => {
  const [display, setDisplay] = useState("today");
  const displayToggler = () => {
    display === "today" ? setDisplay("week") : setDisplay("today");
  };

  return (
    <StyledMain>
      <div className="mainTitle">
        <span className="today-week" onClick={displayToggler}>
          Today
        </span>
        <span className="today-week" onClick={displayToggler}>
          Week
        </span>
        <input type="checkbox" id="toggleWifi" onClick={themeToggler} />
        <label htmlFor="toggleWifi"></label>
      </div>
      <>
        {display === "week" ? (
          <WeekBox data={data.daily} />
        ) : (
          <TodayBox data={data.hourly} />
        )}
      </>
      <div className="mainTitle">
        <span className="highlights">Today's Highlights</span>
      </div>
      <>{<HighlightsBox data={data.current} />}</>
    </StyledMain>
  );
};

export default Main;
