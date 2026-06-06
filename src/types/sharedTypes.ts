// ====================
// FETCH RESPONSE SHAPE
// ====================
export type ApiResponse = {
    products: ProductItem[];
    total: number;
    skip: number;
    limit: number;
};

// =========================
// PRODUCTS
// =========================
// A singel entity in the shape I want for my UI
export type ProductItem = {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    category: string;
    images: string[];
    reviews: Reviews[];
};

export type Reviews = { comment: string; }


// State model for the reducer
export type ProductsStatus =
    | { status: "success"; data: ProductItem[]; } 
    | { status: "error"; error: string; }
    | { status: "loading"; };

// Actions the reducer can handle
export type ProductsAction =
    | { type: "LOAD" }
    | { type: "SUCCESS"; data: ProductItem[] }
    | { type: "ERROR"; error: string };

// ==========================
// CART 
// ==========================
export type CartProducts = {
    products: CartProduct[];
};

export type CartProduct = {
    id: number;
    quantity: number;
};


// Actions the reducer can handle
export type CartAction =
    | { type: "ADD";       payload: CartProduct }
    | { type: "INCREMENT"; payload: CartProduct }
    | { type: "DECREMENT"; payload: CartProduct } 
    | { type: "REMOVE";    payload: CartProduct }; 


// ==========================
// ENRICHED CART 
// ==========================
export type EnrichedCartProduct = {
    id:         number;
    quantity:   number;
    title:      string;
    thumbnail:  string;
    price:      number;
};