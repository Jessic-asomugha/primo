/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView, Service } from '../types';
import { SERVICES, TESTIMONIALS, ASSETS } from '../data';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Container,
  Clock,
  Activity,
  TrendingUp,
  Droplet,
  Gauge
} from 'lucide-react';

interface ServicesViewProps {
  setView: (view: ActiveView) => void;
  setSelectedServiceInquiry: (serviceTitle: string) => void;
}

export default function ServicesView({ setView, setSelectedServiceInquiry }: ServicesViewProps) {
  // State for active service capability tab
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES[0].id);

  // State for client review carousel
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);

  // Retrieve active service details
  const activeService = SERVICES.find(s => s.id === activeTabId) || SERVICES[0];

  const handleTestimonialPrev = () => {
    setActiveTestimonialIdx((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleTestimonialNext = () => {
    setActiveTestimonialIdx((prev) => 
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const renderServiceIcon = (iconName: string, className: string = "h-5 w-5 text-brand-orange") => {
    switch (iconName) {
      case 'Container': return <Container className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      default: return <Droplet className={className} />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'srv-1': return ASSETS.hero;
      case 'srv-2': return ASSETS.featuredService;
      case 'srv-3': return ASSETS.whoWeServe;
      case 'srv-4': return ASSETS.telemetry;
      default: return ASSETS.featuredService;
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedServiceInquiry(serviceTitle);
    setView(ActiveView.CONTACT);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. INTRO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 border-b border-slate-800 overflow-hidden">
        {/* repeating diagonal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 z-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl flex flex-col justify-center">
            {/* Orange bar highlight */}
            <div className="w-12 h-1 bg-brand-orange mb-6"></div>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-2 block">
              OPERATIONAL PORTFOLIO &amp; SERVICES
            </span>
            <h1 className="text-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Abuja&apos;s High-Fidelity <br />
              <span className="text-slate-400">Diesel Supply Matrix.</span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-light">
              We operate a dedicated fuel transport fleet, calibrated digital custody meters, and dynamic automated tank telemetry links. Our logistics processes are custom engineered to guarantee zero power downtime and 100% fuel purity.
            </p>
          </div>
        </div>
      </section>


      {/* 2. INTERACTIVE TESTIMONIAL WIDGET (Carousel) */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          
          <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Quote className="h-44 w-44 text-white" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Header metrics */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-semibold">
                  AUDITED CLIENT FEEDBACK // {activeTestimonialIdx + 1} OF {TESTIMONIALS.length}
                </span>
                <div className="flex gap-1">
                  {[...Array(TESTIMONIALS[activeTestimonialIdx].rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
              </div>

              {/* Dynamic Quote Text */}
              <p className="text-display text-base md:text-xl font-medium tracking-tight text-slate-100 italic leading-relaxed min-h-[90px]">
                &quot;{TESTIMONIALS[activeTestimonialIdx].quote}&quot;
              </p>

              {/* Author footer & controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-slate-800 pt-6">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {TESTIMONIALS[activeTestimonialIdx].author}
                  </h4>
                  <span className="text-xs text-slate-400">
                    {TESTIMONIALS[activeTestimonialIdx].role} — <span className="text-brand-orange font-semibold">{TESTIMONIALS[activeTestimonialIdx].company}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTestimonialPrev}
                    className="flex h-10 w-10 items-center justify-center rounded border border-slate-700 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-500 transition-all active:scale-95 cursor-pointer"
                    aria-label="Previous testimonial"
                    id="btn-test-prev"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleTestimonialNext}
                    className="flex h-10 w-10 items-center justify-center rounded border border-slate-700 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-500 transition-all active:scale-95 cursor-pointer"
                    aria-label="Next testimonial"
                    id="btn-test-next"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 3. CAPABILITY TABS & SYSTEM SPECIFICATIONS */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
              // LOGISTICS SERVICES MATRIX
            </span>
            <h2 className="text-display text-3xl font-extrabold tracking-tight text-slate-900">
              Our Core Fuel Logistics Capabilities
            </h2>
            <p className="text-slate-500 text-sm font-light max-w-2xl leading-relaxed">
              Select one of our major logistics tiers to inspect certified specifications, on-site telemetry compliance parameters, and dedicated service features.
            </p>
          </div>

          {/* Horizontal Card Deck */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {SERVICES.map((srv) => {
              const isActive = srv.id === activeTabId;
              const serviceImg = getServiceImage(srv.id);
              
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTabId(srv.id)}
                  className={`group flex flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 bg-white cursor-pointer ${
                    isActive
                      ? 'border-brand-orange ring-2 ring-brand-orange/25 shadow-lg'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                  }`}
                  id={`btn-service-tab-${srv.id}`}
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={serviceImg}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Pulsing indicator if active */}
                    {isActive && (
                      <div className="absolute top-3 right-3 bg-brand-orange text-slate-950 font-bold px-2 py-0.5 rounded text-[8px] tracking-wider uppercase font-mono shadow animate-pulse">
                        Active Specs
                      </div>
                    )}
                  </div>

                  {/* Card textual info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-brand-orange font-bold font-mono uppercase tracking-widest block mb-1">
                        {srv.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-950 tracking-tight leading-snug">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-light mt-2 line-clamp-3 leading-relaxed">
                        {srv.shortDescription}
                      </p>
                    </div>

                    {/* Bottom visual cues */}
                    <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold text-slate-400">
                        {srv.id.toUpperCase()}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors ${
                        isActive ? 'text-brand-orange' : 'text-slate-400 group-hover:text-slate-900'
                      }`}>
                        {isActive ? 'Viewing details' : 'Learn more'} &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Display Panel - Spans full width right below */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm flex flex-col gap-8 min-h-[420px] transition-all duration-300 animate-fade-in">
            
            {/* Meta details & title */}
            <div className="flex flex-col gap-3 pb-6 border-b border-slate-100">
              <div className="inline-flex w-max items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-3 py-1 text-xs font-mono text-brand-orange font-bold uppercase">
                {activeService.category} COMPLIANCE GUARANTEE
              </div>
              
              <h3 className="text-display text-2xl font-bold tracking-tight text-slate-950 mt-1">
                {activeService.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mt-2 font-light">
                {activeService.fullDescription}
              </p>
            </div>

            {/* Sub specifications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Technical Specifications */}
              <div className="flex flex-col gap-4">
                <h4 className="text-display text-xs uppercase font-mono tracking-wider text-slate-500 font-bold border-b border-slate-100 pb-2">
                  TECHNICAL COMPLIANCE LOGS
                </h4>
                <ul className="space-y-3">
                  {activeService.specifications.map((spec, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs text-slate-600 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                      <span className="font-light">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core engineering features */}
              <div className="flex flex-col gap-4">
                <h4 className="text-display text-xs uppercase font-mono tracking-wider text-slate-500 font-bold border-b border-slate-100 pb-2">
                  MANDATED QUALITY CONTROLS
                </h4>
                <ul className="space-y-3">
                  {activeService.features.map((feat, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Interactive Action CTA */}
            <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 leading-relaxed max-w-sm font-light">
                Inquiring about this logistics tier pre-populates your regional contact coordinates to speed up dispatch routing.
              </div>
              
              <button
                onClick={() => handleServiceInquiry(activeService.title)}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded bg-slate-900 hover:bg-brand-orange text-white hover:text-slate-950 px-6 py-3.5 text-xs font-bold tracking-wide uppercase transition-all cursor-pointer"
                id="btn-service-inquiry-cta"
              >
                Inquire About This Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* 4. FINAL CONTRACT CTA */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center gap-5">
          <h2 className="text-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            Deploy Zero-Downtime Fuel Supply resiliencies.
          </h2>
          <p className="text-slate-300 max-w-xl text-xs leading-relaxed font-light">
            Every delivery truck dispatch, density test, and volume calibration is logged in your client portal. Submit your monthly fuel parameters today to secure predictable backup energy.
          </p>
          <button
            onClick={() => setView(ActiveView.CONTACT)}
            className="group flex items-center gap-2 rounded bg-brand-orange hover:bg-brand-orange-hover px-6 py-3 text-sm font-extrabold text-slate-950 transition-all hover:shadow-lg mt-2 cursor-pointer"
            id="services-btn-cta"
          >
            Request a Fuel Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-slate-950" />
          </button>
        </div>
      </section>

    </div>
  );
}
