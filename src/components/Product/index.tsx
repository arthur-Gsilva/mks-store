import { ProductType } from '@/types/productType'
import * as C from './Product.styles'

import { PiHandbag } from 'react-icons/pi'
import { useContext, useState } from 'react'
import { Context } from '@/Contexts/CartContext'

type Props = {
    item: ProductType,
    setOpen: (a: boolean) => void
}

export const Product = ({ item, setOpen }: Props) => {

    const {state, dispatch} = useContext(Context)
    const [quantity, setQuantity] = useState(1)

    const addCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { data:item, quantity}
        })
        setOpen(true)
    }

    return(
        <C.Container>
            <C.ImageArea>
                <img src={item.photo} alt={item.name} />
            </C.ImageArea>

            <C.InfoArea>
                <C.Name>
                    {item.name}
                </C.Name>
                <C.Price>
                    R$ {item.price}
                </C.Price>
            </C.InfoArea>

            <C.Description>
                {item.description}
            </C.Description>

            <C.Button onClick={() => addCart()}>
                <PiHandbag />
                Comprar
            </C.Button>
        </C.Container>
    )
}