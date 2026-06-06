import type { CartProducts, CartProduct, CartAction } from "../../types/sharedTypes";

// REDUCER
// receive: current state, action  --> return next state (never mutates existing state)
const cartReducer = (state: CartProducts, action: CartAction): CartProducts => {

    switch (action.type) {

        case "ADD": {
            // checks if product already exists in cart
            const exists = state.products.some(p => p.id === action.payload.id);

            if (exists) {
                // create new array with matching product having its quantity increased
                const updatedProductArray = state.products.map((p) => {
                    const isTarget = p.id === action.payload.id;
                    
                    if (isTarget) { 
                        return {   
                            ...action.payload,          // copy of product payload    
                            quantity: p.quantity + 1    // with it's quantity increased by 1
                        }
                    }

                    return p;   // unchanged products are returned as-is
                });

                return { products: updatedProductArray }

            } else {
                return {  
                    // if not yet in cart, append as a new item
                    products: [...state.products, action.payload]
                }
            }
        };

        // used a reducer as I was reaching for a reducer out of curiosity, could've used several methods instead
        // ended up creating it immutably before I realised that it's updates are local
        case "DECREMENT": {
            // new array  of products
            const updatedProducts = state.products.reduce((accumulator, product) => {
                // find product to decrement
                if (product.id === action.payload.id) {
                    // if quantity would become 0, skip adding to accumulator
                    if (product.quantity === 1) { return accumulator } 
                    
                    // else add to accumulator with reduced quantity
                    return [ ...accumulator, {...product, quantity: product.quantity -1} ]

                // all other products are copied and added unchanged
                } else { return [ ...accumulator, product ] } 
            }, [/*initialValue*/] as CartProduct[]);

            return { products: updatedProducts }
        }

        case "REMOVE": {
            // keep every product except target product
            const updatedProducts = state.products.filter(
                p => p.id !== action.payload.id );

            return { products: updatedProducts };
        }  
            
        default: return state; 
    };
};
export default cartReducer;


// PATTERNS - ¨foundation of every reducer case¨
// return { ...existingState, updatedField: newValue }
// (state, event) => nextState
// never mutate existing state