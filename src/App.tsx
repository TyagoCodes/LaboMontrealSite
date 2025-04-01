import './index.css'

function App() {


    return (
        <>
        {/* top nav bar*/}
        <nav className="flex items-center justify-between  bg-neutral-800 text-white p-2 border-1">
            <a href="/">
                <img src="/MontrealLogo.png" alt="Montreal Logo" className="h-18" />
            </a>
            <ul className="flex gap-6">
                <li><a href="/about">About</a></li>
                <img src="/bgSep.png" alt="Image Separator" className="h-7"/>
                <img src="/AccIcon.png" alt="Account Icon" className="h-7"></img>
            </ul>
        </nav>
        {/* search part*/}
        {/* filter part*/}
        {/* grid for news and newsletter */}
        </>
    )
}

export default App
