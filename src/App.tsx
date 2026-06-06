import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/NotFound";
import DetailedProductPage from "./pages/detailedProductPage/DetailedProductPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<DetailedProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default App;