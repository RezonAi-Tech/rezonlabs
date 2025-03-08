
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PythonInsights from '@/components/PythonInsights';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Terminal, Shield, Twitter } from 'lucide-react';
import { toast } from "sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commandLines, setCommandLines] = useState<string[]>([]);
  const initialCommands = [
    'Initializing security protocols...',
    'Loading Python backend modules...',
    'Establishing secure connection...',
    'Activating Python security algorithms...',
    'Running vulnerability scan with Python...',
    'Connecting to RezonAi Security Labs API...',
    'Importing advanced threat detection modules...',
    'System secured. Welcome to Rezon Security Labs.'
  ];

  useEffect(() => {
    // Display project info
    const toastTimeout = setTimeout(() => {
      toast.info(
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-rezon-cyan" /> 
            <p className="font-semibold">Open Source Project</p>
          </div>
          <p>Rezon Security Labs is an open source project.</p>
          <p>GitHub: <a href="https://github.com/RezonAi-Tech/rezonlabs" target="_blank" rel="noopener noreferrer" className="text-rezon-cyan hover:underline">RezonAi-Tech/rezonlabs</a></p>
          <p>Twitter: <a href="https://x.com/PrakharYud" target="_blank" rel="noopener noreferrer" className="text-rezon-cyan hover:underline">@PrakharYud</a></p>
          <p>Built by RezonAi Tech</p>
        </div>,
        {
          duration: 5000,
        }
      );
    }, 4000);

    // Simulate terminal loading sequence
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < initialCommands.length) {
        setCommandLines(prev => [...prev, initialCommands[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(toastTimeout);
    };
  }, []);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const handleAnchorClick = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a');
    if (target && target.hash && target.href.includes(window.location.pathname)) {
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', target.hash);
      }
    }
  }, []);

  useEffect(() => {
    // Smooth scroll for hash changes and anchor links
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick as EventListener);
    
    // Handle initial hash if present
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick as EventListener);
    };
  }, [handleHashChange, handleAnchorClick]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-rezon-black flex flex-col items-center justify-center z-50">
        <div className="max-w-md w-full glass-card p-6 rounded-lg border border-rezon-cyan/30 shadow-[0_0_15px_rgba(0,255,240,0.15)]">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="text-rezon-cyan h-5 w-5" />
            <div className="text-rezon-cyan text-sm font-mono">python@rezon:~#</div>
          </div>
          <div className="font-mono text-sm text-white/80 space-y-1">
            {commandLines.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-rezon-cyan mr-2">$</span>
                <span className={index === commandLines.length - 1 ? "code-typing" : ""}>
                  {line}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="h-1 w-full bg-rezon-darkGray overflow-hidden rounded-full">
              <div 
                className="h-full bg-rezon-cyan transition-all duration-300 ease-out"
                style={{ width: `${(commandLines.length / initialCommands.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-white/60 font-mono">
              {Math.round((commandLines.length / initialCommands.length) * 100)}%
            </div>
          </div>
          <div className="mt-3 text-center space-y-1">
            <p className="text-xs text-white/50 font-mono">
              <a href="https://github.com/RezonAi-Tech/rezonlabs" target="_blank" rel="noopener noreferrer" className="hover:text-rezon-cyan transition-colors">
                GitHub: RezonAi-Tech/rezonlabs
              </a>
            </p>
            <p className="text-xs text-white/50 font-mono">
              <a href="https://x.com/PrakharYud" target="_blank" rel="noopener noreferrer" className="hover:text-rezon-cyan transition-colors flex items-center justify-center">
                <Twitter className="w-3 h-3 mr-1" /> @PrakharYud
              </a>
            </p>
            <p className="text-xs text-white/50 font-mono">
              Built by RezonAi Tech with Python backend
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rezon-black text-white">
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.03)_0,transparent_70%)]"></div>
        <div className="matrix-effect"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <PythonInsights />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
