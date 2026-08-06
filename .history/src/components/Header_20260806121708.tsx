/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView } from '../types';
import { Factory, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentView: ActiveView;
  setView: (view: ActiveView) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', view: ActiveView.HOME },
    { name: 'About', view: ActiveView.ABOUT },
    { name: 'Services', view: ActiveView.SERVICES },
    { name: 'Contact', view: ActiveView.CONTACT },
  ];

  const handleNavClick = (view: ActiveView) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 glass shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick(ActiveView.HOME)}
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-lg p-1 transition-all hover:scale-105"
          id="btn-nav-logo"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center transition-all duration-300 group-hover:from-brand-orange group-hover:to-brand-accent shadow-lg rounded-xl">
            <div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
          </div>
          <div>
            <span className="text-display block text-sm sm:text-base font-extrabold tracking-tight text-slate-900 uppercase leading-tight group-hover:gradient-text transition-all">
              CAPELLA INTEGRATED<br />GLOBAL LIMITED
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navigationItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`text-sm font-medium transition-all relative py-2 px-3 rounded-lg hover:bg-slate-100 ${
                currentView === item.view
                  ? 'text-slate-900 font-bold bg-slate-100'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id={`nav-${item.view}`}
            >
              {item.name}
              {currentView === item.view && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gradient-to-r from-brand-orange to-brand-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {currentView === ActiveView.ADMIN_INBOX && (
            <button
              onClick={() => handleNavClick(ActiveView.HOME)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 border border-slate-300 rounded-md px-3 py-1.5 hover:bg-slate-100 transition-all"
              id="btn-nav-exit-admin"
            >
              Exit Admin
            </button>
          )}
          <button
            onClick={() => handleNavClick(ActiveView.ENQUIRY)}
            className="px-6 py-2 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
            id="btn-nav-cta"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          {currentView === ActiveView.ADMIN_INBOX && (
            <span className="bg-slate-100 text-slate-700 text-[10px] font-mono px-2 py-1 rounded">ADMIN</span>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-6 py-6 transition-all" id="mobile-nav-panel">
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left text-base font-semibold py-2 px-3 rounded-lg transition-all ${
                  currentView === item.view
                    ? 'bg-orange-50 text-brand-orange'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
                id={`nav-mob-${item.view}`}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-slate-100 pt-4 mt-2">
              <button
                onClick={() => handleNavClick(ActiveView.ENQUIRY)}
                className="flex w-full items-center justify-center gap-2 bg-slate-900 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-orange"
                id="btn-nav-mob-cta"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
