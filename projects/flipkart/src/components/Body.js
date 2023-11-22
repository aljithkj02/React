import Product from './Product';
import Shimmer from './Shimmer';
import useProducts from '../utils/useProducts';

const Body = () => {
  const products = useProducts(); 

  return (
    <div>
        <h1 className='text-2xl mt-4'>Top Products</h1>

        <div className='my-4 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          { products.length ? products.map((item) => {
            return <Product key={item.id} {...item} />
          }) : <Shimmer product={true} />}
        </div>
    </div>
  )
}

export default Body