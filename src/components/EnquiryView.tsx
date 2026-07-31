/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveView } from '../types';
import { SERVICES } from '../data';
import { 
  Building2, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  User,
  Mail,
  Phone,
  FileText
} from 'lucide-react';

interface EnquiryViewProps {
  selectedServiceInquiry: string;
  setSelectedServiceInquiry: (serviceTitle: string) => void;
}

export default function EnquiryView({ selectedServiceInquiry, setSelectedServiceInquiry }: EnquiryViewProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterest, setServiceInterest] = useState(selectedServiceInquiry || '');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [message, setMessage] = useState('');

  // Status states
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successSubmission, setSuccessSubmission] = useState<any | null>(null);

  // Sync state if selectedServiceInquiry changes
  useEffect(() => {
    if (selectedServiceInquiry) {
      setServiceInterest(selectedServiceInquiry);
    }
  }, [selectedServiceInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    if (!name || !email || !company || !serviceInterest) {
      setSubmitError('Please complete all required fields (Name, Email, Company, Service).');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          serviceInterest,
          message: `Estimated timeline: ${estimatedTime}\n\nAdditional details: ${message}`
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setSuccessSubmission(data.submission);
      
      // Clear form
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setServiceInterest('');
      setEstimatedTime('');
      setMessage('');
      setSelectedServiceInquiry('');
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected database/server error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. CINEMATIC INTRO HEADER */}
      <section className="relative bg-slate-950 text-white py-24 border-b border-slate-900 overflow-hidden">
        {/* Repeating diagonal grid pattern and subtle light leaks */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-15" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-900/40 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl flex flex-col justify-center">
            {/* Orange bar highlight */}
            <div className="w-12 h-1.5 bg-brand-orange mb-6"></div>

            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand-orange mb-3 block">
              SERVICE ENQUIRY // PROJECT INTAKE PROTOCOL
            </span>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Enquire About <br />
              <span className="text-slate-400">Our Services.</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Tell us about your project requirements. Our team will review your enquiry and provide a tailored response within 4 hours.
            </p>
          </div>
        </div>
      </section>


      {/* 2. ENQUIRY FORM SECTION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          
          <div className="bg-slate-50/50 border-t-4 border-slate-950 border-x border-b border-slate-200/80 rounded-b p-6 sm:p-10 shadow-sm relative">
            
            {successSubmission ? (
              /* Success Receipt */
              <div className="flex flex-col gap-6 py-4 animate-fade-in text-center items-center" id="enquiry-success-panel">
                <div className="h-14 w-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="h-7 w-7" />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono text-emerald-600 font-bold tracking-widest uppercase block">
                    ENQUIRY RECEIVED // QUEUED FOR REVIEW
                  </span>
                  <h3 className="text-display text-2xl font-extrabold text-slate-950">
                    Service Enquiry Submitted.
                  </h3>
                  <p className="text-slate-500 text-xs max-w-md mx-auto font-light leading-relaxed">
                    Your project enquiry has been logged. A specialist will review your requirements and contact you shortly.
                  </p>
                </div>

                <div className="w-full bg-white border border-slate-200 rounded p-6 text-left text-xs flex flex-col gap-4 mt-2 shadow-inner font-light">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-slate-400 font-mono uppercase tracking-widest text-[9px]">Enquiry ID</span>
                    <span className="font-mono text-slate-950 font-bold text-[11px]">{successSubmission.id}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Contact Person</span>
                      <span className="font-bold text-slate-900 block mt-1">{successSubmission.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Company</span>
                      <span className="font-bold text-slate-900 block mt-1">{successSubmission.company}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 border-t border-slate-50 pt-3">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Service Interest</span>
                      <span className="font-bold text-slate-900 block mt-1">{successSubmission.serviceInterest}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Response Priority</span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider bg-orange-50 text-brand-orange font-bold px-2 py-0.5 rounded mt-1 border border-brand-orange/10">
                        <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
                        Priority SLA (4H)
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSuccessSubmission(null)}
                  className="mt-6 border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-widest font-mono transition-all cursor-pointer rounded"
                  id="btn-submit-another-enquiry"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* Enquiry Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" id="enquiry-form">
                
                <div>
                  <h3 className="text-display text-lg font-extrabold text-slate-900">
                    Service Enquiry Form
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                    Please provide your project details below. Fields marked with asterisk (*) are required.
                  </p>
                </div>

                {submitError && (
                  <div className="p-4 rounded bg-red-50 border border-red-100 text-xs text-red-600 flex items-start gap-2.5" id="enquiry-error-alert">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Inputs Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between" htmlFor="enquiry-name">
                      <span>[01] Full Name *</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="enquiry-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Aliyu Benson"
                        className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-email">
                      [02] Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="enquiry-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="e.g. a.benson@company.com"
                        className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>
                </div>

                {/* Inputs Row 2: Company and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-company">
                      [03] Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="enquiry-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        placeholder="e.g. Abuja Construction Ltd"
                        className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-phone">
                      [04] Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="enquiry-phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +234 803 123 4567"
                        className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>
                  </div>
                </div>

                {/* Inputs Row 3: Service interest and estimated time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-service">
                      [05] Service Required *
                    </label>
                    <select
                      id="enquiry-service"
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      required
                      className="w-full text-xs rounded border border-slate-200 bg-white p-3.5 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>{srv.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-time">
                      [06] Estimated Timeline
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <select
                        id="enquiry-time"
                        value={estimatedTime}
                        onChange={(e) => setEstimatedTime(e.target.value)}
                        className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange cursor-pointer appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate">Immediate (within 24 hours)</option>
                        <option value="1 week">Within 1 week</option>
                        <option value="2 weeks">Within 2 weeks</option>
                        <option value="1 month">Within 1 month</option>
                        <option value="3 months">Within 3 months</option>
                        <option value="Ongoing">Ongoing / Long-term</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Inputs Row 4: Additional details */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="enquiry-message">
                    [07] Project Details
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-4 h-4 w-4 text-slate-400" />
                    <textarea
                      id="enquiry-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Please provide additional details about your project requirements, location, specific needs..."
                      className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange font-light"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`group flex items-center justify-center gap-2 rounded bg-slate-950 text-white hover:bg-brand-orange hover:text-slate-950 py-4.5 text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer ${
                    submitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'
                  }`}
                  id="btn-enquiry-submit"
                >
                  {submitting ? 'Submitting enquiry...' : 'Submit Enquiry'}
                  <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>

              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
