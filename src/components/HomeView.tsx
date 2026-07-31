/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  // We'll map the 4 custom services from SERVICES data
  const bulkDiesel = SERVICES.find(s => s.id === 'srv-1') || SERVICES[0];
  const retailScheduled = SERVICES.find(s => s.id === 'srv-2') || bulkDiesel;
  const emergencyResponse = SERVICES.find(s => s.id === 'srv-3') || bulkDiesel;
  const logisticsDistribution = SERVICES.find(s => s.id === 'srv-4') || bulkDiesel;

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. INDUSTRY-SPECIFIC HERO SECTION */}
      <section className="relative min-h-[85vh] w-full bg-slate-950 overflow-hidden flex items-center py-24 border-b border-slate-900">
        {/* Premium background image and dark overlays for superb legibility and contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.hero}
            alt="Capella Integrated Global Limited"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Deep professional linear and radial gradient overlays to block out background clutter */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-[55vh]">
          
          <div className="max-w-4xl flex flex-col justify-center">
            {/* Elegant orange accent highlight */}
            <div className="w-20 h-1.5 bg-brand-orange mb-8 rounded-full"></div>

            <h1 className="text-display text-4.5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Integrated Solutions. <br />
              <span className="text-slate-300">Trusted Results.</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl font-light">
              Capella Integrated Global Limited provides integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => setView(ActiveView.CONTACT)}
                className="px-10 py-4.5 bg-brand-orange hover:bg-brand-orange-hover text-slate-950 font-extrabold text-xs uppercase tracking-widest transition-all active:scale-95 cursor-pointer shadow-xl hover:shadow-brand-orange/20 rounded font-bold"
                id="hero-btn-quote"
              >
                Request a Quote
              </button>
              <button
                onClick={() => setView(ActiveView.SERVICES)}
                className="px-10 py-4.5 border border-slate-600 hover:border-slate-400 text-white font-extrabold text-xs uppercase tracking-widest transition-all active:scale-95 bg-slate-950/40 backdrop-blur-sm cursor-pointer rounded font-bold"
                id="hero-btn-services"
              >
                View Our Services
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. STATS / TRUST STRIP (Industry-Specific Numbers directly after hero) */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            <div className="flex flex-col gap-1 border-l-2 border-brand-orange pl-6" id="trust-stat-liters">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                EST. 2024
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-mono">
                Capella Integrated Global Limited
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-brand-orange pl-6" id="trust-stat-response">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                5 States
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-mono">
                Areas covered in Nigeria
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-brand-orange pl-6" id="trust-stat-facilities">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                15+ Industries
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-mono">
                Industries served
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-brand-orange pl-6" id="trust-stat-registered">
              <span className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono flex items-center gap-1">
                NIGERIA
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-mono">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
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

            {/* Service 2: Scheduled */}
            <div className="group bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange duration-300 rounded-lg shadow-sm">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white mb-6 group-hover:bg-brand-orange group-hover:text-slate-950 transition-colors">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{retailScheduled.title}</h3>
                <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-semibold">Scheduled Fleet</span>
                <p className="text-slate-500 text-xs leading-relaxed mt-4 mb-6 font-light">
                  {retailScheduled.shortDescription}
                </p>
                <div className="border-t border-slate-100 pt-4 mb-4">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">SOLVES PAIN POINT:</span>
                  <span className="text-[10px] font-bold text-slate-800 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3 text-brand-orange" />
                    Adulterated diesel &amp; clogged injectors
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

            {/* Service 3: Emergency */}
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

            {/* Service 4: Distribution Management */}
            <div className="group bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange duration-300 rounded-lg shadow-sm">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white mb-6 group-hover:bg-brand-orange group-hover:text-slate-950 transition-colors">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{logisticsDistribution.title}</h3>
                <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase font-semibold">Supply Automation</span>
                <p className="text-slate-500 text-xs leading-relaxed mt-4 mb-6 font-light">
                  {logisticsDistribution.shortDescription}
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
                Industrial generators and heavy machinery breakdown instantly when fed adulterated, water-mixed, or dirty diesel. Primo enforces extreme compliance checks that protect your investment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                
                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <ShieldCheck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Fuel Purity Certification</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      Water and particle filtration down to 5 microns. Density checked and certified in your presence before offloading begins.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Truck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Delivery Reliability &amp; GPS</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      Real-time GPS tracking on our entire fleet. Live transit notifications direct to your facility security desk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Gauge className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Digital Metering</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      Eradicate manual dipstick volume tampering. We offload strictly using sealed, custody-transfer digital flow meters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm shrink-0">
                    <Activity className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24/7 Emergency Dispatch</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                      A dedicated standby fleet of fully loaded tankers positioned at key Abuja coordinate nodes for rapid grid backup.
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
                  Primo National Fuel Credentials
                </h3>
                <p className="text-slate-400 text-xs font-light mb-6">
                  Certified operations under the strict purview of the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA).
                </p>
                
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Regulatory Body</span>
                    <span className="text-white font-bold text-right">NMDPRA</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">License Authority No.</span>
                    <span className="text-brand-orange font-bold text-right">NMDPRA/AGO-DFL-2026</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Fuel Grade Standards</span>
                    <span className="text-white font-bold text-right">NIS 554 Compliant (Low-Sulfur AGO)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-slate-400">Digital Flow Calibration</span>
                    <span className="text-white font-bold text-right">DPR Certified Semi-Annually</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Water PPM Threshold</span>
                    <span className="text-emerald-400 font-bold text-right">&lt; 200 PPM Guarantee</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-3 bg-slate-900/40 p-4 rounded text-[10px] text-slate-400">
                  <Lock className="h-4 w-4 text-brand-orange shrink-0" />
                  <span>ALL CAPTAINS POSSESS INDEPENDENT HAULAGE SECURITY CREDENTIALS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTORS WE SERVE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange font-bold">
                // SEGMENT DIRECTORY
              </span>
              <h2 className="text-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Who We Serve: Powering Critical Abuja Operations
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Our operations guarantee high-purity fuel delivery for four core pillars of commercial stability in the Federal Capital Territory. We adapt strictly to your mechanical setup.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                {SECTORS.map((sector) => {
                  let IconComponent = Building2;
                  if (sector.id === 'sec-1') IconComponent = Activity;
                  if (sector.id === 'sec-3') IconComponent = Container;
                  if (sector.id === 'sec-4') IconComponent = Wrench;

                  return (
                    <div key={sector.id} className="flex gap-4 p-5 rounded-md bg-slate-50 border-l-4 border-slate-950 hover:border-brand-orange hover:bg-slate-100/50 transition-all duration-200">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-950 text-white">
                        <IconComponent className="h-5 w-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{sector.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">{sector.description}</p>
                        <div className="text-[10px] text-brand-orange font-mono font-semibold uppercase tracking-wider mt-2 flex items-center gap-1.5">
                          <span className="h-1 w-1 bg-brand-orange rounded-full" />
                          {sector.marketShare}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Detailed visuals representing fuel tanks & tanker delivery */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-4/3 overflow-hidden rounded shadow-2xl bg-slate-950 relative group border border-slate-800">
                {/* We'll use a stylized vector dashboard illustration representing dynamic dispatch flow */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white bg-slate-950/80">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block">STUTTGART / ABUJA GATEWAY</span>
                      <h3 className="font-extrabold text-lg text-white">Digital Dispatch &amp; Volume Control</h3>
                    </div>
                    <span className="text-[10px] font-mono text-brand-orange bg-slate-900 border border-brand-orange/30 px-2 py-1 rounded">
                      ACTIVE LINK
                    </span>
                  </div>

                  {/* Interconnected supply lines mockup in SVG */}
                  <div className="h-32 flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-full h-full opacity-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150">
                      <path d="M 10,75 Q 100,20 200,75 T 390,75" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="5 5" />
                      <circle cx="200" cy="75" r="30" stroke="#f59e0b" strokeWidth="1" fill="none" />
                      <circle cx="200" cy="75" r="4" fill="#f59e0b" />
                      <path d="M 50,120 L 350,120" stroke="#475569" strokeWidth="1" fill="none" />
                      <line x1="200" y1="20" x2="200" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>
                    
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="h-3 w-3 bg-slate-700 rounded-full mb-1" />
                      <span className="text-[8px] font-mono text-slate-400">DEP_CENTRAL</span>
                    </div>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="h-3 w-3 bg-brand-orange rounded-full mb-1 animate-ping" />
                      <span className="text-[8px] font-mono text-brand-orange font-bold">CLIENT_DISCHARGE</span>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 p-3 rounded shadow-lg text-center max-w-[180px] z-20">
                      <span className="text-[8px] font-mono text-slate-500 block">PUMPING COEFFICIENT</span>
                      <span className="text-xs font-mono font-extrabold text-white">998.4 LTR / MIN</span>
                      <div className="h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-4 flex justify-between text-[9px] font-mono text-slate-400">
                    <div>
                      SYSTEM STATUS: <span className="text-emerald-400 font-bold">SECURE DISPATCH</span>
                    </div>
                    <div>
                      TRANSIT LOCK: <span className="text-white">ENCRYPTED</span>
                    </div>
                  </div>
                </div>

                <img
                  src={ASSETS.whoWeServe}
                  alt="Industrial Fuel Tanks"
                  className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset border */}
              <div className="absolute -bottom-4 -right-4 h-full w-full border border-slate-200 rounded -z-10 hidden sm:block" />
            </div>

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
