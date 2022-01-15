import styled from "styled-components"

export const Nav = styled.nav`
    height: 88px;
    width: 100%;
    margin-bottom: 33px;

    .divMsg {
        background-color: #353535;
        font-size: 14px;
        height: 24px;
        text-align: center;

        a {
            text-decoration: none;
            color: white;
        }
    }

    .contentWrapper {
        display: flex;
        justify-content: space-around;
        box-shadow: 0px 1px 10px -6px black;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 64px;
            width: 200px;

            img {
                width: 60%;
            }
        }

        .searchWrapper {
            height: 64px;
            width: 100%;
            display: flex;
            align-items: center;
            max-width: 798px;

            input {
                background-color: #EFEFEF;
                border: none;
                border-radius: 10px;
                padding: 10px;
                padding-left: 25px;
                width: 100%;
                outline: none;
                transition: background-color 0.2s;

                &:hover {
                    background-color: #e5e5e5;
                }
            }

            button {
                background-color: #FAA500;
                color: white;
                padding: 10px 20px;
                border-radius: 10px;
                margin-left: -50px;
                border: none;
                transition: background-color 0.2s, color 0.2s;

                &:hover {
                    background-color: #FF9500;
                    color: white;
                    cursor: pointer;
                }
            }

            #searchIcon {
                opacity: 1;
                color: black;
                margin-left: -20px;
                z-index: -1;
            }
        }

        .accountAndCartWrapper {
            height: 64px;
            display: flex;
            gap: 10px;
            align-items: center;

            .accountContent, .accountLikeContent, .cartContent {
                padding: 10px;
                cursor: pointer;
                svg {
                    transform: scale(1.1) translateY(-1.5px);
                    margin-right: 5px;
                }
            }

            .cartContent {
                border: 1px solid #FAA500;
                border-radius: 10px;
                transition: background-color 0.2s, color 0.2s;

                &:hover {
                    background-color: #FAA500;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }

    .listWrapper {
        height: 35px;
        display: flex;
        align-items: center;
        padding: 0 200px;

        ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            list-style: none;
            margin-bottom: 0;

            li {
                min-width: 92px;
            }
            
            li a {
                color: black;
                text-decoration: none;
            }
        }
    }

    @media (max-width: 1410px) {
        .contentWrapper {
            padding-right: 20px;
        }

        .accountAndCartWrapper span {
            display: none;
        }
    }

    @media (max-width: 1200px) {
        .contentWrapper {
            gap: 30px;
        }

        .listWrapper {
            padding: 0;
        }
    }

    @media (max-width: 1000px) {
        .contentWrapper .logo {
            img {
                width: 120px;
                margin-left: 40px;
            }
        }
    }

    @media (max-width: 800px) {
        .listWrapper {
            display: none;
        }
    }

    @media (max-width: 650px) {
        .searchWrapper {
            max-width: 50px;
            width: 100%;

            input, button {
                display: none;
            }

            display: flex;
            justify-content: end;
            align-items: center;

            #searchIcon {
                color: black;
            }
        }

        .accountContent, .accountLikeContent {
            display: none;
        }

        .cartContent {
            border: 0px solid #FAA500;

            &:hover {
                background-color: white;
                color: black;
                cursor: pointer;
            }
        }

        .divMsg a {
            font-size: 0.8em;
        }
    }

    @media (max-width: 350px) {
        .divMsg a {
            font-size: 0.6em;
        }
    }
`;