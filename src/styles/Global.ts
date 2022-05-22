import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


:root {
  /* Шрифт */
  --font-family-Jost: 'Jost', sans-serif;
  --f-s-x-small: 0.5rem;
  --f-s-n-small: 0.7rem;
  --f-s-b-small: 0.8rem;
  --f-s-n-normal: 1rem;

  /* Цвет */
  --first: #8dc6ff;
  --second: #9eefff;
  --third: #404969;
  --fourth: #dc552c;
  /* Размеры */
  --width-min: 376px;
  --width-max: 376px;
  --width-mobile: 376px;
  /* Border */
  --radius-main: 10px;
  --border-color: #b1bed5;
  /* Фон */
  --background-color: rgba( 255, 255, 255, 0.5 );
  --box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  --backdrop-filter: blur( 10px );
  --webkit-bf: blur( 10px );
  --border: 1px solid rgba( 255, 255, 255, 0.18 );
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
`;
