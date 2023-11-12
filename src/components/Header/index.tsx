import { Context } from '@/Contexts/CartContext'
import * as C from './Header.styles'
import { useContext } from 'react'

import { TiShoppingCart } from 'react-icons/ti'
import { ProductType } from '@/types/productType'

type Props = {
    setOpen: (a: boolean) => void
}

export const Header = ({ setOpen }: Props) => {

    const  { state, dispatch } = useContext(Context)

    let productFilter: ProductType[] = []

    if (state.cart.products && state.cart.products.length > 0) {
        productFilter = state.cart.products.filter(product => product.quantity > 0);
      }

    return(
        <C.Container>
            <C.Content>
                <C.LogoArea>
                    <C.LogoTitle>
                        MKS <span>Sistemas</span>
                    </C.LogoTitle>
                </C.LogoArea>
                
                <C.HeaderCart onClick={() => setOpen(true)}>
                    <TiShoppingCart />
                    {productFilter.length > 0 &&
                        <span>
                            {productFilter.length}
                        </span>
                    }
                </C.HeaderCart>
            </C.Content>
        </C.Container>
    )
}