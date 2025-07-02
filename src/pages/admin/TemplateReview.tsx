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
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Template Review
            </h1>
            <p className="text-gray-600 mt-1">Review and approve message templates for compliance</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Templates</CardTitle>
              <MessageSquare className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-600">All templates</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <p className="text-xs text-gray-600">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">2</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">2</div>
              <p className="text-xs text-gray-600">Ready to use</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flagged</CardTitle>
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">1</div>
              <p className="text-xs text-gray-600">High risk</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Needs Revision</CardTitle>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">1</div>
              <p className="text-xs text-gray-600">Requires changes</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search templates, clients, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="needs_revision">Needs Revision</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
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
        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Template</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{template.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {template.content.substring(0, 50)}...
                        </div>
                        {template.flaggedTerms.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {template.flaggedTerms.slice(0, 2).map((term, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-red-50 text-red-600 border-red-200">
                                {term}
                              </Badge>
                            ))}
                            {template.flaggedTerms.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{template.flaggedTerms.length - 2} more
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{template.clientName}</div>
                        <div className="text-sm text-gray-500">{template.clientId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {template.category}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(template.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getRiskBadge(template.riskLevel)}
                        {template.riskLevel === 'high' && (
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{template.submittedDate}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Template Review: {template.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Content:</h4>
                                <div className="p-3 bg-gray-50 rounded-lg text-sm">
                                  {template.content}
                                </div>
                              </div>
                              {template.variables.length > 0 && (
                                <div>
                                  <h4 className="font-medium mb-2">Variables:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {template.variables.map((variable, index) => (
                                      <Badge key={index} variant="outline">
                                        {variable}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {template.flaggedTerms.length > 0 && (
                                <div>
                                  <h4 className="font-medium mb-2 text-red-600">Flagged Terms:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {template.flaggedTerms.map((term, index) => (
                                      <Badge key={index} variant="outline" className="bg-red-50 text-red-600 border-red-200">
                                        {term}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              <div>
                                <h4 className="font-medium mb-2">Review Note:</h4>
                                <Textarea
                                  placeholder="Add your review notes here..."
                                  value={reviewNote}
                                  onChange={(e) => setReviewNote(e.target.value)}
                                />
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  onClick={() => handleApprove(template.id, template.name)}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <Check className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleRequestRevision(template.id, template.name)}
                                  className="text-orange-600 hover:bg-orange-50"
                                >
                                  Request Revision
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => handleFlag(template.id, template.name)}
                                  className="text-red-600 hover:bg-red-50"
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
                              className="text-green-600 hover:bg-green-50"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleFlag(template.id, template.name)}
                              className="text-red-600 hover:bg-red-50"
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