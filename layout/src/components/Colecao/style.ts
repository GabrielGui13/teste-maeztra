import styled from "styled-components";

export const Colecoes = styled.div`
    display: flex;
    padding: 0 80px;
    margin: 80px 0;
    justify-content: center;
    gap: 60px;

    .colecaoText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;

        h4 {
            font-weight: bold;
        }
    }

    .colecaoImage {
        max-height: 380px;
        width: 900px;
        overflow: hidden;
        object-fit: cover;
        
        img {
            width: 100%;
            margin-top: -40px;
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding: 0 40px;

        .colecaoText {
            width: 100%;
            h4 {
                font-size: 1.5em;
            }
        }

        .colecaoImage {
            width: 100%;
            max-height: 400px;
            margin-top: -20px;

            img {
                margin-top: -20px;
            }
        }
    }
`