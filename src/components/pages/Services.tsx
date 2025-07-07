import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, TrendingUp, Users, Shield, Search, Clock, DollarSign, CheckCircle, Star, Zap } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Services: React.FC = () => (
  <div className="pt-32 py-20 md:py-28 px-4 bg-slate-950">
    <div className="container mx-auto max-w-6xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-400 bg-[length:200%_200%] animate-gradient-x mb-4">
            Complete Web Solutions for Small Business
          </h1>
          <p className="text-lg text-slate-400 mt-2 max-w-3xl mx-auto">
            Everything your business needs to succeed online in one comprehensive package. No hidden fees, no surprises—just results.
          </p>
        </div>
      </AnimatedSection>

      {/* Why Professional Websites Matter Section */}
      <AnimatedSection delay={200}>
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-16 border border-slate-600/50">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Why Your Business Needs a Professional Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-green-300 mb-2">Increase Revenue</h3>
              <p className="text-slate-400 text-sm">Businesses with professional websites see 2-3x more revenue growth than those without</p>
            </div>
            <div className="text-center group">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Build Trust</h3>
              <p className="text-slate-400 text-sm">75% of consumers judge business credibility based on website design</p>
            </div>
            <div className="text-center group">
              <Search className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Get Found Online</h3>
              <p className="text-slate-400 text-sm">97% of people search online for local businesses before making a purchase</p>
            </div>
            <div className="text-center group">
              <Clock className="h-12 w-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-teal-300 mb-2">24/7 Sales</h3>
              <p className="text-slate-400 text-sm">Your website works around the clock, generating leads and sales while you sleep</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Service Package */}
      <AnimatedSection delay={300}>
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 rounded-2xl shadow-2xl border border-slate-700/50 p-10 mb-16 group hover:border-teal-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 mb-6">
              Your Complete Digital Solution
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We provide everything your small business needs to establish a powerful online presence and drive real growth. One service, complete results.
            </p>
          </div>

          {/* What's Included Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-sky-400/50 transition-all duration-300">
              <Monitor className="h-12 w-12 text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-sky-300 mb-3">Professional Website Design</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Custom design tailored to your brand
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Mobile-responsive on all devices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Fast loading speeds (under 3 seconds)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  Professional photography integration
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-purple-400/50 transition-all duration-300">
              <ShoppingCart className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-purple-300 mb-3">E-commerce Ready</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Secure payment processing (Stripe, PayPal)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Product catalog and inventory management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Shopping cart and checkout optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  Order tracking and customer accounts
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-pink-400/50 transition-all duration-300">
              <Code className="h-12 w-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-pink-300 mb-3">Custom Features</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Contact forms and lead capture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Booking and appointment systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Customer testimonials and reviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-400" />
                  Social media integration
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-green-400/50 transition-all duration-300">
              <Rocket className="h-12 w-12 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-green-300 mb-3">Launch & Deployment</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Domain setup and DNS configuration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  SSL certificate and security setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Google Analytics and tracking
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-yellow-400/50 transition-all duration-300">
              <Search className="h-12 w-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">SEO & Marketing</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Search engine optimization (SEO)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Google Business Profile setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Local search optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  Email marketing integration
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 group hover:border-teal-400/50 transition-all duration-300">
              <Shield className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-teal-300 mb-3">Ongoing Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  One month of free support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  Security monitoring and updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  Regular backups and maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  Optional monthly protection plans
                </li>
              </ul>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Why This Approach Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">All-in-One Solution</h4>
                <p className="text-slate-400 text-sm">No need to coordinate multiple vendors. We handle everything from design to deployment.</p>
              </div>
              <div className="text-center">
                <Star className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Proven Results</h4>
                <p className="text-slate-400 text-sm">Our comprehensive approach has helped hundreds of small businesses grow their online presence.</p>
              </div>
              <div className="text-center">
                <DollarSign className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-green-300 mb-2">Better Value</h4>
                <p className="text-slate-400 text-sm">Get everything you need for less than hiring separate specialists for each component.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Perfect For Section */}
      <AnimatedSection delay={500}>
        <div className="bg-gradient-to-r from-teal-800/30 to-blue-800/30 rounded-2xl p-8 mb-16 border border-teal-500/30">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Perfect for Every Small Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">Retail Stores</h3>
              <p className="text-slate-400 text-sm">Showcase products, enable online ordering, and expand your customer base beyond your local area.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Service Businesses</h3>
              <p className="text-slate-400 text-sm">Display your services, collect leads, and allow customers to book appointments online.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Restaurants</h3>
              <p className="text-slate-400 text-sm">Show your menu, enable online ordering, and build a loyal customer base with reviews and promotions.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">Professional Services</h3>
              <p className="text-slate-400 text-sm">Establish credibility, showcase expertise, and generate qualified leads for your practice.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ROI Section */}
      <AnimatedSection delay={700}>
        <div className="bg-gradient-to-r from-red-800/30 to-orange-800/30 rounded-2xl p-8 mb-16 border border-red-500/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">The Cost of NOT Having a Professional Website</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Every day without a professional website is money left on the table. Here's what you're missing:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-300 mb-2">Lost Revenue</h3>
              <p className="text-slate-400 text-sm">Potential customers can't find you online and choose competitors instead</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Damaged Credibility</h3>
              <p className="text-slate-400 text-sm">Outdated or missing websites make your business appear unprofessional</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-300 mb-2">Missed Growth</h3>
              <p className="text-slate-400 text-sm">Limited reach means slower business growth and fewer opportunities</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={900}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't let another day pass without a professional online presence. Let's discuss how our complete solution can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Get Free Consultation</span>
            </a>
            <a
              href="#about"
              className="inline-block border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
);