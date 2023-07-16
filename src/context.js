import React, { useContext, useReducer } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'
const AppContext = createContext()

const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })
    const remove = (id) => dispatch({ type: 'REMOVE', payload: id })
    const increase = (id) => dispatch({ type: 'INCREASE', payload: id })
    const decrease = (id) => dispatch({ type: 'DECREASE', payload: id })

    const getTotals = (id) => dispatch({ type: 'GET_TOTALS' })
    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }
    
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])
    
    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
                initialState,
                toggleAmount,
                getTotals
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }