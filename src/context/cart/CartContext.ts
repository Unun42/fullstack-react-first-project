import { createContext } from "react";
import type { CartProducts, CartAction } from "../../types/sharedTypes";

type CartContextValue = {
    state: CartProducts;
    dispatch: React.Dispatch<CartAction>;
};


// Creates context for provider to expose
const CartContext = createContext<CartContextValue | null>(null);
export default CartContext;