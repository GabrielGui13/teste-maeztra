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
`