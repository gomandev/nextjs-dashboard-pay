import React from "react";
import searchInterface from "../../interface/searchbar";
const Searchbar: React.FC<searchInterface> = ({ placeholder }) => {
  return (
    <div className="rounded-full  bg-white px-3 py-1 flex flex-row items-center space-x-1">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        className="text-sm focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
