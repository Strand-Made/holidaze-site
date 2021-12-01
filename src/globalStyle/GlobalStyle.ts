import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
}
*{
    margin: 0;
}

:root {
    --cool-gray-9: #1f2933;
    --cool-gray-8: #323f4b;
    --cool-gray-7: #3e4c59;
    --cool-gray-6: #52606d;
    --cool-gray-5: #616e7c;
    --cool-gray-4: #7b9794;
    --cool-gray-3: #9aa5b1;
    --cool-gray-2: #cbd2d9;
    --cool-gray-1: #f5f7fa;

    --blue-6: #035388;
    --blue-5: #0B69A3;
    --blue-4: #127FBF;
    --blue-3: #1992D4;
    --blue-2: #2BB0ED;
    --blue-1: #E3F8FF;

    --red-6: #610316;
    --red-5: #ab091e;
    --red-4: #cf1124;
    --red-3: #ef4e4e;
    --red-2: #ffbdbd;
    --red-1: #ffe3e3;

    --teal-6: #014d40;
    --teal-5: #0C6B58;
    --teal-4: #147D64;
    --teal-3: #65D6AD;
    --teal-2: #C6F7E2;
    --teal-1: #effcf6;

    --yellow-6: #8D2B0B;
    --yellow-5: #DE911D;
    --yellow-4: #F7C948;
    --yellow-3: #FADB5F;
    --yellow-2: #FFF3C4;
    --yellow-1: #FFFBEA;

    --animate-transf: 0.5s ease-in-out;
    --animate-input: border-color 0.2s ease-out;

}

html, body, #root {
    height: 100%;
}
#root {
    isolation: isolate;
}

body {
    display: flex;
    flex-direction: column;
    font-family: "Nunito Sans", Montserrat, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--cool-gray-9);
    overflow-x: hidden;
    background: var(--cool-gray-1);
}

img, svg {
    display: block;
    max-width: 100%;
}

a {
    text-decoration: none;
    color: var(--blue-6);
    font-weight: 600;
}
::placeholder, input, textarea, fieldset, select, option, legend {
    font: inherit;
}
li {
    list-style: none;
}

h1, h2, h3, h4, h5, h6, p {
    max-width: 60ch;
    overflow-wrap: break-word;
}
button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    font-family: "Nunito Sans", Montserrat, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", sans-serif; 
}

.stay-date-calendar {
    font-family: inherit;
    color: var(--cool-gray-9);
    background: var(--teal-1);
    font-size: 0.93rem;
    
  }
  .react-datepicker__header {
      background: inherit;
      border: none;
  }
  
  .react-datepicker__triangle {
      display: none;
  }


`;

export default GlobalStyle;
