import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
body{
    width: 100vw;
    height: 100vh;
}
html{
    font-size: 16px;
    overflow: hidden;
}
#root{
    width: 100%;
    height: 100%;
}
`;
