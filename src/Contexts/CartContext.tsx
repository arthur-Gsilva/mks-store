import { createContext, useReducer, ReactNode } from "react";

import { CartType, cartInitialState, cartReducer } from "@/reducers/CartReducer";
import { ReducerActionType } from "@/types/reducerAction";



type initialStateType = {
    cart: CartType
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}

const initialState = {
    cart: cartInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    cart: cartReducer(state.cart, action)
})


export const ContenxtProvider = ({ children }: React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}