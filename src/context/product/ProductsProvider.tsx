import { useReducer } from "react";
import { ProductsContext } from "./ProductsContext"
import productsReducer from "./productsReducer";
import type { ProductsStatus } from "../../types/sharedTypes";

// =========================================================
// PRODUCT CONTEXT: fetched product data, state (loading, error, success), actions
// ---------------------------------------------------------
const initialStatus: ProductsStatus = { status: "loading" };

// Owns the reducer, exposes its state object and dispatch
const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    // status is the state object that holds product data, etc
    // stored here by the useReducer, managed by productReducer
    // context makes it accessible to child components
    const [status, dispatch] = useReducer(productsReducer, initialStatus);

    return (
        // Exposes state (status) object and dispatch to decendants for consummation
        <ProductsContext.Provider value={{ status, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductProvider;