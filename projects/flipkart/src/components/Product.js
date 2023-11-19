import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ thumbnail, brand, title, price, id }) => {
  const navigate = useNavigate();
  
  return (
    <div id="product" onClick={() => navigate(`/product/${id}`)}>
        <div id="prod-img-container">
            <img src={thumbnail} alt="Product image" />
        </div>
        <div id="product-info">
            <p>{ brand }</p>
            <p>{ title }</p>
            <h4>${ price }</h4>
        </div>
    </div>
  )
}

export default Product