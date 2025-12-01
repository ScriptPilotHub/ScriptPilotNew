import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Search, Shield, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, ArrowRight, Settings, Zap, Camera, Globe, Star, Phone, Mail, Calendar } from 'lucide-react';

interface ServicesProps {
  navigateTo: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ navigateTo }) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Web Development
          <span className="block text-gray-600">Services</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Custom websites and online stores built to help your business grow. 
          Professional results with transparent pricing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigateTo('contact')}
            className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-base hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Springfield Photography */}
    <section className="py-6 bg-blue-50 border-y border-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-blue-200 p-4 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
              <Camera className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Free Photography for Springfield Area
            </h3>
          </div>
          <p className="text-center text-gray-600 mb-4 text-base">
            Within 50 miles of Springfield, MO? We'll photograph your business for your website at no extra charge.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-center">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>Storefront & Interior</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>Product Photography</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>Team Photos</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional websites designed to help your business succeed online
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: Globe,
              title: "Business Websites",
              description: "Professional sites that showcase your services and convert visitors into customers.",
              features: ["Mobile Responsive Design", "SEO Optimization", "Fast Loading Speed", "Contact Forms & CTAs", "Content Management", "Analytics Integration"],
              price: "Starting at $600"
            },
            {
              icon: ShoppingCart,
              title: "E-commerce Stores",
              description: "Complete online stores that make it easy for customers to find and purchase your products.",
              features: ["Secure Payment Processing", "Inventory Management", "Order Tracking", "Customer Accounts", "Product Catalogs", "Shopping Cart"],
              price: "Starting at $600"
            },
            {
              icon: Code,
              title: "Custom Applications",
              description: "Tailored web applications built specifically for your unique business requirements.",
              features: ["Custom Functionality", "Database Integration", "User Management", "API Integrations", "Scalable Architecture", "Ongoing Support"],
              price: "Custom Quote"
            }
          ].map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
              <div className="text-base font-bold text-gray-900 mb-4">{service.price}</div>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full bg-gray-900 text-white py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-block text-center group-hover:shadow-lg text-sm"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We learn about your business, goals, and requirements through detailed consultation."
            },
            {
              step: "02", 
              title: "Planning",
              description: "We create a detailed project plan, wireframes, and timeline for your approval."
            },
            {
              step: "03",
              title: "Development",
              description: "We build your website with regular updates and opportunities for feedback."
            },
            {
              step: "04",
              title: "Launch",
              description: "We test everything, set up hosting, and launch your site with full training."
            }
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two payments. No hidden fees. No surprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Start Project */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Start</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Save $90</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">$160</div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">Get started with strategy and planning</p>
              <ul className="space-y-2 mb-4 text-left">
                {["Strategy session", "Site planning", "Development begins", "Regular updates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center text-sm"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Launch Site */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-gray-800 relative group transform scale-105">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 -6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Site Launch</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base text-gray-400 line-through">$600</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Save $160</span>
                </div>
                <div className="text-3xl font-bold text-white">$440</div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">Pay when your site is complete and live</p>
              <ul className="space-y-2 mb-4 text-left">
                {["Finished website", "Domain & hosting setup", "SSL security", "Site goes live"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full bg-white/10 border-2 border-white/20 text-white py-2 rounded-xl font-semibold text-center backdrop-blur-sm text-sm">
                <div className="text-xs text-gray-300 mb-1">Payment Due:</div>
                <div className="font-bold">When Site is Launched</div>
                <div className="text-xs text-gray-400 mt-1">We'll send payment link</div>
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-base text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Save $100</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500 text-sm">per month</div>
              </div>
              <p className="text-gray-600 mb-1 text-sm">Keep your site secure and updated</p>
              <p className="text-xs text-blue-600 font-semibold mb-4">Completely Optional</p>
              <ul className="space-y-2 mb-4 text-left">
                {["Security updates", "Regular backups", "Performance monitoring", "Priority support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-green-600 text-green-600 py-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors text-sm inline-block text-center"
              >
                Subscribe $150/mo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project. No pressure, no sales pitch—just an honest conversation 
          about what you need and how we can help.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
            className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <Mail className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Email Us</h3>
            <p className="text-gray-600 mb-2 text-sm">Get a response within 24 hours</p>
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
            <h3 className="text-lg font-bold mb-1">Book a Call</h3>
            <p className="text-blue-100 mb-2 text-sm">Free 30-minute consultation</p>
            <span className="text-white font-semibold text-sm">Schedule Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);