
import React from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { AdminOverview } from '@/components/admin/AdminOverview';
import { RecentActivity } from '@/components/admin/RecentActivity';
import { VendorRouting } from '@/components/admin/VendorRouting';
import { Shield, Crown, Settings, BarChart3, Star, Zap, Users, Database } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-violet-400 to-pink-500 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <Crown className="h-5 w-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-semibold">Administrator Control Hub</span>
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl hover:border-emerald-400/50 transition-all duration-300 group">
              <div className="relative">
                <Database className="h-12 w-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">15.2M</div>
              <div className="text-white/80 font-semibold">Total Messages</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl hover:border-blue-400/50 transition-all duration-300 group">
              <div className="relative">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">1,247</div>
              <div className="text-white/80 font-semibold">Active Clients</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl hover:border-purple-400/50 transition-all duration-300 group">
              <div className="relative">
                <Settings className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24</div>
              <div className="text-white/80 font-semibold">Active Vendors</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-indigo-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="relative">
                <BarChart3 className="h-12 w-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">99.8%</div>
              <div className="text-white/80 font-semibold">System Uptime</div>
            </div>
          </div>

          {/* System Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-gradient-to-br from-black/40 to-emerald-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">System Health</h3>
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-emerald-400">Excellent</div>
              <p className="text-white/60 text-sm">All systems operational</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-black/40 to-blue-900/30 backdrop-blur-xl border border-blue-500/20 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Message Queue</h3>
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-blue-400">Real-time</div>
              <p className="text-white/60 text-sm">Processing 2.3K msg/sec</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-black/40 to-purple-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Revenue Today</h3>
                <BarChart3 className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-purple-400">$47,892</div>
              <p className="text-white/60 text-sm">+12.5% from yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
