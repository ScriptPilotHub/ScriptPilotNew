import React from 'react';
import { Lightbulb, Users, Award, Target, Zap, Shield } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900">
                We are
                <span className="block text-gradient">Script Pilot</span>
              </h1>
              <p className="body-large max-w-2xl mx-auto">
                A collective of passionate developers and designers dedicated to crafting exceptional 
                digital experiences. We're not just a service; we're your technical co-pilots on the 
                journey to online success.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Core Values */}
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Our Core Values
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver 
              exceptional results for every client.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Pushing boundaries with modern technology and creative solutions that set your business apart from the competition.",
              color: "blue"
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "Your vision, our expertise. We build great things together through clear communication and shared goals.",
              color: "green"
            },
            {
              icon: Award,
              title: "Quality",
              description: "Uncompromising commitment to performance, design, and reliability in every project we deliver.",
              color: "purple"
            }
          ].map((value, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group h-full text-center">
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-${value.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Meet the Team */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Meet the Pilots
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              The experienced professionals behind Script Pilot, dedicated to 
              your project's success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "David Tackett",
              role: "Lead Developer & Architect",
              initial: "D",
              description: "Expert in modern web technologies with a passion for creating scalable, high-performance applications."
            },
            {
              name: "Tyler Wells",
              role: "Developer & Sales Manager",
              initial: "T",
              description: "Combines technical expertise with business acumen to deliver solutions that drive real results."
            }
          ].map((pilot, index) => (
            <AnimatedSection delay={200 * (index + 1)} key={pilot.name}>
             <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group text-center">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{pilot.initial}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900">
                      {pilot.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {pilot.role}
                    </p>
                   <p className="text-slate-600">
                      {pilot.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="section bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Our Approach
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              We combine technical excellence with business strategy to deliver 
              solutions that drive real results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              icon: Target,
              title: "Strategy First",
              description: "We start by understanding your business goals and target audience to create a solution that delivers results.",
              color: "red"
            },
            {
              icon: Zap,
              title: "Modern Technology",
              description: "Using cutting-edge tools and frameworks to ensure your project is built for performance and scalability.",
              color: "yellow"
            },
            {
              icon: Shield,
              title: "Long-term Partnership",
              description: "We're here for the long haul, providing ongoing support and optimization to help your business grow.",
              color: "green"
            }
          ].map((approach, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 bg-${approach.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {approach.title}
                  </h3>
                  <p className="text-slate-600">
                    {approach.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section bg-blue-600">
      <div className="container text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="heading-2 text-white">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-blue-100">
                Let's discuss your project and see how we can help bring your vision to life 
                with a solution that drives real business results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);