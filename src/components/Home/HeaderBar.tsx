import React from "react";

interface Props {
    searchQuery: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderBar: React.FC<Props> = ({ searchQuery, onSearch }) => (
    <div className="bg-neutral-700 py-8">
        <div className="flex flex-col max-w-screen-xl mx-auto px-4 gap-y-5">
            <h1 className="text-[26px] font-bold">Notices and Alerts</h1>
            <h3 className="text-[15px]">Find a notice</h3>
            <div className="flex items-center border-double border-2 border-cyan-600 rounded-full px-3 py-2 w-full max-w-md bg-neutral-700">
                <img src="/icons/searchIcon.png" alt="Search" className="h-7 w-7 mr-3" />
                <input
                    className="w-full bg-transparent outline-none text-white placeholder-neutral-400"
                    placeholder="What are you looking for?"
                    type="text"
                    value={searchQuery}
                    onChange={onSearch}
                />
            </div>
        </div>
    </div>
);

export default HeaderBar;