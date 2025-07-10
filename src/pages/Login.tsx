import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare, Eye, EyeOff, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication - replace with real API call
    setTimeout(() => {
      if (email && password) {
        // Demo role detection based on email
        const isAdmin = email.includes('admin');
        toast.success(`Welcome ${isAdmin ? 'Admin' : 'Client'}!`);
        navigate(isAdmin ? '/admin' : '/client');
      } else {
        toast.error('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/30 transform hover:scale-110 transition-transform duration-300">
            <MessageSquare className="h-10 w-10 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4 animate-pulse">
            SMS Platform
          </h1>
          <p className="text-cyan-200/80 text-xl font-medium">Enterprise Marketing System</p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-purple-200/70 text-sm">Powered by AI Technology</span>
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-purple-500/20 opacity-50"></div>
          <CardHeader className="text-center relative z-10 p-8">
            <CardTitle className="text-3xl text-white mb-2">Welcome Back</CardTitle>
            <CardDescription className="text-purple-200/80 text-lg">Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent className="p-8 relative z-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-purple-200 font-semibold">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/20 border-purple-300/30 text-white placeholder:text-purple-200/60 rounded-xl backdrop-blur-sm focus:bg-white/30 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="password" className="text-purple-200 font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-white/20 border-purple-300/30 text-white placeholder:text-purple-200/60 rounded-xl backdrop-blur-sm focus:bg-white/30 pr-12 transition-all duration-300"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-purple-200" />
                    ) : (
                      <Eye className="h-5 w-5 text-purple-200" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            
            <div className="mt-8 text-center text-sm text-purple-200/70 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="font-semibold text-cyan-300 mb-2">Demo credentials:</p>
              <p>Admin: admin@sms.com | Client: client@sms.com</p>
              <p>Password: any</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}