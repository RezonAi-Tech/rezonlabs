
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Check, Shield, ShieldCheck, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingCard = ({ 
  title, 
  price, 
  features, 
  cta, 
  icon, 
  highlighted = false, 
  yearlyPrice,
  delay
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "pricing-card rounded-lg overflow-hidden relative",
        highlighted ? "border-rezon-cyan/40" : "",
        inView ? `animate-slide-up delay-${delay}` : "opacity-0"
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 bg-rezon-cyan text-rezon-black py-1 text-xs font-bold text-center">
          RECOMMENDED
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="text-3xl font-bold text-white">
              ₹{price}<span className="text-sm text-white/60 font-normal">/month</span>
            </div>
            {yearlyPrice && (
              <div className="text-sm text-white/60 mt-1">
                ₹{yearlyPrice}<span className="text-xs">/year</span>
              </div>
            )}
          </div>
          <div className="bg-rezon-gray inline-flex items-center justify-center w-12 h-12 rounded-md">
            {icon}
          </div>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-rezon-cyan shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact"
          className={cn(
            "block text-center py-3 rounded-md transition-all duration-200 font-medium",
            highlighted 
              ? "bg-rezon-cyan text-rezon-black hover:bg-rezon-cyan/90" 
              : "bg-rezon-darkGray hover:bg-rezon-gray border border-rezon-cyan/30 text-rezon-cyan hover:border-rezon-cyan"
          )}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            inView ? "animate-slide-up opacity-100" : "opacity-0"
          )}>
            Transparent <span className="text-rezon-cyan">Pricing</span>
          </h2>
          <p className={cn(
            "text-lg text-white/70 max-w-2xl mx-auto",
            inView ? "animate-slide-up delay-100 opacity-100" : "opacity-0"
          )}>
            Choose the security package that best fits your organization's needs with our 
            straightforward, no-hidden-costs pricing structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Basic Security Audit"
            price="5,000"
            yearlyPrice="45,000"
            features={[
              "Initial vulnerability scanning",
              "Basic web application analysis",
              "Preliminary risk assessment report",
              "OWASP Top 10 initial review",
              "30-day security recommendations"
            ]}
            cta="Get Started"
            icon={<Shield className="w-6 h-6 text-rezon-cyan" />}
            delay="200"
          />
          
          <PricingCard
            title="Standard Penetration Testing"
            price="25,000"
            yearlyPrice="2,00,000"
            features={[
              "Comprehensive security assessment",
              "Detailed vulnerability exploration",
              "Manual and automated testing",
              "Network and application layer analysis",
              "Vulnerability prioritization matrix",
              "90-day remediation guidance"
            ]}
            cta="Select Plan"
            icon={<ShieldCheck className="w-6 h-6 text-rezon-cyan" />}
            highlighted={true}
            delay="300"
          />
          
          <PricingCard
            title="Enterprise Security Package"
            price="75,000 - 2,50,000"
            yearlyPrice="8,50,000 - 30,00,000"
            features={[
              "Full-spectrum security evaluation",
              "Advanced threat detection",
              "Continuous monitoring capabilities",
              "Regulatory compliance assessment",
              "Custom security framework design",
              "Dedicated security consultant",
              "Priority incident response"
            ]}
            cta="Contact Us"
            icon={<ShieldAlert className="w-6 h-6 text-rezon-cyan" />}
            delay="400"
          />
        </div>

        <div className={cn(
          "mt-16 text-center glass-card p-8 rounded-lg border border-rezon-gray",
          inView ? "animate-slide-up delay-500 opacity-100" : "opacity-0"
        )}>
          <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Contact us for tailored security solutions designed specifically for your organization's
            unique requirements and challenges.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-rezon-cyan hover:bg-rezon-cyan/90 text-rezon-black font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
