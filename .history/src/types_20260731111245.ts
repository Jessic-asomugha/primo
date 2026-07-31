/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActiveView {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  ENQUIRY = 'enquiry',
  ADMIN_INBOX = 'admin_inbox'
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceInterest: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'contacted' | 'resolved';
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  specifications: string[];
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  marketShare: string;
  iconName: string;
}
