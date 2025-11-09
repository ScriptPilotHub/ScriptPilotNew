import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-slate-900">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Professional Web Development
              <span className="block text-blue-600">That Delivers Results</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We create sophisticated digital experiences for businesses that demand excellence. 
              Custom websites, e-commerce platforms, and web applications built to perform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="btn-primary text-lg px-8 py-4"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">150+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">98%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2-8</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Week Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Performance</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From concept to deployment, we handle every aspect of your digital presence 
              with precision and expertise.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={100}>
            <div className="card group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-200">
                <Zap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Custom Web Development
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Bespoke websites and applications built with modern technologies, 
                optimized for performance and user experience.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  React & TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Mobile-First Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Performance Optimized
                </li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="card group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-200">
                <Shield className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                E-commerce Platforms
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Secure, scalable online stores with integrated payment processing, 
                inventory management, and analytics.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Stripe Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Inventory Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Order Tracking
                </li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="card group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-200">
                <Clock className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Ongoing Support
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Comprehensive maintenance, security updates, and technical support 
                to keep your digital presence running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Security Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Regular Backups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Performance Optimization
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Script Pilot
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real results for your organization.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={100}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Proven Expertise
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Years of experience delivering high-quality web solutions for businesses 
                across diverse industries and scales.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Client-Focused Approach
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We prioritize clear communication, transparent processes, and delivering 
                exactly what you need, when you need it.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Modern Technology
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We use cutting-edge tools and frameworks to ensure your project is 
                built for performance, scalability, and future growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence 
              and achieve measurable results.
            </p>
          </div>
        </AnimatedSection>

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
            <AnimatedSection delay={index * 100} key={testimonial.name}>
              <div className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-slate-900 dark:bg-slate-800 px-6">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's discuss your project and create a solution that drives real business results. 
              Schedule a consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 font-medium py-4 px-8 rounded-lg transition-all duration-200"
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