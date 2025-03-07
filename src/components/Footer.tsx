import React from 'react';
import { Shield, ChevronRight, Twitter } from 'lucide-react';

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
              <a 
                href="https://x.com/PrakharYud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-rezon-darkGray flex items-center justify-center hover:bg-rezon-cyan/20 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white/70 group-hover:text-rezon-cyan" />
              </a>
              <a 
                href="https://github.com/RezonAi-Tech/rezonlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-rezon-darkGray flex items-center justify-center hover:bg-rezon-cyan/20 transition-colors group"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 text-white/70 group-hover:text-rezon-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.276 9.521 21.012C9.521 20.775 9.512 19.988 9.508 19.151C6.726 19.8 6.139 17.807 6.139 17.807C5.685 16.666 5.032 16.362 5.032 16.362C4.121 15.731 5.098 15.744 5.098 15.744C6.104 15.813 6.639 16.779 6.639 16.779C7.535 18.267 8.994 17.854 9.541 17.599C9.631 16.979 9.889 16.566 10.174 16.32C7.955 16.07 5.62 15.248 5.62 11.486C5.62 10.371 6.01 9.459 6.659 8.746C6.556 8.493 6.214 7.57 6.76 6.181C6.76 6.181 7.6 5.912 9.496 7.219C10.296 7.000 11.15 6.89 12 6.886C12.85 6.89 13.704 7.000 14.505 7.219C16.4 5.912 17.237 6.181 17.237 6.181C17.785 7.57 17.443 8.493 17.34 8.746C17.99 9.459 18.377 10.371 18.377 11.486C18.377 15.258 16.039 16.067 13.813 16.31C14.172 16.613 14.492 17.203 14.492 18.104C14.492 19.385 14.479 20.685 14.479 21.01C14.479 21.277 14.659 21.585 15.167 21.487C19.137 20.163 22 16.417 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
              </a>
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
              <li className="text-white/70">
                <span className="block text-white">Twitter:</span>
                <a href="https://x.com/PrakharYud" target="_blank" rel="noopener noreferrer" className="hover:text-rezon-cyan transition-colors">
                  @PrakharYud
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-rezon-darkGray text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Rezon Security Labs. Built by <a href="https://github.com/RezonAi-Tech" target="_blank" rel="noopener noreferrer" className="text-rezon-cyan hover:underline">RezonAi Tech</a>. All rights reserved.</p>
          <p className="mt-1">
            <a href="https://github.com/RezonAi-Tech/rezonlabs" target="_blank" rel="noopener noreferrer" className="text-rezon-cyan/70 hover:text-rezon-cyan transition-colors text-xs">
              Open Source Project: github.com/RezonAi-Tech/rezonlabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
