import { useState, useRef } from "react";
import { FakeAuthButtons, CheckoutItem } from "./subComponents/subComponents";
import useCartWithProducts from "../../../hooks/useCartWithProducts";
import CheckoutForm from "./subComponents/checkoutForm";
// useForm (external) seems like a great way to refractor


function Checkout() {
    const [ checkoutContent, setCheckoutContent ] = useState<React.ReactNode>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);    // what does useRef do again???

    // HTML's <dialog> had built in methods and accessibility I wanted to test
    const toggleCheckoutDialog = () => {
        if (!dialogRef.current) { return; }
        if (dialogRef.current.hasAttribute("open")) { // if hasAttribute open
            dialogRef.current.close()                 // then close (inherent <diglog> method)
        } else { dialogRef.current.showModal(); }     // else showModal (inherent <diglog> method)
    };

    return (
        <main className="max-w-6xl p-3 mx-2">

            {/* HEADER */}
            <div className="flex items-center justify-between">
                <button 
                    className="
                        p-3 mx-2 rounded-md
                        font-medium
                        transition
                        bg-(--color-accent)
                        text-(--color-text-on-accent)
                        hover:bg-(--color-surface)
                        hover:text-(--color-text)
                    "
                    onClick={() => {
                        setCheckoutContent(<CheckoutContent />) 
                        toggleCheckoutDialog();
                    }}
                    >View Checkout
                </button>
                
            </div>

            <dialog 
                className="m-auto rounded-xl p-6 backdrop:bg-black/50 bg-amber-500"
                ref={dialogRef} 
                onClick={(e) => { 
                    if (e.currentTarget === e.target) {
                        toggleCheckoutDialog(); 
                    }
                }}
            >
                <div>
                    {checkoutContent}
                </div>
            </dialog>
        </main>
    );
};
export default Checkout;


const CheckoutContent = () => { 
    const enrichedCart = useCartWithProducts(); // combined cart/product context

    if (enrichedCart.status === "success") {
        const totalPrice = enrichedCart.data.reduce((sum, product) => {
            const total = sum + product.price * product.quantity;
            return Math.round(total * 100) / 100;
        }, 0);

        return (
            <div
                className="
                    bg-(--color-surface)
                    border border-(--color-border)
                    rounded-xl
                    p-6
                    w-full max-w-2xl
                    space-y-6
                "
            >
                {/* HEADER */}
                <h1 className="text-2xl font-bold text-(--color-text)">Checkout & Stuffs</h1>

                {/* ITEMS */}
                <div
                    className="
                        space-y-3
                        p-4
                        rounded-lg
                        bg-(--color-background)
                        border border-(--color-border)
                    "
                >
                    {enrichedCart.data.map((product) => (
                        <CheckoutItem
                            key={product.id}
                            product={product}
                        />
                    ))}

                    {/* TOTAL */}
                    <div className="flex justify-between">
                        <span className="font-bold text-(--color-text)">
                            Total
                        </span>

                        <span className="font-bold text-(--color-accent)">
                            {totalPrice}$
                        </span>
                    </div>
                </div>

                <FakeAuthButtons />
                <CheckoutForm />
            </div>
        );
    };
};


