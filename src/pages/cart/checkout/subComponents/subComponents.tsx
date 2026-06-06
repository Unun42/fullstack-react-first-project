import type {EnrichedCartProduct} from "../../../../types/sharedTypes";

type CheckoutItemProps = { product: EnrichedCartProduct };
export const CheckoutItem = ({ product }: CheckoutItemProps) => {
    return (
        <div className="
            py-3
            border-b border-(--color-border)
            space-y-1"
        >
            {/* ROW 1: TITLE */}
            <h3 className="font-medium text-(--color-text)">
                {product.title}
            </h3>

            {/* ROW 2: QTY + PRICE */}
            <div className="flex justify-around text-sm text-(--color-text)/70">
                <p>Quantity: {product.quantity}</p>

                <p className="font-medium text-(--color-accent)">
                    {product.price * product.quantity} $
                </p>
            </div>
        </div>
    );
};


export const FakeAuthButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <button
                disabled
                className="
                    py-2 rounded-lg
                    border border-(--color-border)
                    text-(--color-text-on-accent)
                    font-bold
                    bg-(--color-accent)
                    line-through
                "
            >
                Sign in
            </button>

            <button
                disabled
                className="
                    py-2 rounded-lg
                    border border-(--color-border)
                    text-(--color-text-on-accent)
                    font-bold
                    bg-(--color-accent)
                    line-through
                "
            >
                Create Account
            </button>
        </div>
    );
};