/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveView } from '../types';
import { SERVICES, ASSETS } from '../data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  Building2, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  Gauge
} from 'lucide-react';

interface ContactViewProps {
  selectedServiceInquiry: string;
  setSelectedServiceInquiry: (serviceTitle: string) => void;
}

export default function ContactView({ selectedServiceInquiry, setSelectedServiceInquiry }: ContactViewProps) {
  // Form fields - simplified for Contact Us
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status states
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successSubmission, setSuccessSubmission] = useState<any | null>(null);

  // Sync state if selectedServiceInquiry changes
  useEffect(() => {
    if (selectedServiceInquiry) {
      setSubject(selectedServiceInquiry);
    }
  }, [selectedServiceInquiry]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    if (!name || !email || !message) {
      setSubmitError('Please complete all required fields (Name, Email, Message).');
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
          company: '',
          phone: '',
          serviceInterest: subject || 'General Inquiry',
          message
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
      setSubject('');
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
              ENGAGEMENT REGISTRY // DISPATCH INTAKE PROTOCOL
            </span>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Get in Touch <br />
              <span className="text-slate-400">with Capella Integrated Global.</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Contact Capella Integrated Global Limited to discuss your business requirements. A quote-request form can be configured when the client&apos;s preferred enquiry workflow is ready.
            </p>
          </div>
        </div>
      </section>


      {/* 2. CORE BALANCED CONTENT SPLIT (Contact Info side-by-side with Form) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Contact info, Business hours, Response time guarantee */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brand-orange">
                  // CONTACT DIRECTORIES
                </span>
                <h2 className="text-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Capella Contact Details
                </h2>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Reach us directly by phone or email during business hours.
                </p>
              </div>

              {/* Minimal Staggered Directory Blocks */}
              <div className="flex flex-col gap-8 border-l border-slate-200 pl-6 relative">
                <div className="absolute top-0 left-0 h-4 w-1 bg-brand-orange -translate-x-[2.5px]" />
                
                {/* Block 1 */}
                <div className="group relative">
                  <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase block mb-1">
                    [01] OFFICE ADDRESS
                  </span>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                    Capella Integrated Global Limited
                  </h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed font-light">
                    Plot 471, behind Banilux Motors<br />
                    FCT, Abuja
                  </p>
                </div>

                {/* Block 2 */}
                <div className="group relative">
                  <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase block mb-1">
                    [02] CONTACT DETAILS
                  </span>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                    Phone &amp; Email
                  </h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed font-light">
                    Phone: <span className="font-semibold text-slate-900">07062062322</span><br />
                    Phone: <span className="font-semibold text-slate-900">09048486637</span><br />
                    Email: <span className="font-semibold text-slate-900">info@capella.com.ng</span>
                  </p>
                </div>

                {/* Block 3 */}
                <div className="group relative">
                  <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase block mb-1">
                    [03] BUSINESS HOURS
                  </span>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3">
                    Opening Hours
                  </h4>
                  <div className="space-y-2 text-xs font-light text-slate-500">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                      <span>Monday – Friday</span>
                      <span className="font-mono text-slate-900 font-medium">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                      <span>Saturday</span>
                      <span className="font-mono text-brand-orange font-bold">9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>WhatsApp &amp; social media</span>
                      <span className="font-mono text-slate-900 font-medium">Details pending</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* RIGHT COLUMN: Contact Form / Technical Receipt Panel */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/50 border-t-4 border-slate-950 border-x border-b border-slate-200/80 rounded-b p-6 sm:p-10 shadow-sm relative">
                
                {successSubmission ? (
                  /* Elegant Fuel Ticket Receipt */
                  <div className="flex flex-col gap-6 py-4 animate-fade-in text-center items-center" id="contact-success-panel">
                    <div className="h-14 w-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-mono text-emerald-600 font-bold tracking-widest uppercase block">
                        TRANSMISSION ACCEPTED // LOGGED TO ABJ_QUEUE
                      </span>
                      <h3 className="text-display text-2xl font-extrabold text-slate-950">
                        Fuel Quote Request Logged.
                      </h3>
                      <p className="text-slate-500 text-xs max-w-md mx-auto font-light leading-relaxed">
                        Your parameters have been queued. A senior logistics coordinator has been assigned and is reviewing your delivery metrics.
                      </p>
                    </div>

                    {/* Message Receipt Card */}
                    <div className="w-full bg-white border border-slate-200 rounded p-6 text-left text-xs flex flex-col gap-4 mt-2 shadow-inner font-light">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                        <span className="text-slate-400 font-mono uppercase tracking-widest text-[9px]">Message ID</span>
                        <span className="font-mono text-slate-950 font-bold text-[11px]">{successSubmission.id}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Name</span>
                          <span className="font-bold text-slate-900 block mt-1">{successSubmission.name}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Email</span>
                          <span className="font-bold text-slate-900 block mt-1">{successSubmission.email}</span>
                        </div>
                      </div>

                      <div className="border-t border-slate-100 pt-4">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-mono">Message</span>
                        <p className="text-slate-600 mt-2 italic leading-relaxed text-[11px] font-normal bg-slate-50 p-3 rounded border border-slate-100">
                          &quot;{successSubmission.message}&quot;
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSuccessSubmission(null)}
                      className="mt-6 border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-widest font-mono transition-all cursor-pointer rounded"
                      id="btn-submit-another"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                ) : (
                  /* Beautifully Configured Diesel Form */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8" id="contact-form">
                    
                    <div>
                      <h3 className="text-display text-lg font-extrabold text-slate-900">
                        Send Us a Message
                      </h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>

                    {submitError && (
                      <div className="p-4 rounded bg-red-50 border border-red-100 text-xs text-red-600 flex items-start gap-2.5" id="form-error-alert">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Inputs Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-between" htmlFor="input-name">
                          <span>[01] Your Name *</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            id="input-name"
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
                        <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="input-email">
                          [02] Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <input
                            id="input-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="e.g. a.benson@email.com"
                            className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Inputs Row 2: Subject */}
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="input-subject">
                        [03] Subject
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="input-subject"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. General Inquiry"
                          className="w-full text-xs rounded border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-slate-900 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                        />
                      </div>
                    </div>

                    {/* Inputs Row 3: Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider" htmlFor="input-message">
                        [04] Your Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-400" />
                        <textarea
                          id="input-message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={6}
                          placeholder="Write your message here..."
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
                      id="btn-form-submit"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
