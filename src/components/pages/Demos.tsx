import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Demos: React.FC = () => (
  <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4zKSI+PC9zdmc+')] opacity-50"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>

    <div className="container mx-auto max-w-6xl text-center relative z-10">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-400 mb-6 animate-pulse">
          Our Work in Action
        </h1>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Explore interactive concepts of websites we design, demonstrating our expertise in e-commerce and professional online presence.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedSection delay={200}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 p-8 h-full flex flex-col items-center group hover:scale-105 hover:shadow-3xl hover:shadow-teal-500/20 transition-all duration-500 transform-gpu">
            <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg mb-6 flex items-center justify-center border border-green-500/30 group-hover:border-green-400/50 transition-colors duration-300">
              <span className="text-green-300 text-2xl font-bold">EcoFurnish</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-teal-200 transition-colors duration-300">
              EcoFurnish: Sustainable Home Goods
            </h3>
            <p className="text-slate-400 mb-6 flex-grow group-hover:text-slate-300 transition-colors duration-300">
              A conceptual e-commerce store showcasing beautiful product displays, intuitive navigation, and a smooth shopping experience focused on sustainability.
            </p>
            <a 
              href="#demo-ecofurnish" 
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              View Demo
            </a>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 p-8 h-full flex flex-col items-center group hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 transform-gpu">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
              <span className="text-blue-300 text-2xl font-bold">Apex Consulting</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
              Apex Consulting: Digital Strategy
            </h3>
            <p className="text-slate-400 mb-6 flex-grow group-hover:text-slate-300 transition-colors duration-300">
              A conceptual website for a digital strategy firm, featuring professional layouts, client testimonials, and clear service offerings.
            </p>
            <a 
              href="#demo-apexconsulting" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              View Demo
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
);