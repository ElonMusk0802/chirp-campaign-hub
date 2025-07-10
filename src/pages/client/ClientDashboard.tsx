
import React from 'react';
import { ClientLayout } from '@/components/layouts/ClientLayout';
import { ClientOverview } from '@/components/client/ClientOverview';
import { QuickActions } from '@/components/client/QuickActions';
import { CampaignStatus } from '@/components/client/CampaignStatus';
import { Sparkles, TrendingUp, MessageSquare, Users, Star } from 'lucide-react';

export default function ClientDashboard() {
  return (
    <ClientLayout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-semibold">Client Command Center</span>
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-cyan-900/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
              <MessageSquare className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">2.5M</div>
              <div className="text-white/80 font-semibold">Messages Sent</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl hover:border-purple-400/50 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">98.5%</div>
              <div className="text-white/80 font-semibold">Delivery Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl hover:border-emerald-400/50 transition-all duration-300">
              <Users className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">45K</div>
              <div className="text-white/80 font-semibold">Active Contacts</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-black/40 to-pink-900/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl hover:border-pink-400/50 transition-all duration-300">
              <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">12</div>
              <div className="text-white/80 font-semibold">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
