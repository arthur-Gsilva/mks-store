import { Header } from '@/components/Header';
import * as C from '../styles/Home.styles'
import { useState, useEffect } from 'react';
import api from './api';
import { Product } from '@/components/Product';
import { ProductType } from '@/types/productType';
import { Cart } from '@/components/Cart';
import { useQuery } from 'react-query';
import { SkeletonBox } from '@/components/SkeletonBox';

const Home = () => {

    const [openedCart, setOpenedCart] = useState(false)

    const {data: products, isLoading} = useQuery<ProductType[]>('products', api.getProducts)



    return(
        <C.Container>
            <Header setOpen={setOpenedCart}/>

            <C.Main>
                <C.ProductsArea>

                    {isLoading &&
                        <>
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                            <SkeletonBox />
                        </>
                    }
                    {products &&
                        <>
                            {products.map((item) => (
                                <Product  item={item} setOpen={setOpenedCart} key={item.id} />
                            ))}
                        </>
                    }
                </C.ProductsArea>
            </C.Main>

            
            <Cart setClose={setOpenedCart} open={openedCart}/>
            
        </C.Container>
    )
}

export default Home;