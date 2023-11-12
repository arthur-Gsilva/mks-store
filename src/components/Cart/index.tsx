import { ProductType } from '@/types/productType'
import * as C from './Cart.styles'
import { useContext, useEffect, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { Context } from '@/Contexts/CartContext'

type Props = {
    setClose: (a: boolean) => void,
    open: boolean
}

export const Cart = ({ open, setClose }: Props) => {

    const { state, dispatch } = useContext(Context)
    const [total, setTotal] = useState(0)

    let productFilter: ProductType[] = []
    if (state.cart.products && state.cart.products.length > 0) {
        productFilter = state.cart.products.filter(product => product.quantity > 0);
      }

    const lowQt = (key: number) => {
        dispatch({
            type: 'LOW_QUANTITY',
            payload:{
                key
            }
        })
    }
    const addQt = (key: number) => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload:{
                key
            }
        })
    }

    const finish = () => {
        dispatch({
            type: "REMOVE_PRODUCTS"
        })
        alert('compra realizada')
    }

    const totalPrice = productFilter.reduce((accumulator, product) => {
            const productTotal = product.quantity * product.price;
            return accumulator + productTotal;
          }, 0);

    useEffect(() => {
        setTotal(totalPrice)
    }, [productFilter])

    return(
        <C.Container style={{right: open ? '0' : '-500px'}}>
            <C.CartBody>
                <C.CartHeader>
                    <h3>Carrinho <br /> de compras</h3>

                    <C.Close onClick={() => setClose(false)}>
                        <AiOutlineClose />
                    </C.Close>
                </C.CartHeader>

                <C.CartContent>
                    {productFilter.length > 0 &&
                        <>
                            {state.cart.products.map((item) => (
                                <C.CartItem key={item.id}>
                                <C.ImageArea>
                                    <img src={item.photo} />
                                </C.ImageArea>
                                <C.Name>
                                    {item.name}
                                </C.Name>
                                <C.Qtd>
                                    Qtd:
                                    <div>
                                        <button onClick={() => lowQt(item.id)}>-</button>
                                        <div className='Qtd'>{item.quantity}</div>
                                        <button onClick={() => addQt(item.id)}>+</button>
                                    </div>
                                </C.Qtd>
                                <C.Price>
                                    R${item.price * item.quantity}
                                </C.Price>
                                </C.CartItem>
                            ))}
                        </>
                    }
                    {productFilter.length === 0 &&
                        <p>Seu carrinho está vazio</p>
                    }
                </C.CartContent>

                <C.Total>
                    <div>Total</div>
                    <div>R$ {total}</div>
                </C.Total>
            </C.CartBody>

            <C.Button onClick={() => finish()}>Finalizar Compra</C.Button>
        </C.Container>
    )
}

