import styled from "styled-components";

export const Parcerias = styled.div`
    margin-top: 50px;
    overflow-x: scroll;
    
    h3 {
        text-align: center;
        margin-bottom: 20px;
        font-weight: bolder;
    }

    .brandImagesWrapper {
        display: flex;
        justify-content: center;
        gap: 10px;
        min-width: 1300px;

        .brandImageContent {
            width: 250px;

            & img {
                width: 100%;
            }
        }
    }
`