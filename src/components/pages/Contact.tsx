import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Shield, Users, CheckCircle, Calendar, Zap, Award, Headphones } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 px-4">
            Ready to get a website that actually helps your business? 
            Contact us for an honest conversation about what you need.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-16">
            {/* Email Contact */}
            <div className="group bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Send Us an Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Tell us about your project. We'll get back to you within 24 hours with next steps.
                  </p>
                  <a 
                    href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot&body=Hi%20there,%0D%0A%0D%0AI'm%20interested%20in%20getting%20a%20website%20for%20my%20business.%0D%0A%0D%0ABusiness%20Name:%20%0D%0AWhat%20you%20do:%20%0D%0ATimeline:%20%0D%0ABudget%20range:%20%0D%0A%0D%0ATell%20us%20about%20your%20project:%0D%0A%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
                    className="inline-flex items-center gap-3 text-lg sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-500 group-hover:scale-105 transform break-all"
                  >
                    contact@scriptpilot.us
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>We respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="group bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Give Us a Call</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Talk directly to the people who'll build your site. Available during business hours.
                  </p>
                  <a 
                    href="tel:4174010015"
                    className="inline-flex items-center gap-3 text-lg sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-500 group-hover:scale-105 transform"
                  >
                    (417) 401-0015
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
                  </a>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Monday-Friday, 9AM-6PM CST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Consultation */}
          <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar className="w-10 h-10 text-gray-800" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Book a Free Strategy Call
              </h3>
              <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed px-4">
                30 minutes to discuss your project. We'll talk about your business, your goals, 
                and whether we're a good fit to work together. No sales pitch, just honest advice.
              </p>
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-800 px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <Calendar className="w-6 h-6" />
                Book Your Call
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-gray-300 text-sm mt-4">
                No commitment • Free advice • 30 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose whatever works best for you. We're here to help.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Location */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Where We Work</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">We work with businesses anywhere in the US</p>
              <p className="text-sm text-gray-600">Based in Missouri</p>
            </div>

            {/* Response Time */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">We get back to you within 24 hours</p>
              <p className="text-sm text-gray-600">Usually much faster</p>
            </div>

            {/* Project Timeline */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Most sites launch in 2-8 weeks</p>
              <p className="text-sm text-gray-600">Rush projects available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're not the biggest web development company, but we might be the most reliable.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">We've Done This Before</h3>
              <p className="text-sm sm:text-base text-gray-600">200+ websites built. We know what works and what doesn't.</p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">You Talk to the Developers</h3>
              <p className="text-sm sm:text-base text-gray-600">No middlemen. You work directly with the people building your site.</p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">We Deliver on Time</h3>
              <p className="text-sm sm:text-base text-gray-600">Realistic timelines that we actually stick to. No endless delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto px-4">
            No pressure, no sales pitch. Just an honest conversation about what you need 
            and whether we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <a
              href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
              className="w-full sm:w-auto bg-white text-gray-900 px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 transform flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Send Us an Email
            </a>
            <a
              href="tel:4174010015"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-3 transform hover:-translate-y-1"
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