import React from 'react'

const CartItem = ({ title, description, price, thumbnail, qty, handleChangeQty, id, handleRemoveItem }) => {
  return (
    <div className='flex justify-between shadow-lg py-4 px-6 rounded-md bg-slate-400'>
        <div className='flex flex-col justify-center gap-2 w-full pr-6'>
            <p className='text-xl'>{ title }</p>
            <p className='text-gray-200'>{ description }</p>
            <p className='font-bold text-lg'>${ price }</p>

            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <button className='px-3 bg-indigo-700 text-lg text-white rounded-lg' onClick={() => {
                        handleChangeQty(id, -1);
                    }}> - </button>
                    <h3>{qty}</h3>
                    <button className='px-3 bg-indigo-700 text-lg text-white rounded-lg' onClick={() => {
                        handleChangeQty(id, 1);
                    }}> + </button>
                </div>
                <div>
                    <button className='py-2 px-5 bg-red-700 text-white rounded-lg' onClick={() => {
                        handleRemoveItem(id)
                    }}>Remove item</button>
                </div>
            </div>
        </div>
        <div>
            <img src={thumbnail} alt={title} className='w-40 h-40 rounded-md object-cover' />
        </div>
    </div>
  )
}

export default CartItem