import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/:productName',
                element: <Products />
            },
            {
                path: '/product/:id',
                element: <ProductInfo />
            },
            {
                path: '/cart',
                element: <h1>Cart</h1>
            }
        ]
    }
])