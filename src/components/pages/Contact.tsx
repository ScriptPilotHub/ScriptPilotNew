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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitData = new FormData(form);
    
    setIsSubmitting(true);
    setStatus('Sending your message... Please wait.');

    // Log form data for debugging
    console.log('Form submission attempt:', {
      name: submitData.get('name'),
      email: submitData.get('email'),
      message: submitData.get('message'),
      timestamp: new Date().toISOString()
    });

    // Submit to Formspree with better error handling
    fetch('https://formspree.io/f/xpwzgqpv', {
      method: 'POST',
      body: submitData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        return response.json().then(data => {
          console.log('Success response:', data);
          const name = submitData.get('name') as string;
          setStatus(`✅ Thank you, ${name}! Your message has been sent successfully. We'll respond within 24 hours.`);
          setFormData({ name: '', email: '', message: '' });
          form.reset();
        });
      } else {
        return response.json().then(data => {
          console.error('Error response:', data);
          throw new Error(data.error || 'Form submission failed');
        });
      }
    })
    .catch(error => {
      console.error('Form submission error:', error);
      
      // Fallback: Try alternative submission method
      const fallbackData = {
        name: submitData.get('name'),
        email: submitData.get('email'),
        message: submitData.get('message'),
        _subject: 'URGENT: Contact Form Submission - Script Pilot',
        _replyto: submitData.get('email'),
        _next: window.location.href
      };
      
      // Try alternative Formspree endpoint
      return fetch('https://formspree.io/f/xpwzgqpv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fallbackData)
      })
      .then(response => {
        if (response.ok) {
          const name = submitData.get('name') as string;
          setStatus(`✅ Thank you, ${name}! Your message has been sent successfully (backup method). We'll respond within 24 hours.`);
          setFormData({ name: '', email: '', message: '' });
          form.reset();
        } else {
          throw new Error('Both submission methods failed');
        }
      })
      .catch(finalError => {
        console.error('Final submission error:', finalError);
        setStatus(`❌ There was an error sending your message. Please try again or contact us directly at t6ckmedia@gmail.com. We apologize for the inconvenience.`);
      });
    })
    .finally(() => {
      setIsSubmitting(false);
      // Clear status after 10 seconds for success, 15 seconds for errors
      const clearDelay = status.includes('✅') ? 10000 : 15000;
      setTimeout(() => setStatus(''), clearDelay);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Test form submission function for debugging
  const testFormSubmission = () => {
    console.log('Testing form submission...');
    fetch('https://formspree.io/f/xpwzgqpv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message to verify form functionality.',
        _subject: 'Test Form Submission - Script Pilot'
      })
    })
    .then(response => {
      console.log('Test response:', response.status);
      return response.json();
    })
    .then(data => {
      console.log('Test data:', data);
    })
    .catch(error => {
      console.error('Test error:', error);
    });
  };

  // Run test on component mount (only in development)
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form component loaded');
      // Uncomment the line below to test form submission
      // testFormSubmission();
    }
  }, []);</parameter>
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
                    <input type="hidden" name="_to" value="t6ckmedia@gmail.com" />
                    <input type="hidden" name="_replyto" value="t6ckmedia@gmail.com" />
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Script Pilot" />
                    <input type="hidden" name="_next" value={window.location.href} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
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
                          autoComplete="name"
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
                          autoComplete="email"
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
                        minLength={10}
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
                    <p className={`text-center font-medium ${
                      status.includes('❌') || status.includes('error') || status.includes('Error')
                        ? 'text-red-600'
                        : status.includes('✅')
                        ? 'text-green-600'
                        : 'text-blue-600'
                    } p-4 bg-white rounded-lg border ${
                      status.includes('❌') || status.includes('error') || status.includes('Error')
                        ? 'border-red-200 bg-red-50'
                        : status.includes('✅')
                        ? 'border-green-200 bg-green-50'
                        : 'border-blue-200 bg-blue-50'
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
                        <p className="font-medium text-slate-900">Phone</p>
                        <p className="text-sm text-slate-600">Available during consultation calls</p>
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
                        <p className="text-sm text-slate-600">Within 24 hours</p>
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