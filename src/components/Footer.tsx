/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActiveView } from '../types';
import { Factory, ShieldCheck, Mail, Phone, MapPin, KeyRound } from 'lucide-react';

interface FooterProps {
  setView: (view: ActiveView) => void;
  currentView: ActiveView;
}

export default function Footer({ setView, currentView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Top section: Info columns */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Logo & Corporate profile */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-800 flex items-center justify-center border border-slate-700">
                <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
              </div>
              <div>
                <span className="text-display block text-lg font-extrabold tracking-tight text-white uppercase">
                  CAPELLA
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Capella Integrated Global Limited provides integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono tracking-wider uppercase text-slate-400">
              <span className="flex items-center gap-1.5 border border-slate-800 rounded bg-slate-950 px-2 py-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                REGISTERED NIGERIAN COMPANY
              </span>
              <span className="flex items-center gap-1.5 border border-slate-800 rounded bg-slate-950 px-2 py-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                PROFESSIONAL WORKFORCE
              </span>
              <span className="flex items-center gap-1.5 border border-slate-800 rounded bg-slate-950 px-2 py-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                RELIABLE LOGISTICS
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-display text-xs font-bold uppercase tracking-widest text-white">
              Corporate Directory
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button
                  onClick={() => setView(ActiveView.HOME)}
                  className="hover:text-white transition-all text-left w-full"
                  id="foot-link-home"
                >
                  Home Office Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView(ActiveView.ABOUT)}
                  className="hover:text-white transition-all text-left w-full"
                  id="foot-link-about"
                >
                  Mission, Values & FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView(ActiveView.SERVICES)}
                  className="hover:text-white transition-all text-left w-full"
                  id="foot-link-services"
                >
                  Engineering Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView(ActiveView.CONTACT)}
                  className="hover:text-white transition-all text-left w-full"
                  id="foot-link-contact"
                >
                  Initiate Project Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Core Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-display text-xs font-bold uppercase tracking-widest text-white">
              Headquarters Info
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  Plot 471, behind Banilux Motors<br />
                  FCT, Abuja
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange shrink-0" />
                <span>07062062322 / 09048486637</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-orange shrink-0" />
                <span>info@capella.com.ng</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-950/80 text-xs py-6 border-t border-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-medium">
            &copy; {currentYear} Capella Integrated Global Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-600 font-mono text-[10px]">
              V2.1.0 // ENTERPRISE-GRADE
            </span>
            
            {/* Admin Toggle button - secure portal link */}
            <button
              onClick={() => {
                if (currentView === ActiveView.ADMIN_INBOX) {
                  setView(ActiveView.HOME);
                } else {
                  setView(ActiveView.ADMIN_INBOX);
                }
              }}
              className={`flex items-center gap-1.5 font-mono text-[10px] tracking-wide uppercase px-2 py-1 rounded transition-all ${
                currentView === ActiveView.ADMIN_INBOX
                  ? 'bg-orange-500/10 text-brand-orange border border-orange-500/30'
                  : 'text-slate-500 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/40'
              }`}
              title="Secure submissions dashboard for Primo corporate staff"
              id="btn-admin-portal"
            >
              <KeyRound className="h-3 w-3" />
              {currentView === ActiveView.ADMIN_INBOX ? 'Close Portal' : 'Secure Portal'}
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
