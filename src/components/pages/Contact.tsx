import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Shield, Users, CheckCircle, Calendar, Zap, Award, Headphones } from 'lucide-react';

interface ContactProps {
  navigateTo: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact Script Pilot
            <span className="block text-gray-600">Get Your Web Development Project Started</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to grow your business with a professional website? Contact Missouri's trusted web development team. 
            Free consultation, transparent pricing, and guaranteed results. Get started today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose whatever works best for you. We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div className="group bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Send Us an Email</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Tell us about your project. We'll get back to you within 24 hours with next steps.
                </p>
                <a 
                  href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot&body=Hi%20there,%0D%0A%0D%0AI'm%20interested%20in%20getting%20a%20website%20for%20my%20business.%0D%0A%0D%0ABusiness%20Name:%20%0D%0AWhat%20you%20do:%20%0D%0ATimeline:%20%0D%0ABudget%20range:%20%0D%0A%0D%0ATell%20us%20about%20your%20project:%0D%0A%0D%0A%0D%0AThanks,%0D%0A[Your%20Name]"
                  className="inline-flex items-center gap-2 text-base font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 group-hover:scale-105 transform mb-3"
                >
                  contact@scriptpilot.us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="group bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Give Us a Call</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Talk directly to the people who'll build your site. Available during business hours.
                </p>
                <a 
                  href="tel:4174010015"
                  className="inline-flex items-center gap-2 text-base font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 group-hover:scale-105 transform mb-3"
                >
                  (417) 401-0015
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Monday-Friday, 9AM-6PM CST</span>
                </div>
              </div>
            </div>

            {/* Schedule Consultation */}
            <div className="group bg-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 hover:-translate-y-3 transition-all duration-500">
              <div className="text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Book a Free Call</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  30 minutes to discuss your project. No sales pitch, just honest advice.
                </p>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform mb-3 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book Your Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-gray-400 text-xs">
                  No commitment • Free advice • 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help however works best for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Where We Work</h3>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">We work with businesses anywhere in the US</p>
              <p className="text-gray-600">Based in Missouri</p>
            </div>

            {/* Response Time */}
            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <Clock className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">We get back to you within 24 hours</p>
              <p className="text-gray-600">Usually much faster</p>
            </div>

            {/* Project Timeline */}
            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">Most sites launch in 1-4 weeks</p>
              <p className="text-gray-600">Rush projects available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not the biggest web development company, but we might be the most reliable.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We've Done This Before</h3>
              <p className="text-gray-600 leading-relaxed text-sm">200+ websites built. We know what works and what doesn't.</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">You Talk to the Developers</h3>
              <p className="text-gray-600 leading-relaxed text-sm">No middlemen. You work directly with the people building your site.</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <Award className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Deliver on Time</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Realistic timelines that we actually stick to. No endless delays.</p>
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
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            No pressure, no sales pitch. Just an honest conversation about what you need 
            and whether we can help.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
              className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <Mail className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Email Us</h3>
              <p className="text-gray-600 mb-2 text-sm">Get a response within 24 hours</p>
              <span className="text-gray-900 font-semibold text-sm">contact@scriptpilot.us</span>
            </a>

            <a
              href="tel:4174010015"
              className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <Phone className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Call Us</h3>
              <p className="text-gray-600 mb-2 text-sm">Mon-Fri, 9AM-6PM CST</p>
              <span className="text-gray-900 font-semibold text-sm">(417) 401-0015</span>
            </a>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <Calendar className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-1">Book a Call</h3>
              <p className="text-blue-100 mb-2 text-sm">Free 30-minute consultation</p>
              <span className="text-white font-semibold text-sm">Schedule Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};