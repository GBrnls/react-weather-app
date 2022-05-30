import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  body {
    font-size: 1rem;
    font-family: "Averta-Regular";
    overflow:scroll;
  }

  @media only screen and (min-width: 601px) {
    body {
      overflow: hidden;
  
      .App {
        display: flex;
      }
    }
  }
  
  @media only screen and (max-width: 600px) {
    .App {
      display: block;
    }
  }
}
`;
