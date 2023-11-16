import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-brand-primary: #3FCAFF;
  --color-brand-secondary: #a4ffb0;
  --color-brand-tertiary : rgb(44, 33, 114);
  --color-brand-blue-900 : rgb(44, 33, 114);

  --box-shadow: 0px 10px 30px rgba(163, 255, 177, 0.2);

  --background-linear-gradient-primary: linear-gradient(
      to right,
      #3FCAFF 0%,
      #a4ffb0 51%,
      #3FCAFF 100%
    );
  --background-linear-gradient-secondary: linear-gradient(to right, rgb(35, 26, 96) 0%, rgb(60,51,141) 51%, rgb(35,26,96) 100%);
  
}

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
}

body {
  font-family: 'Rajdhani', sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/* Style the scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #3FCAFF, #a4ffb0);
  /* background-color: #3498db; Neon blue scrollbar thumb color */
  /* border-radius: 10px; */
}

/* Apply neon glow effect on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #3FCAFF, #a4ffb0);
  /* background-color: #2980b9; Slightly lighter blue on hover */
}

/* Style the scrollbar track */
::-webkit-scrollbar-track {
  background-color: #2c3e50; /* Dark blue scrollbar track color */
}

.carousel-container{
  line-height: 0;
}



`;

export default GlobalStyles;
