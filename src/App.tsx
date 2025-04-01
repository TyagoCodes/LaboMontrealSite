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
            <div className="bg-neutral-700 py-8 px-26">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
                    <h3 className="text-[15px]">Find a notice</h3>
                    <div
                        className="flex items-center border-double border-2 border-cyan-600 rounded-full px-4 py-2 w-full max-w-md bg-neutral-700">
                        <img src="/searchIcon.png" alt="Search" className="h-5 w-5 mr-3"/>
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
            <div>
                <ul>
                    {
                        nouvelleList.map((n, i) =>
                            <li key={i} className="border-t border-neutral-600 py-4">
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
            {/*  Footer  */}
        </>
    )
}

export default App
