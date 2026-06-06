import useCartWithProducts from "../../hooks/useCartWithProducts";
import useCart from "../../hooks/useCart";


// combines product/cart context for consumers of enrichedCart
const DisplayCartProducts = () => {
    const { dispatch } = useCart();
    const enrichedCart = useCartWithProducts();

    // REMOVED AS TO BE ABLE TO LAND ON CART PAGE
    // better fix would be: add idle state, and product context to storage
    // if (enrichedArray.status === "loading") { return <h1 className="font-bold text-(--color-loading)">Still: LOADING!, LOADING!, LOADING! -- whaaat?!</h1>};

    if (enrichedCart.status === "error") { return <h1 className="text-(--color-warning)">ERROR: {enrichedCart.error}</h1> };
    if (enrichedCart.status !== "success") return null;

    // TODO: sub-components
    return (
        <main className="max-w-[70dvw] mx-auto p-6">

            {/* EMPTY */}
            {enrichedCart.data.length === 0 ? (
                <div className="
                    bg-(--color-surface)
                    border border-(--color-border)
                    rounded-xl
                    p-6
                    text-(--color-text)/70
                ">
                    <h2 className="font-extrabold text-(color-text)">
                        Your cart is still empty — may I entice you with some cat food?
                    </h2>
                </div>
            ) : (
                /* CART GRID */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {enrichedCart.data.map((p) => (
                        <div
                            key={p.id}
                            className="
                                flex flex-col
                                bg-(--color-surface)
                                border border-(--color-border)
                                rounded-xl
                                overflow-hidden
                                shadow-sm
                                hover:border-(--color-accent)
                                transition
                            "
                        >

                            {/* IMAGE */}
                            <div className="bg-(--color-surface)">
                                <img
                                    src={p.thumbnail}
                                    alt={p.title}
                                    className="
                                        aspect-square
                                        object-cover
                                    "
                                />
                            </div>

                            {/* INFO */}
                            <div className="pb-4 space-y-3 flex-1 mt">
                                <h2 className="font-semibold text-lg">
                                    {p.title}
                                </h2>

                                <div className="flex justify-center gap-x-4">
                                    <p className="text-(--color-accent) font-medium">
                                        ${p.price}
                                    </p>

                                    <p className="text-(--color-text)/70">
                                        Quantity: {p.quantity}
                                    </p>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="p-4 pt-0 flex gap-2">
                                <button
                                    className="
                                        flex-1
                                        py-2 rounded-md
                                        bg-(--color-accent)
                                        font-semibold
                                        border border-(--color-border)
                                        hover:bg-(--color-accent-hover)
                                        text-(--color-text-on-accent)
                                        transition
                                        active:scale-110
                                    "
                                    onClick={() =>
                                        dispatch({
                                            type: "ADD",
                                            payload: { id: p.id, quantity: 1 }
                                        })
                                    }
                                >
                                    +
                                </button>

                                <button
                                    className="
                                        flex-1
                                        py-2 rounded-md
                                        font-semibold
                                        border border-(--color-border)
                                        hover:border-(--color-accent)
                                        transition
                                        active:scale-90"
                                    
                                    onClick={() =>
                                        dispatch({
                                            type: "DECREMENT",
                                            payload: { id: p.id, quantity: 1 }
                                        })
                                    }
                                >
                                    -
                                </button>

                                <button
                                    className="
                                        flex-1
                                        p-2 rounded-md
                                        font-semibold
                                        border border-(--color-border)
                                        text-(--color-error)
                                        hover:border-(--color-error)
                                        transition ease-in
                                        active:scale-130"
                                        
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE",
                                            payload: { id: p.id, quantity: 1 }
                                        })
                                    }
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};
export default DisplayCartProducts;