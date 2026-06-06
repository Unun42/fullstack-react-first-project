import useCart from "./useCart";
import useProducts from "./useProducts";
import type { CartProduct, ProductItem, EnrichedCartProduct } from "../types/sharedTypes";

type EnrichedCartState =
    | { status: "success";  data: EnrichedCartProduct[]; }
    | { status: "error";    error: string; }
    | { status: "loading"; };


// null checks and returns enriched products
const enrichedProduct = (cartItem: CartProduct, productData: ProductItem | undefined) => {
    if (!productData) return null;

    return {
        id: cartItem.id,
        quantity: cartItem.quantity,
        title: productData.title,
        thumbnail: productData.thumbnail,
        price: productData.price,
    };
};


const useCartWithProducts = (): EnrichedCartState => {
    const { status } = useProducts();   // product context
    const { state } = useCart();        // cart context

    if (status.status === "loading") { return { status: "loading" }; }                  // forward loading state if products are still being fetched
    if (status.status === "error") { return { status: "error", error: status.error };}  // forward errors for consumers

    const allProducts = status.data;    // fetched products
    const cartItems = state.products;   // entities with cart specific data: id, quant

    // combine cart/product data
    const enrichedCart = cartItems.map(cartItem => {
        // find matching id
        const productData = allProducts.find(p => p.id === cartItem.id);
        return enrichedProduct(cartItem, productData);
    })
    // filter falsy products
    .filter(Boolean) as EnrichedCartProduct[];  // tells typescript that the return will be in the shape of EnrichedCartProduct[]

    // forward success state and merged data
    return { status: "success", data: enrichedCart };
};
export default useCartWithProducts;