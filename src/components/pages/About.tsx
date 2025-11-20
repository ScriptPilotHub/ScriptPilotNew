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
          We're a dedicated team of web development professionals committed to delivering 
          exceptional digital solutions that drive real business results.
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
            To empower businesses with cutting-edge web solutions that not only look exceptional 
            but deliver measurable results. We believe every business deserves a professional 
            online presence that drives growth and success.
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Since our founding, we've helped hundreds of businesses transform their digital 
            presence, from small local shops to growing enterprises. Our approach combines 
            technical expertise with business strategy to create solutions that truly work.
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
            These principles guide everything we do and ensure we deliver 
            exceptional results for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage."
            },
            {
              icon: Handshake,
              title: "Collaboration",
              description: "We work closely with our clients as partners, ensuring clear communication and alignment throughout every project."
            },
            {
              icon: Award,
              title: "Quality",
              description: "We maintain the highest standards in every aspect of our work, from code quality to user experience and customer service."
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
            Meet the founders and driving force behind Script Pilot's success. 
            Our team combines technical expertise with business strategy to deliver exceptional results.
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
              David brings over 8 years of web development experience, specializing in React, 
              TypeScript, and modern web technologies. He leads our technical strategy and 
              ensures every project meets the highest standards of performance and security.
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
              Tyler focuses on business strategy, client relationships, and ensuring our solutions 
              drive real business results. With a background in digital marketing and business 
              development, he ensures every project aligns with our clients' growth objectives.
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
              icon: TrendingUp,
              title: "Results-Driven",
              description: "Every project is designed with your business goals in mind, ensuring measurable results and return on investment."
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
          Ready to Work Together?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Let's discuss your project and see how we can help your business succeed online. 
          Schedule a free consultation to get started.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/t6ckmedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  </div>
);