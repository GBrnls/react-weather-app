import styled from "styled-components";

export const StyledMain = styled.div`
  background: ${({ theme }) => theme.MainBody};
  color: ${({ theme }) => theme.MainText};
  transition: all 0.5s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 60%;

  .highlights {
    font-size: 24px;
    font-weight: bold;
    padding-left: 10px;
  }

  .today-week {
    font-size: 24px;
    font-weight: bold;
    padding-left: 10px;
    cursor: pointer;
  }

  .mainTitle {
    display: inline-flex;
    margin: 3% auto 2%;
    padding: 4px;
    width: 90%;
    justify-content: space-between;
    align-items: center;

    .highlights {
      font-size: 24px;
      font-weight: bold;
      padding-left: 10px;
    }

    input[type="checkbox"] {
      display: none;
      cursor: pointer;
    }

    label {
      display: block;
      cursor: pointer;
      height: 30px;
      width: 60px;
      background-color: #d7dbdd;
      opacity: 60%;
      border-radius: 25px;
      transition: all 0.4s ease-out;
    }

    label::before {
      content: "";
      display: block;
      position: relative;
      top: 5px;
      left: 5px;
      height: 20px;
      width: 20px;
      background-color: #f7f9f9;
      border-radius: 50%;
      transition: all 0.4s ease-out;
    }

    label::after {
      content: "☀️";
      position: relative;
      top: -16px;
      left: 14px;
      height: 20px;
      width: 20px;
      transition: all 0.3s;
    }

    input:checked + label {
      background: #1b2631;
    }

    input:checked + label::before {
      background-color: #5d6d7e;
      transform: translate(30px);
    }

    input:checked + label::after {
      content: "🌙";
      position: relative;
      top: -18px;
      left: -15px;
    }
  }
  
  .swiper-wrapper {
    display:flex;
  }
  
  
  .box_container {
    width: 100%;
    height: 200px;
    margin-top: 3%;
    padding-left: 5%;
    display: flex;
  }

  .box {
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
    background: ${({ theme }) => theme.BoxBody};
    color: ${({ theme }) => theme.BoxText};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5%;
    width: 150px;
    height: 150px;
    cursor: grab;

    > span:first-of-type {
      font-weight: bold;
    }

    .box_info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 60%;
    }
  }

  .box:active {
    cursor: grabbing;
  }

  #sun {
    background: #ff5e59;
    color: white;
  }
  #extremes {
    background: #f4d03f;
    color: white;
  }

  #visibility {
    background: #239b56;
    color: white;
  }

  #wind {
    background: #fff;
    color: #000;
  }

  #humidity {
    background: #154360;
    color: white;
  }

  #pressure {
    background: #cb4335;
    color: white;
  }

  @media only screen and (min-width: 1201px) {
    height: 100vh;
    justify-content: flex-start;

    .mainTitle {
      width: 80%;

      .highlights {
        font-size: 28px;
      }
    }

    .highlights {
      font-size: 28px;
    }

    .card_container {
      row-gap: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .mainTitle {
      width: 80%;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 425px) {
    padding: 2.5%;

    .mainTitle {
      width: 85%;
    }
  }

  @media only screen and (max-width: 330px) {
    .mainTitle {
      width: 90%;
    }
  }
`;
