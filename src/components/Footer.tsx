
import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rezon-gray border-t border-rezon-darkGray py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-rezon-darkGray" />
                <Shield className="w-6 h-6 text-rezon-cyan relative z-10" />
              </div>
              <span className="text-xl font-space font-bold text-white">
                Rezon <span className="text-rezon-cyan">Security</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Comprehensive cybersecurity services with transparent pricing and expert-driven strategies for businesses across India.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-rezon-cyan transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Vulnerability Assessment',
                'Penetration Testing',
                'Security Audits',
                'Compliance Assessment',
                'Incident Response'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-rezon-cyan transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block text-white">Email:</span>
                <a href="mailto:rezonaitech@gmail.com" className="hover:text-rezon-cyan transition-colors">
                  rezonaitech@gmail.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="block text-white">Phone:</span>
                <a href="tel:+919997792712" className="hover:text-rezon-cyan transition-colors">
                  +91-9997792712
                </a>
              </li>
              <li className="text-white/70">
                <span className="block text-white">Location:</span>
                Pilibhit, Uttar Pradesh, India (262001)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-rezon-darkGray text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Rezon Security Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
