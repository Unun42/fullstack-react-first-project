import type { ApiResponse } from "../types/sharedTypes";

// transform the product data from fetchProducts
const transformProducts = (data: ApiResponse) => {
    return data.products;
};
export default transformProducts;