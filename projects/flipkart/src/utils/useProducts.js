import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useProducts = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        setProducts(json.products);
    }
    
    return products || [];
}

export default useProducts;