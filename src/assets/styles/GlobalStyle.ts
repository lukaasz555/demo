import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Montserrat:wght@300;400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::before, *::after {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
        
    }

    p {
        font-family: 'Montserrat', sans-serif;
    }

    h1, h2, h3, h4, h5 , h6 {
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;
