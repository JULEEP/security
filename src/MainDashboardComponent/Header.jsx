import { FaSearch } from "react-icons/fa";
import { FiBell, FiHelpCircle, FiUser } from 'react-icons/fi';

import { useState } from "react";
const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="h-18 bg-white fixed left-0 right-0 top-0 z-50 flex justify-between px-10 items-center gap-3">
      <div className="relative" style={{ width: "300px" }} >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className=" text-xl border text-gray-600 w-full px-10 py-2 my-2 rounded-lg focus:outline-none focus:ring-0 bg-gray-50"
        />
        <FaSearch className=" text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
      </div>

      <div className="flex gap-12 items-center">
          <FiHelpCircle className="size-6"/>
          <FiBell className=" size-6"/>
        
        <img
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="Amanda"
          className="w-10 h-10 rounded-full"
        />
        

      </div>
    </div>
  );
};
export default Header;
