import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <nav>
            <div className="flex justify-between px-20 py-4 shadow-xl bg-slate-300 fixed w-full">
                <Link to='/'>
                    <img className="w-40" src={LOGO_URL}
                        alt="logo"
                    />
                </Link>
                <div className="flex items-center">
                    <div className="mr-10">
                        <input type="text" placeholder="Search products"
                            className="px-4 py-2 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div id="nav-items">
                        <ul className="flex gap-6">
                            <li>Online: { onlineStatus ? "✅" : "🛑"}</li>
                            <li><Link to='/'> Home </Link></li>
                            <li><Link to='/about'> About Us </Link></li>
                            <li><Link to='/contact'> Contact </Link></li>
                        </ul>   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;