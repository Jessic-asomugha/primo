import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY } from '../data';
import { ActiveView } from '../types';

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
  const navigate = (view: ActiveView) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
        <button onClick={() => navigate(ActiveView.HOME)} className="text-left" aria-label="Go to home">
          <span className="block text-lg font-extrabold leading-tight text-brand-900">CAPELLA</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gold">Integrated Global Limited</span>
        </button>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <button key={item.view} onClick={() => navigate(item.view)} className={`text-sm ${currentView === item.view ? 'font-bold text-brand-900' : 'text-slate-600 hover:text-brand-900'}`}>
              {item.name}
            </button>
          ))}
        </nav>
        <button onClick={() => navigate(ActiveView.CONTACT)} className="hidden rounded bg-brand-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-gold hover:text-brand-900 md:block">
          Enquire Now
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded p-2 text-brand-900 md:hidden" aria-label="Toggle navigation menu">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <button key={item.view} onClick={() => navigate(item.view)} className="block w-full px-2 py-3 text-left text-sm font-medium text-brand-900">
              {item.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
