import styled from 'styled-components'

export const FooterElement = styled.footer`
    background-color: #353535;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 80px;

    svg, p {
        color: white;
        margin-bottom: 0;
    }

    svg {
        transform: scale(1.8);
        margin: 0 10px;
    }

    p {
        font-size: 0.7em;
        margin-bottom: 5px;
    }

    .footerBrandIconWrapper {
        display: flex;
        gap: 30px;

        .maeztraFooter .footerFormatImage {
            height: 15px;
        }
    }

    .footerFormatImage {
        height: 20px;

        img {
            height: 100%;
            filter: brightness(0) invert(1);
        }
    }

    @media (max-width: 650px) {
        > div {
            transform: scale(0.9);
        }
    }

    @media (max-width: 550px) {
        min-height: 200px;
        flex-direction: column;
        justify-content: space-around;

        > div {
            transform: scale(1);
        }
    }
`