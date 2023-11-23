
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { removeItem, updateQty } from '../redux/cartSlice';

const Cart = () => {
    const items = useSelector((data) => data.cart.items);
    const dispatch = useDispatch();

    const handleChangeQty = (id, value) => {
        dispatch(updateQty({ id, value }));
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }
    
    return (
        <div className='flex flex-col gap-2 my-10 w-8/12 mx-auto'>
            {
                items.map((item) => <CartItem key={item.id} {...item} handleChangeQty={handleChangeQty} handleRemoveItem={handleRemoveItem}/>)
            }
        </div>
    )
}

export default Cart;