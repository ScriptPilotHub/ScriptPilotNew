import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { PricingCard } from '../ui/PricingCard';

export const Pricing: React.FC = () => (
  <div className="pt-32 py-20 px-4 bg-slate-900">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-green-400 to-blue-400 mb-6 animate-pulse">
            Transparent Pricing
          </h1>
          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
            At Script Pilot, we specialize in building powerful online platforms, with a core focus on enabling businesses across the country to thrive online through e-commerce. This document outlines our transparent pricing structure for 2025, crafted to provide scalable solutions that deliver a strong return on investment and build lasting partnerships.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-teal-400/50 pb-2">
            Web Design & E-commerce Services
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Your website is your online storefront. We build engaging online experiences that capture attention and drive real business results.
          </p>
          
          <div className="space-y-8">
            <AnimatedSection delay={300}>
              <PricingCard
                title="Starter Website Package"
                description="Perfect for new businesses or anyone needing a professional, informative website to get started online."
                price="$850"
                originalPrice="$1,400"
                timeline="2-3 Weeks"
                color="sky"
                features={[
                  "Professional responsive design",
                  "Up to 5 pages",
                  "Contact form integration",
                  "Basic SEO optimization",
                  "$300 deployment included (Total $1,150)"
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <PricingCard
                title="E-commerce Accelerator Package"
                description="Our premier offering, perfect for businesses ready to sell online and drive significant growth."
                price="$2,500 - $6,000"
                timeline="4-8 Weeks"
                color="teal"
                features={[
                  "Full e-commerce functionality",
                  "Payment gateway integration",
                  "Inventory management",
                  "Advanced SEO & analytics",
                  "Custom product pages"
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <PricingCard
                title="Enterprise Custom Solutions"
                description="For businesses with unique needs that require highly customized web tools or advanced connections."
                price="Starting at $8,000+"
                timeline="10+ Weeks"
                color="rose"
                features={[
                  "Fully custom development",
                  "Advanced integrations",
                  "Scalable architecture",
                  "Priority support",
                  "Custom consultation"
                ]}
              />
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>
  </div>
);