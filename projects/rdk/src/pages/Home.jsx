import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../apis/products"

const Home = () => {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();
  
  return (
    <div className="py-5">
      <h1 className="text-xl text-center">Categories</h1>
      { isLoading && <h1 className="text-xl text-center mt-40">Loading...</h1>}

      <div className="py-5 grid grid-cols-4 gap-3">
        {
          isSuccess && data.map((item ) => {
            return (
              <Link to={`/${item}`} key={item} >
                <div className="cursor-pointer w-full p-4 bg-neutral-400 rounded-md shadow-md hover:shadow-xl duration-200">
                  { item }
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home