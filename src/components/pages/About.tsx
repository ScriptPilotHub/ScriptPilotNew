import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, ArrowRight, TrendingUp, Star, Building } from 'lucide-react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-premium-float">
          <Building className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
          About
          <span className="block bg-gradient-to-r from-amber-700 to-orange-900 bg-clip-text text-transparent">
            Script Pilot
          </span>
        </h1>
        <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
          Professional web development team focused on creating quality websites 
          that help businesses grow and succeed online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-amber-300 text-amber-700 px-8 py-4 rounded-xl font-semibold hover:border-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            Schedule Consultation
          </a>
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
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-amber-900 mb-3">{stat.value}</div>
              <div className="text-amber-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-6">
            To provide businesses with professional web development services that create 
            effective online presence and support business growth. We believe quality 
            web development should be accessible and results-focused.
          </p>
          <p className="text-amber-700 max-w-3xl mx-auto">
            We've completed over 200 projects for businesses ranging from local shops 
            to growing companies. Our approach focuses on understanding business needs 
            and creating websites that support those goals.
          </p>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            The principles that guide our work and ensure consistent quality 
            for every client project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We use current web technologies and best practices to create websites that perform well and stay relevant."
            },
            {
              icon: Handshake,
              title: "Collaboration",
              description: "Clear communication and collaboration throughout the project to ensure we deliver exactly what you need."
            },
            {
              icon: Award,
              title: "Quality",
              description: "Consistent quality standards in development, testing, and customer service for every project we complete."
            }
          ].map((value, index) => (
           <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-3">
             <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform shadow-lg">
               <value.icon className="w-8 h-8 text-white transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                {value.title}
              </h3>
              <p className="text-amber-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            The founders and development team behind Script Pilot's consistent results. 
            Technical expertise combined with business understanding to create effective solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-amber-200 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">DT</span>
            </div>
            <h3 className="text-2xl font-semibold text-amber-900 mb-2">
              David Tackett
            </h3>
            <p className="text-amber-700 font-medium mb-4">Co-Founder & Lead Developer</p>
            <p className="text-amber-700">
              David has over 8 years of web development experience with expertise in modern 
              web technologies including React and TypeScript. He oversees technical development 
              and ensures all projects meet quality and performance standards.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-amber-200 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">TW</span>
            </div>
            <h3 className="text-2xl font-semibold text-amber-900 mb-2">
              Tyler Wells
            </h3>
            <p className="text-amber-700 font-medium mb-4">Co-Founder & Business Strategy</p>
            <p className="text-amber-700">
              Tyler manages business strategy and client relationships, ensuring our web development 
              services align with client business goals. His background in digital marketing and 
              business development helps create websites that support business growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Star className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Real feedback from businesses we've helped grow their online presence and achieve their goals.
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
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-amber-700 italic mb-6">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t border-amber-200 pt-4">
                <p className="font-semibold text-amber-900">{testimonial.name}</p>
                <p className="text-amber-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Indicators */}
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Why Choose Script Pilot
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Professional web development with a focus on business results and 
            long-term client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              description: "Over 200 completed projects across various industries with consistent quality and client satisfaction."
            },
            {
              icon: Users,
              title: "Client-Focused Approach", 
              description: "Clear communication, transparent pricing, and dedicated support throughout the development process."
            },
            {
              icon: TrendingUp,
              title: "Results-Driven",
              description: "Websites designed to support your business goals with focus on performance and user experience."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-amber-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start Your Project Today
        </h2>
        <p className="text-xl text-amber-200 mb-8 max-w-3xl mx-auto">
          Professional web development that helps your business grow online. 
          Contact us to discuss your project requirements and get a custom quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Get Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-900 transition-all duration-500 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
);