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
        text-align: justify;
        width: 80%;
    }

    .manuContent {
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .menuButton {
        font: 400 15px Roboto, sans-serif;
        border-style: none;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.backgroundRight};
        transition: 0.3s;
    }

    .menuButton:hover {
        border-style: none;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.colorWhite};
        font: 700 15px Roboto, sans-serif;
    }

    .menuButton:active {
        font: 700 15px Roboto, sans-serif;
        border-style: none;
    }

    .menuButton:focus {
        font: 700 15px Roboto, sans-serif;
        border-style: none;
    }

    .containerTeam {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 110px auto;
    }

    .teamImage > img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
    }

    .btn-primary.custom-btn {
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
    }

    .btn-primary.custom-btn:active {
        background: ${props => props.theme.colors.primaryActiveHover};
        border-color: ${props => props.theme.colors.primaryActiveHover};
    }

    .btn-primary.custom-btn:hover {
        background: ${props => props.theme.colors.primaryActiveHover};
        border-color: ${props => props.theme.colors.primaryActiveHover};
    }

    .btn-primary.custom-btn:focus {
        background: ${props => props.theme.colors.primaryActiveHover};
        border-color: ${props => props.theme.colors.primaryActiveHover};
    }
`
