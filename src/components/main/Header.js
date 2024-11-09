import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-black text-white font-merriweather relative">
      <div className="flex justify-between items-center w-4/5 mx-auto py-4">
        <div>
          <h1 className=" text-xl">Portfolio</h1>
        </div>

        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </header>
  );
};

export default Header;
