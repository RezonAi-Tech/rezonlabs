
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Lock, ShieldAlert, LineChart, ExternalLink, Terminal, Code } from 'lucide-react';
import { toast } from "sonner";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [techStack, setTechStack] = useState([
    { name: "Python", percentage: 0 },
    { name: "Django", percentage: 0 },
    { name: "FastAPI", percentage: 0 },
    { name: "React", percentage: 0 }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Animate tech stack percentages
    const animatePercentages = setTimeout(() => {
      setTechStack([
        { name: "Python", percentage: 85 },
        { name: "Django", percentage: 75 },
        { name: "FastAPI", percentage: 80 },
        { name: "React", percentage: 90 }
      ]);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animatePercentages);
    };
  }, []);

  const handleLearnMoreClick = () => {
    toast.info(
      <div>
        <p className="font-semibold mb-2">About Rezon Security Labs</p>
        <p className="mb-2">Our security solutions are powered by Python-based machine learning algorithms that detect vulnerabilities with 99.7% accuracy.</p>
        <p className="mb-2">Our team holds OSCP, CEH, and CISSP certifications with 10+ years of cybersecurity experience.</p>
        <p>We've protected over 200+ companies across India from cyber threats.</p>
      </div>,
      {
        duration: 8000,
      }
    );
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background elements */}
      <div className="absolute inset-0 hero-grid-pattern opacity-70"></div>
      <div className="absolute top-40 left-20 w-32 h-32 rounded-full bg-rezon-cyan/5 filter blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-rezon-cyan/5 filter blur-3xl"></div>

      {/* Floating security icons */}
      <div className="absolute top-1/4 left-1/5 opacity-20 animate-float delay-300">
        <Shield className="text-rezon-cyan w-12 h-12" />
      </div>
      <div className="absolute bottom-1/4 right-1/5 opacity-20 animate-float delay-700">
        <Lock className="text-rezon-cyan w-10 h-10" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20 animate-float delay-500">
        <ShieldAlert className="text-rezon-cyan w-8 h-8" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float">
        <LineChart className="text-rezon-cyan w-9 h-9" />
      </div>
      <div className="absolute top-2/3 left-1/3 opacity-20 animate-float delay-400">
        <Terminal className="text-rezon-cyan w-10 h-10" />
      </div>
      <div className="absolute bottom-2/3 right-1/3 opacity-20 animate-float delay-200">
        <Code className="text-rezon-cyan w-9 h-9" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={cn(
          "inline-block bg-rezon-cyan/10 border border-rezon-cyan/20 rounded-full px-4 py-1 mb-6",
          isVisible ? "opacity-100 animate-slide-down" : "opacity-0"
        )}>
          <p className="text-rezon-cyan text-sm font-medium">Professional Cybersecurity Solutions</p>
        </div>
        
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto text-glow",
          isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
        )}>
          Strengthening India's Digital Defense Perimeter
        </h1>
        
        <p className={cn(
          "text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto",
          isVisible ? "opacity-100 animate-slide-up delay-200" : "opacity-0"
        )}>
          Rezon Security Labs provides comprehensive cybersecurity services with transparent pricing and expert-driven strategies tailored for businesses across India.
        </p>
        
        <div className={cn(
          "flex flex-col sm:flex-row justify-center gap-5 mb-16",
          isVisible ? "opacity-100 animate-slide-up delay-300" : "opacity-0"
        )}>
          <a 
            href="#services" 
            className="bg-rezon-cyan hover:bg-rezon-cyan/90 text-rezon-black font-bold px-8 py-3.5 rounded-md transition-all duration-200 hero-scanner"
          >
            Explore Services
          </a>
          <button 
            onClick={handleLearnMoreClick}
            className="bg-rezon-darkGray hover:bg-rezon-gray border border-rezon-cyan/30 text-rezon-cyan hover:border-rezon-cyan font-bold px-8 py-3.5 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            Learn More
            <ExternalLink size={18} />
          </button>
        </div>

        {/* Tech Stack Section */}
        <div className={cn(
          "max-w-3xl mx-auto mb-16 px-4 py-6 glass-card rounded-xl border-rezon-cyan/20",
          isVisible ? "opacity-100 animate-slide-up delay-400" : "opacity-0"
        )}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="text-rezon-cyan w-5 h-5" />
            <h3 className="text-xl font-semibold text-white">Powered by Python Backend</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full h-1.5 bg-rezon-gray rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-rezon-cyan transition-all duration-2000 ease-out" 
                    style={{ width: `${tech.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-white/80">{tech.name} {tech.percentage}%</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-white/60">
            Our security platform leverages Python's powerful libraries for AI-driven threat detection
          </div>
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {[
            {
              title: "Strategic Analysis",
              description: "Identify vulnerabilities before attackers do with our meticulous security audits",
              icon: <Shield className="w-6 h-6 text-rezon-cyan" />,
              delay: "delay-400"
            },
            {
              title: "Advanced Protection",
              description: "Implement cutting-edge security solutions crafted for Indian market challenges",
              icon: <Lock className="w-6 h-6 text-rezon-cyan" />,
              delay: "delay-500"
            },
            {
              title: "Continuous Monitoring",
              description: "Stay ahead of evolving threats with our real-time security monitoring systems",
              icon: <ShieldAlert className="w-6 h-6 text-rezon-cyan" />,
              delay: "delay-600"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-lg p-6 text-left animate-slide-up",
                item.delay
              )}
            >
              <div className="bg-rezon-gray inline-flex items-center justify-center w-12 h-12 rounded-md mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
