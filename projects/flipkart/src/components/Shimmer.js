import React from 'react'

const demoList = new Array(20).fill(1);

const Shimmer = ({ product }) => {
  return (
    <>
        { product ? demoList.map((item, index) => {
                return (
                    <div key={index} className='bg-gray-300 p-4 shadow-xl rounded-md'>
                        <div className='rounded-md w-full h-52 sm:h-40 lg:h-48 bg-slate-50'>
                            
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='mt-3 w-[25%] h-6 bg-slate-50'></div>
                            <div className='w-[60%] h-5 bg-slate-50'></div>
                            <div className='w-[25%] h-5 bg-slate-50'></div>
                        </div>
                    </div>
                )
            }) : (
                <>
                    <div id="shimmer-thumbanail-img-container">

                    </div>
                    <div id="shimmer-product-details-info">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                    </div>
                </>
            )
        }
    </>
  )
}

export default Shimmer