/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView } from '../types';
import { VALUES, FAQS, ASSETS } from '../data';
import { 
  ShieldCheck, 
  Target, 
  Award,
  ChevronDown, 
  ChevronUp, 
  Clock, 
  FileText, 
  ArrowRight,
  UserCheck,
  TrendingUp,
  Activity,
  Droplet
} from 'lucide-react';

interface AboutViewProps {
  setView: (view: ActiveView) => void;
}

export default function AboutView({ setView }: AboutViewProps) {
  // State for toggling FAQ accordions
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };

  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-brand-orange" />;
      case 'Target': return <Target className="h-6 w-6 text-brand-orange" />;
      case 'Award': return <Award className="h-6 w-6 text-brand-orange" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-brand-orange" />;
      default: return <Droplet className="h-6 w-6 text-brand-orange" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. INTRO HEADER */}
      <section className="relative bg-slate-900 text-white py-20 border-b border-slate-800 overflow-hidden">
        {/* repeating diagonal grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 z-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl flex flex-col justify-center">
            {/* Orange bar highlight */}
            <div className="w-12 h-1 bg-brand-orange mb-6"></div>
            
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-2 block">
              Corporate Background
            </span>
            <h1 className="text-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Integrated Solutions, <br />
              <span className="text-slate-400">Trusted Results.</span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-light">
              Capella Integrated Global Limited is a diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting. We deliver innovative, efficient, and cost-effective solutions tailored to corporate organisations, government institutions, and private businesses.
            </p>
          </div>
        </div>
      </section>


      {/* 2. CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col gap-4 mb-16 max-w-xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-2">// THE CAPELLA WAY</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Integrity, professionalism, innovation, quality, teamwork, and safety guide how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {VALUES.map((val, index) => {
              const borderCol = index % 2 === 0 ? 'border-slate-900' : 'border-brand-orange';
              const bgCol = index % 2 === 0 ? 'bg-slate-50' : 'bg-slate-900 text-white';
              const numColor = index % 2 === 0 ? 'text-slate-300' : 'text-slate-800';
              const descColor = index % 2 === 0 ? 'text-slate-500' : 'text-slate-400';
              const titleColor = index % 2 === 0 ? 'text-slate-950' : 'text-white';
              
              return (
                <div key={val.id} className={`group ${bgCol} p-8 border-l-4 ${borderCol} flex flex-col justify-between hover:shadow-lg transition-all duration-300 rounded-r-lg`}>
                  <div>
                    <div className={`${numColor} font-bold text-4xl mb-4 font-mono`}>0{index + 1}</div>
                    <div className="mb-4">{renderValueIcon(val.iconName)}</div>
                    <h4 className={`text-base font-bold mb-3 ${titleColor}`}>{val.title}</h4>
                    <p className={`${descColor} text-xs leading-relaxed mb-6 font-light`}>{val.description}</p>
                  </div>
                  <div className={`flex items-center ${index % 2 === 0 ? 'text-slate-900' : 'text-brand-orange'} font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:translate-x-1 transition-transform`}>
                    Details &rarr;
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 3. WHY CHOOSE US - CORPORATE HIGHLIGHTS */}
      <section className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">// OPERATIONS MATRIX</span>
              <h2 className="text-display text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Why Choose Capella.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Capella Integrated Global delivers complete business solutions backed by professionalism, integrity, and timely execution. Our focus is building lasting relationships through quality service and dependable performance.
              </p>

              <div className="space-y-4 mt-2">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />,
                    title: 'Experienced Management',
                    desc: 'Our experienced management supports dependable delivery and strong client relationships.'
                  },
                  {
                    icon: <FileText className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />,
                    title: 'Professional Workforce',
                    desc: 'Our professional workforce focuses on quality service tailored to each client.'
                  },
                  {
                    icon: <UserCheck className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />,
                    title: 'Reliable Logistics',
                    desc: 'Reliable logistics support timely execution across our areas of coverage.'
                  }
                ].map((highlight, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200/60 shadow-sm">
                    {highlight.icon}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{highlight.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-slate-900 text-white p-8 rounded-lg border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="h-44 w-44 text-brand-orange" />
              </div>

              <h3 className="text-display text-lg font-bold tracking-tight text-white uppercase tracking-wider">
                COMPANY CREDENTIALS
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Capella Integrated Global Limited is a registered Nigerian company committed to quality service and reliable operations.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-2 text-xs">
                <div className="p-4 rounded bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-brand-orange font-mono font-bold block mb-1">COMPANY REGISTRATION</span>
                  <span className="font-semibold text-white block">CAC REGISTERED</span>
                  <p className="text-[10px] text-slate-500 mt-1">Fully registered with Corporate Affairs Commission.</p>
                </div>
                <div className="p-4 rounded bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-brand-orange font-mono font-bold block mb-1">YEAR ESTABLISHED</span>
                  <span className="font-semibold text-white block">2024</span>
                  <p className="text-[10px] text-slate-500 mt-1">Established to provide integrated business solutions.</p>
                </div>
                <div className="p-4 rounded bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-brand-orange font-mono font-bold block mb-1">SERVICE COVERAGE</span>
                  <span className="font-semibold text-white block">5 STATES</span>
                  <p className="text-[10px] text-slate-500 mt-1">Abuja, Kaduna, Nasarawa, Niger State, and Kogi.</p>
                </div>
                <div className="p-4 rounded bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-brand-orange font-mono font-bold block mb-1">SERVICE TYPE</span>
                  <span className="font-semibold text-white block">INTEGRATED SOLUTIONS</span>
                  <p className="text-[10px] text-slate-500 mt-1">Comprehensive business solutions for clients.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. FAQ ACCORDIONS (Interactive Accordions) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          
          <div className="text-center flex flex-col gap-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">// OPERATIONS FAQS</span>
            <h2 className="text-display text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
              Read comprehensive replies regarding our fuel purity standards, digital metering calibration, and emergency dispatch protocols across Abuja.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-lg transition-all ${
                    isOpen 
                      ? 'border-brand-orange bg-slate-50/50' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-1 focus:ring-brand-orange rounded-lg"
                    aria-expanded={isOpen}
                    id={`btn-faq-toggle-${faq.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider bg-slate-100 text-slate-500 font-mono font-bold px-2 py-0.5 rounded w-max">
                        {faq.category}
                      </span>
                      <span className="text-sm font-bold text-slate-900 tracking-tight">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-brand-orange shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 5. CTA */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center gap-5">
          <h2 className="text-display text-2xl sm:text-3xl font-bold tracking-tight">
            Consult with our Fuel Logistics Desk.
          </h2>
          <p className="text-slate-300 max-w-xl text-xs leading-relaxed">
            Need to negotiate fixed monthly bulk fuel contracts, set up automatic tank level monitors, or arrange emergency stand-by dispatches? Speak directly with our sales director.
          </p>
          <button
            onClick={() => setView(ActiveView.CONTACT)}
            className="group flex items-center gap-2 rounded bg-brand-orange hover:bg-brand-orange-hover px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:shadow-lg mt-2 font-bold cursor-pointer"
            id="about-btn-cta"
          >
            Request a Fuel Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-slate-950" />
          </button>
        </div>
      </section>

    </div>
  );
}
