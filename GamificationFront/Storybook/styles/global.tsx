import { css, Global } from "@emotion/core";

const GlobalStyles: any = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap");

      * {
        font-family: "Dosis", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
