import styled from "styled-components";

export const Parcerias = styled.div`
    margin-top: 50px;
    
    h3 {
        text-align: center;
        margin-bottom: 20px;
        font-weight: bolder;
    }

    .overflowHelper {
        width: 100%;
        overflow-x: scroll;
        padding-bottom: 10px;

        /* Works on Firefox */
        scrollbar-width: thin;
        scrollbar-color: #f2f2f2 transparent;

        /* Works on Chrome, Edge, and Safari */
        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #f2f2f2;
            border: 1px solid transparent;
        }
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