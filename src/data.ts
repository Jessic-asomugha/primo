/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, FAQItem, ValueItem, SectorItem } from './types';

// Importing generated premium assets
import heroImage from './assets/images/primo_hero_industrial_1784470497336.jpg';
import serveImage from './assets/images/primo_who_we_serve_1784470511197.jpg';
import serviceImage from './assets/images/primo_featured_service_1784470522808.jpg';
import telemetryImage from './assets/images/primo_logistics_telemetry_1784478598465.jpg';

export const ASSETS = {
  hero: heroImage,
  whoWeServe: serveImage,
  featuredService: serviceImage,
  telemetry: telemetryImage,
};

export const SECTORS: SectorItem[] = [
  {
    id: 'sec-1',
    title: 'Healthcare Facilities',
    description: 'Zero-downtime diesel fuel contracts for critical intensive care backup generators, surgical suites, and cold storage storage facilities across Abuja.',
    marketShare: '18+ major hospitals supported with 100% backup uptime',
    iconName: 'Activity'
  },
  {
    id: 'sec-2',
    title: 'Hospitality & Commercial',
    description: 'Scheduled fuel delivery for top-tier hotels, offices, and residential estates requiring high-purity automotive gas oil (AGO) to prevent generator wear.',
    marketShare: '40+ commercial estates and premium hotels under contract',
    iconName: 'Building2'
  },
  {
    id: 'sec-3',
    title: 'Industrial & Manufacturing',
    description: 'Bulk fuel logistics for heavy machinery, factories, and concrete processing plants needing continuous, multi-ton bulk fuel delivery under rigid schedules.',
    marketShare: '2.4M+ liters delivered to industrial clients annually',
    iconName: 'Container'
  },
  {
    id: 'sec-4',
    title: 'Civil Construction Grids',
    description: 'Mobile on-site dispenser refueling for excavators, road pavers, and support machinery directly at active infrastructure development zones.',
    marketShare: 'Zero project delays due to fuel exhaustion',
    iconName: 'Wrench'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Bulk Diesel Supply',
    slug: 'bulk-diesel-supply',
    category: 'Industrial Logistics',
    shortDescription: 'High-volume fuel delivery for factories, construction grids, and major facilities. Guarded against unreliable scheduling and volume loss with digital metering.',
    fullDescription: 'Primo provides secure high-volume supply of premium Automotive Gas Oil (AGO) directly to your industrial storage tanks. We eliminate the primary pain points of corporate buyers: inconsistent delivery schedules and suspicious volume losses. Every tanker dispatch is tracked via real-time telemetry, and our discharge process utilizes custody-transfer-grade calibrated digital flow meters to guarantee you receive every single drop you pay for.',
    specifications: [
      'Min Order Volume: 5,000 Liters up to full 45,000-liter multi-compartment tankers',
      'Metering Standard: Calibrated mechanical & electronic digital flow meters (ISO 9001 certified)',
      'Fuel Specification: Premium grade Low-Sulfur Automotive Gas Oil (AGO)',
      'Delivery Speed: Scheduled recurring slots or within 12 hours of purchase confirmation'
    ],
    features: [
      'Full material traceability with NMDPRA certificate and refinery laboratory analysis',
      'Tamper-proof seals on all tanker discharge manifolds with unique tracking codes',
      'Calibrated bottom-loading dispatches to ensure absolute volume integrity',
      'Flexible payment terms for pre-vetted corporate account structures'
    ],
    iconName: 'Container'
  },
  {
    id: 'srv-2',
    title: 'Retail & Scheduled Delivery',
    slug: 'retail-scheduled-delivery',
    category: 'Operational Logistics',
    shortDescription: 'Convenient fuel scheduling for offices, residential complexes, and smaller generator facilities. Mitigates adulterated fuel risks with certified testing.',
    fullDescription: 'Our customized scheduled fuel service is engineered for corporate offices, shopping complexes, and residential estates who cannot afford power flickers. Unreliable localized generator fuel often leads to fuel injector clogging and expensive generator maintenance. Primo delivers premium-quality diesel directly to your site under scheduled cycles, maintaining your reserve tanks at optimal capacities with zero effort from your facility team.',
    specifications: [
      'Min Order Volume: 1,000 Liters utilizing dedicated short-wheelbase delivery tankers',
      'Delivery Options: Weekly, bi-weekly, or customized smart-sensor automatic dispatches',
      'Generator Suitability: Fully optimized for Perkins, Cummins, and Caterpillar prime engines',
      'Abuja Coverage: Comprehensive coverage spanning CBD, Maitama, Asokoro, Wuse, and Gwarinpa'
    ],
    features: [
      'Standardized fuel quality tests (density and water contamination check) performed on-site before offloading',
      'Dedicated delivery dispatch captains trained in city estate safety compliance protocols',
      'Automatic email reporting detailing delivery volume, temperature, and current fuel purity status',
      'Specialized micro-delivery hoses designed to access basement or rooftop generator compartments'
    ],
    iconName: 'Clock'
  },
  {
    id: 'srv-3',
    title: 'Emergency Fuel Response',
    slug: 'emergency-fuel-response',
    category: 'Critical Response',
    shortDescription: 'Guaranteed 4-hour critical response fuel dispatch for hospitals, server farms, and active medical suites to eliminate operational downtime.',
    fullDescription: 'When public grid failures intersect with delayed diesel delivery, critical services are placed at immediate hazard. Primo maintains a dedicated Emergency Fuel Response Fleet standing by 24/7. This high-priority service bypasses normal logistical queues, ensuring hospitals, cold storage medical banks, and primary data centers receive premium AGO within a strict, contractually guaranteed 4-hour window.',
    specifications: [
      'Guaranteed Response SLA: Under 4 Hours from emergency dispatch line activation',
      'Standby Fleet: Dedicated 5,000L and 10,000L rapid-response city-maneuverable tankers',
      'Priority Sector List: Hospitals, diagnostic centers, hotel power hubs, and cloud server farms',
      'Dispatch Control: Direct dedicated 24/7 emergency dispatch command console'
    ],
    features: [
      'Pre-negotiated SLA service level agreement bypasses standard administrative approvals',
      'Automatic high-priority dispatch with active GPS location streaming to client security team',
      'On-board dual-filtration assemblies ensuring pristine fuel is pumped even in emergency settings',
      'Post-delivery telemetry audit log showing exact timestamps from intake to offloading completion'
    ],
    iconName: 'Activity'
  },
  {
    id: 'srv-4',
    title: 'Logistics & Distribution Management',
    slug: 'logistics-distribution',
    category: 'Enterprise Solutions',
    shortDescription: 'End-to-end supply chain integration, automated tank level monitoring, and predictive fuel replenishment planning.',
    fullDescription: 'For enterprise customers operating multi-site facility grids across the Federal Capital Territory, managing individual fuel receipts is a logistical nightmare prone to error and internal leakage. Primo deploys advanced telemetry-guided tank level sensors to your facility tanks, aggregating fuel levels into a centralized dashboard and triggering automatic fuel dispatches when levels hit your safety margin, fully automating your fuel supply chain.',
    specifications: [
      'Hardware Deployments: Intrinsically safe ultrasonic battery-powered fuel level sensors',
      'Integration Options: Direct cloud dashboard API, SMTP alarms, or SMS control panels',
      'Refueling Automation: Smart auto-scheduling with zero manual requisition overhead',
      'Supply Resiliency: Guaranteed buffer stockpiles reserved in our Abuja central depot'
    ],
    features: [
      'Full visual visibility over all remote generator tanks through a secure dashboard',
      'Algorithmic fuel consumption audits to detect on-site siphoning or structural tank leaks',
      'Consolidated monthly corporate billing statements detailing exact literage used per node',
      'Predictive dispatch schedules optimized for heavy traffic windows in Abuja municipal roads'
    ],
    iconName: 'TrendingUp'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "With power outages being unpredictable, our hospital cannot survive even a brief generator outage. Primo's Emergency Response team has saved our diagnostic suites multiple times, delivering clean fuel within 2 hours of our midnight call.",
    author: "Dr. Aliyu Benson",
    role: "Chief Medical Director",
    company: "Abuja National Specialist Hospital",
    rating: 5
  },
  {
    id: 't-2',
    quote: "Adulterated fuel had been ruining our Cummins generators and costing us millions in servicing. Since we switched to Primo's ISO-certified scheduled deliveries, generator breakdowns have dropped to zero. Their digital metering is 100% accurate.",
    author: "Mrs. Fatima Ibrahim",
    role: "Group General Manager",
    company: "The Grand Regency Hotel, Abuja",
    rating: 5
  },
  {
    id: 't-3',
    quote: "Refueling a major estate with 14 backup generator nodes used to be a logistical headache. Primo deployed tank sensors, integrated our fuel logs, and now manages our entire inventory autonomously. Clean, transparent, and completely worry-free.",
    author: "Engr. Emeka Nwosu",
    role: "Facilities Engineering Director",
    company: "Asokoro Heights Residential Estate",
    rating: 5
  }
];

export const VALUES: ValueItem[] = [
  {
    id: 'val-1',
    title: 'Fuel Purity Guarantee',
    description: 'We run stringent, multi-stage filtration and on-site density checks before any discharge. We guarantee 100% unadulterated Low-Sulfur Automotive Gas Oil (AGO).',
    iconName: 'ShieldCheck'
  },
  {
    id: 'val-2',
    title: 'Transparent Digital Metering',
    description: 'We eradicate the volume-loss issue. We use industry-certified digital flow meters calibrated strictly to custody transfer standards. Every liter is accounted for.',
    iconName: 'Target'
  },
  {
    id: 'val-3',
    title: 'NMDPRA Certified Compliance',
    description: 'Primo is fully licensed by the Nigerian Midstream and Downstream Petroleum Regulatory Authority, maintaining rigid standards of safety and environmental care.',
    iconName: 'Award'
  },
  {
    id: 'val-4',
    title: 'Predictive Logistical Delivery',
    description: 'By leveraging real-time route optimization and smart-sensor telematics, we bypass traffic bottlenecks to ensure zero-downtime refueling schedules.',
    iconName: 'TrendingUp'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does Primo guarantee that the delivered diesel is not adulterated?',
    answer: 'Every liter of diesel is sourced directly from certified terminal depots and undergoes secondary testing in our central Abuja laboratory. Upon arrival at your site, our delivery captain performs a visual water-check and a calibrated density test in your presence prior to opening the discharge manifold, proving the fuel is pristine.',
    category: 'Quality Control'
  },
  {
    id: 'faq-2',
    question: 'How do you prevent volume manipulation or "shorting" during offloading?',
    answer: 'We have replaced legacy manual dipsticks with custody-transfer-certified digital flow meters. These meters are sealed by regulatory agencies, self-calibrating, and transmit real-time discharge logs directly to our head office and your registered email. This prevents any volume shorting or pipeline manipulation.',
    category: 'Transparency'
  },
  {
    id: 'faq-3',
    question: 'What areas of Abuja do you serve, and what is your minimum order?',
    answer: 'We cover all phases of municipal Abuja, including Maitama, Asokoro, Wuse, Garki, Jabi, Utako, Gwarinpa, and the Airport Road industrial corridor. Our minimum delivery volume is 1,000 Liters for scheduled residential/retail supply, and 5,000 Liters for bulk industrial supply tankers.',
    category: 'Logistics'
  },
  {
    id: 'faq-4',
    question: 'How does the Emergency Fuel SLA work for critical operations?',
    answer: 'Facilities under our Priority SLA contract (such as clinics, key corporate offices, and hotels) have direct access to our 24/7 emergency dispatch line. Upon receipt of a distress call, a pre-loaded, city-maneuverable tanker is routed to your location immediately, contractually obligated to complete setup and discharge within 4 hours.',
    category: 'Priority Service'
  }
];
