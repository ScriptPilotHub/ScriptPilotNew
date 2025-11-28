import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap, Shield, Clock, TrendingUp, Globe, Code, Rocket, Camera } from 'lucide-react';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-premium-float">
          <Rocket className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
          Professional Web Development
          <span className="block bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
            For Growing Businesses
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto mb-8 px-4">
          Custom websites and e-commerce platforms designed to grow your business. 
          Professional development with transparent pricing and proven results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="w-full sm:w-auto border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>

    {/* Springfield Photography Highlight */}
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Camera className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            FREE Professional Photography
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>Springfield, Missouri Area Clients:</strong> We include professional product and business photography 
            at no additional cost with every web development project. High-quality images that make your website stand out!
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Product Photography</h3>
              <p className="text-emerald-100">Professional shots of your products for e-commerce and marketing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Business Photography</h3>
              <p className="text-emerald-100">Team photos, office spaces, and professional headshots</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Location Shoots</h3>
              <p className="text-emerald-100">On-site photography sessions at your business location</p>
            </div>
          </div>
          <p className="text-emerald-200 text-lg mt-8 font-medium">
            📍 Available within 50 miles of Springfield, MO
          </p>
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
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-900 mb-3">{stat.value}</div>
              <div className="text-blue-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Professional Web Development
          </h2>
          <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto px-4">
            Transparent pricing, professional results. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Users,
              title: "Project Initiation",
              description: "Start your custom website project with professional consultation and planning.",
              features: ["$160 to get started", "Initial consultation & planning", "Project roadmap"],
              price: "$160",
              originalPrice: "$250"
            },
            {
              icon: CheckCircle,
              title: "Deployment & Final Payment",
              description: "Complete development and deployment when your website is finished and ready to go live.",
              features: ["$440 final payment", "Complete development", "Live deployment"],
              price: "$440",
              originalPrice: "$600"
            },
            {
              icon: Shield,
              title: "Website Protection & Updates",
              description: "Optional monthly service to keep your website secure, updated, and performing optimally.",
              features: ["$150/month (optional)", "Security monitoring", "Regular updates"],
              price: "$150/mo",
              originalPrice: "$250/mo"
            }
          ].map((service, index) => (
           <div key={index} className="bg-white rounded-2xl border-2 border-blue-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-3">
             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index === 0 ? 'bg-gradient-to-br from-blue-600 to-blue-700' : index === 1 ? 'bg-gradient-to-br from-purple-600 to-purple-700' : 'bg-gradient-to-br from-emerald-600 to-emerald-700'} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform shadow-lg`}>
               <service.icon className="w-8 h-8 text-white transition-all duration-500" />
              </div>
              
              <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">{service.price}</div>
              {service.originalPrice && (
                <div className="mb-2">
                  <span className="text-sm text-blue-500 line-through">{service.originalPrice}</span>
                  <span className="text-emerald-600 font-semibold text-xs ml-2">Save!</span>
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-700 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-blue-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Why Businesses Choose Script Pilot
          </h2>
          <p className="text-lg sm:text-xl text-blue-700 max-w-3xl mx-auto px-4">
            Professional web development with a focus on business growth and measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Award,
              title: "Proven Expertise",
              description: "Over 200 successful projects delivered across diverse industries with consistent quality and reliability."
            },
            {
              icon: Users,
              title: "Client-Focused Approach",
              description: "Clear communication, transparent pricing, and dedicated support throughout your project development."
            },
            {
              icon: CheckCircle,
              title: "Modern Technology",
              description: "Current web technologies and best practices to ensure your website performs well and stays secure."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-3xl mx-auto px-4">
          Professional web development that helps your business succeed online. 
          Contact us to discuss your project and get a custom quote.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project Inquiry - Script Pilot"
            className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center transform"
          >
            Get Quote
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
);