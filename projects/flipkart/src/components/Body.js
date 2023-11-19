import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constants';
import Product from './Product';
import Shimmer from './Shimmer';

const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
  }

  return (
    <div id="body">
        <h1>Top Products</h1>

        <div id="products-container">
          { products.length ? products.map((item) => {
            return <Product key={item.id} {...item} />
          }) : <Shimmer product={true} />}
        </div>
    </div>
  )
}

export default Body