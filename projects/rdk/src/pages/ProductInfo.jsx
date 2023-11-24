import { useParams } from "react-router-dom";
import { useGetProductInfoQuery } from "../apis/products";

const ProductInfo = () => {
    const { id } = useParams();
    const { isLoading, data, isSuccess } = useGetProductInfoQuery(id);
    console.log({ isLoading, data, isSuccess })

    return (
        <div>
            <h1 className="text-xl text-center mt-5">Products Information</h1>
            { isLoading && <h1 className="text-xl text-center mt-40">Loading...</h1>}

            { isSuccess && <div className="grid grid-cols-[1fr_3fr] gap-10 mt-10">
                <div>
                    <img src={data.thumbnail} alt={data.title} />
                </div>  
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-3xl">{ data.title }</h1>
                    <h1 className="mt-2 text-lg text-gray-500">{ data.brand }</h1>
                    <h1>{ data.description }</h1>
                    <h1>{ data.price }</h1>
                </div>
            </div> } 
        </div>
    )
}

export default ProductInfo