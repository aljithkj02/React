import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useProductInfo from '../utils/useProductInfo';

const ProductDetails = () => {
    const { prodId } = useParams();
    
    const productInfo = useProductInfo(prodId);

    const { brand, title, description, thumbnail, price, rating } = productInfo;

    return (
        <div className='common' id="product-container">
            { Object.keys(productInfo).length ? (
                <>
                    <div id="thumbanail-img-container">
                        <img src={thumbnail} alt={title} />
                    </div>
                    <div id="product-details-info">
                        <h1>{ title }</h1>
                        <h2>{ brand }</h2>
                        <p>{ description }</p>
                        <h3>${ price }</h3>
                        <p>{ rating } 🌟</p>
                    </div>
                </>
            ): (
                <Shimmer product={false} />
            )}
            
        </div>
    )
}

export default ProductDetails