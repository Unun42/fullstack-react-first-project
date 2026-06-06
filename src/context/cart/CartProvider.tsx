import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import cartReducer from "./cartReducer";
import type { CartProducts } from "../../types/sharedTypes";


// =========================================================
// CART CONTEXT: entities (references to products), actions
// ---------------------------------------------------------
const initialState: CartProducts = { products: [] };   // shape of state object

// useReducer(reducer, arg, init) - arg is raw input, init optional for a lazy init function
const initialCartState = (): CartProducts => {
    const isStored = localStorage.getItem("cart");

    if (isStored) { return JSON.parse(isStored); }
    else return initialState;
};


// Distributes context, owns the reducer, exposes its state object and dispatch
// inits cart from storage if exists
const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(
        cartReducer, initialState, initialCartState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return (
        // Exposes state object and dispatch to decendants for consummation
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;