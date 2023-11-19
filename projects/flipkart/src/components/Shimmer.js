import React from 'react'

const demoList = new Array(10).fill(1);

const Shimmer = ({ product }) => {
  return (
    <>
        { product ? demoList.map((item, index) => {
                return (
                    <div id="shimmer" key={index}>
                        <div id="shimmer-img-container">
                            
                        </div>
                        <div id="shimmer-product-info">
                            <div></div>
                            <div></div>
                            <div></div>
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