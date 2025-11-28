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
          Custom websites and e-commerce platforms with transparent pricing and proven results. 
          Professional development services designed to grow your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Springfield Photography Section */}
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Camera className="w-8 h-8 text-gray-800" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            FREE Basic Photography
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>Springfield, Missouri Area Clients:</strong> We include basic business photography 
            at no additional cost with every web development project. Essential images for your website!
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Business Interior/Exterior</h3>
              <p className="text-gray-200">Basic shots of your business location and workspace</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Product Photography</h3>
              <p className="text-gray-200">Simple product shots for your website and marketing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Website Content Images</h3>
              <p className="text-gray-200">Photos specifically for your website content needs</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg mt-8 font-medium">
            📍 Available within 50 miles of Springfield, MO
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Additional photography services (headshots, events, etc.) available at separate rates
          </p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "2-8", label: "Week Delivery" },
            { value: "24/7", label: "Performance" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Service Package */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Rocket className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Web Development Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for professional web development services. No hidden fees or surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Project Initiation */}
          <div className="group bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Initiation</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-4xl font-bold text-gray-900">$160</div>
                <span className="text-green-600 font-semibold text-sm">Save $90!</span>
              </div>
              <p className="text-gray-700 mb-6">Get started with your custom website project</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Initial consultation & planning
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Requirements analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Development timeline
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Project roadmap
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

          {/* Final Payment */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Deployment & Final Payment</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$600</span>
                <div className="text-4xl font-bold text-gray-900">$440</div>
                <span className="text-green-600 font-semibold text-sm">Save $160!</span>
              </div>
              <p className="text-gray-700 mb-6">Final payment when your website is complete and deployed</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Complete website development
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Domain setup & hosting
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  SSL certificate & security
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Live website deployment
                </li>
              </ul>
              <div className="w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold text-center transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Paid on Completion
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Website Protection & Updates</h3>
              <div className="mb-4">
                <span className="text-lg text-gray-500 line-through">$250</span>
                <div className="text-4xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500 text-sm mb-1">per month</div>
                <span className="text-green-600 font-semibold text-sm">Save $100/month!</span>
              </div>
              <p className="text-gray-700 mb-2">Keep your website secure and up-to-date</p>
              <p className="text-sm text-gray-600 font-semibold mb-6">Optional Service</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Security monitoring & updates
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Regular backups
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Performance optimization
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Priority support
                </li>
              </ul>
              <div className="w-full border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Optional Add-on
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">What's Included in Every Project</h3>
          <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              title: "Custom Development",
              description: "Custom websites built specifically for your business"
            },
            {
              icon: ShoppingCart,
              title: "E-commerce Features",
              description: "Complete online store functionality when needed"
            },
            {
              icon: Shield,
              title: "Security & Performance",
              description: "Professional security and performance optimization"
            },
            {
              icon: Users,
              title: "Support & Training",
              description: "Comprehensive support throughout your project"
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
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Professional web development that helps your business succeed online. 
          Contact us to discuss your project requirements and get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Quote
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