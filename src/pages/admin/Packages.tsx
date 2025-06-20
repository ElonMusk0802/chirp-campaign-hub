
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Package, Users } from "lucide-react";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  
  const packages = [
    {
      id: 1,
      name: "Starter Package",
      smsCount: "1,000",
      price: "$45.00",
      rate: "$0.045",
      clients: 23,
      status: "active",
      description: "Perfect for small businesses"
    },
    {
      id: 2,
      name: "Business Package",
      smsCount: "10,000",
      price: "$380.00",
      rate: "$0.038",
      clients: 45,
      status: "active",
      description: "Ideal for growing companies"
    },
    {
      id: 3,
      name: "Enterprise Package",
      smsCount: "100,000",
      price: "$3,200.00",
      rate: "$0.032",
      clients: 12,
      status: "active",
      description: "For large-scale operations"
    },
    {
      id: 4,
      name: "Premium Package",
      smsCount: "50,000",
      price: "$1,750.00",
      rate: "$0.035",
      clients: 8,
      status: "draft",
      description: "Premium features included"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      draft: "bg-yellow-100 text-yellow-800",
      inactive: "bg-red-100 text-red-800"
    };
    return colors[status as keyof typeof colors] || colors.active;
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Package Management
            </h1>
            <p className="text-gray-600 mt-2">Create and manage SMS packages for clients</p>
          </div>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Package
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Total Packages", value: "12", change: "+2", icon: Package, gradient: "from-indigo-500 to-purple-500" },
            { title: "Active Packages", value: "9", change: "+1", icon: Package, gradient: "from-purple-500 to-pink-500" },
            { title: "Total Clients", value: "88", change: "+15", icon: Users, gradient: "from-pink-500 to-red-500" },
            { title: "Revenue", value: "$24,850", change: "+$3,200", icon: Package, gradient: "from-blue-500 to-indigo-500" }
          ].map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-white to-indigo-50">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search packages by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200"
              />
            </div>
          </CardContent>
        </Card>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-indigo-100 mt-1">{pkg.description}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(pkg.status)}>
                    {pkg.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SMS Count</span>
                    <span className="font-bold text-2xl text-indigo-600">{pkg.smsCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Package Price</span>
                    <span className="font-bold text-xl text-green-600">{pkg.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rate per SMS</span>
                    <span className="font-semibold text-gray-800">{pkg.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Clients</span>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold">{pkg.clients}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Package Form */}
        {showAddForm && (
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-white">Create New Package</CardTitle>
              <CardDescription className="text-indigo-100">Define a new SMS package for clients</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="packageName">Package Name</Label>
                  <Input id="packageName" placeholder="Enter package name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smsCount">SMS Count</Label>
                  <Input id="smsCount" placeholder="1000, 10000, 100000..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="packagePrice">Package Price</Label>
                  <Input id="packagePrice" placeholder="$45.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smsRate">Rate per SMS</Label>
                  <Input id="smsRate" placeholder="$0.045" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Package description..." />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-8">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Create Package
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
