import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, ArrowRight } from 'lucide-react';
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
                About
                <span className="block text-gradient">Script Pilot</span>
              </h1>
              <p className="body-large max-w-2xl mx-auto">
                We're a dedicated team of web development professionals committed to delivering 
                exceptional digital solutions that drive real business results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#contact" className="btn btn-primary btn-lg group">
                Get Started Today
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
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection delay={200}>
          <div className="grid grid-4 text-center max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "2-8", label: "Week Delivery" },
              { value: "24/7", label: "Performance" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission Section */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Target className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Our Mission
            </h2>
            <p className="body-large max-w-3xl mx-auto">
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
        </AnimatedSection>
      </div>
    </section>

    {/* Values Section */}
    <section className="section bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Award className="w-16 h-16 text-blue-600 mx-auto" />
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
              description: "We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage.",
              color: "yellow"
            },
            {
              icon: Handshake,
              title: "Collaboration",
              description: "We work closely with our clients as partners, ensuring clear communication and alignment throughout every project.",
              color: "blue"
            },
            {
              icon: Award,
              title: "Quality",
              description: "We maintain the highest standards in every aspect of our work, from code quality to user experience and customer service.",
              color: "green"
            }
          ].map((value, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="space-y-4">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${value.color}-600 transition-colors duration-300`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600 group-hover:text-white transition-colors duration-300`} />
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

    {/* Team Section */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Users className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Meet Our Team
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Meet the founders and driving force behind Script Pilot's success. 
              Our team combines technical expertise with business strategy to deliver exceptional results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">DT</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">
                  David Tackett
                </h3>
                <p className="text-blue-600 font-medium">Co-Founder & Lead Developer</p>
                <p className="text-slate-600">
                  David brings over 8 years of web development experience, specializing in React, 
                  TypeScript, and modern web technologies. He leads our technical strategy and 
                  ensures every project meets the highest standards of performance and security.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">TW</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Tyler Wells
                </h3>
                <p className="text-blue-600 font-medium">Co-Founder & Business Strategy</p>
                <p className="text-slate-600">
                  Tyler focuses on business strategy, client relationships, and ensuring our solutions 
                  drive real business results. With a background in digital marketing and business 
                  development, he ensures every project aligns with our clients' growth objectives.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Trust Indicators */}
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Target className="w-16 h-16 text-blue-600 mx-auto" />
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
              icon: Target,
              title: "Results-Driven",
              description: "Every project is designed with your business goals in mind, ensuring measurable results and return on investment.",
              color: "purple"
            }
          ].map((feature, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 bg-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
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
                Let's discuss your project and see how we can help your business succeed online. 
                Schedule a free consultation to get started.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);