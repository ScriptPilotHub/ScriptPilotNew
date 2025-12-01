import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Star, ArrowRight, Zap, Award, Mail, Phone, Calendar, Users, Wallet } from 'lucide-react';

export const ClientPortal: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Wallet className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Client Payment Portal
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 px-4">
          Secure payment processing for Script Pilot clients. 
          Choose your service below to complete your payment safely.
        </p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Project Start */}
          <div className="group bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">$160</div>
                <span className="text-green-600 font-semibold text-sm">Save $90</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Pay this to get started with your website project</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Strategy session
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Site planning
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Development begins
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Regular updates
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $160
              </a>
            </div>
          </div>

          {/* Project Completion */}
          <div className="group bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Launch Your Site</h3>
              <p className="text-sm text-gray-600 font-semibold mb-2">(Only pay when your site is done)</p>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$600</span>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">$440</div>
                <span className="text-green-600 font-semibold text-sm">Save $160</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">Final payment when your website is complete and ready to go live</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Finished website
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Domain & hosting setup
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  SSL security
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Site goes live
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                <CreditCard className="w-5 h-5" />
                Pay $440
              </a>
            </div>
          </div>

          {/* Maintenance */}
          <div className="group bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Keep It Running</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500 text-sm mb-1">per month</div>
                <span className="text-green-600 font-semibold text-sm">Save $100/month</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2">Optional monthly service to handle updates and security</p>
              <p className="text-sm text-gray-600 font-semibold mb-6">Completely Optional</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Security updates
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Performance monitoring
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 hover:text-white transition-all duration-500 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Secure Payment Processing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your payment information is protected by bank-level security.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">SSL Encrypted</h3>
            <p className="text-sm sm:text-base text-gray-600">All payments are processed through secure, encrypted connections</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Stripe Powered</h3>
            <p className="text-sm sm:text-base text-gray-600">Trusted by millions of businesses worldwide for secure payments</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Instant Confirmation</h3>
            <p className="text-sm sm:text-base text-gray-600">Get immediate confirmation and project updates via email</p>
          </div>
        </div>
      </div>
    </section>

    {/* Support */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Need Help With Payment?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
          Contact us if you have questions about payments or need assistance with your project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="mailto:contact@scriptpilot.us?subject=Payment%20Support%20-%20Script%20Pilot"
            className="w-full sm:w-auto bg-white text-gray-900 px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 transform"
          >
            <Mail className="w-6 h-6" />
            Email Support
          </a>
          <a
            href="tel:4174010015"
            className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            Call (417) 401-0015
          </a>
        </div>
      </div>
    </section>
  </div>
);