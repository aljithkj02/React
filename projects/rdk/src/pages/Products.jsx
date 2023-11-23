import { Link, useParams } from "react-router-dom"
import { useGetProductsQuery } from "../apis/products";

const Products = () => {
    const { productName } = useParams();
    const { data, isLoading, isSuccess } = useGetProductsQuery(productName);

    return (
        <div>
            <h1 className="text-xl text-center mt-5">Products</h1>
            { isLoading && <h1 className="text-xl text-center mt-40">Loading...</h1>}
            <div className="py-5 grid grid-cols-4 gap-5">
                { isSuccess && data.products.map((item ) => {
                    return (
                        <Link key={item.id} to={`/product/${item.id}`}>
                            <div className="p-3 rounded-md bg-gray-300">
                                <div>
                                    <img src={item.thumbnail} alt={item.title} 
                                        className="w-full h-52"
                                    />
                                </div>
                                <div className="mt-3">
                                    <h1 className="text-lg">{item.title}</h1>
                                    <h2 className="font-bold text-cyan-600">{ item.brand }</h2>
                                    <h2 className="font-bold text-xl">${ item.price }</h2>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Products