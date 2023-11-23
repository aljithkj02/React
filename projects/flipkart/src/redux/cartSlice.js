import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const productItem = state.items.find((item) => item.id === action.payload.id);
            if(productItem){
                state.items = state.items.filter((item) => item.id === action.payload.id ? item.qty += 1: item);
            }else{
                state.items.push({
                    ...action.payload,
                    qty: 1
                })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
        updateQty: (state, action) => {
            state.items = state.items.filter((item) => item.id === action.payload.id ? item.qty += action.payload.value: item);
        }
    }
})

export const { addItem, removeItem, clearCart, updateQty } = cartSlice.actions;

export default cartSlice.reducer;