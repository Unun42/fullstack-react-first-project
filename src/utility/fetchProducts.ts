import type { ProductItem, ApiResponse } from "../types/sharedTypes";
import transformProducts from "./transformProducts";


// Clean; only fetches, even throws error to be squeaky clean
const fetchProducts = async (): Promise<ProductItem[]> => {
        const res = await fetch("https://dummyjson.com/products?limit=40&skip=9");
        if (!res.ok) { throw new Error(`HTTP-error: ${res.status}`) }

        const data: ApiResponse = await res.json();

        // transforms the product data shape
        return transformProducts(data);
};
export default fetchProducts;

// coordinates           fetches             updates        only logic
// useProductsData() --> fetchProducts() --> dispatch() --> productReducer() --> state
