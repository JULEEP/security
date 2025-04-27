import { useState, useEffect, Children } from "react";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function AdminLayout({children}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} isMobile={isMobile} setIsCollapsed={setIsCollapsed}/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
       <Navbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}/>
        <div className="p-4 overflow-y-scroll no-scrollbar bg-[#EFF0F1]">{children}</div>
      </div>
    </div>
  );
}
