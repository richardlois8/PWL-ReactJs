import { useState } from "react";

export const SearchBar = ({ onClick }) => {
    const [query, setQuery] = useState();

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Product"
            />

            <button 
            onClick={() => onClick(query)}
            className="btn btn-outline-secondary">
                Search
            </button>
        </div>
    );
};