
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Shield, Info } from 'lucide-react';
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    toast.success("Services overview: Security audits, penetration testing, and enterprise security packages available. Scroll down to explore all our offerings.");
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
            <div className={cn(
              "absolute inset-0 rounded-full",
              isScrolled ? "bg-rezon-darkGray" : "bg-rezon-black/50",
              "group-hover:animate-pulse-cyan transition-all duration-300"
            )} />
            <Shield className="w-6 h-6 text-rezon-cyan relative z-10" />
          </div>
          <span className="text-xl font-space font-bold tracking-tight text-white">
            Rezon <span className="text-rezon-cyan">Security</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-rezon-cyan transition-colors duration-200 text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a 
            href="#services" 
            onClick={handleGetStartedClick}
            className="bg-rezon-darkGray hover:bg-rezon-gray border border-rezon-cyan/30 text-rezon-cyan hover:border-rezon-cyan font-medium text-sm px-6 py-2.5 rounded-md transition-all duration-200 flex items-center gap-2"
          >
            Get Started
            <Info size={16} />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-rezon-cyan transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-5 glass-nav border-t border-rezon-gray">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-rezon-cyan transition-colors py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#services" 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleGetStartedClick(e);
              }}
              className="bg-rezon-darkGray hover:bg-rezon-gray border border-rezon-cyan/30 text-rezon-cyan hover:border-rezon-cyan font-medium text-sm py-2.5 rounded-md transition-all duration-200 text-center flex items-center justify-center gap-2"
            >
              Get Started
              <Info size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
