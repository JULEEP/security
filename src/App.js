import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminLayout from "./Layout/AdminLayout.jsx";
import ProjectList from "./Pages/ProjectList.js";
// import ClientList from "./Pages/ClientList.js";
import InvoiceList from "./Pages/InvoiceList.js";
import ProposalList from "./Pages/ProposalList.js";
import TeamList from "./Pages/TeamList.js";
import ReportsList from "./Pages/ReportsList.js";
import SettingsPage from "./Pages/SettingsPage.js";
import Dashboard from './Pages/Dashboard.jsx'
import LoginPage from "./Pages/Login.js";
import MainDashboard from "./Pages/MainDashboard.js";
import ClientLayout from "./Layout/ClientLayout.js";
import ClientDashboard1 from "./Client/ClientDashboard1.js";
import MyProjects from "./Client/MyProjects.js";
import MyInvoiceList from "./Client/MyInvoiceList.js";
import ClientSettings from "./Client/ClientSettings.js";
import NewClientList from "./Pages/NewClientList.js";
import Reports from "./Pages/Reports.js";
import ProposalModal from "./Pages/Editproposal.js";
import InvoiceModal from "./Pages/EditInvoice.js";
import InvoicePage from "./Pages/InvoicePage.js";
import Signup from "./Client/ClientSignUp.js";
import Login from "./Client/ClientLogin.js";
import ChatUI from "./Pages/ChatUI.js";
import MilestoneFlow from "./Pages/Milestone.js";
import  Portfolio  from "./Pages/Portfolio.js";
import RegisterPage from "./Pages/Register.js";
import ClientProposals from "./Client/ClientProposals.js";
import ProfileForm from "./Pages/Profile.js";



function App() {      
  return (
    <Routes>
      {/* Login page rendered outside AdminLayout */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>}/>
       <Route path="/client" element={<Signup />} />
       <Route path="/client/login" element={<Login/>}/>

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
              <Route path="/setting" element={<SettingsPage />} />
              <Route path="/dashboard" element={<MainDashboard/>}/>
              <Route path="/newclientlist" element={<NewClientList/>} />
              <Route path="/reportlist" element={<Reports/>}/>
              <Route path="/proposaledit" element={<ProposalModal/>}/>
              <Route path="/editinvoice" element={<InvoiceModal/>}/>
              <Route path="invoicepage" element={<InvoicePage/>}/>
              <Route path="/chats" element={<ChatUI/>}/>
              <Route path="/milestone" element= {<MilestoneFlow/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/profile" element={<ProfileForm/>}/>
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
             <Route path="dashboard" element={<ClientDashboard1 />} />
             <Route path="myprojects" element={<MyProjects />} />
             <Route path="myinvoice" element={<MyInvoiceList />} />
             <Route path="setting" element={<ClientSettings />} />
             <Route path="proposallist" element={<ClientProposals/>}/>
           </Routes>
         </ClientLayout>
       }
     />
    </Routes>
  );
}

export default App;