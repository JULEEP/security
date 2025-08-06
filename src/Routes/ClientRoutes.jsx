// src/routes/ClientRoutes.jsx
import { Routes, Route } from "react-router-dom";
import ClientLayout from "../Layout/ClientLayout";
import ProposalList from "../Pages/client/proposal/ProposalList";
import Dashboard from "../Pages/client/Dashboard";
import ProjectsList from "../Pages/client/project/ProjectList";
import InvoiceList from "../Pages/client/invoice/InvoiceList";
import Settings from "../Pages/client/settings/Settings";

export default function ClientRoutes() {
  return (
    <ClientLayout>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="myprojects" element={<ProjectsList />} />
        <Route path="myinvoice" element={<InvoiceList />} />
        <Route path="setting" element={<Settings />} />
        <Route path="proposallist" element={<ProposalList />} />
      </Routes>
    </ClientLayout>
  );
}
