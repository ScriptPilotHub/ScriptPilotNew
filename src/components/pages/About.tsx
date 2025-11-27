import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, ArrowRight, TrendingUp } from 'lucide-react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          About
          <span className="block bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Script Pilot
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Professional web development team focused on creating quality websites 
          that help businesses grow and succeed online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started Today
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

    {/* Mission Section */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            To provide businesses with professional web development services that create 
            effective online presence and support business growth. We believe quality 
            web development should be accessible and results-focused.
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We've completed over 200 projects for businesses ranging from local shops 
            to growing companies. Our approach focuses on understanding business needs 
            and creating websites that support those goals.
          </p>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
           <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:scale-105 hover:-translate-y-2">
             <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
               <value.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-all duration-300" />
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The founders and development team behind Script Pilot's consistent results. 
            Technical expertise combined with business understanding to create effective solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">DT</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              David Tackett
            </h3>
            <p className="text-slate-600 font-medium mb-4">Co-Founder & Lead Developer</p>
            <p className="text-slate-600">
              David has over 8 years of web development experience with expertise in modern 
              web technologies including React and TypeScript. He oversees technical development 
              and ensures all projects meet quality and performance standards.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">TW</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              Tyler Wells
            </h3>
            <p className="text-slate-600 font-medium mb-4">Co-Founder & Business Strategy</p>
            <p className="text-slate-600">
              Tyler manages business strategy and client relationships, ensuring our web development 
              services align with client business goals. His background in digital marketing and 
              business development helps create websites that support business growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Indicators */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-slate-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Script Pilot
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start Your Project Today
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Professional web development that helps your business grow online. 
          Contact us to discuss your project requirements and get a custom quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Quote
            <ArrowRight className="w-5 h-5" />
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