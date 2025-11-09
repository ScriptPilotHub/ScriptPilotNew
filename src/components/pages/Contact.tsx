import React, { useState } from 'react';
import { User, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    setIsSubmitting(true);
    setStatus('Sending your message...');

    // Direct email approach - this ALWAYS works
    const subject = encodeURIComponent(`New Contact from ${name} - Script Pilot`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Script Pilot contact form`);
    const mailtoLink = `mailto:t6ckmedia@gmail.com?subject=${subject}&body=${body}`;
    
    // Small delay to show sending status
    setTimeout(() => {
      setStatus(`✅ Opening your email client to send the message...`);
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      
      // Reset form after sending
      setTimeout(() => {
        form.reset();
        setStatus('');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-lg pt-32">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h1 className="heading-1 text-slate-900">
                  Get in
                  <span className="block text-gradient">Touch</span>
                </h1>
                <p className="body-large max-w-2xl mx-auto">
                  Ready to start your project? Call us, send a message, or book a consultation. 
                  We're here to help bring your vision to life.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      Send a Direct Message
                    </h3>
                    <p className="text-slate-600">
                      Fill out the form below and we'll open your email client to send the message.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-10 pr-4 py-3 transition-colors duration-200 focus:outline-none" 
                          required 
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Your Email" 
                          className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-10 pr-4 py-3 transition-colors duration-200 focus:outline-none" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        rows={5} 
                        placeholder="Tell us about your project..." 
                        className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-4 py-3 transition-colors duration-200 focus:outline-none resize-vertical" 
                        required
                      />
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {isSubmitting ? 'Preparing Email...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                  
                  {status && (
                    <div className={`p-4 rounded-lg border text-center font-medium ${
                      status.includes('✅') 
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                      {status}
                    </div>
                  )}

                  {/* Direct Contact Options */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-4">Prefer Direct Contact?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-900">Call Now</p>
                          <a 
                            href="tel:4174010015"
                            className="text-blue-700 hover:text-blue-800 font-medium text-lg"
                          >
                            (417) 401-0015
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-900">Email Directly</p>
                          <a 
                            href="mailto:t6ckmedia@gmail.com?subject=New Contact - Script Pilot&body=Hi, I'd like to discuss a project with Script Pilot.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AProject Details: %0D%0A"
                            className="text-blue-700 hover:text-blue-800 font-medium"
                          >
                            t6ckmedia@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Consultation Booking - Fixed Mobile Layout */}
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
                  <div className="space-y-6">
                    <MessageCircle className="w-16 h-16 text-blue-600 mx-auto" />
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        Book a Free Consultation
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Ready to discuss your project? Schedule a call to discuss your 
                        project in detail and get a custom quote.
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/t6ckmedia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-slate-900">
                    Other Ways to Reach Us
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Phone & Email</p>
                        <div className="text-slate-600 space-y-1">
                          <a href="tel:4174010015" className="text-blue-600 hover:text-blue-700 block">
                            (417) 401-0015
                          </a>
                          <a href="mailto:t6ckmedia@gmail.com" className="text-blue-600 hover:text-blue-700 block">
                            t6ckmedia@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Service Area</p>
                        <p className="text-slate-600">Serving businesses nationwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Response Time</p>
                        <p className="text-slate-600">Within 24 hours guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-6">
                <h2 className="heading-2 text-slate-900">
                  Have Questions?
                </h2>
                <p className="text-lg text-slate-600">
                  Check out our comprehensive FAQ section for answers to common questions 
                  about our process, pricing, and services.
                </p>
              </div>
              
              <a
                href="#faq"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                View FAQ
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};