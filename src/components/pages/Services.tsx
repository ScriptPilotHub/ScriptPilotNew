import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Search, Shield, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900">
                Complete Web Solutions
                <span className="block text-gradient">for Modern Business</span>
              </h1>
              <p className="body-large max-w-2xl mx-auto">
                Everything your business needs to succeed online in one comprehensive package. 
                No hidden fees, no surprises—just results that drive growth.
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

    {/* Why Professional Websites Matter */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <TrendingUp className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Why Your Business Needs a Professional Website
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              In today's digital landscape, your website is often the first impression 
              customers have of your business. Make it count.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-4 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Increase Revenue",
              description: "Businesses with professional websites see 2-3x more revenue growth than those without",
              color: "green"
            },
            {
              icon: Users,
              title: "Build Trust",
              description: "75% of consumers judge business credibility based on website design",
              color: "blue"
            },
            {
              icon: Search,
              title: "Get Found Online",
              description: "97% of people search online for local businesses before making a purchase",
              color: "purple"
            },
            {
              icon: Clock,
              title: "24/7 Sales",
              description: "Your website works around the clock, generating leads and sales while you sleep",
              color: "orange"
            }
          ].map((benefit, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 bg-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Main Service Package */}
    <section className="section bg-slate-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Rocket className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Your Complete Digital Solution
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              We provide everything your business needs to establish a powerful online presence 
              and drive real growth. One service, complete results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
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
              description: "Custom websites designed to represent your brand professionally and convert visitors into customers.",
              color: "blue"
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
              description: "Complete e-commerce solutions that turn your website into a powerful sales machine.",
              color: "green"
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
              description: "Tailored functionality that meets your specific business needs and workflow requirements.",
              color: "purple"
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
              description: "Complete deployment and launch services to get your website live and performing optimally.",
              color: "orange"
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
              description: "Strategic SEO and marketing setup to help customers find your business online.",
              color: "yellow"
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
              description: "Comprehensive maintenance and support to keep your website secure and running smoothly.",
              color: "red"
            }
          ].map((service, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${service.color}-600 transition-colors duration-300`}>
                      <service.icon className={`w-6 h-6 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="heading-3 text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Perfect For Section */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <Users className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Perfect for Every Business
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Our solutions are designed to work for businesses of all sizes and industries.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-4 gap-8">
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
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="heading-3 text-slate-900">
                  {business.title}
                </h3>
                <p className="text-slate-600">
                  {business.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Section */}
    <section className="section bg-blue-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <DollarSign className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              The Cost of NOT Having a Professional Website
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              Every day without a professional website is money left on the table. 
              Here's what you're missing:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Lost Revenue",
              description: "Potential customers can't find you online and choose competitors instead",
              color: "red"
            },
            {
              icon: Shield,
              title: "Damaged Credibility",
              description: "Outdated or missing websites make your business appear unprofessional",
              color: "yellow"
            },
            {
              icon: TrendingUp,
              title: "Missed Growth",
              description: "Limited reach means slower business growth and fewer opportunities",
              color: "orange"
            }
          ].map((cost, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="bg-white rounded-xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 bg-${cost.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <cost.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900">
                    {cost.title}
                  </h3>
                  <p className="text-slate-600">
                    {cost.description}
                  </p>
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
            <Star className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="heading-2 text-slate-900">
              Client Success Stories
            </h2>
            <p className="body-large max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence 
              and achieve measurable results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-3 gap-8">
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-blue-100">
                Don't let another day pass without a professional online presence. 
                Let's discuss how our complete solution can help your business grow.
              </p>
            </div>
            
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
        </AnimatedSection>
      </div>
    </section>
  </div>
);