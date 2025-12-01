import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, ArrowRight, TrendingUp, Star, Building, Clock, Shield, CheckCircle, Phone, Mail, Calendar } from 'lucide-react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          About
          <span className="block text-gray-600">Script Pilot</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          We're a small web development team that's been building websites for businesses since 2016. 
          No fancy office, no huge team—just experienced developers who deliver results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-base hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            { value: "99%", label: "Client Satisfaction" },
            { value: "2-8", label: "Weeks to Launch" },
            { value: "8+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p className="text-lg">
              Back in 2016, we were freelancers getting frustrated with how complicated 
              web development had become. Clients were paying thousands for websites that 
              took months to build and didn't actually help their business.
            </p>
            <p>
              So we decided to do things differently. Fixed pricing. Clear timelines. 
              No technical jargon. Just good websites that help businesses get more customers.
            </p>
            <p>
              We've built over 200 websites since then. Some for local shops, some for 
              growing companies. Every project teaches us something new about what actually 
              works for businesses online.
            </p>
            <p>
              Today, we're still a small team focused on delivering quality work on time 
              and on budget. We're not trying to be the biggest agency—we just want to be 
              the most reliable.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Users className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two developers who've been working together for years. 
            We handle everything from planning to launch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-xl font-bold text-white">DT</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              David Tackett
            </h3>
            <p className="text-gray-600 font-semibold mb-4 text-sm">Co-Founder & Lead Developer</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              David handles the technical side—coding, hosting, and security. 
              He's been building websites for 8+ years and knows how to solve 
              problems quickly and efficiently.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-xl font-bold text-white">TW</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tyler Wells
            </h3>
            <p className="text-gray-600 font-semibold mb-4 text-sm">Co-Founder & Business Strategy</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Tyler focuses on understanding your business and making sure your website 
              actually helps you get more customers. He handles project planning, 
              communication, and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Award className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple process, clear communication, quality results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: Lightbulb,
              title: "We Listen First",
              description: "Before we write a single line of code, we understand your business, your customers, and your goals. Every project starts with strategy."
            },
            {
              icon: Handshake,
              title: "We Keep You Updated",
              description: "Regular check-ins, progress updates, and honest communication throughout your project. You'll never wonder what's happening."
            },
            {
              icon: Award,
              title: "We Deliver on Time",
              description: "We give you realistic timelines and stick to them. No endless delays or scope creep. Your project launches when we say it will."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-3">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform shadow-lg">
                <value.icon className="w-8 h-8 text-white transition-all duration-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Script Pilot
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not the biggest agency, but we deliver what we promise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              icon: Award,
              title: "Proven Track Record",
              description: "200+ successful websites built for businesses across the country. We know what works and what doesn't."
            },
            {
              icon: Users,
              title: "Direct Communication", 
              description: "You work directly with the developers. No account managers or middlemen to slow things down."
            },
            {
              icon: Clock,
              title: "On-Time Delivery",
              description: "We give realistic timelines and stick to them. Your project launches when we say it will."
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">Real feedback from real businesses</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "They delivered exactly what they promised, on time and on budget. Our new site has helped us land several new clients.",
              rating: 5
            },
            {
              name: "Michael Rodriguez", 
              company: "Artisan Crafts Co.",
              testimonial: "Professional work and great communication. They made the whole process easy and our online sales have doubled.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting", 
              testimonial: "Finally, a web team that actually listens. They built us a site that works for our business, not just looks pretty.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base mb-4 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section id="contact" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let's Talk About Your Project
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          No pressure, no sales pitch. Just an honest conversation about what you need 
          and whether we're a good fit to help.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
            className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <Mail className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Email Us</h3>
            <p className="text-gray-600 mb-2 text-sm">Get a response within 24 hours</p>
            <span className="text-gray-900 font-semibold text-sm">contact@scriptpilot.us</span>
          </a>

          <a
            href="tel:4174010015"
            className="group bg-white text-gray-900 p-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <Phone className="w-8 h-8 mx-auto mb-2 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Call Us</h3>
            <p className="text-gray-600 mb-2 text-sm">Mon-Fri, 9AM-6PM CST</p>
            <span className="text-gray-900 font-semibold text-sm">(417) 401-0015</span>
          </a>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <Calendar className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-1">Book a Call</h3>
            <p className="text-blue-100 mb-2 text-sm">Free 30-minute consultation</p>
            <span className="text-white font-semibold text-sm">Schedule Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);