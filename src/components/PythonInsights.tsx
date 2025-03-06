
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, Brain, ShieldCheck, Webhook } from 'lucide-react';

const PythonInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInsight, setActiveInsight] = useState(0);
  
  const insights = [
    {
      title: "AI-Powered Analysis",
      description: "Our Python + TensorFlow system analyzes security patterns to predict potential threats before they materialize.",
      icon: <Brain className="h-10 w-10 text-rezon-cyan" />,
      code: "# Threat prediction using AI\nimport tensorflow as tf\nfrom security_model import ThreatPredictor\n\nmodel = ThreatPredictor()\nprediction = model.analyze(network_data)\nif prediction.risk_score > 0.7:\n    alert_security_team(prediction)"
    },
    {
      title: "Real-time Monitoring",
      description: "Python-based microservices continuously scan your infrastructure for suspicious activities 24/7.",
      icon: <Webhook className="h-10 w-10 text-rezon-cyan" />,
      code: "# Continuous security monitoring\nfrom asyncio import gather\nfrom monitors import NetworkMonitor, APIMonitor\n\nasync def monitor_all():\n    monitors = [\n        NetworkMonitor(),\n        APIMonitor()\n    ]\n    results = await gather(*[m.scan() for m in monitors])\n    process_results(results)"
    },
    {
      title: "Vulnerability Patching",
      description: "Automated Python scripts that can deploy security patches to your systems with minimal downtime.",
      icon: <ShieldCheck className="h-10 w-10 text-rezon-cyan" />,
      code: "# Automated vulnerability patching\nfrom security.patches import PatchManager\nfrom security.vulnerabilities import VulnDB\n\npatches = PatchManager()\nvulns = VulnDB.get_critical()\n\nfor vuln in vulns:\n    patch = patches.get_for_vulnerability(vuln)\n    if patch:\n        status = patch.deploy(test_mode=False)\n        log_deployment_result(vuln, status)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('python-insights');
    if (element) {
      observer.observe(element);
    }

    // Auto-rotate insights
    const rotationInterval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length);
    }, 8000);

    return () => {
      if (element) observer.unobserve(element);
      clearInterval(rotationInterval);
    };
  }, [insights.length]);

  return (
    <section 
      id="python-insights" 
      className="py-20 px-6 bg-rezon-black relative overflow-hidden"
    >
      <div className="absolute inset-0 security-pattern opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={cn(
          "text-center mb-16",
          isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
        )}>
          <div className="inline-flex items-center justify-center gap-2 bg-rezon-darkGray px-4 py-2 rounded-full mb-6">
            <Terminal className="h-4 w-4 text-rezon-cyan" />
            <span className="text-sm font-medium text-rezon-cyan">Python-Powered Security</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            Advanced Security Through Intelligent Code
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our Python backend powers sophisticated security systems that adapt to evolving threats in real-time
          </p>
        </div>
        
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
          isVisible ? "opacity-100 animate-slide-up delay-300" : "opacity-0"
        )}>
          {/* Code Display */}
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-lg overflow-hidden">
              <div className="bg-rezon-darkGray px-4 py-2 flex items-center gap-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/70 text-xs">python_security.py</div>
              </div>
              <pre className="p-4 text-sm font-mono text-white/90 overflow-x-auto security-pattern">
                <code>
                  {insights[activeInsight].code}
                </code>
              </pre>
            </div>
          </div>
          
          {/* Insights Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass-card p-6 rounded-lg transition-all duration-500 cursor-pointer",
                    activeInsight === index ? "border-rezon-cyan" : "border-rezon-gray/30",
                    "hover:border-rezon-cyan/50"
                  )}
                  onClick={() => setActiveInsight(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-2 rounded-lg",
                      activeInsight === index ? "bg-rezon-cyan/20" : "bg-rezon-darkGray"
                    )}>
                      {insight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{insight.title}</h3>
                      <p className="text-white/70">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PythonInsights;
