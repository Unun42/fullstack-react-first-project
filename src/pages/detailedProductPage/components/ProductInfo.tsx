import type { ProductItem } from "../../../types/sharedTypes";

type ProductInfoProps = {
    product: ProductItem;
    onAddToCart: () => void;
};

const ProductInfo = ({ product, onAddToCart }: ProductInfoProps) => {
    return (
        <section className="space-y-8">

            {/* Product details */}
            <div className="
                bg-(--color-surface)
                border border-(--color-border)
                rounded-xl
                p-6
                space-y-4
            ">
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <p className="
                    text-2xl
                    font-semibold
                    text-(--color-accent)
                ">
                    ${product.price}
                </p>

                <p className="text-(--color-text)/80 leading-relaxed">{product.description}</p>

                <button
                    onClick={onAddToCart}
                    className="
                        w-full
                        mt-4
                        px-6 py-3
                        rounded-lg
                        hover:bg-(--accent-hover)
                        text-(--color-text-on-accent)
                        bg-(--color-accent)
                        font-medium
                        active:scale-110
                        transition
                ">
                    Add to Cart
                </button>
            </div>
        </section>
    );
};
export default ProductInfo;