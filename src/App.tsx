import './index.css'
import NavBar from "./components/NavBar.tsx";

function App() {


    return (
        <>
            <NavBar/>
            {/* search part*/} {/* a faire en component*/}
            <div className="bg-neutral-700 py-8 px-26">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
                    <h3 className="text-[15px]">Find a notice</h3>
                    <div className="flex items-center border-double border-2 border-cyan-600 rounded-full px-4 py-2 w-full max-w-md bg-neutral-700">
                        <img src="/searchIcon.png" alt="Search" className="h-5 w-5 mr-3" />
                        <input
                            className="w-full bg-transparent outline-none text-white placeholder-neutral-400"
                            placeholder="What are you looking for?"
                            type="text"
                        />
                        {/* dans input mettre un on change envoie data a une copie du og array qui vas filter et vas montrer juste le search */}
                    </div>
                </div>
            </div>
            {/* filter part*/} {/* a faire en component*/}
            <div className="px-10 py-2 border-b flex flex-row-3">
                <button className="button-sec3-style" onClick={() => console.log("button 1 clicked")}>Borough</button>
                <button className="button-sec3-style mx-4" onClick={() => console.log("button 2 clicked")}>Date</button>
                <button className="button-sec3-style" onClick={() => console.log("button 3 clicked")}>Topic</button>
            </div>
            {/* grid for news and newsletter */} {/* a faire en component*/}
            {/*  Footer  */}
        </>
    )
}

export default App
