
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare,
  Send,
  Upload,
  BarChart3,
  FileText,
  Zap,
  Settings,
  Calendar,
  Target
} from "lucide-react";

const clientMenuItems = [
  {
    title: "Dashboard",
    url: "/client",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Send Quick SMS",
    url: "/client/quick-sms",
    icon: Zap,
  },
  {
    title: "Send Bulk SMS",
    url: "/client/bulk-sms",
    icon: Send,
  },
  {
    title: "Send from File",
    url: "/client/file-sms",
    icon: Upload,
  },
  {
    title: "Campaign Management",
    url: "/client/campaigns",
    icon: Target,
  },
  {
    title: "Group Management",
    url: "/client/groups",
    icon: Users,
  },
  {
    title: "Content Templates",
    url: "/client/templates",
    icon: FileText,
  },
  {
    title: "Sender IDs",
    url: "/client/sender-ids",
    icon: MessageSquare,
  },
  {
    title: "Delivery Reports",
    url: "/client/reports",
    icon: BarChart3,
  },
  {
    title: "Queued Messages",
    url: "/client/queue",
    icon: Calendar,
  },
  {
    title: "Account Settings",
    url: "/client/account",
    icon: Settings,
  },
];

export function ClientSidebar() {
  return (
    <Sidebar className="border-r border-cyan-200/20 bg-gradient-to-b from-slate-950 via-purple-950 to-indigo-950 shadow-2xl shadow-purple-500/20 backdrop-blur-xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-blue-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <SidebarHeader className="p-6 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-transform duration-300">
            <MessageSquare className="h-8 w-8 text-white animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Client Portal
            </h2>
            <p className="text-sm text-cyan-200/80 font-medium">SMS Marketing Suite</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 relative z-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {clientMenuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`w-full transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 hover:border-l-4 hover:border-cyan-400 rounded-xl ${
                      item.active ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-l-4 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105' : 'hover:bg-white/5'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a href={item.url} className="flex items-center space-x-4 px-4 py-3 rounded-xl">
                      <div className={`p-2 rounded-lg ${item.active ? 'bg-cyan-400/20 shadow-cyan-400/50' : 'bg-white/10'} transition-all duration-300`}>
                        <item.icon className={`h-5 w-5 ${item.active ? 'text-cyan-300' : 'text-purple-200'} transition-colors duration-300`} />
                      </div>
                      <span className={`text-sm font-semibold ${item.active ? 'text-cyan-200' : 'text-purple-200'} transition-colors duration-300`}>
                        {item.title}
                      </span>
                      {item.active && (
                        <div className="ml-auto w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      {/* Bottom gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-950 to-transparent pointer-events-none"></div>
    </Sidebar>
  );
}
