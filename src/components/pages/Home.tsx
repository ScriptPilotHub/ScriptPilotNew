import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Clock, TrendingUp, Globe, Code, Rocket } from 'lucide-react';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Professional Web Development
          <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            For Growing Businesses
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Custom websites and e-commerce platforms designed to grow your business. 
          Professional development with transparent pricing and proven results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#services" 
            className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/t6ckmedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-slate-50">
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

    {/* Services Overview */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Web Development
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing, professional results. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Project Initiation",
              description: "Start your custom website project with professional consultation and planning.",
              features: ["$160 to get started", "Custom design mockups", "Project roadmap"],
              price: "$160",
              originalPrice: "$250"
            },
            {
              icon: CheckCircle,
              title: "Deployment & Final Payment",
              description: "Complete development and deployment when your website is finished and ready to go live.",
              features: ["$440 final payment", "Complete development", "Live deployment"],
              price: "$440",
              originalPrice: "$600"
            },
            {
              icon: Shield,
              title: "Website Protection & Updates",
              description: "Optional monthly service to keep your website secure, updated, and performing optimally.",
              features: ["$150/month (optional)", "Security monitoring", "Regular updates"],
              price: "$150/mo",
              originalPrice: "$250/mo"
            }
          ].map((service, index) => (
           <div key={index} className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2">
             <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
               <service.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-all duration-300" />
              </div>
              
              <div className="text-2xl font-bold text-slate-900 mb-2">{service.price}</div>
              {service.originalPrice && (
                <div className="mb-2">
                  <span className="text-sm text-slate-500 line-through">{service.originalPrice}</span>
                  <span className="text-emerald-600 font-semibold text-xs ml-2">Save!</span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Businesses Choose Script Pilot
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional web development with a focus on business growth and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              description: "Over 200 successful projects delivered across diverse industries with consistent quality and reliability."
            },
            {
              icon: Users,
              title: "Client-Focused Approach",
              description: "Clear communication, transparent pricing, and dedicated support throughout your project development."
            },
            {
              icon: Zap,
              title: "Modern Technology",
              description: "Current web technologies and best practices to ensure your website performs well and stays secure."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real feedback from businesses we've helped grow their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "Script Pilot delivered exactly what we needed - a professional website that represents our brand well and helps convert visitors into customers.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              company: "Artisan Crafts Co.",
              testimonial: "Great attention to detail and solid technical work. Our new e-commerce site has helped us reach more customers and increase sales.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting",
              testimonial: "Professional service and reliable results. Script Pilot helped us create a strong online presence that attracts new clients.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
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
                <p className="text-slate-600 text-sm font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Professional web development that helps your business succeed online. 
          Contact us to discuss your project and get a custom quote.
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