/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveView } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';
import AdminInboxView from './components/AdminInboxView';

export default function App() {
  const [currentView, setView] = useState<ActiveView>(ActiveView.HOME);
  const [selectedServiceInquiry, setSelectedServiceInquiry] = useState<string>('');

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentView]);

  // View dispatcher
  const renderView = () => {
    switch (currentView) {
      case ActiveView.HOME:
        return <HomeView setView={setView} />;
      case ActiveView.ABOUT:
        return <AboutView setView={setView} />;
      case ActiveView.SERVICES:
        return <ServicesView setView={setView} setSelectedServiceInquiry={setSelectedServiceInquiry} />;
      case ActiveView.CONTACT:
        return (
          <ContactView 
            selectedServiceInquiry={selectedServiceInquiry} 
            setSelectedServiceInquiry={setSelectedServiceInquiry} 
          />
        );
      case ActiveView.ADMIN_INBOX:
        return <AdminInboxView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
      {/* Header element */}
      <Header currentView={currentView} setView={setView} />

      {/* Main view container */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer element */}
      <Footer setView={setView} currentView={currentView} />

    </div>
  );
}
