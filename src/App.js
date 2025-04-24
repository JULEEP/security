import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";

import Proposals from "./Pages/Proposals";
import ReportDashboard from "./Pages/ReportDashboard";
import EmployeeSignup from "./Pages/EmployeeSignup";
import EmployeeLogin from "./Pages/EmployeeLogin";
import ProjectDashboard from "./Dashboard/ProjectDashboard";
import AdminSignup from "./Pages/AdminSignup";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Dashboard is now the default route */}
        <Route path="/" element={<ReportDashboard />} />
        <Route path="/dashboard" element={<ReportDashboard />} />
        <Route path="/ClientSidebar" element={<ClientsideSidebar />} />
        <Route path="/EmployeeSignup" element={<EmployeeSignup />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/projectDashboard" element={<ProjectDashboard />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
