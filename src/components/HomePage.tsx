import { useState } from "react";
import { nouvelleList as initialList, Nouvelle } from "../data.ts";
import {Link} from "react-router-dom";

function HomePage() {
    const [nouvelleList, setNouvelleList] = useState<Nouvelle[]>(initialList);
    const [filteredList, setFilteredList] = useState<Nouvelle[]>(initialList);

    return (
        <>
            <div className="bg-neutral-700 py-8">
                <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                    <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
                    <h3 className="text-[15px]">Find a notice</h3>
                    <div className="flex items-center border-double border-2 border-cyan-600 rounded-full px-3 py-2 w-full max-w-md bg-neutral-700">
                        <img src="/searchIcon.png" alt="Search" className="h-7 w-7 mr-3"/>
                        <input
                            className="w-full bg-transparent outline-none text-white placeholder-neutral-400"
                            placeholder="What are you looking for?"
                            type="text"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                <div className="px-1 py-4 border-b flex flex-row-3">
                    <button className="button-sec3-style">Borough</button>
                    <button className="button-sec3-style mx-4">Date</button>
                    <button className="button-sec3-style">Topic</button>
                </div>

                <div className="flex flex-row gap-6 mt-1">
                    <div className="w-3/4">
                        <ul className="p-2">
                            {initialList.map((n, i) => (
                                <Link to={`/nouvelle/${i}`} className="block hover:bg-neutral-600 transition-colors p-4 max-w-full border-b-1">
                                    <div className="flex flex-col gap-y-2">
                                        <h2 className="text-base font-semibold text-white leading-snug">
                                            {n.name}
                                        </h2>
                                        <p className="text-sm text-neutral-300">{n.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>


                    {/*En mobile mode jaimerais envoyer le subscribe bouton en bas a la place de a droite */}
                    <div className="w-1/4 block max-w-screen-xl mx-auto max-h-60 rounded-lg shadow-sm bg-gray-800 p-6 ">
                        <div className="">
                            <h1>Subscribe to alerts</h1>
                            <p>To receive notices and alerts by e-mail or text message, you must create an account.</p>
                            <Link to="/subcriptionLink" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Subscribe
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
