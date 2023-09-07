import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="text-xs grow text-white border border-yellow-400 rounded py-3 px-4 focus:outline-none bg-[#120f10] md:text-sm "
      id="username"
      type="text"
      name="username"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Type Something here..."
    />
  );
};

export default SearchBar;
