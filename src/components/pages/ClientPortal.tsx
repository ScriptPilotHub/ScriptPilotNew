import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Star, ArrowRight, Zap, Award, Mail, Phone, Calendar, Users, Wallet } from 'lucide-react';

export const ClientPortal: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Wallet className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Client Payment
          <span className="block text-gray-600">Portal</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Secure payment processing for Script Pilot clients. 
          Choose your service below to complete your payment safely.
        </p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Payment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, easy payments for all our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Start */}
          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $90</span>
                </div>
                <div className="text-5xl font-bold text-gray-900">$160</div>
              </div>
              <p className="text-gray-600 mb-6">Pay this to get started with your website project</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Strategy session
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Site planning
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Development begins
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Regular updates
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $160
              </a>
            </div>
          </div>

          {/* Project Completion */}
          <div className="group bg-gray-900 rounded-3xl p-8 shadow-2xl relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Launch Your Site</h3>
              <p className="text-gray-300 text-sm font-semibold mb-2">(Only pay when your site is done)</p>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-400 line-through">$600</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $160</span>
                </div>
                <div className="text-5xl font-bold text-white">$440</div>
              </div>
              <p className="text-gray-300 mb-6">Final payment when your website is complete and ready to go live</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Finished website
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Domain & hosting setup
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  SSL security
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  Site goes live
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-gray-900 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $440
              </a>
            </div>
          </div>

          {/* Maintenance */}
          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Keep It Running</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $100</span>
                </div>
                <div className="text-5xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500">per month</div>
              </div>
              <p className="text-gray-600 mb-2">Optional monthly service to handle updates and security</p>
              <p className="text-blue-600 font-semibold mb-6">Completely Optional</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Security updates
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Performance monitoring
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-green-600 text-green-600 py-4 rounded-2xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Subscribe $150/mo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Security */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Shield className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Secure Payment Processing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your payment information is protected by bank-level security.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SSL Encrypted</h3>
            <p className="text-gray-600 leading-relaxed">All payments are processed through secure, encrypted connections</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <Award className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stripe Powered</h3>
            <p className="text-gray-600 leading-relaxed">Trusted by millions of businesses worldwide for secure payments</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Confirmation</h3>
            <p className="text-gray-600 leading-relaxed">Get immediate confirmation and project updates via email</p>
          </div>
        </div>
      </div>
    </section>

    {/* Support */}
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Need Help With Payment?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Contact us if you have questions about payments or need assistance with your project.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:contact@scriptpilot.us?subject=Payment%20Support%20-%20Script%20Pilot"
            className="group bg-white text-gray-900 p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Get help within 24 hours</p>
            <span className="text-gray-900 font-semibold">contact@scriptpilot.us</span>
          </a>

          <a
            href="tel:4174010015"
            className="group bg-white text-gray-900 p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri, 9AM-6PM CST</p>
            <span className="text-gray-900 font-semibold">(417) 401-0015</span>
          </a>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 text-white p-8 rounded-3xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Schedule Call</h3>
            <p className="text-blue-100 mb-4">Free consultation</p>
            <span className="text-white font-semibold">Book Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);