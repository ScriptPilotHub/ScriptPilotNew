import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, TrendingUp, Users, Shield, Search, Clock, DollarSign, CheckCircle, Star, Zap } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-slate-900">
    {/* Hero Section */}
    <section className="section-lg pt-32">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1 text-slate-900 dark:text-white">
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
                <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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

    {/* Why Professional Websites Matter */}
    <section className="section bg-slate-50 dark:bg-slate-800/30">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 bg-${benefit.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="body">
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
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              color: "orange"
            },
            {
              icon: Search,
              title: "SEO & Marketing",
              features: [
                "Search engine optimization (SEO)",
                "Google Business Profile setup",
                "Local search optimization",
                "Email marketing integration"
              ],
              color: "yellow"
            },
            {
              icon: Shield,
              title: "Ongoing Support",
              features: [
                "One month of free support",
                "Security monitoring and updates",
                "Regular backups and maintenance",
                "Optional monthly protection plans"
              ],
              color: "red"
            }
          ].map((service, index) => (
            <AnimatedSection delay={100 * (index + 1)} key={index}>
              <div className="card group h-full">
                <div className="space-y-6">
                  <div className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900/20 rounded-xl flex items-center justify-center group-hover:bg-${service.color}-600 transition-colors duration-300`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600 group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="heading-3 text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 body-small">
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

    {/* Perfect For Section */}
    <section className="section bg-slate-50 dark:bg-slate-800/30">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="text-center space-y-3">
                <h3 className="heading-3 text-slate-900 dark:text-white">
                  {business.title}
                </h3>
                <p className="body">
                  {business.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ROI Section */}
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-16">
            <h2 className="heading-2 text-slate-900 dark:text-white">
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
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 bg-${cost.color}-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                  <cost.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="heading-3 text-slate-900 dark:text-white">
                    {cost.title}
                  </h3>
                  <p className="body">
                    {cost.description}
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
                Ready to Transform Your Business?
              </h2>
              <p className="body-large text-slate-300">
                Don't let another day pass without a professional online presence. 
                Let's discuss how our complete solution can help your business grow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="#about"
                className="btn btn-secondary btn-lg text-slate-300 border-slate-600 hover:text-white hover:border-slate-500"
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