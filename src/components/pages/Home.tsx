import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Clock, TrendingUp, Globe, Code, Rocket } from 'lucide-react';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Elite Web Development
          <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            That Drives Results
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          We craft sophisticated digital experiences for businesses that demand excellence. 
          Custom websites, e-commerce platforms, and web applications built to perform at the highest level.
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
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to deployment, we handle every aspect of your digital presence 
            with precision and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Custom Development",
              description: "Bespoke websites and applications built with modern technologies, optimized for performance and user experience.",
              features: ["React & TypeScript", "Mobile-First Design", "Performance Optimized"]
            },
            {
              icon: Code,
              title: "E-commerce Platforms",
              description: "Secure, scalable online stores with integrated payment processing, inventory management, and analytics.",
              features: ["Stripe Integration", "Inventory Management", "Order Tracking"]
            },
            {
              icon: Shield,
              title: "Ongoing Support",
              description: "Comprehensive maintenance, security updates, and technical support to keep your digital presence running smoothly.",
              features: ["Security Monitoring", "Regular Backups", "Performance Optimization"]
            }
          ].map((service, index) => (
           <div key={index} className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2">
             <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
               <service.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-all duration-300" />
              </div>
              
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
            Why Choose Script Pilot
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions 
            that drive real results for your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              description: "Years of experience delivering high-quality web solutions for businesses across diverse industries and scales."
            },
            {
              icon: Users,
              title: "Client-Focused Approach",
              description: "We prioritize clear communication, transparent processes, and delivering exactly what you need, when you need it."
            },
            {
              icon: Zap,
              title: "Modern Technology",
              description: "We use cutting-edge tools and frameworks to ensure your project is built for performance, scalability, and future growth."
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
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their digital presence 
            and achieve measurable results.
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
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Let's discuss your project and create a solution that drives real business results. 
          Schedule a consultation to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  </div>
);