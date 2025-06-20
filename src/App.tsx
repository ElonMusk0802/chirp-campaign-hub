
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";
import GroupManagement from "./pages/client/GroupManagement";
import SenderIds from "./pages/client/SenderIds";
import ContentTemplates from "./pages/client/ContentTemplates";
import SendQuickSMS from "./pages/client/SendQuickSMS";
import SendBulkSMS from "./pages/client/SendBulkSMS";
import SendFileSMS from "./pages/client/SendFileSMS";
import CampaignCreation from "./pages/client/CampaignCreation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/client/groups" element={<GroupManagement />} />
          <Route path="/client/sender-ids" element={<SenderIds />} />
          <Route path="/client/templates" element={<ContentTemplates />} />
          <Route path="/client/quick-sms" element={<SendQuickSMS />} />
          <Route path="/client/bulk-sms" element={<SendBulkSMS />} />
          <Route path="/client/file-sms" element={<SendFileSMS />} />
          <Route path="/client/campaigns" element={<CampaignCreation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
