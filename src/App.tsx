import './index.css'
import NavBar from "./components/NavBar.tsx";
import {useState} from "react";

function App() {
    type nouvelle = {
        id: number;
        name: string;
        text: string
    };

    const [nouvelleList, setNouvelleList] = useState<nouvelle[]>([
        {id: 1, name: "Notice 1", text: "This is the first notice."},
        {id: 2, name: "Notice 2", text: "This is the second notice."},
        {id: 3, name: "Notice 3", text: "This is the third notice."},
        {id: 4, name: "Notice 4", text: "This is the fourth notice."},
        {id: 5, name: "Notice 5", text: "This is the fifth notice."}
    ]);

    return (
        <>
            <NavBar/>

            {/* search part*/} {/* a faire en component*/}
            <div className="bg-neutral-700 py-8">
                <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                    <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
                    <h3 className="text-[15px]">Find a notice</h3>
                    <div
                        className="flex items-center border-double border-2 border-cyan-600 rounded-full px-3 py-2 w-full max-w-md bg-neutral-700">
                        <img src="/searchIcon.png" alt="Search" className="h-7 w-7 mr-3"/>
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
            <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                <div className="px-1 py-4 border-b flex flex-row-3">
                    <button className="button-sec3-style" onClick={() => console.log("button 1 clicked")}>Borough
                    </button>
                    <button className="button-sec3-style mx-4" onClick={() => console.log("button 2 clicked")}>Date
                    </button>
                    <button className="button-sec3-style" onClick={() => console.log("button 3 clicked")}>Topic</button>
                </div>

                {/* grid for news and newsletter */} {/* a faire en component*/}
                <div className="flex flex-row justify-between ">

                    <div className="">
                        <ul className="">
                            {
                                nouvelleList.map((n, i) =>
                                    <li key={i} className="border-t border-neutral-600 p-4">
                                        <a href={`/nouvelle/${i}`}
                                           className="block hover:bg-neutral-600 transition-colors rounded-lg p-4">
                                            <div className="flex flex-col gap-y-2">
                                                <h2 className="text-base font-semibold text-white leading-snug">
                                                    {n.name}
                                                </h2>
                                                <p className="text-sm text-neutral-300">{n.text}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="block w-[350px] h-[150px]  rounded-lg shadow-sm bg-gray-800 p-6">
                        <h1>Subscribe to alerts</h1>
                        <p>To receive notices and alerts by e-mail or text message, you must create an account.</p>
                        <a href="/subcriptionLink"
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Subscribe
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/*  Footer  */}
            <footer className="bg-neutral-700">
                <div className="bg-gray-800 flex flex-col max-w-screen-xl mx-auto px-4">
                    <h1 className="text-[26px] font-bold">Footer</h1>
                    <h3 className="text-[15px]">TO DO</h3>
                    <h3 className="text-[15px]">TO DO 4rows, image separators, r1: flex-end? r2: 6cols r3: 4cols r4: pareil que comme jai fait pour navbar</h3>
                </div>
            </footer>
        </>
    )
}

export default App
