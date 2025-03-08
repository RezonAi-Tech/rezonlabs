
import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

export interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  callToAction: string;
}

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  details: string;
  link?: string;
}

export interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}
