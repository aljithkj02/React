import Product from './Product';
import Shimmer from './Shimmer';
import useProducts from '../utils/useProducts';
import { enhanceProduct } from '../utils/EnhancedProduct';

const Body = () => {
  const products = useProducts(); 
  const EnhancedProduct = enhanceProduct(Product);

  return (
    <div>
        <h1 className='text-2xl mt-4'>Top Products</h1>
        <div className='my-4 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          { products.length ? products.map((item) => {
            return item.rating > 4.6 ? <EnhancedProduct key={item.id} {...item} /> : <Product key={item.id} {...item} />
          }) : <Shimmer product={true} />}  
        </div>
    </div>
  )
}

export default Body