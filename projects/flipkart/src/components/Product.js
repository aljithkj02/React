import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ thumbnail, brand, title, price, id }) => {
  const navigate = useNavigate();
  
  return (
    <div className='p-4 shadow-xl bg-neutral-300 rounded-md' onClick={() => navigate(`/product/${id}`)}>
        <div >
            <img src={thumbnail} alt="Product image" className='rounded-md w-full h-52 sm:h-40 lg:h-48' />
        </div>
        <div >
            <p className='font-bold text-lg my-2'>{ brand }</p>
            <p>{ title }</p>
            <h4>${ price }</h4>
        </div>
    </div>
  )
}

export default Product