import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Red Hat Text', sans-serif;
    }
    body{
        background: url("assets/pattern-hills.svg") repeat-x left 76vh, hsl(235, 16%, 14%) url("assets/bg-stars.svg") repeat;
    }
`;

export default Global;
