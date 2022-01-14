import styled from "styled-components";

export const NewsletterForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 30px 0;

    h4 {
        font-weight: bold;
    }

    .newsletterInput {
        display: flex;
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
`