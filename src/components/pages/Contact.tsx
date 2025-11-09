import React, { useState } from 'react';
import { User, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setIsSubmitting(true);
    setStatus('Sending your message...');

    // Submit to Formspree (free form handling service)
    fetch('https://formspree.io/f/xpwzgqpv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        const name = formData.get('name') as string;
        setStatus(`Thank you, ${name}! Your message has been sent successfully.`);
        form.reset();
      } else {
        setStatus('There was an error sending your message. Please try again.');
      }
    })
    .catch(() => {
      setStatus('There was an error sending your message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    });
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
                  Ready to start your project? Book a free consultation or send us a message. 
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
              <div className="card">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      Send a Direct Message
                    </h3>
                    <p className="body">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_to" value="t6ckmedia@gmail.com" />
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Script Pilot" />
                    <input type="hidden" name="_next" value="https://scriptpilotshop.netlify.app/#contact" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-10 pr-4 py-3 transition-colors duration-200" 
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
                          className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-10 pr-4 py-3 transition-colors duration-200" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        rows={5} 
                        placeholder="Tell us about your project..." 
                        className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-4 py-3 transition-colors duration-200" 
                        required
                      />
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                  {status && (
                    <p className={`text-center font-medium ${
                      status.includes('error') || status.includes('Error')
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}>
                      {status}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Consultation Booking */}
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <div className="card text-center">
                  <div className="space-y-6">
                    <MessageCircle className="w-16 h-16 text-blue-600 mx-auto" />
                    <div className="space-y-3">
                      <h3 className="heading-3 text-slate-900 dark:text-white">
                        Book a Free Consultation
                      </h3>
                      <p className="body">
                        Ready to discuss your project? Click the button below to open our scheduling 
                        page and find a time that works for you. We'll call you to discuss your 
                        project in detail.
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/t6ckmedia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg"
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <h4 className="heading-3 text-slate-900 dark:text-white">
                    Other Ways to Reach Us
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Phone</p>
                        <p className="body-small">Available during consultation calls</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Service Area</p>
                        <p className="body-small">Serving businesses nationwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Response Time</p>
                        <p className="body-small">Within 24 hours</p>
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
      <section className="section bg-slate-50">
        <div className="container text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-6">
                <h2 className="heading-2 text-slate-900">
                  Have Questions?
                </h2>
                <p className="body-large">
                  Check out our comprehensive FAQ section for answers to common questions 
                  about our process, pricing, and services.
                </p>
              </div>
              
              <a
                href="#faq"
                className="btn btn-secondary btn-lg"
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