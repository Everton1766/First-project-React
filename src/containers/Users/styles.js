import { styled } from 'styled-components'
import background from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;    
    height: 100%;
    min-height: 100vh;


`;

export const Image = styled.img`
    margin-top: 30px;
`;




export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;   
    p{
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 28px;
        color: #FFF;
    }
    button{
        border: none;
        background: none;
        cursor: pointer;
    }
`


//yarn add react-router-dom@5