import { Award, Eye, Target } from 'lucide-react';
import { COMPANY } from '../data';
import { ActiveView } from '../types';

interface AboutViewProps { setView: (view: ActiveView) => void; }

export default function AboutView({ setView }: AboutViewProps) {
  return (
    <div>
      <section className="bg-brand-900 py-20 text-white"><div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">About Capella</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">Integrated business solutions for Nigerian organisations</h1><div className="mt-7 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-200">{COMPANY.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-12"><article className="border-l-4 border-brand-gold bg-slate-50 p-8"><Target className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-2xl font-bold">Our Mission</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{COMPANY.mission}</p></article><article className="border-l-4 border-brand-gold bg-slate-50 p-8"><Eye className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-2xl font-bold">Our Vision</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{COMPANY.vision}</p></article></section>
      <section className="bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Core Values</p><h2 className="mt-3 text-3xl font-extrabold text-brand-900">How we work</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{COMPANY.values.map((value) => <div key={value} className="flex items-center gap-3 rounded bg-white p-5 shadow-sm"><Award className="h-5 w-5 text-brand-gold" /><span className="font-bold">{value}</span></div>)}</div></div></section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Why Choose Us</p><h2 className="mt-3 text-3xl font-extrabold text-brand-900">Dependable performance</h2><p className="mt-5 text-sm leading-relaxed text-slate-600">{COMPANY.whyChooseUs}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Our Credibility</p><ul className="mt-5 space-y-3">{COMPANY.credibility.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-700"><span className="font-bold text-brand-gold">✓</span>{item}</li>)}</ul></div></section>
      <section className="bg-brand-900 px-6 py-16 text-center text-white"><h2 className="text-3xl font-extrabold">Work with Capella</h2><button onClick={() => setView(ActiveView.CONTACT)} className="mt-6 rounded bg-brand-gold px-6 py-3 text-sm font-bold text-brand-900 hover:bg-white">View contact status</button></section>
    </div>
  );
}
