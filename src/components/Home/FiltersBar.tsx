import React from "react";

interface Props {
    allBoroughs: string[];
    allTopics: string[];
    selectedBoroughs: string[];
    selectedTopics: string[];
    boroughDropdownOpen: boolean;
    topicDropdownOpen: boolean;
    toggleBoroughDropdown: () => void;
    toggleTopicDropdown: () => void;
    toggleBorough: (b: string) => void;
    toggleTopic: (t: string) => void;
    startDate: string;
    endDate: string;
    onDateChange: (from: string, to: string) => void;
    onReset: () => void;
}

const FiltersBar: React.FC<Props> = ({
                                         allBoroughs,
                                         allTopics,
                                         selectedBoroughs,
                                         selectedTopics,
                                         boroughDropdownOpen,
                                         topicDropdownOpen,
                                         toggleBoroughDropdown,
                                         toggleTopicDropdown,
                                         toggleBorough,
                                         toggleTopic,
                                         startDate,
                                         endDate,
                                         onDateChange,
                                         onReset
                                     }) => (
    <div className="px-1 py-4 border-b flex flex-wrap gap-3 relative">
        <div className="relative">
            <button onClick={toggleBoroughDropdown} className="button-sec3-style">Borough</button>
            {boroughDropdownOpen && (
                <div className="absolute z-10 bg-white text-black rounded shadow mt-2 p-2 w-60">
                    {allBoroughs.map((b) => (
                        <label key={b} className="flex items-center gap-2 py-1">
                            <input type="checkbox" checked={selectedBoroughs.includes(b)} onChange={() => toggleBorough(b)} />
                            {b}
                        </label>
                    ))}
                </div>
            )}
        </div>

        <div className="relative">
            <button onClick={toggleTopicDropdown} className="button-sec3-style">Topic</button>
            {topicDropdownOpen && (
                <div className="absolute z-10 bg-white text-black rounded shadow mt-2 p-2 w-60">
                    {allTopics.map((t) => (
                        <label key={t} className="flex items-center gap-2 py-1">
                            <input type="checkbox" checked={selectedTopics.includes(t)} onChange={() => toggleTopic(t)} />
                            {t}
                        </label>
                    ))}
                </div>
            )}
        </div>

        <input
            type="date"
            value={startDate}
            onChange={(e) => onDateChange(e.target.value, endDate)}
            className="px-2 py-1 border rounded text-sm border-cyan-600 bg-neutral-700"
        />
        <input
            type="date"
            value={endDate}
            onChange={(e) => onDateChange(startDate, e.target.value)}
            className="px-2 py-1 border rounded text-sm border-cyan-600 bg-neutral-700"
        />

        <button className="button-sec3-style" onClick={onReset}>Reset</button>
    </div>
);

export default FiltersBar;