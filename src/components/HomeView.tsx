import { ArrowRight, BriefcaseBusiness, CheckCircle2, MapPinned } from 'lucide-react';
import { COMPANY } from '../data';
import { ActiveView } from '../types';

interface HomeViewProps { setView: (view: ActiveView) => void; }

export default function HomeView({ setView }: HomeViewProps) {
  return (
    <div>
      <section className="bg-brand-900 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Established {COMPANY.yearEstablished}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">{COMPANY.name}</h1>
          <p className="mt-5 text-xl text-brand-gold">{COMPANY.tagline}</p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-200">{COMPANY.about[0]}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setView(ActiveView.SERVICES)} className="rounded bg-brand-gold px-6 py-3 text-sm font-bold text-brand-900 hover:bg-white">Explore services</button>
            <button onClick={() => setView(ActiveView.CONTACT)} className="rounded border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">Contact details</button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 md:grid-cols-3 lg:px-12">
        <div className="rounded border border-slate-200 p-7"><BriefcaseBusiness className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-lg font-bold">Integrated Solutions</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">Solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting.</p></div>
        <div className="rounded border border-slate-200 p-7"><CheckCircle2 className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-lg font-bold">Trusted Results</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">Professionalism, integrity, timely execution, and lasting client relationships guide our work.</p></div>
        <div className="rounded border border-slate-200 p-7"><MapPinned className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-lg font-bold">Areas Covered</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{COMPANY.areas.join(', ')}. International partnerships are available upon request.</p></div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Who We Serve</p>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-900">Supporting organisations across key sectors</h2>
          <div className="mt-8 flex flex-wrap gap-3">{COMPANY.industries.map((industry) => <span key={industry} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">{industry}</span>)}</div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-center text-white"><h2 className="text-3xl font-extrabold">Let’s discuss your requirements</h2><p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200">Contact details will be added once supplied by the client.</p><button onClick={() => setView(ActiveView.CONTACT)} className="mt-7 inline-flex items-center gap-2 font-bold text-brand-gold hover:text-white">View contact status <ArrowRight className="h-4 w-4" /></button></section>
    </div>
  );
}
