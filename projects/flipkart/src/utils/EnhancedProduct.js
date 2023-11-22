
export const enhanceProduct = (Product) => {
    return (props) => {
        return (
            <div className="relative">
                <Product {...props} />
                <p className="bg-sky-700 text-white inline px-3 py-1 absolute top-2 rounded-r-lg">Featured</p>
            </div>
        )
    }
}