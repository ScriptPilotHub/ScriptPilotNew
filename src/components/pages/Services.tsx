import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Search, Shield, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-900 mb-6">
          Professional Web Development
          <span className="block bg-gradient-to-r from-purple-700 to-indigo-900 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Custom websites and e-commerce platforms with transparent pricing and proven results. 
          Professional development services designed to grow your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-purple-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-lg font-semibold hover:border-purple-800 hover:bg-purple-800 hover:text-white transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-gradient-to-r from-purple-100 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "2-8", label: "Week Delivery" },
            { value: "24/7", label: "Performance" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Professional Websites Matter */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <TrendingUp className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Importance of Professional Web Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A professional website is essential for business growth in today's market. 
            Quality development makes the difference between success and missed opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Increase Revenue",
              description: "Professional websites help businesses reach more customers and increase sales opportunities"
            },
            {
              icon: Users,
              title: "Build Trust",
              description: "Professional design and functionality help establish credibility with potential customers"
            },
            {
              icon: Search,
              title: "Get Found Online",
              description: "Most customers search online before making purchases - be where they're looking"
            },
            {
              icon: Clock,
              title: "24/7 Sales",
              description: "Your website works continuously to generate leads and provide information to customers"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Service Package */}
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Rocket className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Web Development Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing for professional web development services. No hidden fees or surprises.
          </p>
          
          {/* Springfield Photography Notice */}
          <div className="mt-8 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-800">Springfield, MO Clients</h3>
            </div>
            <p className="text-emerald-700 font-medium">
              <strong>FREE Professional Photography Included!</strong> For businesses located in the Springfield, Missouri area, 
              we include professional product and business photography at no additional cost to enhance your website's visual appeal.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Project Initiation */}
          <div className="group bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 animate-fade-in-up">
            <div className="p-8 text-center">
              <div className="w-16 h-16 premium-icon rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-premium-glow">
                <Users className="w-8 h-8 text-white" />
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
                  Initial consultation & planning
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Requirements analysis
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
                href="#contact"
                className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-500 inline-block transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Final Payment */}
          <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group relative animate-scale-in">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">COMPLETION</span>
            </div>
            <div className="p-8 text-center">
              <div className="w-16 h-16 premium-icon-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-premium-pulse">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Deployment & Final Payment</h3>
              <div className="mb-4">
                <span className="text-lg text-slate-500 line-through">$600</span>
                <div className="text-4xl font-bold text-slate-900">$440</div>
                <span className="text-emerald-600 font-semibold text-sm">Save $160!</span>
              </div>
              <p className="text-slate-600 mb-6">Final payment when your website is complete and deployed</p>
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
              <div className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-center transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Paid on Completion
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 group animate-slide-in-right">
            <div className="p-8 text-center">
              <div className="w-16 h-16 premium-icon-success rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-premium-float">
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
              <div className="w-full border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-emerald-600 hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Optional Add-on
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">What's Included in Every Project</h3>
          <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              title: "Custom Development",
              features: [
                "Custom design & development",
                "Mobile-responsive design",
                "Fast loading speeds",
                "SEO optimization"
              ],
              description: "Custom websites built specifically for your business"
            },
            {
              icon: ShoppingCart,
              title: "E-commerce Features",
              features: [
                "Payment processing setup",
                "Product catalogs",
                "Shopping cart functionality",
                "Order management"
              ],
              description: "Complete online store functionality when needed"
            },
            {
              icon: Shield,
              title: "Security & Performance",
              features: [
                "SSL certificates",
                "Security hardening",
                "Performance optimization",
                "Regular backups"
              ],
              description: "Professional security and performance optimization"
            },
            {
              icon: Users,
              title: "Support & Training",
              features: [
                "Website training",
                "Documentation provided",
                "Launch support",
                "30-day warranty"
              ],
              description: "Comprehensive support throughout your project"
            }
          ].map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-slate-300 text-sm">{service.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>

    {/* Perfect For Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Suitable for All Business Types
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional web development services for businesses across all industries and sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Retail Stores",
              description: "Showcase products, enable online ordering, and expand your customer base beyond your local area."
            },
            {
              title: "Service Businesses",
              description: "Display your services, collect leads, and allow customers to book appointments online."
            },
            {
              title: "Restaurants",
              description: "Show your menu, enable online ordering, and build a loyal customer base with reviews and promotions."
            },
            {
              title: "Professional Services",
              description: "Establish credibility, showcase expertise, and generate qualified leads for your practice."
            }
          ].map((business, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {business.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {business.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Section */}
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <DollarSign className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Business Impact of Poor Web Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Without professional web development, businesses miss important growth opportunities. 
            Here's what's at stake:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Lost Revenue",
              description: "Customers who can't find you online will choose competitors with better web presence"
            },
            {
              icon: Shield,
              title: "Damaged Credibility",
              description: "Poor or outdated websites can make established businesses appear unprofessional"
            },
            {
              icon: TrendingUp,
              title: "Missed Growth",
              description: "Limited online presence restricts business growth and market reach"
            }
          ].map((cost, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-scale-in">
              <div className="w-16 h-16 premium-icon rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-premium-float">
                <cost.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {cost.title}
              </h3>
              <p className="text-slate-600">
                {cost.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Star className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Feedback from businesses we've helped improve their online presence and grow their customer base.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "Script Pilot delivered exactly what we needed - a professional platform that perfectly represents our brand and converts visitors into clients.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              company: "Artisan Crafts Co.",
              testimonial: "The team's attention to detail and technical expertise exceeded our expectations. Our new e-commerce site has driven significant growth.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting",
              testimonial: "Professional, reliable, and results-driven. Script Pilot transformed our online presence and helped us reach new markets.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-600 italic mb-6">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Professional web development that helps your business succeed online. 
          Contact us to discuss your project requirements and get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Quote
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
);