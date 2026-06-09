import { useEffect } from "react";
import fetchProducts from "../utility/fetchProducts";
import useProducts from "./useProducts";


// handles full fetch lifecycle: data loading, fetch, state transitions
const useProductsData = () => {
    const { status, dispatch } = useProducts(); // product context

    useEffect(() => {
        // fetch loadProducts and updates state based on result
        const loadProducts = async () => {
            dispatch({ type: "LOAD" });     // dispatch load action object to reducer
            
            try {
                const res = await fetchProducts();

                // On success, state object becomes { status: "success", data: res }
                dispatch({ type: "SUCCESS", data: res });
            } catch (err) { 
                console.error("loadProducts catch: ", err);

                // On failure, state object becomes { status: "error", error: ... }
                dispatch({ 
                    type: "ERROR", 
                    // if err actual error constructor, then err.message, otherwise unknown
                    error: err instanceof Error ? err.message : "unknown error in useProductsData"
            })    // CHANGED AFTER SUBMIT DATE, MISSED THE ENDING PARENTHASES !!!
        };

        // run once when hook mounts as dispatch is stable
        loadProducts();
    }, [dispatch]); 

    // expose product state and dispatch
    return { status, dispatch };
};
export default useProductsData;

// was created when I had ambitions of creating an actually clean project, 
// allows fetchProducts() to only preform the HTTP request
// while this hook decides WHEN to fetch and how state should change 
