import React, { useState } from 'react';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Play, Pause, Square, Eye, Filter, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CampaignMonitoring = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [clientFilter, setClientFilter] = useState('all');

  // Mock data for campaigns
  const campaigns = [
    {
      id: 1,
      name: 'New Year Sale 2024',
      clientName: 'E-commerce Plus',
      clientId: 'client_001',
      status: 'running',
      type: 'scheduled',
      totalMessages: 15000,
      sent: 12500,
      delivered: 11800,
      failed: 200,
      scheduled: '2024-01-15 09:00',
      startTime: '2024-01-15 09:00',
      endTime: '2024-01-15 18:00',
      progress: 83
    },
    {
      id: 2,
      name: 'Welcome Campaign',
      clientName: 'Financial Services Ltd',
      clientId: 'client_002',
      status: 'completed',
      type: 'bulk',
      totalMessages: 5000,
      sent: 5000,
      delivered: 4950,
      failed: 50,
      scheduled: '2024-01-14 10:00',
      startTime: '2024-01-14 10:00',
      endTime: '2024-01-14 12:30',
      progress: 100
    },
    {
      id: 3,
      name: 'Weekend Promo',
      clientName: 'Retail Chain Co',
      clientId: 'client_004',
      status: 'paused',
      type: 'scheduled',
      totalMessages: 25000,
      sent: 8000,
      delivered: 7600,
      failed: 100,
      scheduled: '2024-01-16 08:00',
      startTime: '2024-01-16 08:00',
      endTime: '2024-01-16 20:00',
      progress: 32
    },
    {
      id: 4,
      name: 'Product Launch Alert',
      clientName: 'Tech Startup Inc',
      clientId: 'client_005',
      status: 'scheduled',
      type: 'scheduled',
      totalMessages: 8000,
      sent: 0,
      delivered: 0,
      failed: 0,
      scheduled: '2024-01-17 11:00',
      startTime: null,
      endTime: null,
      progress: 0
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Running</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      case 'paused':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Paused</Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Scheduled</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handlePauseCampaign = (id: number, name: string) => {
    toast({
      title: "Campaign Paused",
      description: `Campaign "${name}" has been paused.`,
    });
  };

  const handleResumeCampaign = (id: number, name: string) => {
    toast({
      title: "Campaign Resumed",
      description: `Campaign "${name}" has been resumed.`,
    });
  };

  const handleCancelCampaign = (id: number, name: string) => {
    toast({
      title: "Campaign Cancelled",
      description: `Campaign "${name}" has been cancelled.`,
      variant: "destructive",
    });
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
    const matchesClient = clientFilter === 'all' || campaign.clientId === clientFilter;
    return matchesSearch && matchesStatus && matchesClient;
  });

  const uniqueClients = [...new Set(campaigns.map(c => ({ id: c.clientId, name: c.clientName })))];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Campaign Monitoring
            </h1>
            <p className="text-gray-600 mt-1">Monitor and manage all client campaigns in real-time</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
              <Calendar className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-gray-600">All campaigns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Running</CardTitle>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1</div>
              <p className="text-xs text-gray-600">Active now</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">1</div>
              <p className="text-xs text-gray-600">Upcoming</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1</div>
              <p className="text-xs text-gray-600">Finished</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paused</CardTitle>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">1</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <p className="text-xs text-gray-600">On hold</p>
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
                    placeholder="Search campaigns or clients..."
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
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={clientFilter} onValueChange={setClientFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                  {uniqueClients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Table */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Messages</TableHead>
                  <TableHead>Delivery Rate</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCampaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-sm text-gray-500">ID: {campaign.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{campaign.clientName}</div>
                        <div className="text-sm text-gray-500">{campaign.clientId}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                    <TableCell>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{campaign.progress}%</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>Total: {campaign.totalMessages.toLocaleString()}</div>
                        <div>Sent: {campaign.sent.toLocaleString()}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {campaign.sent > 0 ? (
                        <div className="text-sm">
                          <div className="text-green-600">
                            {((campaign.delivered / campaign.sent) * 100).toFixed(1)}%
                          </div>
                          <div className="text-red-600">
                            Failed: {campaign.failed}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{campaign.scheduled}</div>
                        {campaign.status === 'running' && campaign.endTime && (
                          <div className="text-gray-500">Ends: {campaign.endTime}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {campaign.status === 'running' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePauseCampaign(campaign.id, campaign.name)}
                            className="text-yellow-600 hover:bg-yellow-50"
                          >
                            <Pause className="h-4 w-4" />
                          </Button>
                        )}
                        {campaign.status === 'paused' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleResumeCampaign(campaign.id, campaign.name)}
                            className="text-green-600 hover:bg-green-50"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                        {(campaign.status === 'scheduled' || campaign.status === 'paused') && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleCancelCampaign(campaign.id, campaign.name)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Square className="h-4 w-4" />
                          </Button>
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

export default CampaignMonitoring;