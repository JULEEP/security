import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ClientsideSidebar from "./Pages/ClientsideSidebar";
import ProposalsPage from "./Pages/ProposalsPage";
function App() {
  return (
    <Router>
    <Routes>
            <Route path="/ClientSidebar" element={<ClientsideSidebar/>} />
            <Route path="/proposalspage" element={<ProposalsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
