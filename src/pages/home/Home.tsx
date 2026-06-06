import DisplayProducts from "./DisplayProducts";
import Navbar from "../../components/navbar/Navbar";
import useProductsData from "../../hooks/useProductsData";


function Home() {
    useProductsData();  // handles full fetch lifecycle

    return (
        <>
            <Navbar />
            <h1 className="text-5xl font-bold text-(--color-text)">Home</h1>
            <DisplayProducts />
        </>
    );
};
export default Home;