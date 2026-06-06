import { useContext } from "react";
import CartContext from "../context/cart/CartContext";


// centralizes nullguard and makes consumption cleaner
const useCart = () => {
    const context = useContext(CartContext);

    // Throws if consumed outside of ProductProvider
    if (context === null) {
        throw new Error ("useCart must be used within CartProvider's reach");
    }

    return context;
};
export default useCart;