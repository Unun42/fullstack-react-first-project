import useProducts from "../../hooks/useProducts";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import ProductInfo from "./components/ProductInfo";
import ReviewsSection from "./components/Reviews";


// useParams returns an object of key/valuepairs of the dynamic params 
// from the current URL that were matched by the routes, child routes inherit all params (in this case (:id))

// page user is routed to if product interracted with from Home, used to be all cards before I remade UI and ran out of time
const DetailedProductPage = () => {
    const { dispatch } = useCart();
    const { status } = useProducts();
    const [selectedImage, setSelectedImage] = useState(0);  // should be null??
    const { id } = useParams();

    if (!id) { return <h1 className="font-bold text-(--color-error)">~Product not found~</h1>; };   // if dynamic id not found
    
    if (status.status === "loading") {
        return (<h1 className="font-bold text-(--color-loading)">Loading...</h1>);
    };

    if (status.status === "error") {
        return (<h1 className="font-bold text-(--color-error)">ERROR: {status.error}</h1>);
    };

    if (status.status !== "success") return null;
    
    const correctProduct = status.data.find((p) => p.id === Number(id));    // Number method as useParams return string
    if (!correctProduct) { 
        return <h1 className="color-(--color-error)">~Product not found~</h1>; 
    };
    
    // action object
    const handleAddToCart = () => {
        dispatch({
            type: "ADD",
            payload: { id: correctProduct.id, quantity: 1 },
        });
    };

    return (
        <>
            <header>
                <Navbar />
            </header>
            
            <main className="max-w-[70dvw] mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <ImageGallery
                        images={correctProduct.images}
                        title={correctProduct.title}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        />

                    <div className="space-y-8">
                        <ProductInfo
                            product={correctProduct}
                            onAddToCart={handleAddToCart}
                        />
                        <ReviewsSection reviews={correctProduct.reviews} />
                    </div>
                </div>
            </main>
        </>
    );
};
export default DetailedProductPage;