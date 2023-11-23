import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import { productsApi } from "../apis/products";


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})

export default appStore;