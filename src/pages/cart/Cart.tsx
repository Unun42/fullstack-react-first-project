import Navbar from "../../components/navbar/Navbar";
import Checkout from "./checkout/Checkout";
import DisplayCartProducts from "./DisplayCartProducts";

function Cart() {
    return (
        <main>  
            <Navbar />
                <div className="flex justify-around pt-3">
                    <h1 className="text-5xl font-bold self-center">Your Cart</h1>
                    <Checkout />
                </div>
            <DisplayCartProducts />
        </main>
    )
};
export default Cart;