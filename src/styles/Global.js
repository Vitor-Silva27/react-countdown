import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --Grayish-blue: hsl(237, 18%, 59%);
        --Soft-red: hsl(345, 95%, 68%);
        --Dark-desaturated-blue: hsl(236, 21%, 26%);
        --dark-blue: hsl(235, 16%, 14%);
        --Very-dark-blue: hsl(234, 17%, 12%);
    }

    *{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'Red Hat Text', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }
    body{
        background: url("assets/pattern-hills.svg") repeat-x 0 calc(100vh - 190px), var(--dark-blue) url("assets/bg-stars.svg") repeat;
        background-size: contain, cover;
        @media (max-width: 1400px){
            background-size: auto, cover;
        }
    }
`;

export default Global;
