import type { ProductItem, ApiResponse } from "../types/sharedTypes";
import transformProducts from "./transformProducts";


// Clean; only fetches, even throws error to be squeaky clean
const fetchProducts = async (): Promise<ProductItem[]> => {
    try {
        const res = await fetch("https://dummyjson.com/products?limit=40&skip=9");
        if (!res.ok) { throw new Error(`HTTP-error: ${res.status}`) }

        const data: ApiResponse = await res.json();

        // transforms the product data shape
        return transformProducts(data);
    } catch (err) { 
        console.error("fetchProducts catch: ", err);
        throw err;  // propagate, instead of consume, the error
    };
};
export default fetchProducts;

// coordinates           fetches             updates        only logic
// useProductsData() --> fetchProducts() --> dispatch() --> productReducer() --> state