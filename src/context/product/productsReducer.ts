import type { ProductsStatus, ProductsAction } from "../../types/sharedTypes";


// receive: current state, action  --> return next state
// does not hold data; only logic for its state changes
const productsReducer = (status: ProductsStatus, action: ProductsAction): ProductsStatus => {
    switch (action.type) {
        case "LOAD":
            return { status: "loading" };
        case "SUCCESS":
            return { status: "success", data: action.data };
        case "ERROR":
            return { status: "error", error: action.error };
        default:
            return status;
    };
};
export default productsReducer;

// should've created an "idle" state 
// usecase: user refreshes/links anything but Home page
// would've used dispatched things like reroutes