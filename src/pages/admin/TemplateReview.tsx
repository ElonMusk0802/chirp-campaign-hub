import React, { useState } from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Check, X, Eye, Filter, AlertTriangle, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TemplateReview = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [reviewNote, setReviewNote] = useState('');

  // Mock data for message templates
  const templates = [
    {
      id: 1,
      name: 'Welcome Message',
      clientName: 'E-commerce Plus',
      clientId: 'client_001',
      category: 'transactional',
      status: 'pending',
      content: 'Welcome to MyStore! Your account has been created successfully. Use code WELCOME10 for 10% off your first order. Shop now: mystore.com',
      variables: ['name', 'code'],
      submittedDate: '2024-01-15',
      riskLevel: 'low',
      flaggedTerms: []
    },
    {
      id: 2,
      name: 'Password Reset',
      clientName: 'Financial Services Ltd',
      clientId: 'client_002',
      category: 'transactional',
      status: 'approved',
      content: 'Your password reset request for BankAlt account. OTP: {otp}. Valid for 10 minutes. Do not share this code.',
      variables: ['otp'],
      submittedDate: '2024-01-14',
      approvedDate: '2024-01-14',
      riskLevel: 'low',
      flaggedTerms: []
    },
    {
      id: 3,
      name: 'Promotional Sale',
      clientName: 'Questionable Marketing',
      clientId: 'client_003',
      category: 'promotional',
      status: 'flagged',
      content: 'URGENT!!! You have WON $1000!!! Claim NOW before it expires!!! Click link: bit.ly/claim-now Call immediately: 1-800-SCAM',
      variables: [],
      submittedDate: '2024-01-13',
      riskLevel: 'high',
      flaggedTerms: ['URGENT', 'WON', 'Claim NOW', 'expires', 'immediately']
    },
    {
      id: 4,
      name: 'Order Confirmation',
      clientName: 'Retail Chain Co',
      clientId: 'client_004',
      category: 'transactional',
      status: 'approved',
      content: 'Order #_{orderid}_ confirmed! Items: {items}. Total: ${total}. Delivery by {date}. Track: retailchain.com/track/{orderid}',
      variables: ['orderid', 'items', 'total', 'date'],
      submittedDate: '2024-01-12',
      approvedDate: '2024-01-12',
      riskLevel: 'low',
      flaggedTerms: []
    },
    {
      id: 5,
      name: 'Discount Offer',
      clientName: 'Tech Startup Inc',
      clientId: 'client_005',
      category: 'promotional',
      status: 'needs_revision',
      content: 'Limited time offer! 50% OFF all premium plans. Get unlimited access to our AI platform. Offer valid for 24 hours only!',
      variables: [],
      submittedDate: '2024-01-11',
      riskLevel: 'medium',
      flaggedTerms: ['Limited time', 'only'],
      revisionNote: 'Please add opt-out instructions and company contact information.'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending Review</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
      case 'flagged':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Flagged</Badge>;
      case 'needs_revision':
        return <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Needs Revision</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'low':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Low Risk</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Medium Risk</Badge>;
      case 'high':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">High Risk</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handleApprove = (id: number, name: string) => {
    toast({
      title: "Template Approved",
      description: `Template "${name}" has been approved.`,
    });
  };

  const handleFlag = (id: number, name: string) => {
    toast({
      title: "Template Flagged",
      description: `Template "${name}" has been flagged for review.`,
      variant: "destructive",
    });
  };

  const handleRequestRevision = (id: number, name: string) => {
    toast({
      title: "Revision Requested",
      description: `Revision requested for template "${name}".`,
    });
  };

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || template.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || template.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Template Review
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">Review and approve message templates for compliance</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-violet-700">Total Templates</CardTitle>
              <div className="p-2 bg-violet-100 rounded-lg">
                <MessageSquare className="h-4 w-4 text-violet-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">5</div>
              <p className="text-xs text-violet-600/70 mt-1">All templates</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Pending</CardTitle>
              <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 border-amber-200 shadow-sm">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">1</div>
              <p className="text-xs text-amber-600/70 mt-1">Awaiting review</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-700">Approved</CardTitle>
              <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border-emerald-200 shadow-sm">2</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">2</div>
              <p className="text-xs text-emerald-600/70 mt-1">Ready to use</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Flagged</CardTitle>
              <Badge className="bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-red-200 shadow-sm">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">1</div>
              <p className="text-xs text-red-600/70 mt-1">High risk</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-700">Needs Revision</CardTitle>
              <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200 shadow-sm">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">1</div>
              <p className="text-xs text-orange-600/70 mt-1">Requires changes</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-4 w-4" />
                  <Input
                    placeholder="Search templates, clients, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/50 border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48 bg-white/50 border-slate-200 hover:border-blue-400">
                  <Filter className="h-4 w-4 mr-2 text-slate-500" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 shadow-xl">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="needs_revision">Needs Revision</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48 bg-white/50 border-slate-200 hover:border-blue-400">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200 shadow-xl">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="transactional">Transactional</SelectItem>
                  <SelectItem value="promotional">Promotional</SelectItem>
                  <SelectItem value="otp">OTP</SelectItem>
                  <SelectItem value="notification">Notification</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Templates Table */}
        <Card className="bg-gradient-to-br from-white to-slate-50 border-slate-200/50 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-200/50">
            <CardTitle className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Message Templates
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-slate-50 to-gray-50 border-b">
                  <TableHead className="text-slate-700 font-semibold">Template</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Client</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Category</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Status</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Risk Level</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Submitted</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.map((template) => (
                  <TableRow key={template.id} className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-200">
                    <TableCell className="p-4">
                      <div>
                        <div className="font-semibold text-slate-900">{template.name}</div>
                        <div className="text-sm text-slate-600 truncate max-w-xs mt-1">
                          {template.content.substring(0, 50)}...
                        </div>
                        {template.flaggedTerms.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {template.flaggedTerms.slice(0, 2).map((term, index) => (
                              <Badge key={index} className="text-xs bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-red-200 shadow-sm">
                                {term}
                              </Badge>
                            ))}
                            {template.flaggedTerms.length > 2 && (
                              <Badge variant="outline" className="text-xs bg-slate-50">
                                +{template.flaggedTerms.length - 2} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <div>
                        <div className="font-semibold text-slate-900">{template.clientName}</div>
                        <div className="text-sm text-slate-600">{template.clientId}</div>
                      </div>
                    </TableCell>
                    <TableCell className="p-4">
                      <Badge className="capitalize bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
                        {template.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="p-4">{getStatusBadge(template.status)}</TableCell>
                    <TableCell className="p-4">
                      <div className="flex items-center gap-2">
                        {getRiskBadge(template.riskLevel)}
                        {template.riskLevel === 'high' && (
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-slate-600">{template.submittedDate}</TableCell>
                    <TableCell className="p-4">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 hover:from-blue-100 hover:to-indigo-100 text-blue-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl bg-gradient-to-br from-white to-slate-50 border-slate-200">
                            <DialogHeader className="border-b border-slate-200 pb-4">
                              <DialogTitle className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Template Review: {template.name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                              <div>
                                <h4 className="font-semibold mb-3 text-slate-800">Content:</h4>
                                <div className="p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg text-sm border border-slate-200">
                                  {template.content}
                                </div>
                              </div>
                              {template.variables.length > 0 && (
                                <div>
                                  <h4 className="font-semibold mb-3 text-slate-800">Variables:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {template.variables.map((variable, index) => (
                                      <Badge key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                                        {variable}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {template.flaggedTerms.length > 0 && (
                                <div>
                                  <h4 className="font-semibold mb-3 text-red-600">Flagged Terms:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {template.flaggedTerms.map((term, index) => (
                                      <Badge key={index} className="bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border-red-200">
                                        {term}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <div>
                                <h4 className="font-semibold mb-3 text-slate-800">Review Note:</h4>
                                <Textarea
                                  placeholder="Add your review notes here..."
                                  value={reviewNote}
                                  onChange={(e) => setReviewNote(e.target.value)}
                                  className="bg-white border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                                />
                              </div>
                              <div className="flex gap-3 pt-4 border-t border-slate-200">
                                <Button 
                                  onClick={() => handleApprove(template.id, template.name)}
                                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                                >
                                  <Check className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleRequestRevision(template.id, template.name)}
                                  className="bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 border-orange-200 hover:from-orange-100 hover:to-amber-100"
                                >
                                  Request Revision
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleFlag(template.id, template.name)}
                                  className="bg-gradient-to-r from-red-50 to-rose-50 text-red-600 border-red-200 hover:from-red-100 hover:to-rose-100"
                                >
                                  <X className="h-4 w-4 mr-2" />
                                  Reject
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        {template.status === 'pending' && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleApprove(template.id, template.name)}
                              className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 border-green-200 hover:from-green-100 hover:to-emerald-100"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleFlag(template.id, template.name)}
                              className="bg-gradient-to-r from-red-50 to-rose-50 text-red-600 border-red-200 hover:from-red-100 hover:to-rose-100"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default TemplateReview;