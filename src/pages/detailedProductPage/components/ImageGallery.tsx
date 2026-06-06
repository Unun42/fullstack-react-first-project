type ImageGalleryProps = {
    images: string[];
    title: string;
    selectedImage: number;
    setSelectedImage: (index: number) => void;
};

const ImageGallery = ({images, title, selectedImage, setSelectedImage}: ImageGalleryProps) => {
    return (
        <section className="space-y-4">
            {/* Main image */}
            <div className="
                bg-(--color-surface)
                border border-(--color-border)
                hover:border-(--color-accent)
                rounded-xl
            ">
                <img
                    src={images[selectedImage]}
                    alt={title}
                    className="
                        w-full
                        aspect-square
                        object-cover
                        rounded-lg
                    "
                />
            </div>

            {/* Images */}
            <div className="grid grid-cols-3 gap-3">
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => setSelectedImage(index)}
                        className={`
                            bg-(--color-surface)
                            border border-(--color-border)
                            hover:border-(--color-accent)
                            rounded-lg
                            transition
                        `}
                    >
                        <img
                            src={image}
                            alt={`${title} ${index + 1}`}
                            className="
                                aspect-square
                                object-cover
                            "
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ImageGallery;
