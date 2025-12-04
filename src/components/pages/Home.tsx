import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Shield, Clock, Globe, Code, Rocket, Camera, Star, Phone, Mail, Calendar } from 'lucide-react';

interface HomeProps {
  navigateTo: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => (
  <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
    {/* Hero Section */}
    <section className="pt-40 pb-32 px-4 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto animate-fade-up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-tight" style={{ color: '#1E293B' }}>
            Professional Web
            <span className="block font-semibold mt-2">Development</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-16 leading-relaxed font-light" style={{ color: '#475569' }}>
            Custom business websites and digital solutions delivered on time.
            <span className="block mt-2">Missouri-based. 200+ successful projects.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 rounded-lg font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 no-underline hover:-translate-y-0.5"
              style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: 'white', color: '#1E293B' }}
            >
              Get In Touch
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center pt-8">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "99%", label: "Client Retention" },
              { value: "1-4", label: "Week Timeline" },
              { value: "4+", label: "Years in Business" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl sm:text-5xl font-light mb-2" style={{ color: '#1E293B' }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: '#475569' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Springfield Photography Offer */}
    <section className="py-16 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl p-12 border" style={{
          backgroundColor: '#F8FAFC',
          borderColor: '#E5E7EB'
        }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#CBD5E1' }}>
              <Camera className="w-7 h-7" style={{ color: '#475569' }} />
            </div>
            <h3 className="text-3xl font-light" style={{ color: '#1E293B' }}>
              Complimentary Photography
              <span className="block text-lg mt-1 font-normal" style={{ color: '#475569' }}>Springfield Area</span>
            </h3>
          </div>
          <p className="text-center mb-8 text-lg font-light" style={{ color: '#475569' }}>
            Within 50 miles of Springfield, MO — professional business photography included at no charge.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3" style={{ color: '#475569' }}>
              <CheckCircle className="w-5 h-5" style={{ color: '#1E293B' }} />
              <span className="font-light">Storefront & Interior</span>
            </div>
            <div className="flex items-center justify-center gap-3" style={{ color: '#475569' }}>
              <CheckCircle className="w-5 h-5" style={{ color: '#1E293B' }} />
              <span className="font-light">Product Photography</span>
            </div>
            <div className="flex items-center justify-center gap-3" style={{ color: '#475569' }}>
              <CheckCircle className="w-5 h-5" style={{ color: '#1E293B' }} />
              <span className="font-light">Team Photos</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-32 px-4" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight" style={{ color: '#1E293B' }}>
            What We Build
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto" style={{ color: '#475569' }}>
            Custom solutions designed for business success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Business Websites",
              description: "Professional sites that showcase your services and convert visitors into customers.",
              features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "Contact Forms"]
            },
            {
              icon: Code,
              title: "E-commerce Stores",
              description: "Online stores that make it easy for customers to find and buy your products.",
              features: ["Secure Payments", "Inventory Management", "Order Tracking", "Customer Accounts"]
            },
            {
              icon: Rocket,
              title: "Custom Solutions",
              description: "Tailored web applications built specifically for your unique business needs.",
              features: ["Custom Features", "Third-party Integrations", "Scalable Architecture", "Ongoing Support"]
            }
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                borderColor: '#E5E7EB'
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: '#1E293B' }}>
                <service.icon className="w-8 h-8" style={{ color: '#F8FAFC' }} />
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1E293B' }}>{service.title}</h3>
              <p className="mb-8 leading-relaxed font-light" style={{ color: '#475569' }}>{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3" style={{ color: '#475569' }}>
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1E293B' }} />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-32 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight" style={{ color: '#1E293B' }}>
            Transparent Pricing
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto" style={{ color: '#475569' }}>
            Two payments. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Start Project */}
          <div className="rounded-2xl p-10 border transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E5E7EB'
          }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: '#CBD5E1' }}>
                <Users className="w-8 h-8" style={{ color: '#1E293B' }} />
              </div>
              <h3 className="text-2xl font-light mb-2" style={{ color: '#1E293B' }}>Project Start</h3>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-lg line-through font-light" style={{ color: '#CBD5E1' }}>$300</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{
                    backgroundColor: '#CBD5E1',
                    color: '#1E293B'
                  }}>Save $140</span>
                </div>
                <div className="text-5xl font-light" style={{ color: '#1E293B' }}>$160</div>
              </div>
              <p className="mb-10 font-light" style={{ color: '#475569' }}>Strategy and planning to begin</p>
              <ul className="space-y-4 mb-10 text-left">
                {["Strategy session", "Site planning", "Development begins", "Regular updates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1E293B' }} />
                    <span className="font-light" style={{ color: '#475569' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-block text-center no-underline hover:-translate-y-0.5"
                style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
              >
                Start Your Project
              </a>
            </div>
          </div>

          {/* Launch Site */}
          <div className="rounded-2xl p-10 border transition-all duration-300 hover:shadow-xl relative scale-105" style={{
            backgroundColor: '#1E293B',
            borderColor: '#475569'
          }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: '#F8FAFC' }}>
                <Rocket className="w-8 h-8" style={{ color: '#1E293B' }} />
              </div>
              <h3 className="text-2xl font-light mb-2" style={{ color: '#F8FAFC' }}>Site Launch</h3>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-lg line-through font-light" style={{ color: '#CBD5E1' }}>$700</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{
                    backgroundColor: '#CBD5E1',
                    color: '#1E293B'
                  }}>Save $160</span>
                </div>
                <div className="text-5xl font-light" style={{ color: '#F8FAFC' }}>$540</div>
              </div>
              <p className="mb-10 font-light" style={{ color: '#CBD5E1' }}>Due when site is complete and live</p>
              <ul className="space-y-4 mb-10 text-left">
                {["Finished website", "Domain & hosting setup", "SSL security", "Site goes live"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#F8FAFC' }} />
                    <span className="font-light" style={{ color: '#CBD5E1' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full py-4 rounded-lg text-center border" style={{
                backgroundColor: 'rgba(248, 250, 252, 0.1)',
                borderColor: '#475569',
                color: '#F8FAFC'
              }}>
                <div className="text-sm mb-1 font-light" style={{ color: '#CBD5E1' }}>Payment Due at Launch</div>
                <div className="text-xs mt-2">
                  <a
                    href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline font-light hover:opacity-80 transition-opacity"
                    style={{ color: '#CBD5E1' }}
                  >
                    Payment link
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="rounded-2xl p-10 border transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E5E7EB'
          }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: '#CBD5E1' }}>
                <Shield className="w-8 h-8" style={{ color: '#1E293B' }} />
              </div>
              <h3 className="text-2xl font-light mb-2" style={{ color: '#1E293B' }}>Maintenance</h3>
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-lg line-through font-light" style={{ color: '#CBD5E1' }}>$300</span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{
                    backgroundColor: '#CBD5E1',
                    color: '#1E293B'
                  }}>Save $150</span>
                </div>
                <div className="text-5xl font-light" style={{ color: '#1E293B' }}>$150</div>
                <div className="text-sm font-light mt-1" style={{ color: '#475569' }}>per month</div>
              </div>
              <p className="mb-2 font-light" style={{ color: '#475569' }}>Ongoing security and updates</p>
              <p className="text-sm font-medium mb-10" style={{ color: '#475569' }}>Completely Optional</p>
              <ul className="space-y-4 mb-10 text-left">
                {["Security updates", "Regular backups", "Performance monitoring", "Priority support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#1E293B' }} />
                    <span className="font-light" style={{ color: '#475569' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-block text-center no-underline hover:-translate-y-0.5"
                style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
              >
                Subscribe $150/mo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-32 px-4" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight" style={{ color: '#1E293B' }}>
            Why Script Pilot
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto" style={{ color: '#475569' }}>
            Delivering what we promise, on time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {[
            {
              icon: Award,
              title: "Proven Track Record",
              description: "200+ successful websites built for businesses across the country."
            },
            {
              icon: Users,
              title: "Direct Communication",
              description: "Work directly with developers. No account managers or middlemen."
            },
            {
              icon: Clock,
              title: "On-Time Delivery",
              description: "Realistic timelines that we stick to. Your project launches on schedule."
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#CBD5E1' }}>
                <benefit.icon className="w-10 h-10" style={{ color: '#1E293B' }} />
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1E293B' }}>{benefit.title}</h3>
              <p className="leading-relaxed font-light" style={{ color: '#475569' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Live Demo Section */}
    <section className="py-24 px-4 overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight" style={{ color: '#F8FAFC' }}>
            Live Demo
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#CBD5E1' }}>
            Complete e-commerce solution. Fast, responsive, professional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 border" style={{
            backgroundColor: '#475569',
            borderColor: '#CBD5E1'
          }}>
            <div className="relative overflow-hidden rounded-xl mb-8" style={{ backgroundColor: 'black' }}>
              <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="/2025-11-29 18-17-28 - Trim.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-4" style={{ color: '#F8FAFC' }}>E-commerce Solution</h3>
              <p className="mb-6 leading-relaxed font-light" style={{ color: '#CBD5E1' }}>
                Full online store with product catalog, shopping cart, and secure checkout.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-lg text-sm font-light" style={{
                  backgroundColor: '#1E293B',
                  color: '#F8FAFC'
                }}>Responsive</span>
                <span className="px-4 py-2 rounded-lg text-sm font-light" style={{
                  backgroundColor: '#1E293B',
                  color: '#F8FAFC'
                }}>Fast Loading</span>
                <span className="px-4 py-2 rounded-lg text-sm font-light" style={{
                  backgroundColor: '#1E293B',
                  color: '#F8FAFC'
                }}>SEO Optimized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigateTo('contact')}
            className="group px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto hover:-translate-y-0.5"
            style={{ backgroundColor: '#F8FAFC', color: '#1E293B' }}
          >
            Get Your Website
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight" style={{ color: '#1E293B' }}>
            Client Testimonials
          </h2>
          <p className="text-xl font-light" style={{ color: '#475569' }}>Real feedback from real businesses</p>
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
            <div key={index} className="rounded-2xl p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{
              backgroundColor: '#F8FAFC',
              borderColor: '#E5E7EB'
            }}>
              <div className="flex items-center gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#1E293B' }} />
                ))}
              </div>
              <blockquote className="text-lg mb-8 leading-relaxed font-light" style={{ color: '#475569' }}>
                "{testimonial.testimonial}"
              </blockquote>
              <div className="pt-6 border-t" style={{ borderColor: '#E5E7EB' }}>
                <p className="font-medium" style={{ color: '#1E293B' }}>{testimonial.name}</p>
                <p className="text-sm font-light mt-1" style={{ color: '#475569' }}>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-32 px-4" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-light mb-8 tracking-tight" style={{ color: '#F8FAFC' }}>
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light" style={{ color: '#CBD5E1' }}>
          Let's discuss your project. No pressure, no sales pitch—just an honest conversation about what you need.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            href="mailto:contact@scriptpilot.us?subject=Project%20Inquiry%20-%20Script%20Pilot"
            className="p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 no-underline"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            <Mail className="w-12 h-12 mx-auto mb-6" style={{ color: '#1E293B' }} />
            <h3 className="text-xl font-light mb-3" style={{ color: '#1E293B' }}>Email</h3>
            <p className="mb-4 font-light text-sm" style={{ color: '#475569' }}>Response within 24 hours</p>
            <span className="font-medium text-sm" style={{ color: '#1E293B' }}>contact@scriptpilot.us</span>
          </a>

          <a
            href="tel:4174010015"
            className="p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 no-underline"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            <Phone className="w-12 h-12 mx-auto mb-6" style={{ color: '#1E293B' }} />
            <h3 className="text-xl font-light mb-3" style={{ color: '#1E293B' }}>Phone</h3>
            <p className="mb-4 font-light text-sm" style={{ color: '#475569' }}>Mon-Fri, 9AM-6PM CST</p>
            <span className="font-medium text-sm" style={{ color: '#1E293B' }}>(417) 401-0015</span>
          </a>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="p-10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 no-underline"
            style={{ backgroundColor: '#475569' }}
          >
            <Calendar className="w-12 h-12 mx-auto mb-6" style={{ color: '#F8FAFC' }} />
            <h3 className="text-xl font-light mb-3" style={{ color: '#F8FAFC' }}>Book a Call</h3>
            <p className="mb-4 font-light text-sm" style={{ color: '#CBD5E1' }}>Free 30-minute consultation</p>
            <span className="font-medium text-sm" style={{ color: '#F8FAFC' }}>Schedule Now</span>
          </a>
        </div>
      </div>
    </section>
  </div>
);