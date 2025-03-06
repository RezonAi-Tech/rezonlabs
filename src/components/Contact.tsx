
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            inView ? "animate-slide-up opacity-100" : "opacity-0"
          )}>
            Get in <span className="text-rezon-cyan">Touch</span>
          </h2>
          <p className={cn(
            "text-lg text-white/70 max-w-2xl mx-auto",
            inView ? "animate-slide-up delay-100 opacity-100" : "opacity-0"
          )}>
            Have questions about our security services or ready to strengthen your digital defenses? 
            Contact us today and our experts will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={cn(
            "glass-card rounded-lg p-8 h-full flex flex-col justify-between",
            inView ? "animate-slide-right delay-200 opacity-100" : "opacity-0"
          )}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-rezon-gray inline-flex items-center justify-center w-12 h-12 rounded-md shrink-0">
                    <Mail className="w-5 h-5 text-rezon-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/60 mb-1">Email Us</h4>
                    <a href="mailto:rezonaitech@gmail.com" className="text-white hover:text-rezon-cyan transition-colors">
                      rezonaitech@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rezon-gray inline-flex items-center justify-center w-12 h-12 rounded-md shrink-0">
                    <Phone className="w-5 h-5 text-rezon-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/60 mb-1">Call Us</h4>
                    <a href="tel:+919997792712" className="text-white hover:text-rezon-cyan transition-colors">
                      +91-9997792712
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-rezon-gray inline-flex items-center justify-center w-12 h-12 rounded-md shrink-0">
                    <MapPin className="w-5 h-5 text-rezon-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white/60 mb-1">Location</h4>
                    <p className="text-white">
                      Pilibhit, Uttar Pradesh, India (262001)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-rezon-darkGray/50 p-5 rounded-lg">
              <h4 className="text-lg font-medium mb-2 text-white">Ready to secure your digital assets?</h4>
              <p className="text-white/70 mb-0">
                Get in touch today for a comprehensive security evaluation and expert guidance.
              </p>
            </div>
          </div>
          
          <div className={cn(
            "glass-card rounded-lg p-8",
            inView ? "animate-slide-left delay-300 opacity-100" : "opacity-0"
          )}>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-rezon-gray border border-rezon-gray focus:border-rezon-cyan/50 rounded-md px-4 py-3 text-white outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-rezon-gray border border-rezon-gray focus:border-rezon-cyan/50 rounded-md px-4 py-3 text-white outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm text-white/70 mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-rezon-gray border border-rezon-gray focus:border-rezon-cyan/50 rounded-md px-4 py-3 text-white outline-none transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-rezon-gray border border-rezon-gray focus:border-rezon-cyan/50 rounded-md px-4 py-3 text-white outline-none transition-colors resize-none"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex items-center justify-center gap-2 w-full bg-rezon-cyan hover:bg-rezon-cyan/90 text-rezon-black font-medium py-3.5 rounded-md transition-all duration-200", 
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                )}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
