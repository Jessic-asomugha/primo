import { ArrowRight, Fuel } from 'lucide-react';
import { SERVICES } from '../data';
import { ActiveView } from '../types';

interface ServicesViewProps { setView: (view: ActiveView) => void; }

export default function ServicesView({ setView }: ServicesViewProps) {
  return (
    <div>
      <section className="bg-brand-900 py-20 text-white"><div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Services</p><h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Practical support for your business needs</h1><p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-200">Capella provides integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting. Detailed service information is published as it is confirmed.</p></div></section>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"><div className="max-w-2xl rounded border border-slate-200 p-8"><Fuel className="h-8 w-8 text-brand-gold" /><h2 className="mt-5 text-2xl font-bold text-brand-900">{SERVICES[0].title}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{SERVICES[0].description}</p><p className="mt-5 text-sm font-medium text-slate-700">Please contact the company after contact details are supplied for current availability and requirements.</p></div></section>
      <section className="bg-slate-50 py-16 text-center"><h2 className="text-2xl font-extrabold text-brand-900">Need more information?</h2><button onClick={() => setView(ActiveView.CONTACT)} className="mt-5 inline-flex items-center gap-2 rounded bg-brand-900 px-6 py-3 text-sm font-bold text-white hover:bg-brand-gold hover:text-brand-900">View contact status <ArrowRight className="h-4 w-4" /></button></section>
    </div>
  );
}
