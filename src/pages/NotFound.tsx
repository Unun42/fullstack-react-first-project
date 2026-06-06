import Navbar from "../components/navbar/Navbar";
import { Link }  from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <Navbar />

            <h1 className="text-6xl text-(--color-text) p-5"> PAGE NOT FOUND; NOT EVEN A LITTLE BIT</h1>

            <Link to="/" className="border border-rose-500 bg-red-500 rounded-2xl p-2 mt-2">
                    Press me to return to your adventures!
            </Link>
        </main>
    );
};
export default NotFound;