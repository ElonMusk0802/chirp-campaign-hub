
import React, { useState } from 'react';
import { ClientLayout } from '@/components/layouts/ClientLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, Edit, Trash2, Copy, Eye } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  content: string;
  placeholders: string[];
  category: string;
  created: string;
  used: number;
}

export default function ContentTemplates() {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: '1',
      name: 'Welcome Message',
      content: 'Welcome {{name}}! Thank you for joining {{company}}. Your account is now active.',
      placeholders: ['name', 'company'],
      category: 'onboarding',
      created: '2024-01-15',
      used: 145
    },
    {
      id: '2',
      name: 'Promotional Offer',
      content: 'Hi {{name}}! Get {{discount}}% off on your next purchase. Use code {{code}}. Valid till {{expiry}}.',
      placeholders: ['name', 'discount', 'code', 'expiry'],
      category: 'promotion',
      created: '2024-01-10',
      used: 89
    },
    {
      id: '3',
      name: 'Appointment Reminder',
      content: 'Hello {{name}}, this is a reminder for your appointment on {{date}} at {{time}}. Location: {{location}}.',
      placeholders: ['name', 'date', 'time', 'location'],
      category: 'reminder',
      created: '2024-01-08',
      used: 67
    }
  ]);

  const [newTemplate, setNewTemplate] = useState({
    name: '',
    content: '',
    category: 'general'
  });

  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);

  const extractPlaceholders = (content: string): string[] => {
    const regex = /\{\{(\w+)\}\}/g;
    const placeholders: string[] = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (!placeholders.includes(match[1])) {
        placeholders.push(match[1]);
      }
    }
    return placeholders;
  };

  const handleCreateTemplate = () => {
    const template: Template = {
      id: Date.now().toString(),
      name: newTemplate.name,
      content: newTemplate.content,
      placeholders: extractPlaceholders(newTemplate.content),
      category: newTemplate.category,
      created: new Date().toISOString().split('T')[0],
      used: 0
    };
    setTemplates([...templates, template]);
    setNewTemplate({ name: '', content: '', category: 'general' });
  };

  const handleEditTemplate = (template: Template) => {
    setEditingTemplate(template);
  };

  const handleUpdateTemplate = () => {
    if (!editingTemplate) return;
    
    const updatedTemplates = templates.map(t => 
      t.id === editingTemplate.id 
        ? { ...editingTemplate, placeholders: extractPlaceholders(editingTemplate.content) }
        : t
    );
    setTemplates(updatedTemplates);
    setEditingTemplate(null);
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      onboarding: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      promotion: 'bg-gradient-to-r from-purple-500 to-pink-500',
      reminder: 'bg-gradient-to-r from-green-500 to-emerald-500',
      general: 'bg-gradient-to-r from-gray-500 to-slate-500'
    };
    return colors[category as keyof typeof colors] || colors.general;
  };

  return (
    <ClientLayout>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 p-8 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Content Templates</h1>
                <p className="text-cyan-100 text-lg">Create and manage reusable SMS templates</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold">{templates.length}</div>
                <div className="text-cyan-100">Total Templates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold">{templates.reduce((sum, t) => sum + t.used, 0)}</div>
                <div className="text-cyan-100">Times Used</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold">{new Set(templates.map(t => t.category)).size}</div>
                <div className="text-cyan-100">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold">{templates.reduce((sum, t) => sum + t.placeholders.length, 0)}</div>
                <div className="text-cyan-100">Placeholders</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-cyan-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <CardTitle className="text-2xl">Your Templates</CardTitle>
                <CardDescription className="text-cyan-100">Manage your SMS content templates</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl p-6 border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-cyan-900">{template.name}</h3>
                            <Badge className={`${getCategoryColor(template.category)} text-white`}>
                              {template.category}
                            </Badge>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-cyan-200 mb-4">
                            <p className="text-gray-700 leading-relaxed">{template.content}</p>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Created: {template.created}</span>
                            <span>Used: {template.used} times</span>
                            {template.placeholders.length > 0 && (
                              <div className="flex items-center space-x-2">
                                <span>Placeholders:</span>
                                <div className="flex space-x-1">
                                  {template.placeholders.map(placeholder => (
                                    <Badge key={placeholder} variant="secondary" className="text-xs">
                                      {placeholder}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button size="sm" variant="outline" className="border-cyan-300 hover:bg-cyan-50">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-blue-300 hover:bg-blue-50">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleEditTemplate(template)}
                            className="border-purple-300 hover:bg-purple-50"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleDeleteTemplate(template.id)}
                            className="border-red-300 hover:bg-red-50 text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Plus className="h-6 w-6" />
                  <span>Create Template</span>
                </CardTitle>
                <CardDescription className="text-purple-100">Design a new SMS template</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Template Name</label>
                  <Input
                    placeholder="Enter template name..."
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                    className="rounded-xl border-2 border-purple-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Category</label>
                  <select 
                    value={newTemplate.category}
                    onChange={(e) => setNewTemplate({ ...newTemplate, category: e.target.value })}
                    className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 bg-white"
                  >
                    <option value="general">General</option>
                    <option value="onboarding">Onboarding</option>
                    <option value="promotion">Promotion</option>
                    <option value="reminder">Reminder</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message Content</label>
                  <Textarea
                    placeholder="Enter your message with placeholders like {{name}}, {{code}}, etc..."
                    value={newTemplate.content}
                    onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                    className="min-h-[120px] rounded-xl border-2 border-purple-200 focus:border-purple-500"
                  />
                  <div className="text-xs text-gray-500">
                    Character count: {newTemplate.content.length}/160
                  </div>
                </div>

                {newTemplate.content && extractPlaceholders(newTemplate.content).length > 0 && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm font-semibold text-blue-800 mb-2">Detected Placeholders:</div>
                    <div className="flex flex-wrap gap-2">
                      {extractPlaceholders(newTemplate.content).map(placeholder => (
                        <Badge key={placeholder} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {placeholder}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleCreateTemplate}
                  disabled={!newTemplate.name || !newTemplate.content}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl py-3 text-lg font-semibold"
                >
                  Create Template
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <CardTitle className="text-lg">Placeholder Guide</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3 border border-amber-200">
                    <div className="font-semibold text-amber-800">Common Placeholders:</div>
                    <div className="mt-2 space-y-1 text-gray-600">
                      <div>• <code className="bg-gray-100 px-1 rounded">{{name}}</code> - Customer name</div>
                      <div>• <code className="bg-gray-100 px-1 rounded">{{code}}</code> - Promo/verification code</div>
                      <div>• <code className="bg-gray-100 px-1 rounded">{{amount}}</code> - Monetary amount</div>
                      <div>• <code className="bg-gray-100 px-1 rounded">{{date}}</code> - Date value</div>
                      <div>• <code className="bg-gray-100 px-1 rounded">{{company}}</code> - Company name</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {editingTemplate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl mx-4 border-0 shadow-2xl bg-white rounded-3xl">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-3xl">
                <CardTitle className="text-2xl">Edit Template</CardTitle>
                <CardDescription className="text-indigo-100">Update your template content</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Template Name</label>
                  <Input
                    value={editingTemplate.name}
                    onChange={(e) => setEditingTemplate({ ...editingTemplate, name: e.target.value })}
                    className="rounded-xl border-2 border-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message Content</label>
                  <Textarea
                    value={editingTemplate.content}
                    onChange={(e) => setEditingTemplate({ ...editingTemplate, content: e.target.value })}
                    className="min-h-[120px] rounded-xl border-2 border-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="flex space-x-4">
                  <Button 
                    onClick={handleUpdateTemplate}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-xl"
                  >
                    Update Template
                  </Button>
                  <Button 
                    onClick={() => setEditingTemplate(null)}
                    variant="outline"
                    className="flex-1 rounded-xl border-2 border-gray-300"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </ClientLayout>
  );
}
