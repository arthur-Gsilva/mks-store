import styled from "@emotion/styled";

export const Container = styled.div`
    box-shadow: 0px 2px 8px 0px #00000022;
    position: relative;
    padding-bottom: 40px;
    border-radius: 10px;
`

export const ImageArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    img{
        width: auto;
        height: 180px;
    }
`

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    margin-bottom: 10px
`

export const Name = styled.div`
    font-size: 1rem;
    font-weight: 400;
`

export const Price = styled.div`
    background-color: #373737;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
`

export const Description = styled.p`
    font-size: 12px;
    color: #2C2C2C;
    padding: 0 20px;
`

export const Button = styled.button`
    background-color: #0F52BA;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: 0;
    color: #fff;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
    transition: .3s;

    &:hover{
        background-color: blue;
    }
`