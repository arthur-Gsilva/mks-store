import styled from "@emotion/styled";

export const Container = styled.header`
    background-color: #0F52BA;
    color: #fff;
    height: 101px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 30px
`

export const LogoArea = styled.div`

`

export const LogoTitle = styled.h1`
    font-size: 40px;
    font-weight: 600;

    span{
        font-size: 20px;
        font-weight: 300;
    }

    @media(max-width: 550px){
        font-size: 30px;

        span{
            font-size: 15px;
            font-weight: 300;
        }
    }
`

export const HeaderCart = styled.div`
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;

    &:hover{
        opacity: .8;
    }
`