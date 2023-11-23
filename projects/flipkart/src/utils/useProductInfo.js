import { useEffect, useState } from "react"
import { API_URL } from "./constants";

const useProductInfo = (prodId) => {
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        const data = await fetch(`${API_URL}/${prodId}`);
        const json = await data.json();
        setProductInfo(json);
    }

    return productInfo || {};
}

export default useProductInfo;