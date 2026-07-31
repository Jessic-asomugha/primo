import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '../data';
import { ActiveView } from '../types';

interface FooterProps { setView: (view: ActiveView) => void; }

export default function Footer({ setView }: FooterProps) {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <h2 className="text-xl font-extrabold">{COMPANY.name}</h2>
          <p className="mt-2 text-sm text-slate-300">{COMPANY.tagline}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300">{COMPANY.about[0]}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-gold">Contact Information</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand-gold" />{COMPANY.address}</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-brand-gold" /><span><a className="hover:text-white" href={`tel:${COMPANY.phones[0]}`}>{COMPANY.phones[0]}</a><br /><a className="hover:text-white" href={`tel:${COMPANY.phones[1]}`}>{COMPANY.phones[1]}</a></span></p>
            <p className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-brand-gold" /><a className="hover:text-white" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          </div>
          <button onClick={() => setView(ActiveView.CONTACT)} className="mt-6 text-sm font-bold text-brand-gold hover:text-white">View business hours and contact status</button>
        </div>
      </div>
      <div className="border-t border-white/15 px-6 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
    </footer>
  );
}
