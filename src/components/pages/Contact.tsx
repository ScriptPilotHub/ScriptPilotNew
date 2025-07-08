import React, { useState } from 'react';
import { User, Mail, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      setIsSubmitting(false);
      setStatus(`Thank you, ${name}! Your message has been sent.`);
      e.currentTarget.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 animate-pulse">Get in Touch</h1>
            <p className="text-lg text-slate-300 mt-4">Book a free consultation or send us a message.</p>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 rounded-xl p-8 shadow-2xl border border-slate-700/50 h-full hover:shadow-3xl hover:shadow-green-500/20 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 ease-out relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Send a Direct Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-slate-500 group-focus-within:text-green-400 group-focus-within:scale-110 transition-all duration-500" />
                    </div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      className="w-full bg-slate-700/50 text-white rounded-lg border-2 border-slate-600 focus:border-green-500 focus:ring-0 focus:scale-105 transition-all duration-500 pl-10 pr-4 py-3 hover:bg-slate-700/70 hover:shadow-lg" 
                      required 
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-green-400 group-focus-within:scale-110 transition-all duration-500" />
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      className="w-full bg-slate-700/50 text-white rounded-lg border-2 border-slate-600 focus:border-green-500 focus:ring-0 focus:scale-105 transition-all duration-500 pl-10 pr-4 py-3 hover:bg-slate-700/70 hover:shadow-lg" 
                      required 
                    />
                  </div>
                </div>
                <div className="relative group">
                  <textarea 
                    name="message" 
                    rows={5} 
                    placeholder="Your message..." 
                    className="w-full bg-slate-700/50 text-white rounded-lg border-2 border-slate-600 focus:border-green-500 focus:ring-0 focus:scale-105 transition-all duration-500 px-4 py-3 hover:bg-slate-700/70 hover:shadow-lg" 
                    required
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-green-500/30 btn-shimmer relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </div>
              </form>
              {status && <p className="text-center mt-6 text-green-300 animate-bounce-subtle">{status}</p>}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 rounded-xl p-8 shadow-2xl border border-slate-700/50 h-full text-center hover:shadow-3xl hover:shadow-teal-500/20 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 ease-out relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <MessageCircle className="w-16 h-16 text-teal-400 mx-auto mb-6 animate-bounce-subtle group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-6">Book a Free Consultation</h3>
              <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-500">
                Ready to discuss your project? Click the button below to open our scheduling page and find a time that works for you. We'll call you to discuss your project in detail.
              </p>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 hover:shadow-teal-500/30 btn-shimmer relative overflow-hidden"
              >
                <span className="relative z-10">
                  Book Your Call
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};