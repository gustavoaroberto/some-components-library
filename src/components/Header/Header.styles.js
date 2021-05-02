import styled from 'styled-components';

const HeaderStyles = styled.header`
    background-color: ${(props) => props.theme.primaryColor};
    width: 100%;
    padding: 8px 10px;
    position: relative;

    z-index: 9;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1280px;
        margin: 0 auto;
    }

    button {
        display: block;
        position: absolute;
        background-color: ${(props) => props.theme.primaryColor};
        border: none;
        right: 0;
        cursor: pointer;

        svg {
            height: 28px;
            width: 28px;
            fill: ${(props) => props.theme.textColor};
        }
    }

    h1 img {
        height: 30px;
    }

    nav {
        position: absolute;
        top: 49px;
        right: ${(props) => (props.open ? '0' : '-120%')};
        background-color: ${(props) => props.theme.secondColor};
        width: 50%;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        z-index: 8;
        transition: all 0.4s;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            li {
                width: 100%;

                a {
                    display: block;
                    padding: 20px;
                    text-decoration: none;
                    color: ${(props) => props.theme.textColor};
                    font-size: 0.8em;
                    transition: color 0.4s;
                    text-align: center;

                    @media (max-width: 1024px) {
                        &:hover {
                            background-color: ${(props) => props.theme.terciaryColor};
                            color: ${(props) => props.theme.textHoverColor};
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        padding: 10px 20px;

        h1 img {
            height: 50px;
        }

        & > div {
            justify-content: space-between;
        }

        nav {
            position: static;
            width: initial;
            border: none;
            background-color: ${(props) => props.theme.primaryColor};

            ul {
                flex-direction: row;
                justify-content: space-between;

                li {
                    width: initial;
                }

                a {
                    display: inline;
                    padding: 0;
                    text-align: left;

                    &:hover {
                        color: ${(props) => props.theme.textHoverColor};
                    }
                }
            }
        }

        button {
            display: none;
        }
    }
`;

export default HeaderStyles;
