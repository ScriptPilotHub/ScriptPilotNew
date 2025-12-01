import React from 'react';
import { Users, Target, Award, Lightbulb, Handshake, ArrowRight, TrendingUp, Star, Building } from 'lucide-react';

export const About: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Building className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          About Script Pilot
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We're a small web development team that's been building websites for businesses since 2016. 
          No fancy office, no huge team—just two guys who know how to build websites that work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Work With Us
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>

    {/* Numbers */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What We've Accomplished
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Websites Built" },
            { value: "99%", label: "Happy Clients" },
            { value: "2-8", label: "Weeks to Launch" },
            { value: "8+", label: "Years in Business" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why We Started Script Pilot
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
            <p>
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
          </div>
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple process, clear communication, quality results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "We Listen First",
              description: "Before we write a single line of code, we understand your business, your customers, and your goals."
            },
            {
              icon: Handshake,
              title: "We Keep You Updated",
              description: "Regular check-ins, progress updates, and honest communication throughout your project."
            },
            {
              icon: Award,
              title: "We Deliver on Time",
              description: "We give you realistic timelines and stick to them. No endless delays or scope creep."
            }
          ].map((value, index) => (
           <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-3">
             <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform shadow-lg">
               <value.icon className="w-8 h-8 text-white transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two developers who've been working together for years. 
            We handle everything from planning to launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">DT</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              David Tackett
            </h3>
            <p className="text-gray-600 font-medium mb-4">Co-Founder & Lead Developer</p>
            <p className="text-gray-600">
              David handles the technical side—coding, hosting, and security. 
              He's been building websites for 4+ years and knows how to solve 
              problems quickly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold text-white">TW</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Tyler Wells
            </h3>
            <p className="text-gray-600 font-medium mb-4">Co-Founder & Business Strategy</p>
            <p className="text-gray-600">
              Tyler focuses on understanding your business and making sure your website 
              actually helps you get more customers. He handles project planning, 
              communication, and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Client Feedback */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Star className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real businesses we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={index} className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Target className="w-16 h-16 text-gray-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not the biggest web development company, but we might be the most reliable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "We've Done This Before",
              description: "200+ websites built. We know what works and what doesn't. You benefit from our experience."
            },
            {
              icon: Users,
              title: "You Talk to the Actual Developers", 
              description: "No account managers or middlemen. You work directly with the people building your site."
            },
            {
              icon: TrendingUp,
              title: "We Focus on Results",
              description: "Pretty websites are nice, but we care more about helping your business grow online."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let's Talk About Your Project
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          No pressure, no sales pitch. Just an honest conversation about what you need 
          and whether we're a good fit to help.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Send Us an Email
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
);