import React from "react";

interface Props {
    searchQuery: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters: React.FC<Props> = ({ searchQuery, onSearch }) => {
    return (
        <div className="my-4">
            <input
                type="text"
                value={searchQuery}
                onChange={onSearch}
                placeholder="Rechercher un avis..."
                className="border px-2 py-1 w-full rounded"
            />
        </div>
    );
};

export default Filters;