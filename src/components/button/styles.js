import { styled } from "styled-components";


export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    margin-top: 130px;
    background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border: ${ props => props.isBack ? '1px solid #fff' : 'none' } ;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }

    img{
        transform: ${ props => props.isBack && 'rotate(180deg)'};
    }
`;
