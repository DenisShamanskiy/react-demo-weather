import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  /* Шрифт */
  --font-family-Jost: "Jost", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  --f-s-x-small: 0.5rem;
  --f-s-n-small: 0.7rem;
  --f-s-b-small: 0.8rem;
  --f-s-n-normal: 1rem;

  /* Цвет */
  --first: #f5feff;
  --second: #bde4f4;
  --third: #404969;
  --fourth: #dc552c;
  /* Цвет */
  /* Размеры */
  --width-min: 376px;
  --width-max: 376px;
  --width-mobile: 376px;
  /* Размеры */
  /* Border */
  --radius-main: 1rem;
  --border-color: #b1bed5;
  /* Border */

  ${
    "" /* --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff; */
  }
}
* {
    box-sizing: border-box;
  }

*::before,
*::after {
    box-sizing: border-box;
  }

body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    font-family: var(--font-family-Jost);
    background-color: var(--first);
    color: var(--third);
    
    
  }

.text_right {
    text-align: end;
}
.city {
  font-size: 20px;
}
.temp {
  font-size: 50px;
}
.svg-icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  background-repeat: no-repeat;
  background-position: center;
}
`;
