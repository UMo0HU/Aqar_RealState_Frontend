import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import SearchIcon from "@/assets/Search.svg";

interface Props {
  onSearch?:    (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search by city or location…" }: Props) => {
  const [query, setQuery] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value === "") onSearch?.("");
  };

  return (
    <form onSubmit={submit} className="w-5/6 sm:w-1/2 md:w-5/12 bg-white md:mb-10 mb-10 rounded-xl shadow-lg">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src={SearchIcon} alt="search" className="w-5 opacity-50" />
        </div>
        <input
          type="search"
          value={query}
          onChange={change}
          placeholder={placeholder}
          className="block w-full p-4 ps-10 text-sm outline-none rounded-xl text-gray-800"
        />
        <button
          type="submit"
          className="absolute end-1.5 bottom-2.5 text-white bg-dark-knight font-semibold rounded-lg text-sm px-3.5 py-1.5 cursor-pointer hover:opacity-90 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;