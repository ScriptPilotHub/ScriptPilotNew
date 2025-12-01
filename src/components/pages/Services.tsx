import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Search, Shield, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, ArrowRight, Settings, Zap, Camera } from 'lucide-react';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Settings className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Web Development Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We build custom websites and online stores for businesses that want to grow. 
          Simple pricing, clear timelines, quality results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>

    {/* Springfield Photography */}
    <section className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Camera className="w-4 h-4 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Free Photography for Springfield Area Clients
            </h3>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            If you're within 50 miles of Springfield, MO, we'll take basic photos for your website at no extra charge
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-3 h-3 text-gray-400" />
              <span>Storefront photos</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-3 h-3 text-gray-400" />
              <span>Product shots</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-3 h-3 text-gray-400" />
              <span>Team photos</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Professional headshots and event photography available separately
          </p>
        </div>
      </div>
    </section>

    {/* Numbers */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Track Record
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Websites Built" },
            { value: "99%", label: "Happy Clients" },
            { value: "2-8", label: "Weeks to Launch" },
            { value: "24/7", label: "Site Uptime" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Rocket className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two payments and you're done. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Project Start */}
          <div className="group bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-4xl font-bold text-gray-900">$160</div>
                <span className="text-green-600 font-semibold text-sm">Save $90</span>
              </div>
              <p className="text-gray-700 mb-6">Pay this to get started. We'll plan your site and begin building.</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Strategy session
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Site planning
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Development begins
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Regular updates
                </li>
              </ul>
              <a
                href="#contact"
                className="w-full bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-500 inline-block transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Project Completion */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch Your Site</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$600</span>
                <div className="text-4xl font-bold text-gray-900">$440</div>
                <span className="text-green-600 font-semibold text-sm">Save $160</span>
              </div>
              <p className="text-gray-700 mb-6">Pay this when we're done. Your site goes live with everything working.</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Finished website
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Domain & hosting setup
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  SSL security
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Site goes live
                </li>
              </ul>
              <div className="w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold text-center transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Paid When Complete
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Keep It Running</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-4xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500 text-sm mb-1">per month</div>
                <span className="text-green-600 font-semibold text-sm">Save $100/month</span>
              </div>
              <p className="text-gray-700 mb-2">Optional monthly service to handle updates and security.</p>
              <p className="text-sm text-gray-600 font-semibold mb-6">Completely Optional</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Security updates
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Performance monitoring
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <div className="w-full border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Optional Service
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">What Every Project Includes</h3>
          <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              title: "Custom Development",
              description: "Built specifically for your business, not from a template"
            },
            {
              icon: ShoppingCart,
              title: "E-commerce Ready",
              description: "Online store functionality when you need it"
            },
            {
              icon: Shield,
              title: "Security & Speed",
              description: "Fast loading, secure, and mobile-friendly"
            },
            {
              icon: Users,
              title: "Training & Support",
              description: "We'll teach you how to update your site"
            }
          ].map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <service.icon className="w-6 h-6 text-gray-800" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Let's talk about your project. No pressure, just an honest conversation 
          about what you need and how we can help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Send Us an Email
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
);