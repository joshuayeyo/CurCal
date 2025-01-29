"use client"
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="relative w-full">
                <input 
                    type="text" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="환전을 원하시는 금액을 입력하세요." 
                    className="h-[75px] w-full bg-[#30282B] text-xs text-[#F5E6E9] placeholder-[#9A8589] border border-[#D4C2C7] p-2 pr-10 focus:outline-none" 
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button onClick={handleSubmit}>
                    <SearchIcon sx={{ color: "#E3E3E3" }} />
                </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;