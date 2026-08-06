/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView } from '../types';
import { ASSETS, SECTORS, SERVICES } from '../data';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Activity, 
  TrendingUp, 
  Container, 
  Award, 
  Truck, 
  Gauge, 
  FileText, 
  MapPin, 
  Building2,
  Lock,
  ThumbsUp,
  AlertTriangle,
  Wrench
} from 'lucide-react';

interface HomeViewProps {
  setView: (view: ActiveView) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  // We'll map the 3 custom services from SERVICES data
  const bulkDiesel = SERVICES.find(s => s.id === 'srv-1') || SERVICES[0];
  const emergencyResponse = SERVICES.find(s => s.id === 'srv-2') || bulkDiesel;
  const procurementLogistics = SERVICES.find(s => s.id === 'srv-3') || bulkDiesel;

  // State for expanded sector
  const [expandedSectorId, setExpandedSectorId] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. INDUSTRY-SPECIFIC HERO SECTION */}
      <section className="relative min-h-[90vh] w-full bg-slate-950 overflow-hidden flex items-center py-24 border-b border-slate-900">
        {/* Premium background image with animated gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.hero}
            alt="Capella Integrated Global Limited"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-50 animate-float"
          />
          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70 animate-gradient-shift" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 industrial-pattern-dark opacity-30" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-[55vh]">
          
          <div className="max-w-4xl flex flex-col justify-center animate-fade-in-up">
            {/* Animated orange accent highlight */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-orange to-brand-accent mb-8 rounded-full animate-pulse-glow"></div>

            <h1 className="text-display text-4.5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Integrated Solutions. <br />
              <span className="gradient-text">Trusted Results.</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl font-light">
              Capella Integrated Global Limited provides integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setView(ActiveView.CONTACT)}
                className="btn-primary px-10 py-4.5 text-slate-950 font-extrabold text-xs uppercase tracking-widest cursor-pointer rounded font-bold"
                id="hero-btn-quote"
              >
                Request a Quote
              </button>
              <button
                onClick={() => setView(ActiveView.SERVICES)}
                className="px-10 py-4.5 border-2 border-brand-orange/50 hover:border-brand-orange text-white font-extrabold text-xs uppercase tracking-widest transition-all active:scale-95 glass-dark cursor-pointer rounded font-bold hover:bg-brand-orange/10"
                id="hero-btn-services"
              >
                View Our Services
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. STATS / TRUST STRIP (Industry-Specific Numbers directly after hero) */}
      <section className="gradient-primary text-white py-16 border-b border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern-dark opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            <div className="flex flex-col gap-1 border-l-4 border-brand-orange pl-6 glass-dark p-4 rounded-lg card-hover animate-fade-in-up" style={{animationDelay: '0.1s'}} id="trust-stat-liters">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text font-mono">
                EST. 2024
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-mono">
                Capella Integrated Global Limited
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-4 border-brand-orange pl-6 glass-dark p-4 rounded-lg card-hover animate-fade-in-up" style={{animationDelay: '0.2s'}} id="trust-stat-response">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text font-mono">
                5 States
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-mono">
                Areas covered in Nigeria
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-4 border-brand-orange pl-6 glass-dark p-4 rounded-lg card-hover animate-fade-in-up" style={{animationDelay: '0.3s'}} id="trust-stat-facilities">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text font-mono">
                15+ Industries
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-mono">
                Industries served
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-4 border-brand-orange pl-6 glass-dark p-4 rounded-lg card-hover animate-fade-in-up" style={{animationDelay: '0.4s'}} id="trust-stat-registered">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text font-mono flex items-center gap-1">
                NIGERIA
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-mono">
                Registered Nigerian Company
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (With Real Pain Points Grounding) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 max-w-5xl">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
                // SYSTEM CAPABILITIES
              </span>
              <h2 className="text-display text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-900 mt-2 leading-[1.15]">
                Integrated Solutions Built Around Your Business Needs
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              We deliver innovative, efficient, and cost-effective solutions tailored to corporate organisations, government institutions, and private businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Bulk Supply */}
            <div className="group bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange duration-300 rounded-lg shadow-sm">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white mb-6 group-hover:bg-brand-orange group-hover:text-slate-950 transition-colors">
                  <Container className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{bulkDiesel.title}</h3>
                <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-semibold">Bulk Logistics</span>
                <p className="text-slate-500 text-xs leading-relaxed mt-4 mb-6 font-light">
                  {bulkDiesel.shortDescription}
                </p>
                <div className="border-t border-slate-100 pt-4 mb-4">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">SOLVES PAIN POINT:</span>
                  <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3 text-brand-orange" />
                    Unpredictable bulk pricing &amp; volume theft
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setView(ActiveView.SERVICES)}
                className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-brand-orange transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Specifications &rarr;
              </button>
            </div>

            {/* Service 2: Emergency */}
            <div className="group bg-slate-950 text-white p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-2xl border-t-4 border-brand-orange duration-300 rounded-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-slate-950 mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{emergencyResponse.title}</h3>
                <span className="text-[9px] font-mono bg-slate-900 text-brand-orange px-2 py-0.5 rounded uppercase font-semibold">Priority 24/7 SLA</span>
                <p className="text-slate-400 text-xs leading-relaxed mt-4 mb-6 font-light">
                  {emergencyResponse.shortDescription}
                </p>
                <div className="border-t border-slate-900 pt-4 mb-4">
                  <span className="text-[9px] font-mono text-slate-500 block mb-1">SOLVES PAIN POINT:</span>
                  <span className="text-[10px] font-bold text-slate-200 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3 text-brand-orange animate-pulse" />
                    Sudden grid failure with empty backup tanks
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setView(ActiveView.SERVICES)}
                className="text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-white transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Emergency Protocol &rarr;
              </button>
            </div>

            {/* Service 3: Procurement & Logistics */}
            <div className="group bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange duration-300 rounded-lg shadow-sm">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white mb-6 group-hover:bg-brand-orange group-hover:text-slate-950 transition-colors">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{procurementLogistics.title}</h3>
                <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-semibold">Supply Automation</span>
                <p className="text-slate-500 text-xs leading-relaxed mt-4 mb-6 font-light">
                  {procurementLogistics.shortDescription}
                </p>
                <div className="border-t border-slate-100 pt-4 mb-4">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">SOLVES PAIN POINT:</span>
                  <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3 text-brand-orange" />
                    Manual scheduling &amp; remote tank fraud
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setView(ActiveView.SERVICES)}
                className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-brand-orange transition-colors flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Specifications &rarr;
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY US / TRUST SECTION (Specifically addressing buyer concerns) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Trust metrics explanation */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
                // COMPLIANCE & TRUST METRICS
              </span>
              <h2 className="text-display text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Guaranteed Fuel Purity. Zero Operational Downtime.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Industrial generators and heavy machinery breakdown instantly when fed adulterated, water-mixed, or dirty diesel. Capella enforces strict quality checks that protect your investment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                
                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <ShieldCheck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Fuel Purity</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      We guarantee high-quality fuel with proper filtration and quality checks before delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Truck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Guaranteed &amp; Reliable Delivery</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      We ensure timely and dependable delivery to meet your operational needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Gauge className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Process</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      Clear and straightforward processes with transparent pricing and service terms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Activity className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Emergency Diesel Request Support</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      Emergency fuel delivery available upon request for urgent operational needs.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Credentials Card with regulatory compliance details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 bg-slate-950 rounded border border-slate-900 text-white relative overflow-hidden shadow-2xl">
                {/* Background decorative watermark */}
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Award className="h-40 w-40 text-white" />
                </div>
                
                <div className="w-12 h-1.5 bg-brand-orange mb-6"></div>
                
                <h3 className="text-display text-lg font-bold tracking-tight text-white mb-2">
                  Capella Company Credentials
                </h3>
                <p className="text-slate-400 text-xs font-light mb-6">
                  Registered Nigerian company committed to quality service and reliable operations.
                </p>
                
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Company Registration</span>
                    <span className="text-white font-bold text-right">CAC Registered</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Year Established</span>
                    <span className="text-brand-orange font-bold text-right">2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Service Coverage</span>
                    <span className="text-white font-bold text-right">5 States</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Fuel Quality</span>
                    <span className="text-white font-bold text-right">Purity Guaranteed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Service Type</span>
                    <span className="text-emerald-400 font-bold text-right">Integrated Solutions</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-3 bg-slate-900/40 p-4 rounded text-[10px] text-slate-400">
                  <Lock className="h-4 w-4 text-brand-orange shrink-0" />
                  <span>COMMITTED TO PROFESSIONAL SERVICE AND RELIABLE DELIVERY</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTORS WE SERVE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col gap-6 mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
              // SEGMENT DIRECTORY
            </span>
            <h2 className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Who We Serve: Powering Critical Abuja Operations
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-light max-w-3xl">
              Our operations guarantee high-purity fuel delivery for four core pillars of commercial stability in the Federal Capital Territory. We adapt strictly to your mechanical setup.
            </p>
          </div>

          {/* Desktop Layout: Left list + Right panel */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Industry list */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {SECTORS.map((sector) => {
                let IconComponent = Building2;
                if (sector.id === 'sec-1') IconComponent = Activity;
                if (sector.id === 'sec-3') IconComponent = Container;
                if (sector.id === 'sec-4') IconComponent = Wrench;

                const isSelected = expandedSectorId === sector.id;

                return (
                  <button
                    key={sector.id}
                    onClick={() => setExpandedSectorId(sector.id)}
                    className={`flex gap-4 p-5 rounded-lg transition-all duration-200 text-left border ${
                      isSelected 
                        ? 'bg-slate-950 text-white border-slate-950' 
                        : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100/50 hover:border-slate-300'
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded ${
                      isSelected ? 'bg-brand-orange text-slate-950' : 'bg-slate-950 text-white'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>{sector.title}</h4>
                      <p className={`text-xs mt-1 leading-relaxed font-light ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{sector.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Detail panel */}
            <div className="lg:col-span-7">
              {expandedSectorId ? (() => {
                const selectedSector = SECTORS.find(s => s.id === expandedSectorId);
                if (!selectedSector) return null;

                let IconComponent = Building2;
                if (selectedSector.id === 'sec-1') IconComponent = Activity;
                if (selectedSector.id === 'sec-3') IconComponent = Container;
                if (selectedSector.id === 'sec-4') IconComponent = Wrench;

                return (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <IconComponent className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div>
                        <h3 className="text-display text-2xl font-bold text-slate-900">{selectedSector.title}</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Industry Profile</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 mb-3">About {selectedSector.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {selectedSector.fullDescription}
                        </p>
                      </div>
                      {selectedSector.image && (
                        <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                          <img
                            src={selectedSector.image}
                            alt={selectedSector.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })() : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 mx-auto mb-4">
                      <Building2 className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-500 font-light">Select an industry to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout: Accordion */}
          <div className="lg:hidden flex flex-col gap-4">
            {SECTORS.map((sector) => {
              let IconComponent = Building2;
              if (sector.id === 'sec-1') IconComponent = Activity;
              if (sector.id === 'sec-3') IconComponent = Container;
              if (sector.id === 'sec-4') IconComponent = Wrench;

              const isExpanded = expandedSectorId === sector.id;

              return (
                <div key={sector.id} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedSectorId(isExpanded ? null : sector.id)}
                    className="w-full flex gap-4 p-5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-200 text-left"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-950 text-white">
                      <IconComponent className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900">{sector.title}</h4>
                        <span className="text-brand-orange transition-transform duration-200">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">{sector.description}</p>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-200 p-6 bg-white animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 mb-3">About {sector.title}</h5>
                          <p className="text-xs text-slate-600 leading-relaxed font-light">
                            {sector.fullDescription}
                          </p>
                        </div>
                        {sector.image && (
                          <div className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                            <img
                              src={sector.image}
                              alt={sector.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. AUTHORITATIVE CALL TO ACTION */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden border-t border-slate-950">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side Message */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange font-bold mb-3 block">
                // SECURE PROJECT GATEWAY
              </span>
              <h2 className="text-display text-3xl sm:text-4.5xl font-extrabold tracking-tight leading-[1.15] text-white">
                Secure Your Zero-Downtime Fuel Contract Today.
              </h2>
              <p className="text-slate-400 text-sm font-light mt-4 max-w-xl leading-relaxed">
                Our regional dispatch control desk is fully active. Submit your monthly fuel requirements or request an emergency backup quote. Expect an expert-reviewed response within 4 hours.
              </p>
            </div>

            {/* Right side Actions */}
            <div className="lg:col-span-5 flex flex-col gap-5 w-full">
              <button
                onClick={() => setView(ActiveView.CONTACT)}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-slate-950 font-bold text-xs uppercase tracking-widest py-4 transition-all active:scale-95 text-center shadow-lg hover:shadow-brand-orange/10 cursor-pointer rounded"
                id="cta-btn-quote-footer"
              >
                Request a Fuel Quote
              </button>
              <button
                onClick={() => setView(ActiveView.ABOUT)}
                className="w-full border border-slate-700 bg-slate-950/40 hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-widest py-4 transition-all hover:text-white active:scale-95 text-center cursor-pointer rounded"
                id="cta-btn-compliance"
              >
                Review Quality Standards
              </button>
              
              <div className="text-center font-mono text-[9px] text-slate-500 tracking-wider">
                [ CUSTODY-TRANSFER SYSTEM SECURITY ENFORCED ]
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
