import styled from "styled-components";

export const Colecoes = styled.div`
    display: flex;
    padding: 0 80px;
    margin-top: 80px;
    justify-content: center;
    gap: 60px;

    .colecaoText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;
    }

    .colecaoImage {
        height: 380px;
        width: 900px;
        overflow: hidden;
        object-fit: cover;
        
        img {
            width: 100%;
            margin-top: -40px;
        }
    }
`