
import React from 'react';
import { ClientLayout } from '@/components/layouts/ClientLayout';
import { ClientOverview } from '@/components/client/ClientOverview';
import { QuickActions } from '@/components/client/QuickActions';
import { CampaignStatus } from '@/components/client/CampaignStatus';
import { Sparkles, TrendingUp, MessageSquare, Users, Star } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
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
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 backdrop-blur-xl mb-8 shadow-2xl shadow-cyan-500/20">
              <Sparkles className="h-6 w-6 text-cyan-300 mr-3 animate-pulse" />
              <span className="text-cyan-200 font-bold text-lg">Client Command Center</span>
            </div>
            <h1 className="text-7xl font-black text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              🚀 Manage your SMS campaigns and account with powerful insights and tools
            </p>
          </div>
          
          {/* Dashboard Content */}
          <div className="relative">
            <ClientOverview />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative">
                <CampaignStatus />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl"></div>
              <div className="relative">
                <QuickActions />
              </div>
            </div>
          </div>

          {/* Additional Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="group text-center p-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-400/40 rounded-3xl hover:border-cyan-300/70 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:scale-105">
              <div className="relative">
                <MessageSquare className="h-16 w-16 text-cyan-300 mx-auto mb-6 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">2.5M</div>
              <div className="text-cyan-100 font-bold text-lg">Messages Sent</div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/40 rounded-3xl hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105">
              <div className="relative">
                <TrendingUp className="h-16 w-16 text-purple-300 mx-auto mb-6 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">98.5%</div>
              <div className="text-purple-100 font-bold text-lg">Delivery Rate</div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-xl border border-emerald-400/40 rounded-3xl hover:border-emerald-300/70 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 transform hover:scale-105">
              <div className="relative">
                <Users className="h-16 w-16 text-emerald-300 mx-auto mb-6 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">45K</div>
              <div className="text-emerald-100 font-bold text-lg">Active Contacts</div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-pink-500/20 to-rose-600/20 backdrop-blur-xl border border-pink-400/40 rounded-3xl hover:border-pink-300/70 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 transform hover:scale-105">
              <div className="relative">
                <Sparkles className="h-16 w-16 text-pink-300 mx-auto mb-6 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent mb-2">12</div>
              <div className="text-pink-100 font-bold text-lg">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
