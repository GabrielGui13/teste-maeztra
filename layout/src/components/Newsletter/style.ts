import styled from "styled-components";

export const NewsletterForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 30px;

    h4 {
        font-weight: bold;
    }

    .newsletterInput {
        display: flex;
        justify-content: center;
        max-width: 900px;
        width: 100%;

        input {
            background-color: #EFEFEF;
            border: 1px solid black;
            border-radius: 5px;
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
            border: none;
            border-radius: 5px;
            margin-left: -10px;
            transition: background-color 0.2s, color 0.2s;

            &:hover {
                background-color: #FF9500;
                color: white;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 1310px) {
        flex-direction: column;
        gap: 40px;
    }

    @media (max-width: 980px) {
        padding: 30px 50px;
    }

    @media (max-width: 500px) {
        transform: scale(0.9);
        gap: 10px;

        input {
            padding: 0px;
        }
    }

    @media (max-width: 420px) {
        padding: 5px;
        transform: scale(0.8);
    }

    @media (max-width: 420px) {
        padding: 5px;
        transform: scale(0.7);
    }
`