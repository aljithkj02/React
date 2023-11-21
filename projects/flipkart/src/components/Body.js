import Product from './Product';
import Shimmer from './Shimmer';
import useProducts from '../utils/useProducts';

const Body = () => {
  const products = useProducts(); 

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