import React from 'react';
import { CreditCard, Shield, FileText } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const PaymentPortal: React.FC = () => (
  <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white relative overflow-hidden min-h-screen">
    <div className="absolute top-[-25%] left-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
    <div className="absolute bottom-[-25%] right-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-delayed"></div>
    
    <div className="container mx-auto max-w-4xl text-center relative z-10">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-400 to-blue-400 bg-[length:200%_200%] animate-gradient-x mb-6">
          Client Payment Portal
        </h1>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Welcome to your secure payment portal. Here, you can easily manage your invoices, make payments, and access our protection services.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedSection delay={200}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group hover:scale-[1.02] transform-gpu">
            <CreditCard className="w-16 h-16 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">Make a Payment</h3>
            <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
              Pay your project invoices securely through our Stripe checkout.
            </p>
            <a
              href="https://buy.stripe.com/5kQfZidrC8mE1uD68L9EI03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm group relative overflow-hidden hover:shadow-purple-500/20"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Pay Invoice</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group hover:scale-[1.02] transform-gpu">
            <Shield className="w-16 h-16 text-teal-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-200 transition-colors duration-300">Website Protection</h3>
            <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
              Monthly website protection and updates package for ongoing security and maintenance.
            </p>
            <a
              href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm group relative overflow-hidden hover:shadow-teal-500/20"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Subscribe Now</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group hover:scale-[1.02] transform-gpu">
            <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">Customer Portal</h3>
            <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
              View invoices, manage subscriptions, and access your billing history.
            </p>
            <a
              href="https://billing.stripe.com/p/login/bJe28s5Za1Yg3CL68L9EI00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-sm group relative overflow-hidden hover:shadow-blue-500/20"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Access Portal</span>
            </a>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={800}>
        <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
          <p className="text-slate-400 text-sm">
            All payments are processed securely by Stripe. Your payment information is encrypted and protected.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </div>
);