// src/routes/AdminRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import ProjectList from "../Pages/freelancer/projects/ProjectList";
import ClientList from "../Pages/freelancer/clients/ClientList";
import InvoiceList from "../Pages/freelancer/invoices/InvoiceList";
import ProposalList from "../Pages/freelancer/proposals/ProposalList";
import TeamList from "../Pages/freelancer/teams/TeamList";
import SettingsPage from "../Pages/freelancer/settings/Settings";
import Dashboard from "../Pages/freelancer/Dashboard";
import Reports from "../Pages/freelancer/reports/Report";
import ChatUI from "../Pages/freelancer/chat/ChatUI";
import Milestone from "../Pages/freelancer/milestone/Milestone";
import Portfolio from "../Pages/freelancer/portfolio/Portfolio";
import ProfileForm from "../Pages/freelancer/profile/ProfileForm";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/clientlist" element={<ClientList />} />
        <Route path="/invoicelist" element={<InvoiceList />} />
        <Route path="/proposallist" element={<ProposalList />} />
        <Route path="/teamlist" element={<TeamList />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reportlist" element={<Reports />} />
        <Route path="/chats" element={<ChatUI />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </AdminLayout>
  );
}
