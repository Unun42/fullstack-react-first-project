import type { Reviews } from "../../../types/sharedTypes";

type ReviewsProps = { reviews: Reviews[]; };

const ReviewsSection = ({ reviews }: ReviewsProps) => {
    return (
        <section className="
            bg-(--color-surface)
            border border-(--color-border)
            rounded-xl
            p-6
            space-y-4
        ">
            <h2 className="text-xl font-semibold">Reviews </h2>

            {reviews.map((review) => (
                <article
                    key={review.comment}
                    className="
                        bg-(--color-surface)
                        hover:brightness-110
                        border border-(--color-border)
                        rounded-xl
                        p-4
                    "
                >
                    <cite className="text-(--color-text)/90">
                        "{review.comment}"
                    </cite>
                </article>
            ))}
        </section>
    );
};
export default ReviewsSection;
