import React from 'react';

const Search = ({ className, placeholder }) => {
  return (
    <div
      className={
        'pl-4 pr-0 flex items-center bg-gray-100 rounded-md overflow-hidden w-[500px] border-[1px] border-gray-300 ' +
        className
      }
    >
      <img src="/assets/icons/searchIcon.png" alt="Search Icon" />
      <input
        type="search"
        name="search"
        placeholder={placeholder}
        className="bg-inherit p-2 outline-0 block w-full  placeholder:text-gray-500 text-xs"
      />
    </div>
  );
};

export default Search;
