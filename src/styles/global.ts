import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
    }

    .left {
        left: 0;
        background: ${props => props.theme.colors.backgroundLeft};
    }

    .right {
        right: 0;
        background: ${props => props.theme.colors.backgroundRight};
    }

    .split {
        height: 100%;
        width: 50%;
        position: fixed;
        top: 0;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
`
