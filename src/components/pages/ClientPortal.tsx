import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Star, ArrowRight, Zap, Award, Mail, Phone, Calendar, Users, Wallet } from 'lucide-react';

export const ClientPortal: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-premium-float">
          <Wallet className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
          Client Payment
          <span className="block bg-gradient-to-r from-green-700 to-emerald-900 bg-clip-text text-transparent">
            Portal
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-green-800 max-w-3xl mx-auto mb-8 px-4">
          Secure payment processing for Script Pilot web development services. 
          Choose your service below to complete your payment safely and securely.
        </p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Project Initiation */}
          <div className="group bg-white rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">Project Initiation</h3>
              <div className="mb-4">
                <span className="text-lg text-green-500 line-through">$250</span>
                <div className="text-3xl sm:text-4xl font-bold text-green-900">$160</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $90!</span>
              </div>
              <p className="text-sm sm:text-base text-green-700 mb-6">Get started with your custom website project</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Initial consultation & planning
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Requirements analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Development timeline
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Project roadmap
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $160
              </a>
            </div>
          </div>

          {/* Deployment & Final Payment */}
          <div className="group bg-white rounded-2xl border-2 border-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">Deployment & Final Payment</h3>
              <p className="text-sm text-emerald-600 font-semibold mb-2">(Only pay when project is complete)</p>
              <div className="mb-4">
                <span className="text-lg text-green-500 line-through">$600</span>
                <div className="text-3xl sm:text-4xl font-bold text-green-900">$440</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $160!</span>
              </div>
              <p className="text-sm sm:text-base text-green-700 mb-6">Final payment made only when your website is complete and ready for deployment</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Complete website development
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Domain setup & hosting
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  SSL certificate & security
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Live website deployment
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $440
              </a>
            </div>
          </div>

          {/* Website Protection & Updates */}
          <div className="group bg-white rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">Website Protection & Updates</h3>
              <div className="mb-4">
                <span className="text-lg text-green-500 line-through">$250</span>
                <div className="text-3xl sm:text-4xl font-bold text-green-900">$150</div>
                <div className="text-green-500 text-sm mb-1">per month</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $100/month!</span>
              </div>
              <p className="text-sm sm:text-base text-green-700 mb-2">Keep your website secure and up-to-date</p>
              <p className="text-sm text-emerald-600 font-semibold mb-6">Optional Service</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Security monitoring & updates
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-3 text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Subscribe $150/mo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Security & Trust */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-green-700 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Secure Payment Processing
          </h2>
          <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto px-4">
            Your payment information is protected by industry-leading security measures.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">SSL Encrypted</h3>
            <p className="text-sm sm:text-base text-green-700">All payments are processed through secure, encrypted connections</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">Stripe Powered</h3>
            <p className="text-sm sm:text-base text-green-700">Trusted by millions of businesses worldwide for secure payments</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4">Instant Confirmation</h3>
            <p className="text-sm sm:text-base text-green-700">Receive immediate confirmation and project updates via email</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Support */}
    <section className="py-20 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Payment Support
        </h2>
        <p className="text-lg sm:text-xl text-green-200 mb-8 max-w-3xl mx-auto px-4">
          Contact us if you need assistance with payments or have questions about your project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="mailto:contact@scriptpilot.us?subject=Payment Support - Script Pilot"
            className="w-full sm:w-auto bg-white text-green-900 px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 transform"
          >
            <Mail className="w-6 h-6" />
            Email Support
          </a>
          <a
            href="tel:4174010015"
            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition-all duration-500 flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            Call (417) 401-0015
          </a>
        </div>
      </div>
    </section>
  </div>
);