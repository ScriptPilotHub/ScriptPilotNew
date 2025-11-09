import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Clock, TrendingUp, Globe, Code, Rocket } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900">
                Elite Web Development
                <span className="block text-gradient">That Drives Results</span>
              </h1>
              <p className="body-large max-w-2xl mx-auto">
                We craft sophisticated digital experiences for businesses that demand excellence. 
                Custom websites, e-commerce platforms, and web applications built to perform at the highest level.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#services" className="btn btn-primary btn-lg group">
                View Our Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats Section */}
    <section className="section-sm bg-slate-50">
      <div className="container">
        <AnimatedSection delay={200}>
          <div className="grid grid-4 text-center max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "2-8", label: "Week Delivery" },
              { value: "24/7", label: "Performance" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="body-small">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Complete Digital Solutions
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              From concept to deployment, we handle every aspect of your digital presence 
              with precision and expertise.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-3 gap-8">
          {[
            {
              icon: Code,
              title: "Custom Development",
              description: "Bespoke websites and applications built with modern technologies, optimized for performance and user experience.",
              features: ["React & TypeScript", "Mobile-First Design", "Performance Optimized"]
            },
            {
              icon: Globe,
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
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="card group h-full">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="body">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 body-small">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Why Choose Script Pilot
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real results for your organization.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              description: "Years of experience delivering high-quality web solutions for businesses across diverse industries and scales.",
              color: "blue"
            },
            {
              icon: Users,
              title: "Client-Focused Approach",
              description: "We prioritize clear communication, transparent processes, and delivering exactly what you need, when you need it.",
              color: "green"
            },
            {
              icon: Zap,
              title: "Modern Technology",
              description: "We use cutting-edge tools and frameworks to ensure your project is built for performance, scalability, and future growth.",
              color: "purple"
            }
          ].map((benefit, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 bg-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Client Success Stories
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence 
              and achieve measurable results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
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
            <AnimatedSection delay={index * 100} key={testimonial.name}>
              <div className="card h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="body italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-blue-600 body-small">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section bg-slate-900">
      <div className="container text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="heading-2 text-white">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="body-large text-slate-300">
                Let's discuss your project and create a solution that drives real business results. 
                Schedule a consultation to get started.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="btn btn-secondary btn-lg text-slate-300 border-slate-600 hover:text-white hover:border-slate-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);