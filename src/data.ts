import { Service, Testimonial, FAQItem, ValueItem, SectorItem } from './types';
import heroImage from './assets/images/primo_hero_industrial_1784470497336.jpg';
import serveImage from './assets/images/primo_who_we_serve_1784470511197.jpg';
import serviceImage from './assets/images/primo_featured_service_1784470522808.jpg';
import telemetryImage from './assets/images/primo_logistics_telemetry_1784478598465.jpg';

export const COMPANY = {
  name: 'Capella Integrated Global Limited', tagline: 'Integrated Solutions. Trusted Results.', yearEstablished: 2024,
  address: 'Plot 471, behind Banilux Motors, FCT, Abuja', phones: ['07062062322', '09048486637'], email: 'info@capella.com.ng',
};
export const ASSETS = { hero: heroImage, whoWeServe: serveImage, featuredService: serviceImage, telemetry: telemetryImage };
export const SECTORS: SectorItem[] = [
  { id: 'sec-1', title: 'Oil & Gas', description: 'Integrated business solutions for organisations in the oil and gas sector.', marketShare: 'Industries served', iconName: 'Activity' },
  { id: 'sec-2', title: 'Construction & Manufacturing', description: 'Support for construction companies and manufacturing industries.', marketShare: 'Industries served', iconName: 'Building2' },
  { id: 'sec-3', title: 'Public & Institutional', description: 'Support for government agencies, hospitals, schools and universities.', marketShare: 'Industries served', iconName: 'Container' },
  { id: 'sec-4', title: 'Commercial & Community', description: 'Support for hotels, estates, banks, restaurants, churches and other businesses.', marketShare: 'Industries served', iconName: 'Wrench' },
];
export const SERVICES: Service[] = [{
  id: 'srv-1', title: 'Diesel Supply', slug: 'diesel-supply', category: 'Service Details Pending',
  shortDescription: 'Diesel Supply is currently the only listed service. Detailed requirements and availability information are pending client confirmation.',
  fullDescription: 'Contact Capella Integrated Global Limited to discuss your requirements. Service description, specifications, and best-fit information will be published once confirmed by the client.',
  specifications: ['Service description pending client confirmation', 'Availability details pending client confirmation', 'Best-fit information pending client confirmation'],
  features: ['Registered Nigerian Company', 'Professional workforce', 'Reliable logistics', 'Customer-focused service'], iconName: 'Container',
}, {
  id: 'srv-2', title: 'Emergency Fuel Delivery on Request', slug: 'emergency-fuel-delivery', category: 'On-Request Support',
  shortDescription: 'Emergency fuel delivery is available upon request for clients who need responsive supply support.',
  fullDescription: 'Contact Capella to discuss emergency fuel delivery requirements, location, timing, and availability.',
  specifications: ['Available upon request', 'Coverage and timing confirmed per enquiry', 'Contact details required for assessment'],
  features: ['Reliable logistics', 'Customer-focused service', 'Professional workforce'], iconName: 'Clock',
}, {
  id: 'srv-3', title: 'Procurement & Logistics Support', slug: 'procurement-logistics-support', category: 'Integrated Business Solutions',
  shortDescription: 'Integrated procurement and logistics support tailored to corporate organisations, government institutions, and private businesses.',
  fullDescription: 'Capella provides integrated solutions across procurement and logistics, shaped around each client’s requirements.',
  specifications: ['Requirements assessed per client', 'Areas covered: Abuja, Kaduna, Nasarawa, Niger State, and Kogi', 'International partnerships available upon request'],
  features: ['Experienced management', 'Professional workforce', 'Competitive pricing'], iconName: 'TrendingUp',
}, {
  id: 'srv-4', title: 'Construction & General Contracting Support', slug: 'construction-general-contracting-support', category: 'Integrated Business Solutions',
  shortDescription: 'Construction support and general contracting solutions for organisations with project-based requirements.',
  fullDescription: 'Capella supports construction and general contracting requirements with a focus on quality service and dependable performance.',
  specifications: ['Scope confirmed per project', 'Requirements assessed per client', 'Contact Capella to discuss your project'],
  features: ['Integrity', 'Quality', 'Teamwork'], iconName: 'Wrench',
}];
export const TESTIMONIALS: Testimonial[] = [{ id: 't-1', quote: 'Capella Integrated Global delivers complete business solutions backed by professionalism, integrity, and timely execution.', author: 'Capella Integrated Global Limited', role: 'Our commitment', company: 'Integrated Solutions. Trusted Results.', rating: 5 }];
export const VALUES: ValueItem[] = [
  { id: 'val-1', title: 'Integrity', description: 'We act with integrity in every engagement.', iconName: 'ShieldCheck' },
  { id: 'val-2', title: 'Professionalism', description: 'We provide professional support tailored to client needs.', iconName: 'Target' },
  { id: 'val-3', title: 'Innovation', description: 'We deliver innovative business solutions.', iconName: 'Award' },
  { id: 'val-4', title: 'Quality', description: 'We focus on quality service and dependable performance.', iconName: 'TrendingUp' },
];
export const FAQS: FAQItem[] = [
  { id: 'faq-1', question: 'What does Capella Integrated Global Limited do?', answer: 'We provide integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting.', category: 'About Capella' },
  { id: 'faq-2', question: 'Who do you serve?', answer: 'We serve corporate organisations, government institutions, and private businesses across a range of industries.', category: 'Industries' },
  { id: 'faq-3', question: 'Which areas do you cover?', answer: 'Our areas covered are Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi.', category: 'Coverage' },
  { id: 'faq-4', question: 'Are international partnerships available?', answer: 'International partnerships are available upon request.', category: 'Partnerships' },
];
