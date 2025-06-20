
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Edit, Trash2, Upload, Globe, TrendingUp } from "lucide-react";

export default function CountryManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState('countries');
  
  const countries = [
    {
      id: 1,
      name: "United States",
      code: "US",
      mobileCode: "+1",
      rate: "$0.045",
      traffic: "High",
      status: "active"
    },
    {
      id: 2,
      name: "United Kingdom", 
      code: "GB",
      mobileCode: "+44",
      rate: "$0.038",
      traffic: "Medium",
      status: "active"
    },
    {
      id: 3,
      name: "Germany",
      code: "DE", 
      mobileCode: "+49",
      rate: "$0.042",
      traffic: "High",
      status: "active"
    },
    {
      id: 4,
      name: "India",
      code: "IN",
      mobileCode: "+91", 
      rate: "$0.022",
      traffic: "Very High",
      status: "restricted"
    }
  ];

  const trafficRules = [
    {
      id: 1,
      country: "United States",
      prefix: "+1",
      rate: "$0.045",
      dailyLimit: "50,000",
      currentUsage: "32,450",
      priority: 1,
      vendor: "GlobalSMS SMPP"
    },
    {
      id: 2,
      country: "United Kingdom",
      prefix: "+44", 
      rate: "$0.038",
      dailyLimit: "25,000",
      currentUsage: "18,200",
      priority: 2,
      vendor: "FastRoute HTTP"
    }
  ];

  const getTrafficColor = (traffic: string) => {
    const colors = {
      "Very High": "bg-red-100 text-red-800",
      "High": "bg-orange-100 text-orange-800", 
      "Medium": "bg-yellow-100 text-yellow-800",
      "Low": "bg-green-100 text-green-800"
    };
    return colors[traffic as keyof typeof colors] || colors["Medium"];
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Country & Traffic Management
            </h1>
            <p className="text-gray-600 mt-2">Manage countries, rates, and traffic rules</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
              <Upload className="h-4 w-4 mr-2" />
              Import CSV
            </Button>
            <Button 
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Country
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Total Countries", value: "195", change: "+3", icon: Globe, gradient: "from-emerald-500 to-cyan-500" },
            { title: "Active Routes", value: "147", change: "+5", icon: Globe, gradient: "from-blue-500 to-indigo-500" },
            { title: "Avg. Rate", value: "$0.035", change: "-$0.003", icon: TrendingUp, gradient: "from-purple-500 to-pink-500" },
            { title: "High Traffic", value: "24", change: "+2", icon: TrendingUp, gradient: "from-orange-500 to-red-500" }
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="countries">Country Management</TabsTrigger>
            <TabsTrigger value="traffic">Traffic & Rates</TabsTrigger>
          </TabsList>

          <TabsContent value="countries" className="space-y-6">
            {/* Search */}
            <Card className="shadow-xl border-0 bg-gradient-to-r from-white to-emerald-50">
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search countries by name, code, or mobile prefix..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Countries Table */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-b border-emerald-100">
                <CardTitle className="text-gray-900">Countries</CardTitle>
                <CardDescription>Add, edit, and delete countries</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Country Name</TableHead>
                      <TableHead className="font-semibold">Country Code</TableHead>
                      <TableHead className="font-semibold">Mobile Code</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {countries.map((country) => (
                      <TableRow key={country.id} className="hover:bg-emerald-50/50 transition-colors">
                        <TableCell className="font-medium">{country.name}</TableCell>
                        <TableCell className="font-mono">{country.code}</TableCell>
                        <TableCell className="font-mono">{country.mobileCode}</TableCell>
                        <TableCell>
                          <Badge className={country.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {country.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            {/* Traffic & Rates Table */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-100">
                <CardTitle className="text-gray-900">Traffic & Rates Management</CardTitle>
                <CardDescription>Manage country-wise SMS rates and traffic rules</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Country</TableHead>
                      <TableHead className="font-semibold">Prefix</TableHead>
                      <TableHead className="font-semibold">Rate</TableHead>
                      <TableHead className="font-semibold">Daily Limit</TableHead>
                      <TableHead className="font-semibold">Usage</TableHead>
                      <TableHead className="font-semibold">Priority</TableHead>
                      <TableHead className="font-semibold">Vendor</TableHead>
                      <TableHead className="font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trafficRules.map((rule) => (
                      <TableRow key={rule.id} className="hover:bg-cyan-50/50 transition-colors">
                        <TableCell className="font-medium">{rule.country}</TableCell>
                        <TableCell className="font-mono">{rule.prefix}</TableCell>
                        <TableCell className="font-semibold text-green-600">{rule.rate}</TableCell>
                        <TableCell>{rule.dailyLimit}</TableCell>
                        <TableCell>{rule.currentUsage}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-blue-200 text-blue-600">
                            {rule.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{rule.vendor}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Country Form */}
        {showAddForm && (
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-emerald-50">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-t-lg">
              <CardTitle className="text-white">Add New Country</CardTitle>
              <CardDescription className="text-emerald-100">Configure a new country</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="countryName">Country Name</Label>
                  <Input id="countryName" placeholder="Enter country name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="countryCode">Country Code</Label>
                  <Input id="countryCode" placeholder="US, GB, DE..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileCode">Mobile Code</Label>
                  <Input id="mobileCode" placeholder="+1, +44, +49..." />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-8">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700">
                  Add Country
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
