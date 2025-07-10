
import React from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { AdminOverview } from '@/components/admin/AdminOverview';
import { RecentActivity } from '@/components/admin/RecentActivity';
import { VendorRouting } from '@/components/admin/VendorRouting';
import { Shield, Crown, Settings, BarChart3, Star, Zap, Users, Database } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-zinc-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-blue-500/15 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/40 to-cyan-500/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-88 h-88 bg-gradient-to-r from-violet-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-r from-teal-400/25 to-emerald-500/25 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Star className="h-1 w-1 text-white/20" />
            </div>
          ))}
        </div>

        <div className="relative z-10 space-y-8 p-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-300/60 backdrop-blur-xl mb-10 shadow-2xl shadow-emerald-500/25">
              <Crown className="h-7 w-7 text-emerald-200 mr-4 animate-pulse" />
              <span className="text-emerald-100 font-black text-xl">Administrator Control Hub</span>
            </div>
            <h1 className="text-8xl font-black text-white mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                Admin Dashboard
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              ⚡ Monitor and manage your SMS platform with enterprise-grade control and insights
            </p>
          </div>
          
          {/* Dashboard Content */}
          <div className="relative">
            <AdminOverview />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl blur-xl"></div>
              <div className="relative">
                <RecentActivity />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative">
                <VendorRouting />
              </div>
            </div>
          </div>

          {/* Admin Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="group text-center p-10 bg-gradient-to-br from-emerald-500/25 to-teal-600/25 backdrop-blur-xl border border-emerald-300/50 rounded-3xl hover:border-emerald-200/80 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-700 transform hover:scale-110">
              <div className="relative">
                <Database className="h-20 w-20 text-emerald-200 mx-auto mb-8 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-emerald-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent mb-3">15.2M</div>
              <div className="text-emerald-100 font-bold text-xl">Total Messages</div>
            </div>
            
            <div className="group text-center p-10 bg-gradient-to-br from-cyan-500/25 to-blue-600/25 backdrop-blur-xl border border-cyan-300/50 rounded-3xl hover:border-cyan-200/80 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-700 transform hover:scale-110">
              <div className="relative">
                <Users className="h-20 w-20 text-cyan-200 mx-auto mb-8 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-cyan-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent mb-3">1,247</div>
              <div className="text-cyan-100 font-bold text-xl">Active Clients</div>
            </div>
            
            <div className="group text-center p-10 bg-gradient-to-br from-purple-500/25 to-violet-600/25 backdrop-blur-xl border border-purple-300/50 rounded-3xl hover:border-purple-200/80 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-700 transform hover:scale-110">
              <div className="relative">
                <Settings className="h-20 w-20 text-purple-200 mx-auto mb-8 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-purple-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent mb-3">24</div>
              <div className="text-purple-100 font-bold text-xl">Active Vendors</div>
            </div>
            
            <div className="group text-center p-10 bg-gradient-to-br from-blue-500/25 to-indigo-600/25 backdrop-blur-xl border border-blue-300/50 rounded-3xl hover:border-blue-200/80 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-700 transform hover:scale-110">
              <div className="relative">
                <BarChart3 className="h-20 w-20 text-blue-200 mx-auto mb-8 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-blue-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="text-5xl font-black bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-3">99.8%</div>
              <div className="text-blue-100 font-bold text-xl">System Uptime</div>
            </div>
          </div>

          {/* System Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="group p-8 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 backdrop-blur-xl border border-emerald-300/60 rounded-3xl hover:border-emerald-200/80 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-emerald-100">System Health</h3>
                <div className="w-4 h-4 bg-emerald-300 rounded-full animate-pulse shadow-lg shadow-emerald-300/50"></div>
              </div>
              <div className="text-4xl font-black text-emerald-200 mb-2">Excellent</div>
              <p className="text-emerald-200/80 text-lg font-medium">All systems operational</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur-xl border border-cyan-300/60 rounded-3xl hover:border-cyan-200/80 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-cyan-100">Message Queue</h3>
                <Zap className="h-7 w-7 text-cyan-300 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-cyan-200 mb-2">Real-time</div>
              <p className="text-cyan-200/80 text-lg font-medium">Processing 2.3K msg/sec</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-500/30 to-violet-600/30 backdrop-blur-xl border border-purple-300/60 rounded-3xl hover:border-purple-200/80 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-purple-100">Revenue Today</h3>
                <BarChart3 className="h-7 w-7 text-purple-300 animate-pulse" />
              </div>
              <div className="text-4xl font-black text-purple-200 mb-2">$47,892</div>
              <p className="text-purple-200/80 text-lg font-medium">+12.5% from yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
