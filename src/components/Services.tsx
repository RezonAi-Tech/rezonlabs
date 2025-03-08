
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ShieldCheck, 
  ShieldAlert, 
  FileSearch, 
  BadgeCheck, 
  LineChart, 
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: ServiceItem[] = [
    {
      title: "Vulnerability Assessment",
      description: "Systematic identification and classification of security vulnerabilities in your systems and applications.",
      icon: <ShieldCheck className="w-6 h-6 text-rezon-cyan" />,
      delay: "200"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify exploitable vulnerabilities before real attackers do.",
      icon: <ShieldAlert className="w-6 h-6 text-rezon-cyan" />,
      delay: "300"
    },
    {
      title: "Security Audits",
      description: "Comprehensive review of your security policies, procedures and controls against industry standards.",
      icon: <FileSearch className="w-6 h-6 text-rezon-cyan" />,
      delay: "400"
    },
    {
      title: "Compliance Assessment",
      description: "Evaluation of your systems against regulatory requirements including GDPR and Indian cybersecurity regulations.",
      icon: <BadgeCheck className="w-6 h-6 text-rezon-cyan" />,
      delay: "500"
    },
    {
      title: "Incident Response",
      description: "Rapid detection, investigation and remediation of security breaches and cyber incidents.",
      icon: <AlertTriangle className="w-6 h-6 text-rezon-cyan" />,
      delay: "600"
    },
    {
      title: "Security Monitoring",
      description: "Continuous surveillance of your digital environment to detect and respond to security threats in real-time.",
      icon: <LineChart className="w-6 h-6 text-rezon-cyan" />,
      delay: "700"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden security-pattern">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            inView ? "animate-slide-up opacity-100" : "opacity-0"
          )}>
            Our Security <span className="text-rezon-cyan">Services</span>
          </h2>
          <p className={cn(
            "text-lg text-white/70 max-w-2xl mx-auto",
            inView ? "animate-slide-up delay-100 opacity-100" : "opacity-0"
          )}>
            Comprehensive cybersecurity solutions designed to protect your digital assets 
            with expert analysis and strategic implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-lg p-8 transition-all duration-300 hover:border-rezon-cyan/30 group",
                inView ? `animate-slide-up delay-${service.delay}` : "opacity-0"
              )}
            >
              <div className="bg-rezon-gray group-hover:bg-rezon-gray/80 transition-colors duration-300 inline-flex items-center justify-center w-12 h-12 rounded-md mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-rezon-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-16 text-center",
          inView ? "animate-slide-up delay-800 opacity-100" : "opacity-0"
        )}>
          <a 
            href="#pricing"
            className="inline-flex items-center px-6 py-3 rounded-md bg-rezon-darkGray hover:bg-rezon-gray border border-rezon-cyan/30 text-rezon-cyan hover:border-rezon-cyan font-medium transition-all duration-200"
          >
            View Our Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
