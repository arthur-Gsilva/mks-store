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
    transition: .3s
`

export const CartBody = styled.div`
    padding: 50px ;
    display: flex;
    flex-direction: column;
    height: 90%;
`

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.7rem;
    margin-bottom: 20px;
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
`

export const CartContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CartItem = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c2c2c;
    padding: 20px;
    border-radius: 10px;
`

export const ImageArea = styled.div`


    img{
        width: 50px;
        height: auto;
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

export const Button = styled.button`
    width: 100%;
    background-color: #000;
    color: #fff;
    height: 10%;
    cursor: pointer;
`