import { useState, useEffect } from "react";
import ClientNavbar from "../Components/ClientNavbar";
import ClientSidebar from "../Components/ClientSidebar";

export default function ClientLayout({ children }) {
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
      <ClientSidebar isCollapsed={isCollapsed} isMobile={isMobile} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <ClientNavbar setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        <div className="p-4 overflow-y-scroll no-scrollbar bg-[#EFF0F1]">{children}</div>
      </div>
    </div>
  );
}
