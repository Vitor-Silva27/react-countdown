import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Red Hat Text', sans-serif;
    }
    body{
        background: hsl(234, 17%, 12%) url("assets/bg-stars.svg");
    }
`;

export default Global;
