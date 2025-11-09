import React, { useState } from 'react';
import { User, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setIsSubmitting(true);
    setStatus('Sending your message...');

    try {
      // Method 1: Direct Formspree submission
      const response = await fetch('https://formspree.io/f/xpwzgqpv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const name = formData.get('name') as string;
        setStatus(`✅ Thank you, ${name}! Your message has been sent successfully. We'll respond within 24 hours.`);
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Primary method failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      try {
        // Method 2: Alternative approach with different headers
        const fallbackResponse = await fetch('https://formspree.io/f/xpwzgqpv', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            _replyto: formData.get('email'),
            _subject: 'New Contact Form Submission - Script Pilot'
          })
        });

        if (fallbackResponse.ok) {
          const name = formData.get('name') as string;
          setStatus(`✅ Thank you, ${name}! Your message has been sent successfully. We'll respond within 24 hours.`);
          form.reset();
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Backup method also failed');
        }
      } catch (finalError) {
        console.error('All submission methods failed:', finalError);
        
        // Method 3: Create mailto link as ultimate fallback
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        
        const subject = encodeURIComponent('New Contact Form Submission - Script Pilot');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:t6ckmedia@gmail.com?subject=${subject}&body=${body}`;
        
        setStatus(`⚠️ Form submission failed. Opening your email client to send the message directly. If this doesn't work, please email us directly at t6ckmedia@gmail.com`);
        
        // Open mailto link
        window.location.href = mailtoLink;
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 10000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
              <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      Send a Direct Message
                    </h3>
                    <p className="text-slate-600">
                      Fill out the form below and we'll get back to you within 24 hours.
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
                          value={formData.name}
                          onChange={handleInputChange}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email" 
                          className="w-full bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pl-10 pr-4 py-3 transition-colors duration-200 focus:outline-none" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
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
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                  
                  {status && (
                    <div className={`p-4 rounded-lg border text-center font-medium ${
                      status.includes('✅') 
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : status.includes('⚠️')
                        ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                      {status}
                    </div>
                  )}

                  {/* Emergency Contact */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-blue-900 text-sm">Direct Email</p>
                        <p className="text-blue-700 text-sm mt-1">
                          Having issues with the form? Email us directly at{' '}
                          <a 
                            href="mailto:t6ckmedia@gmail.com?subject=New Contact - Script Pilot&body=Hi, I'd like to discuss a project with Script Pilot.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AProject Details: %0D%0A"
                            className="font-medium underline hover:text-blue-800"
                          >
                            t6ckmedia@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Consultation Booking */}
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
                  <div className="space-y-6">
                    <MessageCircle className="w-16 h-16 text-blue-600 mx-auto" />
                    <div className="space-y-3">
                      <h3 className="heading-3 text-slate-900">
                        Book a Free Consultation
                      </h3>
                      <p className="text-slate-600">
                        Ready to discuss your project? Click the button below to open our scheduling 
                        page and find a time that works for you. We'll call you to discuss your 
                        project in detail.
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/t6ckmedia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                      Schedule Your Call
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <h4 className="heading-3 text-slate-900">
                    Other Ways to Reach Us
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Phone & Email</p>
                        <p className="text-sm text-slate-600">
                          <a href="tel:4174010015" className="text-blue-600 hover:text-blue-700 block">
                            (417) 401-0015
                          </a>
                          <a href="mailto:t6ckmedia@gmail.com" className="text-blue-600 hover:text-blue-700">
                            t6ckmedia@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Service Area</p>
                        <p className="text-sm text-slate-600">Serving businesses nationwide</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Response Time</p>
                        <p className="text-sm text-slate-600">Within 24 hours guaranteed</p>
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