import styled from "@emotion/styled";

export const Container = styled.header`
    background-color: #0F52BA;
    position: fixed;
    right: -500px;
    top: 0;
    bottom: 0;
    box-shadow: -5px 0px 6px 0px #00000021;
    width: 500px;
    color: #fff;
    transition: .3s;

    @media(max-width: 650px){
        width: 400px !important;
    }

    @media(max-width: 550px){
        width: 250px !important;
    }
`

export const CartBody = styled.div`
    padding: 50px ;
    display: flex;
    flex-direction: column;
    height: 90%;

    @media(max-width: 550px){
        padding: 20px;
    }
`

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.7rem;
    margin-bottom: 20px;

    @media(max-width: 550px){
        font-size: 1rem;
    }
`

export const Close = styled.div`
    background-color: #000;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 550px){
        height: 30px;
        width: 30px;
    }
`

export const CartContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CartItem = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 15px;
    color: #2c2c2c;
    padding: 20px;
    border-radius: 10px;
    position: relative;
`

export const ImageArea = styled.div`
    img{
        width: 50px;
        height: auto;

        @media(max-width: 550px){
            width: 30px;
        }
    }
`

export const Qtd = styled.div`

    font-size: .8rem;

    div{
        display: flex;
    }

    button{
        background: none;
        cursor: pointer;
    }

    button, .Qtd{
        border: 1px solid #bfbfbf;
        padding: 5px;
        border-radius: 3px;
    }
`

export const Name = styled.p`
    @media(max-width: 550px){
        display: none;
    }
`

export const Price = styled.div`
    color: #000;
    font-weight: 700;
`


export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Remove = styled.div`
    background-color: #000;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: -5px;
    right: 0;
`

export const Button = styled.button`
    width: 100%;
    background-color: #000;
    color: #fff;
    height: 10%;
    cursor: pointer;
`