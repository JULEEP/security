import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
import  EmployeeSignup from   "./Pages/EmployeeSignup";
import  EmployeeLogin  from "./Pages/EmployeeLogin";
import ProjectDashboard from "./Dashboard/ProjectDashborad";
import AdminSignup from "./Pages/AdminSignup";
import AdminLogin from "./Pages/AdminLogin";
import ClientDashboard from "./Pages/ClientDashboard";
import ClientUI from "./Pages/ClientUI";
function App() {
  return (
  
    <Router>
    <Routes>
            <Route path="/ClientSidebar" element={<ClientsideSidebar/>} />
            <Route path="/EmployeeSignup" element={<EmployeeSignup/>} />
            <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
            <Route path="/projectDashboard" element={< ProjectDashboard/>} />
            <Route path="/AdminSignup" element={<AdminSignup/>} />
            <Route path="/AdminLogin" element={<AdminLogin/>} />
            <Route path="/ClientDashboard" element={<ClientDashboard/>} />
            <Route path="/ClientUI" element={<ClientUI/>} />
      </Routes>
    </Router>


 

);
}

export default App;
