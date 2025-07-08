import React from 'react';
import { Monitor, ShoppingCart, Code, Rocket, Users, Award, Lightbulb, ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ServiceCard } from '../ui/ServiceCard';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
    {/* Hero Section */}
    <section className="relative min-h-screen pt-24 flex flex-col items-center justify-center text-center bg-slate-900 overflow-hidden px-4 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4zKSI+PC9zdmc+')] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute top-[-25%] left-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute top-[0%] right-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-[-25%] left-[0%] w-96 h-96 md:w-[600px] md:h-[600px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-slow"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-[length:200%_200%] animate-gradient-x mb-6 drop-shadow-lg">
            Build a Strong Online Presence.
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            We create websites that truly connect with your audience and help you achieve your digital goals.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="https://calendly.com/t6ckmedia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Overview Section */}
    <section className="py-20 md:py-28 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-400 bg-[length:200%_200%] animate-gradient-x mb-4">
              Core Services
            </h2>
            <p className="text-lg text-slate-400 mt-2 max-w-3xl mx-auto">
              From stunning websites to powerful e-commerce platforms, we deliver solutions that drive real business results.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={150}>
            <ServiceCard
              title="Responsive Website Design"
              description="Crafting sites that provide a flawless experience on any device, from desktops to smartphones."
              Icon={Monitor}
              color="sky"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <ServiceCard
              title="E-commerce Solutions"
              description="Building secure, user-friendly online stores that convert visitors into loyal customers."
              Icon={ShoppingCart}
              color="purple"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={450}>
            <ServiceCard
              title="Custom Web Applications"
              description="Developing bespoke web tools and platforms tailored to your unique business processes."
              Icon={Code}
              color="pink"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={600}>
            <ServiceCard
              title="Deployment Assistance"
              description="Ensuring a smooth, secure, and seamless launch for your project from the server to your users' screens."
              Icon={Rocket}
              color="green"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-[length:200%_200%] animate-gradient-x mb-6">
              Why Choose Script Pilot?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We're not just developers – we're your digital co-pilots, committed to your success every step of the way.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={200}>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 text-center group hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform-gpu">
              <Lightbulb className="h-16 w-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-blue-300 mb-4 group-hover:text-blue-200 transition-colors duration-300">Innovation First</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                We stay ahead of the curve with cutting-edge technologies and creative solutions that set your business apart.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={350}>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 text-center group hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform-gpu">
              <Users className="h-16 w-16 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-purple-300 mb-4 group-hover:text-purple-200 transition-colors duration-300">True Partnership</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Your vision combined with our expertise creates something extraordinary. We're with you from concept to launch and beyond.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={500}>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 text-center group hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 transform-gpu">
              <Award className="h-16 w-16 text-teal-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-teal-300 mb-4 group-hover:text-teal-200 transition-colors duration-300">Uncompromising Quality</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Every line of code, every design element, every user interaction is crafted with meticulous attention to detail.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-400 bg-[length:200%_200%] animate-gradient-x mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From initial consultation to final launch, we follow a structured approach that ensures your project's success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Planning",
              description: "We dive deep into your business goals, target audience, and project requirements to create a comprehensive roadmap.",
              icon: Lightbulb,
              color: "blue"
            },
            {
              step: "02", 
              title: "Design & Prototyping",
              description: "Our team creates stunning visual designs and interactive prototypes that bring your vision to life.",
              icon: Monitor,
              color: "purple"
            },
            {
              step: "03",
              title: "Development & Testing",
              description: "We build your project using modern technologies, with rigorous testing to ensure everything works perfectly.",
              icon: Code,
              color: "teal"
            },
            {
              step: "04",
              title: "Launch & Support",
              description: "We handle the deployment and provide ongoing support to keep your digital presence running smoothly.",
              icon: Rocket,
              color: "green"
            }
          ].map((process, index) => (
            <AnimatedSection delay={index * 150} key={process.step}>
              <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center group hover:scale-[1.02] hover:shadow-xl hover:shadow-${process.color}-500/10 transition-all duration-300 transform-gpu relative`}>
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-${process.color}-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                  {process.step}
                </div>
                <process.icon className={`h-12 w-12 text-${process.color}-400 mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-xl font-semibold text-${process.color}-300 mb-3 group-hover:text-${process.color}-200 transition-colors duration-300`}>
                  {process.title}
                </h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                  {process.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 bg-[length:200%_200%] animate-gradient-x mb-6">
              What You Get
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Every project includes these essential features to ensure your digital success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast Performance",
              description: "Optimized code and modern techniques ensure your site loads quickly on any device.",
              color: "yellow"
            },
            {
              icon: Shield,
              title: "Security First",
              description: "Built-in security measures protect your site and customer data from threats.",
              color: "green"
            },
            {
              icon: Monitor,
              title: "Mobile Responsive",
              description: "Perfect display and functionality across all devices and screen sizes.",
              color: "blue"
            },
            {
              icon: CheckCircle,
              title: "SEO Optimized",
              description: "Search engine friendly structure to help customers find you online.",
              color: "teal"
            },
            {
              icon: Clock,
              title: "Ongoing Support",
              description: "One month of free support plus optional maintenance plans available.",
              color: "purple"
            },
            {
              icon: Star,
              title: "Quality Assurance",
              description: "Thorough testing ensures everything works perfectly before launch.",
              color: "pink"
            }
          ].map((feature, index) => (
            <AnimatedSection delay={index * 100} key={feature.title}>
              <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 group hover:scale-[1.02] hover:shadow-xl hover:shadow-${feature.color}-500/10 transition-all duration-300 transform-gpu`}>
                <feature.icon className={`h-10 w-10 text-${feature.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-xl font-semibold text-${feature.color}-300 mb-3 group-hover:text-${feature.color}-200 transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-400 to-pink-400 bg-[length:200%_200%] animate-gradient-x mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              See how we've helped businesses across the country achieve their digital goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              company: "Bloom Boutique",
              testimonial: "Script Pilot transformed our small flower shop into a thriving online business. Sales increased 300% in the first six months!",
              rating: 5
            },
            {
              name: "Mike Chen",
              company: "TechStart Solutions",
              testimonial: "The team delivered exactly what we needed - a professional website that perfectly represents our brand and converts visitors into clients.",
              rating: 5
            },
            {
              name: "Lisa Rodriguez",
              company: "Artisan Crafts Co.",
              testimonial: "From concept to launch, the process was smooth and professional. Our new e-commerce site has exceeded all expectations.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <AnimatedSection delay={index * 150} key={testimonial.name}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 group hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform-gpu">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic group-hover:text-white transition-colors duration-300">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-teal-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-[length:200%_200%] animate-gradient-x mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Start Your Project</span>
            </a>
            <a
              href="#services"
              className="inline-block border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            >
              Learn More
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);