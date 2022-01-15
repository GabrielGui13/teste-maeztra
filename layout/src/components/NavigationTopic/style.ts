import styled from 'styled-components'

export const NavigationTopics = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    min-height: 320px;
    height: 100%;
    padding: 0 80px;
    
    .topic {
        display: flex;
        flex-direction: column;
        height: 280px;
        list-style: none;

        p {
            font-size: 1.1em;
            font-weight: bold;
            margin-bottom: 35px;
        }

        li {
            margin-bottom: 20px;
        }

        li a {
            text-decoration: none;
            color: black;
        }
    }

    @media (max-width: 680px) {
        padding: 0 10px;
    }

    @media (max-width: 520px) {
        padding: 0 5px;
        flex-direction: column;
        margin-top: 0;
        align-items: flex-start;
        justify-content: center;
        height: 150px;
        
        .topic {
            height: 0;
            margin-bottom: 50px;

            p {
                margin-bottom: 0;
            }
        }

        li {
            display: none;
            margin-bottom: 20px;
        }
    }
`