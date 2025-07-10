
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Shield, Users, BarChart3, ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Admin Control",
      description: "Complete platform management with vendor routing, client management, and system settings"
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Easy-to-use interface for SMS campaigns, group management, and delivery reports"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel SMS",
      description: "Support for SMPP and HTTP vendors with intelligent routing and failover"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time delivery reports, campaign analytics, and performance monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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
            <Star className="h-2 w-2 text-white/30" />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SMS Platform
              </h1>
              <p className="text-white/80 font-medium">Enterprise Marketing System</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 px-8 py-3 text-lg font-semibold hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8">
              <Zap className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-semibold">Revolutionary SMS Technology</span>
            </div>
          </div>
          
          <h2 className="text-7xl font-extrabold text-white mb-8 leading-tight">
            Enterprise-Grade
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              SMS Marketing Platform
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            🚀 Powerful SMS marketing solution with advanced routing, real-time analytics, 
            and comprehensive campaign management for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 px-12 py-4 text-xl font-bold hover:scale-105 border-2 border-white/20"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-12 py-4 text-xl font-bold border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              View Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-white/80 font-semibold">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10M+</div>
              <div className="text-white/80 font-semibold">Messages Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">5000+</div>
              <div className="text-white/80 font-semibold">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold text-white mb-6">
            Everything You Need for 
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              SMS Marketing
            </span>
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive tools for administrators and clients with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group text-center border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-xl border border-white/10 hover:border-purple-400/50 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-300"></div>
                </div>
                <CardTitle className="text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="relative">
          <Card className="text-center bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 border-0 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <CardHeader className="relative z-10 pb-6 pt-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-5xl font-bold mb-4">
                Ready to Transform Your SMS Marketing?
              </CardTitle>
              <CardDescription className="text-white/90 text-2xl max-w-3xl mx-auto">
                Join thousands of businesses already using our revolutionary platform to reach millions of customers
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pb-12">
              <Button 
                size="lg" 
                onClick={() => navigate('/login')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-3 h-6 w-6" />
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <p className="text-white/80 mt-4 text-lg">✨ No credit card required • Start your free trial now</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2024 SMS Platform. All rights reserved. Built with ❤️ for enterprise success.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
