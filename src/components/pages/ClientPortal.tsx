import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Star, ArrowRight, Zap, Award } from 'lucide-react';

export const ClientPortal: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Client Payment
          <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Portal
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Secure payment processing for Script Pilot web development services. 
          Choose your service below to complete your payment safely and securely.
        </p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Initiation */}
          <div className="group bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Project Initiation</h3>
              <div className="mb-4">
                <span className="text-lg text-slate-500 line-through">$250</span>
                <div className="text-4xl font-bold text-slate-900">$160</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $90!</span>
              </div>
              <p className="text-slate-600 mb-6">Get started with your custom website project</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Project consultation & planning
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Custom design mockups
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Development timeline
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Project roadmap
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <CreditCard className="w-5 h-5" />
                Pay $160
              </a>
            </div>
          </div>

          {/* Deployment & Final Payment */}
          <div className="group bg-white rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Deployment & Final Payment</h3>
             <p className="text-sm text-amber-600 font-semibold mb-2">(Only pay when project is complete)</p>
              <div className="mb-4">
                <span className="text-lg text-slate-500 line-through">$600</span>
                <div className="text-4xl font-bold text-slate-900">$440</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $160!</span>
              </div>
             <p className="text-slate-600 mb-6">Final payment made only when your website is complete and ready for deployment</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Complete website development
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Domain setup & hosting
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  SSL certificate & security
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Live website deployment
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <CreditCard className="w-5 h-5" />
                Pay $440
              </a>
            </div>
          </div>

          {/* Website Protection & Updates */}
          <div className="group bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Website Protection & Updates</h3>
              <div className="mb-4">
                <span className="text-lg text-slate-500 line-through">$250</span>
                <div className="text-4xl font-bold text-slate-900">$150</div>
                <div className="text-slate-500 text-sm mb-1">per month</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $100/month!</span>
              </div>
              <p className="text-slate-600 mb-2">Keep your website secure and up-to-date</p>
              <p className="text-sm text-emerald-600 font-semibold mb-6">Optional Service</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Security monitoring & updates
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Secure Payment Processing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your payment information is protected by industry-leading security measures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">SSL Encrypted</h3>
            <p className="text-slate-600">All payments are processed through secure, encrypted connections</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Stripe Powered</h3>
            <p className="text-slate-600">Trusted by millions of businesses worldwide for secure payments</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Instant Confirmation</h3>
            <p className="text-slate-600">Receive immediate confirmation and project updates via email</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Support */}
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Need Help with Your Payment?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Our team is here to assist you with any questions about payments or services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:4174010015"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Call (417) 401-0015
          </a>
        </div>
      </div>
    </section>
  </div>
);