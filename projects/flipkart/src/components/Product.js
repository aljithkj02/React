import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addItem, removeItem } from '../redux/cartSlice';

const Product = (item) => {
  const { thumbnail, brand, title, price, id, isAvailable } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddItem = (e) => { 
      e.stopPropagation();
      dispatch(addItem(item))
  }

  const handleRemoveItem = (e) => {
      e.stopPropagation();
      dispatch(removeItem(id));
  }
  
  return (
    <div className='p-4 shadow-xl bg-neutral-300 rounded-md hover:bg-gray-300 hover:shadow-2xl duration-200' onClick={() => navigate(`/product/${id}`)}>
        <div >
            <img src={thumbnail} alt="Product image" className='rounded-md w-full h-52 sm:h-40 lg:h-48' />
        </div>
        <div >
            <p className='font-bold text-lg my-2'>{ brand }</p>
            <p className="h-12">{ title }</p>
            
            <h4>${ price }</h4>
            <button className={`py-1 w-full mt-2 rounded-lg text-white ${isAvailable ? 'bg-red-700' : 'bg-green-600'}`}
              onClick={isAvailable ? handleRemoveItem: handleAddItem}
            >
              { isAvailable ? "Remove from cart": "Add To Cart" }
            </button>
        </div>
    </div>
  )
}

export default Product