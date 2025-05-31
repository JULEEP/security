import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminLayout from "./Layout/AdminLayout.jsx";
import ProjectList from "./Pages/ProjectList.js";
import ClientList from "./Pages/ClientList.js";
import InvoiceList from "./Pages/InvoiceList.js";
import ProposalList from "./Pages/ProposalList.js";
import TeamList from "./Pages/TeamList.js";
import ReportsList from "./Pages/ReportsList.js";
import SettingsPage from "./Pages/SettingsPage.js";
import Dashboard from './Pages/Dashboard.jsx'
import LoginPage from "./Pages/Login.js";
import MainDashboard from "./Pages/MainDashboard.js";
import ClientLayout from "./Layout/ClientLayout.js";
import ClientDashboard from "./Client/ClientDashboard.js";
import MyProjects from "./Client/MyProjects.js";
import MyInvoiceList from "./Client/MyInvoiceList.js";
import ClientSettings from "./Client/ClientSettings.js";
import NewClientList from "./Pages/NewClientList.js";
import Reports from "./Pages/Reports.js";
// import ProjectDetailsPage from "./Pages/ProjectDetails.js";
import ClientDetails from "./Pages/ClientDetails.js";
import ClientInvoice from "./Pages/ClientInvoice.js";



function App() {
  return (
    <Routes>
      {/* Login page rendered outside AdminLayout */}
      <Route path="/" element={<LoginPage />} />

      {/* All other routes inside AdminLayout */}
      <Route
        path="/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/projectlist" element={<ProjectList />} />
              <Route path="/clientlist" element={<NewClientList />} />
              <Route path="/invoicelist" element={<InvoiceList />} />
              <Route path="/proposallist" element={<ProposalList />} />
              <Route path="/teamlist" element={<TeamList />} />
              <Route path="/reportslist" element={<ReportsList />} />
              <Route path="/setting" element={<SettingsPage />} />
              <Route path="/dashboard" element={<MainDashboard/>}/>
              <Route path="/newclientlist" element={<NewClientList/>} />
              <Route path="/reports" element={<Reports/>}/>
              {/* <Route path="/projectdetails" element={<ProjectDetailsPage/>}/> */}
              {/* <Route path="/clientdetails" element={<ClientDetails/>}/> */}
              {/* <Route path="/clientinvoice" element={<ClientInvoice/>}/> */}
            </Routes>
          </AdminLayout>
        }
      />


       {/* Client Routes */}
       <Route
       path="/client/*"
       element={
         <ClientLayout>
           <Routes>
             <Route path="dashboard" element={<ClientDashboard />} />
             <Route path="myprojects" element={<MyProjects />} />
             <Route path="myinvoice" element={<MyInvoiceList />} />
             <Route path="setting" element={<ClientSettings />} />
           </Routes>
         </ClientLayout>
       }
     />
    </Routes>
  );
}

export default App;