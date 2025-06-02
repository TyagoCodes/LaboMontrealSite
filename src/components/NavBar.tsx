import {Link} from "react-router-dom";

function NavBar() {

    return (
        <>
            <nav className="flex flex-col items-center justify-between  px-2.5 pr-6 border-b md:flex-row gap-6 mt-1">
                <ul className="flex items-center gap-1">
                    <li>
                        <Link to="/">
                            <img src="/icons/MontrealLogo.png" alt="Montreal Logo" className="h-26" />
                        </Link>
                    </li>

                    <li><img src="/icons/bgSep.png" alt="Separator" className="h-9" /></li>

                    <li>
                        <Link to="/openmenuburger" className="flex items-center gap-2">
                            <img src="/icons/menuBurg.png" alt="menu burg icon" className="h-7" />
                            <span className="hover:text-red-500">Menu</span>
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li>
                        <Link to="/search" className="flex items-center gap-2">
                            <img src="/icons/searchIcon.png" alt="Search Icon" className="h-7" />
                            <span className="hover:text-red-500">Search</span>
                        </Link>
                    </li>

                    <li><img src="/icons/bgSep.png" alt="Image Separator" className="h-9"/></li>

                    <li>
                        <Link to="/logIn"  className="flex items-center gap-2">
                            <img src="/icons/AccIcon.png" alt="Account Icon" className="h-5"></img>
                            <span className="hover:text-red-500">Account</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;