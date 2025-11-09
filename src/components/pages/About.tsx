import React from 'react';
import { Lightbulb, Users, Award, Target, Zap, Shield } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-slate-900">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900 dark:text-white">
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
    <section className="section bg-slate-50 dark:bg-slate-800/30">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="card group h-full text-center">
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-${value.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="body">
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
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="card group text-center">
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{pilot.initial}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900 dark:text-white">
                      {pilot.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {pilot.role}
                    </p>
                    <p className="body">
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
    <section className="section bg-slate-50 dark:bg-slate-800/30">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 bg-${approach.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900 dark:text-white">
                    {approach.title}
                  </h3>
                  <p className="body">
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
    <section className="section bg-slate-900 dark:bg-slate-800">
      <div className="container text-center">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="heading-2 text-white">
                Ready to Work Together?
              </h2>
              <p className="body-large text-slate-300">
                Let's discuss your project and see how we can help bring your vision to life 
                with a solution that drives real business results.
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
                View Our Services
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);