import { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md"; // Vendor related icon (could be for products/orders)
import { RiMenu2Line, RiMenu3Line, RiFullscreenLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed (npm install axios)

const Navbar = ({ setIsCollapsed, isCollapsed }) => {
  const navigate = useNavigate();

  // State to store counts
  const [productRequests, setProductRequests] = useState(0);
  const [orderRequests, setOrderRequests] = useState(0);

  // Fetch counts from API on component mount
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("https://your-api-endpoint.com/api/vendor/getcount");
        setProductRequests(response.data.totalProductRequests || 0);
        setOrderRequests(response.data.totalOrderRequests || 0);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const handleProductClick = () => {
    navigate("/vendor/productlist");
  };

  const handleOrderClick = () => {
    navigate("/vendor/orderlist");
  };

  return (
    <nav className="bg-[#FFFFFF] text-black sticky top-0 w-full p-4 flex items-center shadow-lg z-50">
      <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2">
        {isCollapsed ? (
          <RiMenu2Line className="text-2xl text-[#AAAAAA]" />
        ) : (
          <RiMenu3Line className="text-2xl text-[#AAAAAA]" />
        )}
      </button>

      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 ml-4">
        </div>

        <div className="flex gap-3 items-center">
          <button className="px-2 py-1 rounded-full bg-[#F8FAF8] cursor-pointer hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300">
            <RiFullscreenLine />
          </button>

          <div className="flex flex-col justify-center items-center">
            {/* Replaced the company logo with the new vendor image */}
            <img
              className="rounded-full w-[3vw]"
              src="https://static.vecteezy.com/system/resources/previews/006/584/841/original/illustration-graphic-cartoon-character-of-cyber-security-vector.jpg"
              alt="Admin Logo"
            />
            <h1 className="text-xs">Security</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
