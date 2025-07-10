
import React, { useState } from 'react';
import { ClientLayout } from '@/components/layouts/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Zap, Send, Users, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

export default function SendQuickSMS() {
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSenderId, setSelectedSenderId] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [sending, setSending] = useState(false);

  const senderIds = [
    { id: 'COMPANY', status: 'approved' },
    { id: 'PROMO', status: 'pending' },
    { id: 'ALERT', status: 'approved' }
  ];

  const templates = [
    { id: '1', name: 'Welcome Message', content: 'Welcome {{name}}! Thank you for joining {{company}}.' },
    { id: '2', name: 'Promotional Offer', content: 'Hi {{name}}! Get {{discount}}% off on your next purchase.' },
    { id: '3', name: 'Appointment Reminder', content: 'Hello {{name}}, reminder for your appointment on {{date}}.' }
  ];

  const parsePhoneNumbers = (text: string): string[] => {
    return text.split('\n').map(num => num.trim()).filter(num => num.length > 0);
  };

  const phoneList = parsePhoneNumbers(phoneNumbers);
  const characterCount = message.length;
  const smsCount = Math.ceil(characterCount / 160) || 1;

  const handleUseTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setMessage(template.content);
      setSelectedTemplate(templateId);
    }
  };

  const handleSendSMS = async () => {
    setSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSending(false);
    // Reset form or show success message
  };

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 p-8 text-white shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-blue-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-6 mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl shadow-lg shadow-purple-500/30 transform hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white animate-pulse" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">Send Quick SMS</h1>
                <p className="text-cyan-200/80 text-xl font-medium mt-2">Send instant SMS to multiple recipients</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-xl shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">{phoneList.length}</div>
                <div className="text-cyan-200/80 text-lg font-medium mt-2">Recipients</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 shadow-xl shadow-purple-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{smsCount}</div>
                <div className="text-purple-200/80 text-lg font-medium mt-2">SMS Parts</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/20 shadow-xl shadow-pink-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">{characterCount}</div>
                <div className="text-pink-200/80 text-lg font-medium mt-2">Characters</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <span>Recipients</span>
                </CardTitle>
                <CardDescription className="text-orange-100">Enter phone numbers (one per line)</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Enter phone numbers, one per line&#10;+1234567890&#10;+0987654321&#10;..."
                    value={phoneNumbers}
                    onChange={(e) => setPhoneNumbers(e.target.value)}
                    className="min-h-[300px] rounded-xl border-2 border-orange-200 focus:border-orange-500 font-mono text-sm"
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {phoneList.length > 0 && (
                        <span className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{phoneList.length} valid numbers detected</span>
                        </span>
                      )}
                    </div>
                    <Badge variant="secondary" className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Max: 100,000 numbers
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-pink-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6" />
                  <span>Message Content</span>
                </CardTitle>
                <CardDescription className="text-pink-100">Compose your SMS message</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[150px] rounded-xl border-2 border-pink-200 focus:border-pink-500"
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span>{characterCount}/160 characters</span>
                      {characterCount > 160 && (
                        <span className="ml-2 text-orange-600">({smsCount} SMS parts)</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {characterCount > 0 && characterCount <= 160 && (
                        <Badge className="bg-green-500">1 SMS</Badge>
                      )}
                      {characterCount > 160 && (
                        <Badge className="bg-orange-500">{smsCount} SMS</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="text-xl">Sender ID</CardTitle>
                <CardDescription className="text-blue-100">Choose your sender identity</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {senderIds.map((sender) => (
                  <div 
                    key={sender.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedSenderId === sender.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    } ${sender.status !== 'approved' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => sender.status === 'approved' && setSelectedSenderId(sender.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">{sender.id}</span>
                      <Badge 
                        className={sender.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'}
                      >
                        {sender.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-green-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <CardTitle className="text-xl">Quick Templates</CardTitle>
                <CardDescription className="text-green-100">Use predefined templates</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {templates.map((template) => (
                  <div 
                    key={template.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedTemplate === template.id 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    <div className="font-semibold text-green-800 mb-2">{template.name}</div>
                    <div className="text-sm text-gray-600 truncate">{template.content}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle className="text-xl">Send SMS</CardTitle>
                <CardDescription className="text-purple-100">Review and send your message</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <div className="font-semibold mb-1">Cost Estimate:</div>
                      <div>Recipients: {phoneList.length}</div>
                      <div>SMS Parts: {smsCount * phoneList.length}</div>
                      <div className="font-semibold">Total Cost: ${(0.05 * smsCount * phoneList.length).toFixed(2)}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleSendSMS}
                  disabled={!phoneNumbers || !message || !selectedSenderId || sending}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-xl py-4 text-lg font-semibold"
                >
                  {sending ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send SMS</span>
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
