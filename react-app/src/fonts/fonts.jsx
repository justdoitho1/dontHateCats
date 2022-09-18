import { createGlobalStyle } from "styled-components";
import DungGeunMo from "./DungGeunMo.woff";

export default createGlobalStyle`		      
  @font-face {
    font-family: 'DungGeunMo';
    src: url(${DungGeunMo}) format('woff');
  }

  body {
    font-family : 'DungGeunMo';
  }

  button {
    font-family : 'DungGeunMo';
  }
`;
