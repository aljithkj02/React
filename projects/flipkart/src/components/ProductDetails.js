import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const ProductDetails = () => {
    const { prodId } = useParams();
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        const data = await fetch(`${API_URL}/${prodId}`);
        const json = await data.json();
        console.log(json)
        setProductInfo(json);
    }

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