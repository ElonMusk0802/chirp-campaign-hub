
import React from 'react';
import { useLocation } from 'react-router-dom';
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
  Globe,
  Settings,
  Package,
  DollarSign,
  BarChart3,
  Shield,
  Router,
  MessageSquare,
  Filter,
  IdCard,
  Calendar,
  FileText
} from "lucide-react";

const adminMenuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Client Management",
    url: "/admin/clients",
    icon: Users,
  },
  {
    title: "Countries",
    url: "/admin/countries",
    icon: Globe,
  },
  {
    title: "Traffic & Rates",
    url: "/admin/traffic",
    icon: BarChart3,
  },
  {
    title: "Packages",
    url: "/admin/packages",
    icon: Package,
  },
  {
    title: "SMPP Vendors",
    url: "/admin/smpp-vendors",
    icon: Router,
  },
  {
    title: "HTTP Vendors",
    url: "/admin/http-vendors",
    icon: MessageSquare,
  },
  {
    title: "Funds Management",
    url: "/admin/funds",
    icon: DollarSign,
  },
  {
    title: "SMS Filtering",
    url: "/admin/filters",
    icon: Filter,
  },
  {
    title: "Sender ID Management",
    url: "/admin/sender-ids",
    icon: IdCard,
  },
  {
    title: "Campaign Monitoring",
    url: "/admin/campaigns",
    icon: Calendar,
  },
  {
    title: "Template Review",
    url: "/admin/templates",
    icon: FileText,
  },
  {
    title: "System Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-orange-200/20 bg-gradient-to-b from-slate-950 via-orange-950 to-red-950 shadow-2xl shadow-orange-500/20 backdrop-blur-xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <SidebarHeader className="p-6 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300">
            <Shield className="h-8 w-8 text-white animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
              Admin Panel
            </h2>
            <p className="text-sm text-orange-200/80 font-medium">SMS Platform Control</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 relative z-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {adminMenuItems.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`w-full transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-red-500/20 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 hover:border-l-4 hover:border-orange-400 rounded-xl ${
                        isActive ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30 border-l-4 border-orange-400 shadow-lg shadow-orange-500/30 scale-105' : 'hover:bg-white/5'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <a href={item.url} className="flex items-center space-x-4 px-4 py-3 rounded-xl">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-orange-400/20 shadow-orange-400/50' : 'bg-white/10'} transition-all duration-300`}>
                          <item.icon className={`h-5 w-5 ${isActive ? 'text-orange-300' : 'text-orange-200'} transition-colors duration-300`} />
                        </div>
                        <span className={`text-sm font-semibold ${isActive ? 'text-orange-200' : 'text-orange-200'} transition-colors duration-300`}>
                          {item.title}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      {/* Bottom gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-950 to-transparent pointer-events-none"></div>
    </Sidebar>
  );
}
