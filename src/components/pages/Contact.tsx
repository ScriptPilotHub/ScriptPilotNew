import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Shield, Users, CheckCircle, Calendar, Zap, Award } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Get Your Project
            <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Started Today
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Ready to grow your business online? Contact us to discuss your project requirements 
            and get a custom solution that drives real results.
          </p>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-16">
            {/* Email Contact */}
            <div className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 mb-8">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Send Us an Email</h3>
                  <p className="text-slate-600 mb-4">
                    Get detailed project information and quotes. We respond to all inquiries within 24 hours.
                  </p>
                  <a 
                    href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot&body=Hello,%0D%0A%0D%0AI'm interested in web development services for my business.%0D%0A%0D%0AProject Type: [Website/E-commerce/Custom Application]%0D%0ABusiness Name: %0D%0AIndustry: %0D%0ATimeline: %0D%0ABudget Range: %0D%0A%0D%0AProject Details:%0D%0A%0D%0A%0D%0AThank you,%0D%0A[Your Name]"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200 group-hover:scale-105 transform"
                  >
                    contact@scriptpilot.us
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Call Now</h3>
                  <p className="text-slate-600 mb-4">
                    Speak directly with our development team. Available during business hours for immediate project consultation.
                  </p>
                  <a 
                    href="tel:4174010015"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200 group-hover:scale-105 transform"
                  >
                    (417) 401-0015
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri 9AM-6PM CST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Consultation */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Schedule a Free Strategy Session
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Book a 30-minute consultation to discuss your project requirements. We'll analyze your business needs, 
                provide technical recommendations, and outline a development plan tailored to your goals.
              </p>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <Calendar className="w-6 h-6" />
                Book Your Free Session
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-slate-400 text-sm mt-4">
                No commitment required • Instant booking • 100% free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the contact method that works best for your schedule and project needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-all duration-300">
                <MapPin className="w-8 h-8 text-slate-700 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Service Area</h3>
              <p className="text-slate-600 mb-4">Serving businesses nationwide with remote collaboration</p>
              <p className="text-sm text-slate-500">Based in Missouri, USA</p>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-emerald-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quick Response</h3>
              <p className="text-slate-600 mb-4">We respond to all inquiries within 24 hours</p>
              <p className="text-sm text-slate-500">Usually much faster!</p>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-slate-600 mb-4">Most projects completed in 2-8 weeks</p>
              <p className="text-sm text-slate-500">Rush projects available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Script Pilot
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional web development with proven results and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Proven Results</h3>
              <p className="text-slate-600">Over 200 successful projects delivered with 99% client satisfaction</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Personal Service</h3>
              <p className="text-slate-600">Direct communication with our development team and dedicated project support</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Quality Guarantee</h3>
              <p className="text-slate-600">30-day satisfaction guarantee with comprehensive testing and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Professional web development that grows your business. Contact us today to discuss 
            your project requirements and get a custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform flex items-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
            <a
              href="tel:4174010015"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call (417) 401-0015
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};