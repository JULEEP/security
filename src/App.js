import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
import EmployeeSignup from "./Pages/EmployeeSignup";
import EmployeeLogin from "./Pages/EmployeeLogin";
import Proposals from "./Pages/Proposals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Proposals />} /> {/* default route */}
        <Route path="/ClientSidebar" element={<ClientsideSidebar />} />
        <Route path="/EmployeeSignup" element={<EmployeeSignup />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
        <Route path="/proposals" element={<Proposals />} />
      </Routes>
    </Router>
  );
}

export default App;
