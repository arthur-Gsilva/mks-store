import { ProductType } from "@/types/productType"
import { ReducerActionType } from "@/types/reducerAction"

export type CartType = {
    products: ProductType[]
}

export const cartInitialState: CartType = {
    products: []
}

export const cartReducer = (state: CartType, action: ReducerActionType) => {
    
    let products = [...state.products]
    let key: number | null = null

    if (action.payload && action.payload.key) {
        key =  action.payload.key;
    }

    let index2 = products.findIndex(item => item.id === key)

    switch(action.type){
        case 'ADD_PRODUCT':
            
            let id = action.payload.data.id
            const index = products.findIndex(item => item.id === id)
            
            if(index > -1){
                products[index].quantity += action.payload.quantity
            } else{
                products.push({
                    ...action.payload.data,
                    quantity: action.payload.quantity
                })
            }


            return {...state, products}
        break;

        case 'ADD_QUANTITY':
            products[index2].quantity += 1
        break;
        case 'LOW_QUANTITY':
            products[index2].quantity -= 1
        break;
        case 'REMOVE_PRODUCTS':
            return {...state, products: []}
        break;
    }

    return state
}

