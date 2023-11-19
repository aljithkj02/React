import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <nav>
            <div id="header">
                <Link to='/'>
                    <img id="logo" src={LOGO_URL}
                        alt="logo"
                    />
                </Link>
                <div id="header-right-bar">
                    <div id="search-bar">
                        <input type="text" placeholder="Search restaurant" />
                    </div>
                    <div id="nav-items">
                        <ul>
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