import React from 'react';
import { CreditCard, Shield, FileText } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const PaymentPortal: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900">
                Client Payment
                <span className="block text-gradient">Portal</span>
              </h1>
              <p className="body-large max-w-2xl mx-auto">
                Welcome to your secure payment portal. Here, you can easily manage your invoices, 
                make payments, and access our protection services.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Payment Options */}
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6">
                <CreditCard className="w-16 h-16 text-purple-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    Make a Payment
                  </h3>
                  <p className="text-slate-600">
                    Pay your project invoices securely through our Stripe checkout.
                  </p>
                </div>
                <a
                  href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Pay Invoice
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6">
                <Shield className="w-16 h-16 text-teal-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    Website Protection
                  </h3>
                  <p className="text-slate-600">
                    Monthly website protection and updates package for ongoing security and maintenance.
                  </p>
                </div>
                <a
                  href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6">
                <FileText className="w-16 h-16 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    Customer Portal
                  </h3>
                  <p className="text-slate-600">
                    View invoices, manage subscriptions, and access your billing history.
                  </p>
                </div>
                <a
                  href="https://billing.stripe.com/p/login/bJe28s5Za1Yg3CL68L9EI00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Access Portal
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Security Notice */}
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection delay={800}>
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-4xl mx-auto shadow-sm">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="heading-3 text-slate-900 mb-4">
              Secure & Protected
            </h3>
            <p className="text-slate-600">
              All payments are processed securely by Stripe. Your payment information is encrypted 
              and protected with industry-leading security measures.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);