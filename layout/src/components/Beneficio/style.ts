import styled from 'styled-components'

export const Beneficios = styled.div`
    display: flex;
    flex-direction: column;

    p:nth-child(1) {
        margin-top: 12px;
        text-align: center;
        font-weight: bold;
    }

    .benefitWrapper {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 0 30px;
        min-width: 1300px;

        .benefitContent {
            background-color: #EFEFEF;
            display: flex;
            padding: 10px;
            width: 280px;
            height: 65px;

            .benefitIcon {
                display: flex;
                align-items: center;
                width: 30px;
                margin-left: 8px;

                svg {
                    transform: scale(1.8);
                    margin-left: 5px;
                }
            }

            .benefitText {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 10px;

                .benefitName, .benefitDesc {
                    margin: 0;
                    padding: 0;
                    text-align: left;
                }

                .benefitName {
                    font-size: 0.95em;
                }

                .benefitDesc {
                    font-size: 0.75em;
                }
            }
        }
    }
`