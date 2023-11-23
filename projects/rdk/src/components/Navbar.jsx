import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-200 px-10 py-5">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex gap-7">
          <li><Link to="/">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar