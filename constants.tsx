
import { Division } from './types';

export const DIVISIONS: Division[] = [
  {
    id: 'property-reset',
    title: 'Property Reset',
    description: 'Home transformation, decluttering, and reset services designed to restore order, clarity, and peace.',
    color: '#00eaff',
    icon: 'fa-house-chimney-window',
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 'spark-shield',
    title: 'Spark & Shield',
    description: 'Personal protection, empowerment, and readiness tools for everyday confidence and safety.',
    color: '#ff6b00',
    icon: 'fa-shield-halved',
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 'business-tools',
    title: 'POS Business Tools',
    description: 'Smart, simple, mobile-friendly tools for entrepreneurs, creators, and small business owners.',
    color: '#8fff00',
    icon: 'fa-briefcase',
    link: 'business-tools', // Internal route identifier
    status: 'active'
  },
  {
    id: 'digital-tools',
    title: 'Digital Manage Your Life Tools',
    description: 'Calendars, planners, trackers, and digital systems that simplify daily life and boost productivity.',
    color: '#ff00d4',
    icon: 'fa-calendar-check',
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 'pos-fight',
    title: 'POS Fight',
    description: 'Support, guidance, and structured tools for navigating life’s toughest battles with dignity and strength.',
    color: '#ff0033',
    icon: 'fa-hand-fist',
    link: '#',
    status: 'coming-soon'
  }
];
