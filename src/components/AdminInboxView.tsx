/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ContactSubmission } from '../types';
import { 
  Inbox, 
  Search, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Mail, 
  Phone, 
  Building2, 
  AlertCircle,
  ExternalLink,
  ShieldAlert,
  Archive,
  RefreshCw
} from 'lucide-react';

export default function AdminInboxView() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);

  // Fetch submissions from API
  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/contact/submissions');
      if (!response.ok) {
        throw new Error('Failed to retrieve contact submissions from server.');
      }
      const data = await response.json();
      setSubmissions(data);
      
      // Auto-select first one if available and none selected yet
      if (data.length > 0 && !selectedSubId) {
        setSelectedSubId(data[0].id);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected API connection error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Update submission status (PUT)
  const handleUpdateStatus = async (id: string, nextStatus: 'unread' | 'contacted' | 'resolved') => {
    try {
      const response = await fetch(`/api/contact/submissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update status on server.');
      }

      // Update local state
      setSubmissions(prev => 
        prev.map(s => s.id === id ? { ...s, status: nextStatus } : s)
      );
    } catch (err: any) {
      alert(err.message || 'Error updating record.');
    }
  };

  // Delete submission (DELETE)
  const handleDeleteSubmission = async (id: string) => {
    if (!window.confirm('Are you absolutely sure you want to purge this specification brief from the database?')) {
      return;
    }

    try {
      const response = await fetch(`/api/contact/submissions/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete submission from server.');
      }

      // Update local state
      setSubmissions(prev => prev.filter(s => s.id !== id));
      if (selectedSubId === id) {
        setSelectedSubId(null);
      }
    } catch (err: any) {
      alert(err.message || 'Error deleting record.');
    }
  };

  // Compute stat metrics
  const totalCount = submissions.length;
  const unreadCount = submissions.filter(s => s.status === 'unread').length;
  const contactedCount = submissions.filter(s => s.status === 'contacted').length;
  const resolvedCount = submissions.filter(s => s.status === 'resolved').length;

  // Filter & Search results
  const filteredSubmissions = submissions.filter(sub => {
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
    
    const term = searchQuery.toLowerCase();
    const matchesSearch = 
      sub.name.toLowerCase().includes(term) ||
      sub.email.toLowerCase().includes(term) ||
      sub.company.toLowerCase().includes(term) ||
      sub.serviceInterest.toLowerCase().includes(term) ||
      sub.message.toLowerCase().includes(term);

    return matchesStatus && matchesSearch;
  });

  const activeDetail = submissions.find(s => s.id === selectedSubId) || null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      
      {/* Admin header */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-6 px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold block mb-1">
            SECURE ACCESS DESK // ENCRYPTED CONNECTION
          </span>
          <h1 className="text-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Inbox className="h-5 w-5 text-brand-orange" />
            Primo Specifications Intake Portal
          </h1>
        </div>

        <button
          onClick={fetchSubmissions}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white border border-slate-800 bg-slate-900 rounded-md px-3 py-1.5 transition-all"
          id="btn-admin-refresh"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Synchronize Logs
        </button>
      </div>


      {/* Stats counter strip */}
      <div className="border-b border-slate-900 bg-slate-900/20 py-5 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
          
          <div className="bg-slate-900 border border-slate-800/80 p-4 rounded flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">LOGGED REQUESTS</span>
            <span className="text-2xl font-bold text-white font-mono">{totalCount}</span>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 p-4 rounded flex flex-col gap-1 border-l-4 border-l-orange-500">
            <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">UNREAD TICKETS</span>
            <span className="text-2xl font-bold text-brand-orange font-mono">{unreadCount}</span>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 p-4 rounded flex flex-col gap-1 border-l-4 border-l-sky-500">
            <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">UNDER REVIEW</span>
            <span className="text-2xl font-bold text-sky-400 font-mono">{contactedCount}</span>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 p-4 rounded flex flex-col gap-1 border-l-4 border-l-emerald-500">
            <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">RESOLVED BREVE</span>
            <span className="text-2xl font-bold text-emerald-400 font-mono">{resolvedCount}</span>
          </div>

        </div>
      </div>


      {/* Main Layout Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Side: Search & Ticket list (cols 5) */}
        <div className="lg:col-span-5 border-r border-slate-900 flex flex-col min-h-[400px]">
          
          {/* Controls Bar */}
          <div className="p-4 bg-slate-900/30 border-b border-slate-900 flex flex-col sm:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ticket logs..."
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded py-2 pl-9 pr-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-orange"
              />
            </div>

            {/* Filter buttons */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-slate-950 border border-slate-800 rounded px-2.5 py-2 text-slate-300 focus:outline-none focus:border-brand-orange"
            >
              <option value="all">All States</option>
              <option value="unread">Unread</option>
              <option value="contacted">Under Review</option>
              <option value="resolved">Resolved</option>
            </select>

          </div>

          {/* List items */}
          <div className="flex-1 overflow-y-auto max-h-[500px] lg:max-h-[600px] divide-y divide-slate-900/80">
            {loading ? (
              <div className="p-8 text-center text-slate-500 text-xs">Loading records from memory...</div>
            ) : error ? (
              <div className="p-8 text-center text-red-400 text-xs flex flex-col items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="p-12 text-center text-slate-600 text-xs">No specifications match search parameters.</div>
            ) : (
              filteredSubmissions.map((sub) => {
                const isSelected = sub.id === selectedSubId;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubId(sub.id)}
                    className={`w-full text-left p-4 flex flex-col gap-2.5 transition-all focus:outline-none ${
                      isSelected 
                        ? 'bg-slate-900/70 border-l-2 border-brand-orange' 
                        : 'hover:bg-slate-900/30'
                    }`}
                    id={`btn-admin-sub-${sub.id}`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <span className="font-bold text-xs text-white block tracking-tight">{sub.name}</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">{sub.company}</span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-500 whitespace-nowrap">
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-1">
                      <span className="text-[9px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-900 font-mono">
                        {sub.serviceInterest}
                      </span>
                      
                      {/* Status Tag */}
                      <span className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        sub.status === 'unread' ? 'bg-orange-950/80 text-orange-400 border border-orange-900/40' :
                        sub.status === 'contacted' ? 'bg-sky-950/80 text-sky-400 border border-sky-900/40' :
                        'bg-emerald-950/80 text-emerald-400 border border-emerald-900/40'
                      }`}>
                        {sub.status === 'unread' ? 'Unread' : sub.status === 'contacted' ? 'Reviewing' : 'Resolved'}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

        </div>


        {/* Right Side: Specification Details Panel (cols 7) */}
        <div className="lg:col-span-7 bg-slate-950 flex flex-col">
          {activeDetail ? (
            <div className="p-6 md:p-8 flex flex-col gap-6" id="admin-detail-panel">
              
              {/* Detailed Header info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-900">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block mb-1">RECORD RETRIEVAL ID</span>
                  <h2 className="text-display text-lg font-bold text-white font-mono tracking-tight">{activeDetail.id}</h2>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Submitted on: {new Date(activeDetail.createdAt).toLocaleString()}
                  </span>
                </div>

                {/* State Control buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => handleUpdateStatus(activeDetail.id, 'unread')}
                    className={`px-2.5 py-1.5 rounded text-[10px] font-mono tracking-wide uppercase transition-all ${
                      activeDetail.status === 'unread'
                        ? 'bg-orange-500/10 text-brand-orange border border-orange-500/30 font-bold'
                        : 'text-slate-500 hover:text-slate-300 border border-slate-900 bg-slate-900/30'
                    }`}
                    id="btn-admin-status-unread"
                  >
                    Mark Unread
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(activeDetail.id, 'contacted')}
                    className={`px-2.5 py-1.5 rounded text-[10px] font-mono tracking-wide uppercase transition-all ${
                      activeDetail.status === 'contacted'
                        ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold'
                        : 'text-slate-500 hover:text-slate-300 border border-slate-900 bg-slate-900/30'
                    }`}
                    id="btn-admin-status-review"
                  >
                    Reviewing
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(activeDetail.id, 'resolved')}
                    className={`px-2.5 py-1.5 rounded text-[10px] font-mono tracking-wide uppercase transition-all ${
                      activeDetail.status === 'resolved'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold'
                        : 'text-slate-500 hover:text-slate-300 border border-slate-900 bg-slate-900/30'
                    }`}
                    id="btn-admin-status-resolve"
                  >
                    Resolve
                  </button>
                </div>
              </div>

              {/* Sub grid layout columns: core client details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-900/30 p-5 rounded border border-slate-900 text-xs">
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <User className="h-4 w-4 text-brand-orange" />
                    <span className="font-semibold text-slate-300">Intake Contact Person</span>
                  </div>
                  <span className="font-bold text-white text-sm pl-6">{activeDetail.name}</span>
                  
                  <div className="flex items-center gap-2 text-slate-400 mt-2">
                    <Building2 className="h-4 w-4 text-brand-orange" />
                    <span className="font-semibold text-slate-300">Registered Corporate Name</span>
                  </div>
                  <span className="font-bold text-white text-sm pl-6">{activeDetail.company}</span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="h-4 w-4 text-brand-orange" />
                    <span className="font-semibold text-slate-300">Corporate Email Address</span>
                  </div>
                  <a href={`mailto:${activeDetail.email}`} className="text-white hover:text-brand-orange font-mono pl-6 underline inline-flex items-center gap-1">
                    {activeDetail.email}
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <div className="flex items-center gap-2 text-slate-400 mt-2">
                    <Phone className="h-4 w-4 text-brand-orange" />
                    <span className="font-semibold text-slate-300">Secure Direct Line</span>
                  </div>
                  <span className="font-bold text-white text-sm pl-6">{activeDetail.phone}</span>
                </div>

              </div>

              {/* Message requirements content box */}
              <div className="flex flex-col gap-3.5 bg-slate-900/50 p-6 rounded border border-slate-900/80">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-semibold">TENDER BRIEF DETAILS & BLUEPRINT SPECS</span>
                  <span className="text-[9px] font-mono text-brand-orange uppercase border border-brand-orange/30 rounded px-2 py-0.5">
                    {activeDetail.serviceInterest}
                  </span>
                </div>
                
                <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-wrap font-sans bg-slate-950 p-4 rounded border border-slate-900 font-mono italic">
                  "{activeDetail.message}"
                </p>
              </div>

              {/* Action Purge row */}
              <div className="mt-auto pt-6 border-t border-slate-900 flex justify-between items-center text-xs">
                <div className="text-slate-600 font-mono text-[10px] flex items-center gap-1">
                  <ShieldAlert className="h-3.5 w-3.5 text-slate-600" />
                  CONFIDENTIAL INGESTION LOGS
                </div>
                
                <button
                  onClick={() => handleDeleteSubmission(activeDetail.id)}
                  className="flex items-center gap-2 rounded bg-red-900/20 hover:bg-red-900 border border-red-900/40 text-red-400 hover:text-white px-4 py-2 text-xs font-semibold uppercase transition-all"
                  id="btn-admin-purge"
                >
                  <Trash2 className="h-4 w-4" />
                  Purge Specifications Record
                </button>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-600 text-xs">
              <Archive className="h-12 w-12 text-slate-800 mb-4" />
              <span>Select an intake record from the left queue to review technical parameters.</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

// Simple fallback component for User icon mapping
function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
