import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap, Shield, Clock, TrendingUp, Globe, Code, Rocket, Camera, Star, Phone, Mail, Calendar } from 'lucide-react';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Professional Websites
            <span className="block text-gray-600">That Drive Results</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
            We build fast, secure, and beautiful websites for businesses that want to grow online. 
            No fluff, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => window.history.pushState({}, '', '/contact')}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Websites Built" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "2-8", label: "Weeks to Launch" },
              { value: "4+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Springfield Photography Offer */}
    <section className="py-8 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-blue-200 p-8 shadow-sm">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Free Photography for Springfield Area
            </h3>
          </div>
          <p className="text-center text-gray-600 mb-6 text-lg">
            Within 50 miles of Springfield, MO? We'll photograph your business for your website at no extra charge.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
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

    {/* Services Overview */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom websites designed to help your business succeed online
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: Globe,
              title: "Business Websites",
              description: "Professional sites that showcase your services and convert visitors into customers.",
              features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "Contact Forms"]
            },
            {
              icon: Code,
              title: "E-commerce Stores",
              description: "Online stores that make it easy for customers to find and buy your products.",
              features: ["Secure Payments", "Inventory Management", "Order Tracking", "Customer Accounts"]
            },
            {
              icon: Rocket,
              title: "Custom Solutions",
              description: "Tailored web applications built specifically for your unique business needs.",
              features: ["Custom Features", "Third-party Integrations", "Scalable Architecture", "Ongoing Support"]
            }
          ].map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two payments. No hidden fees. No surprises.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Start Project */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Start</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $90</span>
                </div>
                <div className="text-5xl font-bold text-gray-900">$160</div>
              </div>
              <p className="text-gray-600 mb-8">Get started with strategy and planning</p>
              <ul className="space-y-4 mb-8 text-left">
                {["Strategy session", "Site planning", "Development begins", "Regular updates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.history.pushState({}, '', '/contact')}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Launch Site */}
          <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-gray-800 relative group transform scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Site Launch</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-400 line-through">$600</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $160</span>
                </div>
                <div className="text-5xl font-bold text-white">$440</div>
              </div>
              <p className="text-gray-300 mb-8">Pay when your site is complete and live</p>
              <ul className="space-y-4 mb-8 text-left">
                {["Finished website", "Domain & hosting setup", "SSL security", "Site goes live"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full bg-white text-gray-900 py-4 rounded-2xl font-semibold text-center">
                Pay When Complete
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maintenance</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-gray-500 line-through">$250</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Save $100</span>
                </div>
                <div className="text-5xl font-bold text-gray-900">$150</div>
                <div className="text-gray-500">per month</div>
              </div>
              <p className="text-gray-600 mb-2">Keep your site secure and updated</p>
              <p className="text-sm text-blue-600 font-semibold mb-6">Completely Optional</p>
              <ul className="space-y-4 mb-8 text-left">
                {["Security updates", "Regular backups", "Performance monitoring", "Priority support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full border-2 border-green-600 text-green-600 py-4 rounded-2xl font-semibold text-center hover:bg-green-600 hover:text-white transition-colors">
                Optional Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Script Pilot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not the biggest agency, but we deliver what we promise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: Award,
              title: "Proven Track Record",
              description: "200+ successful websites built for businesses across the country. We know what works."
            },
            {
              icon: Users,
              title: "Direct Communication",
              description: "You work directly with the developers. No account managers or middlemen to slow things down."
            },
            {
              icon: Clock,
              title: "On-Time Delivery",
              description: "We give realistic timelines and stick to them. Your project launches when we say it will."
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">Real feedback from real businesses</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "They delivered exactly what they promised, on time and on budget. Our new site has helped us land several new clients.",
              rating: 5
            },
            {
              name: "Michael Rodriguez", 
              company: "Artisan Crafts Co.",
              testimonial: "Professional work and great communication. They made the whole process easy and our online sales have doubled.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting", 
              testimonial: "Finally, a web team that actually listens. They built us a site that works for our business, not just looks pretty.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss your project. No pressure, no sales pitch—just an honest conversation 
          about what you need and how we can help.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
            className="group bg-white text-gray-900 p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
            <span className="text-gray-900 font-semibold">contact@scriptpilot.us</span>
          </a>

          <a
            href="tel:4174010015"
            className="group bg-white text-gray-900 p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Phone className="w-12 h-12 mx-auto mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri, 9AM-6PM CST</p>
            <span className="text-gray-900 font-semibold">(417) 401-0015</span>
          </a>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 text-white p-8 rounded-3xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Book a Call</h3>
            <p className="text-blue-100 mb-4">Free 30-minute consultation</p>
            <span className="text-white font-semibold">Schedule Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);