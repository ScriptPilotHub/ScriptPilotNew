import React from 'react';
import { CreditCard, Shield, CheckCircle, Clock, DollarSign, Star, ArrowRight, Zap, Award, Mail, Phone, Calendar, Users, Wallet } from 'lucide-react';

interface ClientPortalProps {
  navigateTo: (page: string) => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Wallet className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Client Payment
          <span className="block text-gray-600">Portal</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Secure payment processing for Script Pilot clients. 
          Choose your service below to complete your payment safely.
        </p>
      </div>
    </section>

    {/* Payment Options */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Payment Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure, easy payments for all our services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Project Start */}
          <div className="group bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-base text-gray-500 line-through">$300</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $140</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">$160</div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">Pay this to get started with your website project</p>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Strategy session</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Site planning</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Development begins</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Regular updates</span>
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-sm"
              >
                <CreditCard className="w-5 h-5" />
                Pay $160
              </a>
            </div>
          </div>

          {/* Project Completion */}
          <div className="group bg-gray-900 rounded-2xl p-6 shadow-2xl relative transform scale-105">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch Your Site</h3>
              <p className="text-gray-300 text-xs font-semibold mb-2">(Only pay when your site is done)</p>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-base text-gray-400 line-through">$700</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $160</span>
                </div>
                <div className="text-3xl font-bold text-white">$540</div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">Final payment when your website is complete and ready to go live</p>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Finished website</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Domain & hosting setup</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">SSL security</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Site goes live</span>
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-sm"
              >
                <CreditCard className="w-5 h-5" />
                Pay $540
              </a>
            </div>
          </div>

          {/* Maintenance */}
          <div className="group bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keep It Running</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-base text-gray-500 line-through">$300</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $150</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500">per month</div>
              </div>
              <p className="text-gray-600 mb-2 text-sm">Optional monthly service to handle updates and security</p>
              <p className="text-blue-600 font-semibold mb-4 text-xs">Completely Optional</p>
              <ul className="text-left space-y-2 mb-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Security updates</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Regular backups</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Performance monitoring</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-green-600 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-sm"
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
          <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Secure Payment Processing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your payment information is protected by bank-level security.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">SSL Encrypted</h3>
            <p className="text-gray-600 leading-relaxed text-sm">All payments are processed through secure, encrypted connections</p>
          </div>

          <div className="text-center group">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <Award className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stripe Powered</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Trusted by millions of businesses worldwide for secure payments</p>
          </div>

          <div className="text-center group">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Confirmation</h3>
            <p className="text-gray-600 leading-relaxed text-sm">Get immediate confirmation and project updates via email</p>
          </div>
        </div>
      </div>
    </section>

    {/* Support */}
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Need Help With Payment?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Contact us if you have questions about payments or need assistance with your project.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="mailto:contact@scriptpilot.us?subject=Payment%20Support%20-%20Script%20Pilot"
            className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <Mail className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Email Support</h3>
            <p className="text-gray-600 mb-2 text-sm">Get help within 24 hours</p>
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
            <h3 className="text-lg font-bold mb-1">Schedule Call</h3>
            <p className="text-blue-100 mb-2 text-sm">Free consultation</p>
            <span className="text-white font-semibold text-sm">Book Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);