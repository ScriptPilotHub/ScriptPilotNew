import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, CheckCircle, Star, ArrowRight } from 'lucide-react';
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="heading-2 text-slate-900">
                Our Mission
              </h2>
              <p className="body-large">
                To empower businesses with cutting-edge web solutions that not only look exceptional 
                but deliver measurable results. We believe every business deserves a professional 
                online presence that drives growth and success.
              </p>
              <p className="text-slate-600">
                Since our founding, we've helped hundreds of businesses transform their digital 
                presence, from small local shops to growing enterprises. Our approach combines 
                technical expertise with business strategy to create solutions that truly work.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration and strategy"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="section bg-slate-50">
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
              description: "We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage.",
              image: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800",
              color: "yellow"
            },
            {
              icon: Handshake,
              title: "Collaboration",
              description: "We work closely with our clients as partners, ensuring clear communication and alignment throughout every project.",
              image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
              color: "blue"
            },
            {
              icon: Award,
              title: "Quality",
              description: "We maintain the highest standards in every aspect of our work, from code quality to user experience and customer service.",
              image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
              color: "green"
            }
          ].map((value, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
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
            <h2 className="heading-2 text-slate-900">
              Meet Our Team
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in web development, 
              design, and digital strategy.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="heading-3 text-slate-900">
                  Development Team
                </h3>
                <p className="text-slate-600">
                  Expert developers specializing in modern web technologies, ensuring your project 
                  is built with the latest best practices and optimized for performance.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="heading-3 text-slate-900">
                  Strategy Team
                </h3>
                <p className="text-slate-600">
                  Business strategists and UX experts who ensure your website not only looks great 
                  but also achieves your business objectives and provides excellent user experience.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              Why Choose Script Pilot
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              We're more than just developers – we're your partners in digital success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-2 gap-8">
          {[
            {
              title: "Proven Track Record",
              description: "Over 200 successful projects delivered, with clients seeing average revenue increases of 40% within 6 months of launch.",
              features: ["200+ Projects Completed", "99% Client Satisfaction", "40% Average Revenue Increase"]
            },
            {
              title: "Full-Service Approach",
              description: "From initial strategy to ongoing maintenance, we handle every aspect of your web presence so you can focus on running your business.",
              features: ["Complete Project Management", "Ongoing Support Included", "No Hidden Fees"]
            },
            {
              title: "Modern Technology",
              description: "We use the latest web technologies and best practices to ensure your site is fast, secure, and future-proof.",
              features: ["Latest Web Standards", "Mobile-First Design", "SEO Optimized"]
            },
            {
              title: "Personal Service",
              description: "You'll work directly with our team throughout your project, with clear communication and regular updates every step of the way.",
              features: ["Direct Team Access", "Regular Updates", "Transparent Process"]
            }
          ].map((reason, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="space-y-4">
                  <h3 className="heading-3 text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600">
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

    {/* Testimonials */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900">
              What Our Clients Say
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Don't just take our word for it – hear from businesses we've helped succeed online.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "Script Pilot transformed our online presence completely. Our new website not only looks professional but has increased our lead generation by 60%.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              company: "Artisan Crafts Co.",
              testimonial: "The team's attention to detail and understanding of our business needs was exceptional. They delivered exactly what we envisioned and more.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting",
              testimonial: "Working with Script Pilot was seamless from start to finish. They kept us informed throughout the process and delivered on time and on budget.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <AnimatedSection delay={index * 100} key={testimonial.name}>
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-600 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="border-t border-slate-100 pt-4 space-y-1">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
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