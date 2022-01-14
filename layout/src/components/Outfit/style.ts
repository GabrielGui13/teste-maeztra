import styled from 'styled-components'

export const Outfits = styled.div`
    margin-top: 50px;
    padding: 0 10px;

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

    .outfitImagesWrapper {
        display: flex;
        justify-content: center;
        gap: 10px;
        min-width: 1300px;

        .outfitImageCard {
            width: 280px;

            .outfitImage {
                > img {
                    width: 100%;
                }
            }
        }

        .outfitImageContent {
            padding: 10px;

            .outfitColorPickerWrapper {
                .outfitColorPickerSquare {
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    margin-right: 5px;
                    border-radius: 5px;
                    transition: 0.2s;

                    &:hover {
                        filter: brightness(85%);
                        cursor: pointer;
                    }
                }
            }

            .outfitPrice {
                font-weight: bold;
            }

            .outfitTitle {
                font-weight: 400;
                font-size: 1.1em;
            }

            .outfitDesc {
                width: 100%;
                display: inline-block;
                margin-top: -5px;
            }

            button {
                margin-top: 10px;
                width: 100%;
                height: 40px;
                background-color: #FAA500;
                color: white;
                border-radius: 5px;
                border: none;
                transition: background-color 0.2s, color 0.2s;

                &:hover {
                    background-color: #FF9500;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
`