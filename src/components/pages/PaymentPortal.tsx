import React from 'react';
import { CreditCard, Shield, FileText, ArrowRight } from 'lucide-react';
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
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Secure Payment Options
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Choose from our secure payment and service options below. All transactions 
              are protected with industry-leading security.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Secure Payment Processing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <CreditCard className="w-16 h-16 text-purple-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                    Make a Payment
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Pay your project invoices securely through our Stripe checkout.
                  </p>
                </div>
                <a
                  href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
                >
                  Pay Invoice
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Website Protection and Security"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <Shield className="w-16 h-16 text-teal-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                    Website Protection
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Monthly website protection and updates package for ongoing security and maintenance.
                  </p>
                </div>
                <a
                  href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 group text-center h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img 
                  src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Customer Portal Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <FileText className="w-16 h-16 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">
                    Customer Portal
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    View invoices, manage subscriptions, and access your billing history.
                  </p>
                </div>
                <a
                  href="https://billing.stripe.com/p/login/bJe28s5Za1Yg3CL68L9EI00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
                >
                  Access Portal
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="section bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Why Choose Our Payment Portal
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Experience the convenience and security of our streamlined payment system.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Bank-Level Security",
              description: "All payments are processed through Stripe with 256-bit SSL encryption and PCI compliance.",
              color: "green"
            },
            {
              icon: CreditCard,
              title: "Multiple Payment Options",
              description: "Accept all major credit cards, digital wallets, and bank transfers for maximum convenience.",
              color: "blue"
            },
            {
              icon: FileText,
              title: "Instant Receipts",
              description: "Receive immediate confirmation and detailed receipts for all transactions and subscriptions.",
              color: "purple"
            }
          ].map((feature, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 bg-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Security Notice */}
    <section className="section">
      <div className="container">
        <AnimatedSection delay={800}>
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center max-w-4xl mx-auto shadow-sm">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4">
              Questions About Payments?
            </h3>
            <p className="text-slate-600">
              Need help with your payment or have questions about our services? 
              Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Support
              </a>
              <a
                href="tel:4174010015"
                className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                Call (417) 401-0015
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);