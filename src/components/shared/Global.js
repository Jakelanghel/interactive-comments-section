import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        /* Primary  */
        --blue: hsl(238, 40%, 52%);
        --soft-red: hsl(358, 79%, 66%);
        --light-grayish-blue: hsl(239, 57%, 85%);
        --pale-red: hsl(357, 100%, 86%);
        /* Neutral  */
        --dark-blue: hsl(212, 24%, 26%);
        --grayish-blue: hsl(211, 10%, 45%);
        --light-gray: hsl(223, 19%, 93%);
        --very-light-gray: hsl(228, 33%, 97%);
        --white: hsl(0, 0%, 100%);
        --modal-backdrop: hsl(0, 100%, 0%, .5)
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: var(--very-light-gray);
    }

    .app {
        width: 100%;
        height: 100%;
        padding: 2rem 1rem;

    }

    .flex-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .container-replies {
        width: 100%;
        border-left: solid 2px var(--light-gray);
    }
`;
