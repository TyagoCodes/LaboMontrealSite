import {Link} from "react-router-dom";

function NavBar() {

    return (
        <>
            {/* Arrive pas a faire hover couleur images peut etre faut utiliser vecteurs et pas png. peut etre ca aussi fix mon probleeme de tailles*/}
            <nav className="flex items-center justify-between  px-2.5 pr-6 border-b">
                <ul className="flex items-center gap-1">
                    <li>
                        <Link to="/">
                            <img src="/MontrealLogo.png" alt="Montreal Logo" className="h-26" />
                        </Link>
                    </li>

                    <li><img src="/bgSep.png" alt="Separator" className="h-9" /></li>

                    <li>
                        <Link to="/openmenuburger" className="flex items-center gap-2">
                            <img src="/menuBurg.png" alt="menu burg icon" className="h-7" />
                            <span className="hover:text-emerald-400">Menu</span>
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li>
                        <Link to="/search" className="flex items-center gap-2">
                            <img src="/searchIcon.png" alt="Search Icon" className="h-7" />
                            <span className="hover:text-emerald-400">Search</span>
                        </Link>
                    </li>

                    <li><img src="/bgSep.png" alt="Image Separator" className="h-9"/></li>

                    <li>
                        <Link to="/logIn"  className="flex items-center gap-2">
                            <img src="/AccIcon.png" alt="Account Icon" className="h-5"></img>
                            <span className="hover:text-emerald-400">Account</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;