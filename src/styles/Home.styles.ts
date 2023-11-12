import styled from "@emotion/styled";

export const Container = styled.div`
    
`

export const Main = styled.main`
    padding: 40px 30px 30px 30px;
`

export const ProductsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media(max-width: 1020px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 775px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 550px){
        grid-template-columns: repeat(1, 1fr);
    }
`