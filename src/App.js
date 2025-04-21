import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
<<<<<<< HEAD
import ProposalsPage from "./Pages/ProposalsPage";
=======
import  EmployeeSignup from   "./Pages/EmployeeSignup";
import  EmployeeLogin  from "./Pages/EmployeeLogin";
import ProjectDashboard from './components/ProjectDashborad';

>>>>>>> origin/master
function App() {
  return (
  
    <Router>
    <Routes>
            <Route path="/ClientSidebar" element={<ClientsideSidebar/>} />
<<<<<<< HEAD
            <Route path="/proposalspage" element={<ProposalsPage/>}/>
=======
            <Route path="/EmployeeSignup" element={<EmployeeSignup/>} />
            <Route path="/EmployeeLogin" element={<EmployeeLogin/>} />
>>>>>>> origin/master
      </Routes>
    </Router>

<ProjectDashboard/>
  );
}

export default App;
