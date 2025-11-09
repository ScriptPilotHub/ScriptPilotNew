import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Search, Shield, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Complete Web Solutions
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            for Modern Business
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Everything your business needs to succeed online in one comprehensive package. 
          No hidden fees, no surprises—just results that drive growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://calendly.com/t6ckmedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "2-8", label: "Week Delivery" },
            { value: "24/7", label: "Performance" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Professional Websites Matter */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Your Business Needs a Professional Website
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In today's digital landscape, your website is often the first impression 
            customers have of your business. Make it count.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Increase Revenue",
              description: "Businesses with professional websites see 2-3x more revenue growth than those without"
            },
            {
              icon: Users,
              title: "Build Trust",
              description: "75% of consumers judge business credibility based on website design"
            },
            {
              icon: Search,
              title: "Get Found Online",
              description: "97% of people search online for local businesses before making a purchase"
            },
            {
              icon: Clock,
              title: "24/7 Sales",
              description: "Your website works around the clock, generating leads and sales while you sleep"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Main Service Package */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Rocket className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Complete Digital Solution
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide everything your business needs to establish a powerful online presence 
            and drive real growth. One service, complete results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Monitor,
              title: "Professional Website Design",
              features: [
                "Custom design tailored to your brand",
                "Mobile-responsive on all devices",
                "Fast loading speeds (under 3 seconds)",
                "Professional photography integration"
              ],
              description: "Custom websites designed to represent your brand professionally and convert visitors into customers."
            },
            {
              icon: ShoppingCart,
              title: "E-commerce Ready",
              features: [
                "Secure payment processing (Stripe, PayPal)",
                "Product catalog and inventory management",
                "Shopping cart and checkout optimization",
                "Order tracking and customer accounts"
              ],
              description: "Complete e-commerce solutions that turn your website into a powerful sales machine."
            },
            {
              icon: Code,
              title: "Custom Features",
              features: [
                "Contact forms and lead capture",
                "Booking and appointment systems",
                "Customer testimonials and reviews",
                "Social media integration"
              ],
              description: "Tailored functionality that meets your specific business needs and workflow requirements."
            },
            {
              icon: Rocket,
              title: "Launch & Deployment",
              features: [
                "Domain setup and DNS configuration",
                "SSL certificate and security setup",
                "Performance optimization",
                "Google Analytics and tracking"
              ],
              description: "Complete deployment and launch services to get your website live and performing optimally."
            },
            {
              icon: Search,
              title: "SEO & Marketing",
              features: [
                "Search engine optimization (SEO)",
                "Google Business Profile setup",
                "Local search optimization",
                "Content optimization for search"
              ],
              description: "Strategic SEO and marketing setup to help customers find your business online."
            },
            {
              icon: Shield,
              title: "Ongoing Support",
              features: [
                "One month of free support",
                "Security monitoring and updates",
                "Regular backups and maintenance",
                "Priority technical assistance"
              ],
              description: "Comprehensive maintenance and support to keep your website secure and running smoothly."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Perfect For Section */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perfect for Every Business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our solutions are designed to work for businesses of all sizes and industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Retail Stores",
              description: "Showcase products, enable online ordering, and expand your customer base beyond your local area."
            },
            {
              title: "Service Businesses",
              description: "Display your services, collect leads, and allow customers to book appointments online."
            },
            {
              title: "Restaurants",
              description: "Show your menu, enable online ordering, and build a loyal customer base with reviews and promotions."
            },
            {
              title: "Professional Services",
              description: "Establish credibility, showcase expertise, and generate qualified leads for your practice."
            }
          ].map((business, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {business.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {business.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Section */}
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Cost of NOT Having a Professional Website
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every day without a professional website is money left on the table. 
            Here's what you're missing:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Lost Revenue",
              description: "Potential customers can't find you online and choose competitors instead"
            },
            {
              icon: Shield,
              title: "Damaged Credibility",
              description: "Outdated or missing websites make your business appear unprofessional"
            },
            {
              icon: TrendingUp,
              title: "Missed Growth",
              description: "Limited reach means slower business growth and fewer opportunities"
            }
          ].map((cost, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <cost.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {cost.title}
              </h3>
              <p className="text-slate-600">
                {cost.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Star className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their digital presence 
            and achieve measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              company: "TechStart Solutions",
              testimonial: "Script Pilot delivered exactly what we needed - a professional platform that perfectly represents our brand and converts visitors into clients.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              company: "Artisan Crafts Co.",
              testimonial: "The team's attention to detail and technical expertise exceeded our expectations. Our new e-commerce site has driven significant growth.",
              rating: 5
            },
            {
              name: "Lisa Johnson",
              company: "Bloom Consulting",
              testimonial: "Professional, reliable, and results-driven. Script Pilot transformed our online presence and helped us reach new markets.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-600 italic mb-6">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Don't let another day pass without a professional online presence. 
          Let's discuss how our complete solution can help your business grow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://calendly.com/t6ckmedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Get Free Consultation
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  </div>
);