import Product from './Product';
import Shimmer from './Shimmer';
import useProducts from '../utils/useProducts';
import { enhanceProduct } from '../utils/EnhancedProduct';
import { useSelector } from 'react-redux';
import { useGetProductsDataQuery } from '../apis/products';
import { useEffect } from 'react';

const Body = () => {
  // const products = useProducts(); 
  const EnhancedProduct = enhanceProduct(Product);
  let cartItems = useSelector(data => data.cart.items);
  cartItems = cartItems.map((item) => item.id);

  const { data, error, isLoading } = useGetProductsDataQuery();
  
  const products = data?.products || [];

  return (
    <div>
        <h1 className='text-2xl mt-4'>Top Products</h1>
        <div className='my-4 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          { products.length ? products.map((item) => {
            const isAvailable = cartItems.includes(item.id);
            return item.rating > 4.6 ? <EnhancedProduct key={item.id} {...item} isAvailable={isAvailable} /> : 
              <Product key={item.id} {...item} isAvailable={isAvailable} />
          }) : <Shimmer product={true} data={data}/>}  
        </div>
    </div>
  )
}

export default Body