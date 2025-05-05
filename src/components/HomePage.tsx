import {useState} from "react";
import {nouvelleList as initialList, Nouvelle} from "../data.ts";
import {Link} from "react-router-dom";
import * as React from "react";
import dayjs from "dayjs"

function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBoroughs, setSelectedBoroughs] = useState<string[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredList, setFilteredList] = useState<Nouvelle[]>(initialList);
    const [boroughDropdownOpen, setBoroughDropdownOpen] = useState(false);
    const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);
    const [dateError, setDateError] = useState('');

    const allBoroughs = Array.from(new Set(initialList.map(n => n.borough)));
    const allTopics = Array.from(new Set(initialList.map(n => n.topic)));

    const applyFilters = (
        search: string,
        boroughs: string[],
        topics: string[],
        from: string,
        to: string
    ) => {
        let filtered = initialList;

        if (search) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (boroughs.length > 0) {
            filtered = filtered.filter((item) =>
                boroughs.includes(item.borough)
            );
        }

        if (topics.length > 0) {
            filtered = filtered.filter((item) =>
                topics.includes(item.topic)
            );
        }

        if (from && to) {
            const start = dayjs(from);
            const end = dayjs(to);

            if (start.isAfter(end)) {
                setDateError("Error!!: 'From' date is after 'To' date.");
                return;
            } else {
                setDateError('');

                filtered = filtered.filter((item) => {
                    const itemDate = dayjs(item.date);
                    return (
                        itemDate.isAfter(start.subtract(1, 'day')) &&
                        itemDate.isBefore(end.add(1, 'day'))
                    );
                });
            }
        }

        setFilteredList(filtered);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        applyFilters(value, selectedBoroughs, selectedTopics, startDate, endDate);
    };

    const toggleBorough = (borough: string) => {
        const updated = selectedBoroughs.includes(borough)
            ? selectedBoroughs.filter((b) => b !== borough)
            : [...selectedBoroughs, borough];
        setSelectedBoroughs(updated);
        applyFilters(searchQuery, updated, selectedTopics, startDate, endDate);
    };

    const toggleTopic = (topic: string) => {
        const updated = selectedTopics.includes(topic)
            ? selectedTopics.filter((t) => t !== topic)
            : [...selectedTopics, topic];
        setSelectedTopics(updated);
        applyFilters(searchQuery, selectedBoroughs, updated, startDate, endDate);
    };

    const handleDateChange = (from: string, to: string) => {
        setStartDate(from);
        setEndDate(to);
        applyFilters(searchQuery, selectedBoroughs, selectedTopics, from, to);
    };

    return (
        <>
            <div className="bg-neutral-700 py-8">
                <div className="flex flex-col max-w-screen-xl mx-auto px-4 gap-y-5">
                    <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
                    <h3 className="text-[15px]">Find a notice</h3>
                    <div
                        className="flex items-center border-double border-2 border-cyan-600 rounded-full px-3 py-2 w-full max-w-md bg-neutral-700">
                        <img src="/icons/searchIcon.png" alt="Search" className="h-7 w-7 mr-3"/>
                        <input
                            className="w-full bg-transparent outline-none text-white placeholder-neutral-400"
                            placeholder="What are you looking for?"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-screen-xl mx-auto px-4">
                <div className="px-1 py-4 border-b flex flex-wrap gap-3 relative">

                    <div className="relative">
                        <button
                            onClick={() => setBoroughDropdownOpen(!boroughDropdownOpen)}
                            className="button-sec3-style">
                            Borough
                        </button>
                        {boroughDropdownOpen && (
                            <div className="absolute z-10 bg-white text-black rounded shadow mt-2 p-2 w-60">
                                {allBoroughs.map((b) => (
                                    <label key={b} className="flex items-center gap-2 py-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedBoroughs.includes(b)}
                                            onChange={() => toggleBorough(b)}
                                        />
                                        {b}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
                            className="button-sec3-style"
                        >
                            Topic
                        </button>
                        {topicDropdownOpen && (
                            <div className="absolute z-10 bg-white text-black rounded shadow mt-2 p-2 w-60">
                                {allTopics.map((t) => (
                                    <label key={t} className="flex items-center gap-2 py-1">
                                        <input
                                            type="checkbox"
                                            checked={selectedTopics.includes(t)}
                                            onChange={() => toggleTopic(t)}
                                        />
                                        {t}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => handleDateChange(e.target.value, endDate)}
                        className="px-2 py-1 border rounded text-sm border-cyan-600 bg-neutral-700"
                    />

                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => handleDateChange(startDate, e.target.value)}
                        className="px-2 py-1 border rounded text-sm border-cyan-600 bg-neutral-700"
                    />

                    <button
                        className="button-sec3-style"
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedBoroughs([]);
                            setSelectedTopics([]);
                            setStartDate('');
                            setEndDate('');
                            setFilteredList(initialList);
                        }}
                    >
                        Reset
                    </button>
                </div>

                <div className="flex flex-row gap-6 mt-1">
                    <div className="w-3/4">
                        <div>
                            <h1 className="text-xl text-amber-50 font-extrabold">Notices</h1>
                            {dateError && (
                                <div className="text-red-500 text-sm">{dateError}</div>
                            )}
                        </div>
                        <ul className="p-2">
                            {filteredList.map((n, i) => (
                                <Link to={`/nouvelle/${i}`}
                                    className="block hover:bg-neutral-600 transition-colors p-4 max-w-full border-b border-neutral-700 rounded-md">
                                    <div className="flex flex-col gap-y-2">
                                        <h2 className="text-base font-semibold text-white leading-snug">
                                            {n.name}
                                            <span className="ml-2 text-sm text-red-500">{n.borough}</span>
                                        </h2>
                                        <div className="flex flex-col gap-y-2 text-sm text-neutral-300">
                                            <span
                                                className="self-start border border-red-400 text-red-400 rounded-full px-3 py-0.5 text-xs font-medium">
                                                {n.topic}
                                            </span>
                                            <span>{n.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="w-1/4 block max-w-screen-xl mx-auto max-h-60 rounded-lg shadow-sm bg-gray-800 p-6 ">
                        <div className="flex flex-col max-w-screen-xl mx-auto px-4 gap-y-5">
                            <h1 className="text-xl text-amber-50 font-extrabold">Subscribe to alerts</h1>
                            <p className="text-s">To receive notices and alerts by e-mail or text message, you must
                                create an account.</p>
                            <Link to="/subcriptionLink"
                                  className="inline-flex items-center px-3 py-2 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Subscribe
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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