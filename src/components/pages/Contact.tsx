import React, { useState } from 'react';
import { User, Mail, MessageCircle, Phone, MapPin, Clock, ArrowRight, Shield, Users, CheckCircle } from 'lucide-react';

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
    setStatus('Preparing to send your message...');

    try {
      // Use Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': name,
          'email': email,
          'message': message
        }).toString()
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully! We\'ll get back to you within 24 hours.');
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // Fallback to mailto if Netlify forms fail
      const subject = encodeURIComponent(`New Contact from ${name} - Script Pilot`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Script Pilot contact form`);
      const mailtoLink = `mailto:t6ckmedia@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('Opening your email client to send the message...');
      window.location.href = mailtoLink;
    }
    
    setIsSubmitting(false);
    
    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Get in
            <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Ready to start your project? Call us, send a message, or book a consultation. 
            We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-slate-900">
                    Send a Direct Message
                  </h3>
                  <p className="text-slate-600">
                    Fill out the form below and we'll open your email client to send the message.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-600 pl-10 pr-4 py-3 transition-colors duration-200 focus:outline-none" 
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
                        className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-600 pl-10 pr-4 py-3 transition-colors duration-200 focus:outline-none" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <textarea 
                      name="message" 
                      rows={5} 
                      placeholder="Tell us about your project..." 
                      className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-slate-600 focus:ring-1 focus:ring-slate-600 px-4 py-3 transition-colors duration-200 focus:outline-none resize-vertical" 
                      required
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      {isSubmitting ? 'Preparing Email...' : 'Send Message'}
                    </button>
                  </div>
                </form>
                
                {status && (
                  <div className={`p-4 rounded-lg border text-center font-medium ${
                    status.includes('✅') 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    {status}
                  </div>
                )}

                {/* Direct Contact Options */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Prefer Direct Contact?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-700 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Call Now</p>
                        <a 
                          href="tel:4174010015"
                          className="text-slate-700 hover:text-slate-800 font-medium text-lg"
                        >
                          (417) 401-0015
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-700 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Email Directly</p>
                        <a 
                          href="mailto:t6ckmedia@gmail.com?subject=New Contact - Script Pilot&body=Hi, I'd like to discuss a project with Script Pilot.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AProject Details: %0D%0A"
                          className="text-slate-700 hover:text-slate-800 font-medium"
                        >
                          t6ckmedia@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Consultation Booking */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
                <div className="space-y-6">
                  <MessageCircle className="w-16 h-16 text-slate-700 mx-auto" />
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
                    className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone & Email</p>
                      <div className="text-slate-600 space-y-1">
                        <a href="tel:4174010015" className="text-slate-700 hover:text-slate-800 block">
                          (417) 401-0015
                        </a>
                        <a href="mailto:t6ckmedia@gmail.com" className="text-slate-700 hover:text-slate-800 block">
                          t6ckmedia@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Service Area</p>
                      <p className="text-slate-600">Serving businesses nationwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Response Time</p>
                      <p className="text-slate-600">Within 24 hours guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Secure & Reliable</h4>
              <p className="text-sm text-slate-600">SSL certificates, regular backups, and enterprise-grade security for all projects.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Dedicated Support</h4>
              <p className="text-sm text-slate-600">Personal attention from our experienced team throughout your project and beyond.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <CheckCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Proven Results</h4>
              <p className="text-sm text-slate-600">Hundreds of successful projects helping businesses grow their online presence.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};