import { useContext } from "react";
import { ProductsContext } from "../context/product/ProductsContext";


// centralizes nullguard and makes consumption cleaner
const useProducts = () => {
    const context = useContext(ProductsContext);

    // Throws if consumed outside of ProductProvider
    if (!context) {
        throw new Error("useProducts must be used within ProductProvider");
    }

    return context;
};

export default useProducts;