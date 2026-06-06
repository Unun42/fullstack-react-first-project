import type { ProductsStatus, ProductsAction } from "../../types/sharedTypes";
import { createContext } from "react";

// Shape of the value exposed to consumers via useContext
type ProductsContextValue = {
    status: ProductsStatus;
    dispatch: React.Dispatch<ProductsAction>;
};

// Creates context for provider to expose
export const ProductsContext =
    createContext<ProductsContextValue | null>(null);