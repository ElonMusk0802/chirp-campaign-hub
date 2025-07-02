import React, { useState } from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Check, X, Eye, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SenderIdManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data for sender ID requests
  const senderIdRequests = [
    {
      id: 1,
      senderId: 'MYSTORE',
      clientName: 'E-commerce Plus',
      clientId: 'client_001',
      requestDate: '2024-01-15',
      status: 'pending',
      businessType: 'E-commerce',
      documents: ['registration.pdf', 'noc.pdf'],
      reason: 'Online store promotional messages'
    },
    {
      id: 2,
      senderId: 'BANKALT',
      clientName: 'Financial Services Ltd',
      clientId: 'client_002',
      requestDate: '2024-01-14',
      status: 'approved',
      businessType: 'Banking',
      documents: ['license.pdf', 'authorization.pdf'],
      reason: 'Transaction alerts and notifications',
      approvedBy: 'Admin User',
      approvedDate: '2024-01-16'
    },
    {
      id: 3,
      senderId: 'SPAM123',
      clientName: 'Questionable Marketing',
      clientId: 'client_003',
      requestDate: '2024-01-13',
      status: 'rejected',
      businessType: 'Marketing',
      documents: ['business.pdf'],
      reason: 'Promotional campaigns',
      rejectedBy: 'Admin User',
      rejectedDate: '2024-01-15',
      rejectionReason: 'Suspicious sender ID pattern'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handleApprove = (id: number, senderId: string) => {
    toast({
      title: "Sender ID Approved",
      description: `Sender ID "${senderId}" has been approved successfully.`,
    });
  };

  const handleReject = (id: number, senderId: string) => {
    toast({
      title: "Sender ID Rejected",
      description: `Sender ID "${senderId}" has been rejected.`,
      variant: "destructive",
    });
  };

  const filteredRequests = senderIdRequests.filter(request => {
    const matchesSearch = request.senderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Sender ID Management
            </h1>
            <p className="text-gray-600 mt-1">Review and manage sender ID requests from clients</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
              <Badge variant="outline">3</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-600">All time</p>
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
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1</div>
              <p className="text-xs text-gray-600">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rejected</CardTitle>
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">1</div>
              <p className="text-xs text-gray-600">This month</p>
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
                    placeholder="Search by Sender ID or Client Name..."
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
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>Sender ID Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sender ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Business Type</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.senderId}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{request.clientName}</div>
                        <div className="text-sm text-gray-500">{request.clientId}</div>
                      </div>
                    </TableCell>
                    <TableCell>{request.businessType}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {request.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {request.status === 'pending' && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleApprove(request.id, request.senderId)}
                              className="text-green-600 hover:bg-green-50"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleReject(request.id, request.senderId)}
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

export default SenderIdManagement;