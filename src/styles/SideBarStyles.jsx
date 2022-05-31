import styled from "styled-components";

export const StyledSideBar = styled.div`
  background: ${({ theme }) => theme.SideBody};
  color: ${({ theme }) => theme.SideText};
  transition: all 0.5s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  padding: 2%;
  padding-bottom: 5%;
  z-index: 2;

  h1,
  h2 {
    margin: 0;
  }

  .searchBar {
    width: 98%;
    height: 40px;
    margin: 2% auto 4%;
    border-radius: 12px;
    display: flex;

    img {
      width: 30px;
      height: 30px;
      margin: auto;
      z-index: 3;
      position: relative;
      left: 5%;
    }

    input {
      width: 100%;
      border-radius: 12px;
      padding-left: 25%;
      margin-left: -30px;
      font-size: 1em;
      text-align: left;
      border: none;
      background: ${({ theme }) => theme.SearchBody};
      color: ${({ theme }) => theme.SearchText};
      transition: all 0.5s linear;
    }

    input::placeholder {
      color: ${({ theme }) => theme.Placeholder};
      transition: all 0.5s linear;
    }
    }
  }

  .city_box {
    margin: 1% auto 2%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 120px;
    width: 100%;

    :before {
      content: "";
      background: rgba(0, 0, 0, 0.35);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }

    img {
      object-fit: cover;
      object-position: center -20px;
    }

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 26px;
      width: 100%;
      text-align: center;
    }
  }

  .weather_box {
    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
    border-radius: 12px;
    width: 100%;
    height: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    font-size: 20px;

    .main {
      width: 80%;
      font-size: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        height: 100px;
        width: 100px;
      }
    }

    .date {
      font-size: 26px;
    }
  }

  @media only screen and (min-width: 1201px) {
    width: 50%;
    .city_box {
      height: 180px;
    }

    .weather_box {
      height: 230px;

      .main {
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 80%;
    .city_box {
      height: 220px;
    }
  }

  @media only screen and (max-width: 900px) {
    h1,
    h2 {
      font-size: 1.5em;
    }
    .city_box img {
      height: 200px;
      object-position: center 0;
    }
  }

  @media only screen and (max-width: 600px) {
    width: unset;
    padding: 5%;

    h1,
    h2 {
      font-size: 2em;
    }

    .city_box {
      height: 180px;
    }

    .weather_box .main {
      width: 50%;
    }
  }

  @media only screen and (max-width: 425px) {
    .city_box {
      img {
        object-position: center;
      }

      span {
        font-size: 22px;
      }
    }

    .weather_box .main {
      width: 60%;
    }
  }
`;
