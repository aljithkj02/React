import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useProductInfo from '../utils/useProductInfo';

const ProductDetails = () => {
    const { prodId } = useParams();
    
    const productInfo = useProductInfo(prodId);

    const { brand, title, description, thumbnail, price, rating } = productInfo;

    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-[1fr_2fr] h-[90vh]'>
            { Object.keys(productInfo).length ? (
                <>
                    <div className="flex items-center">
                        <img src={thumbnail} alt={title} />
                    </div>
                    <div className="flex justify-center flex-col">
                        <h1 className="text-2xl">{ title }</h1>
                        <h2 className="font-bold text-lg text-gray-500">{ brand }</h2>
                        <p className="mt-6">{ description }</p>
                        <h3 className="mt-3 font-bold text-xl">${ price }</h3>
                        <p className="text-xl mt-4">{ rating } 🌟</p>
                    </div>
                </>
            ): (
                <Shimmer product={false} />
            )}
            
        </div>
    )
}

export default ProductDetails