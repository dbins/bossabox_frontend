import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
     * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         outline: 0;
     }

     body {
         background: #170C3A;
         text-rendering: optimizeLegibility !important;
         -webkit-font-smoothing: antialiased !important;
         font-family: Source Sans Pro;
     }
`;

export default GlobalStyle;
