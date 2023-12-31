import { useState } from "react";

const Search = ({ keywordOnChange }) => {
  const [keyword, setKeyword] = useState("");

  const searchKeywordButton = () => {
    keywordOnChange(keyword);
  };

  return (
    <div className="form-control gap-5 pl-2 sm:pl-10">
      <h1 className="text-2xl font-semibold text-center text-black">
        Search a product:
      </h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered bg-white rounded-2 border-black text-black"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <button
          onClick={searchKeywordButton}
          className="btn btn-square bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              color="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
