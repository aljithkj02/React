import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useMyContext } from "../context";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { user, handleChange } = useMyContext();

    return (
        <nav>
            <div className="flex justify-between px-20 py-4 shadow-xl bg-slate-300 fixed w-full z-10">
                <Link to='/'>
                    <img className="w-40" src={LOGO_URL}
                        alt="logo"
                    />
                </Link>
                <div className="flex items-center">
                    <div className="mr-10">
                        <input type="text" placeholder="Change user name"
                            className="px-4 py-2 rounded-lg focus:outline-none"
                            value={user} onChange={handleChange}
                        />
                    </div>
                    <div id="nav-items">
                        <ul className="flex gap-6">
                            <li>Online: { onlineStatus ? "✅" : "🛑"}</li>
                            <li><Link to='/'> Home </Link></li>
                            <li><Link to='/about'> About Us </Link></li>
                            <li><Link to='/contact'> Contact </Link></li>
                            <li className="text-orange-700 font-bold"> { user } </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;