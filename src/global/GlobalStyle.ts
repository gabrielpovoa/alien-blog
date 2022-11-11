import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        text-transform: capitalize;
        outline: none;
    }
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    body {
        background-color: #778;
        color: #FFF;
        font-family:'Poppins', sans-serif;
    }
    main {
        max-width: 1080px;
        width: 100%;
        padding: 2rem 5%;
    }
`;