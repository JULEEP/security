import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
import  EmployeeSignup from   "./Pages/EmployeeSignup";
import  EmployeeLogin  from "./Pages/EmployeeLogin";
import ProjectDashboard from './components/ProjectDashborad';

function App() {
  return (
  
    <Router>
    <Routes>
            <Route path="/ClientSidebar" element={<ClientsideSidebar/>} />
            <Route path="/EmployeeSignup" element={<EmployeeSignup/>} />
            <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
      </Routes>
    </Router>

<ProjectDashboard/>
  );
}

export default App;
