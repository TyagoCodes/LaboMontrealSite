import './index.css'

function App() {


    return (
        <>
        {/* top nav bar*/}  {/* a faire en component*/}
        {/* NavBar trop grand arrive pas a faire plus petit.... pense que cest a cause de taille de mes images*/}
        {/* Trucs bizzarres blanc top left and right jsp pk a fix...*/}
        <nav className="flex items-center justify-between  bg-neutral-800 text-white px-8  border-b">
            <ul className="flex items-center gap-4">
                <li>
                    <a href="/">
                        <img src="/MontrealLogo.png" alt="Montreal Logo" className="h-26" />
                    </a>
                </li>

                <li><img src="/bgSep.png" alt="Separator" className="h-9" /></li>

                {/* Eventuellement menu burger ici */}
            </ul>

            <ul className="flex items-center gap-4">
                <li>
                    <a href="/search" className="flex items-center gap-2">
                        <img src="/searchIcon.png" alt="Search Icon" className="h-7" />
                        <span>Search</span>
                    </a>
                </li>

                <li><img src="/bgSep.png" alt="Image Separator" className="h-9"/></li>

                <li>
                    <a href="/logIn"  className="flex items-center gap-2">
                        <img src="/AccIcon.png" alt="Account Icon" className="h-5"></img>
                        <span>Account</span>
                    </a>
                </li>
            </ul>
        </nav>
        {/* search part*/} {/* a faire en component*/}
        {/* filter part*/} {/* a faire en component*/}
        {/* grid for news and newsletter */} {/* a faire en component*/}
        </>
    )
}

export default App
