import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
import  EmployeeSignup from   "./Pages/EmployeeSignup";
import  EmployeeLogin  from "./Pages/EmployeeLogin";
import ProjectDashboard from './components/ProjectDashborad';
import ProposalsPage from "./Pages/ProposalPage";

function App() {
  return (
  
    <Router>
    <Routes>
            <Route path="/ClientSidebar" element={<ClientsideSidebar/>} />
            <Route path="/EmployeeSignup" element={<EmployeeSignup/>} />
            <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
            <Route path ="/proposalpage" element={<ProposalsPage/>}/> 
      </Routes>
    </Router>

 <ProjectDashboard/> 

);
}

export default App;
