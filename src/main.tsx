import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'
import ThemeProvider from "./context/theme/ThemeProvider";
import ProductProvider from "./context/product/ProductsProvider";
import CartProvider from "./context/cart/CartProvider";

// StrictMode: renders twice, used for error handling
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <CartProvider>
                    <ProductProvider>
                        <App />
                    </ProductProvider>
                </CartProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);