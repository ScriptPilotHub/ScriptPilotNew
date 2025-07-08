import React from 'react';
import { Lightbulb, Users, Award } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export const About: React.FC = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white">
    <div className="container mx-auto max-w-6xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-[length:200%_200%] animate-gradient-x mb-4">
            We are Script Pilot
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A collective of passionate developers and designers dedicated to crafting exceptional digital experiences. We're not just a service; we're your technical co-pilots on the journey to online success.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 flex flex-col items-center group hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform-gpu relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Lightbulb className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
            <h3 className="text-xl font-semibold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-500 relative z-10">Innovation</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-500 relative z-10">Pushing boundaries with modern technology and creative solutions.</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 flex flex-col items-center group hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform-gpu relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Users className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-500 relative z-10">Collaboration</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-500 relative z-10">Your vision, our expertise. We build great things together.</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 flex flex-col items-center group hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform-gpu relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Award className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
            <h3 className="text-xl font-semibold text-teal-300 mb-2 group-hover:text-teal-200 transition-colors duration-500 relative z-10">Quality</h3>
            <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-500 relative z-10">Uncompromising commitment to performance, design, and reliability.</p>
          </div>
        </div>
      </AnimatedSection>
      
      <section>
        <AnimatedSection delay={200}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Meet the Pilots</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {[
            { name: "David Tackett", role: "Lead Developer & Architect", initial: "D", delay: 300 },
            { name: "Tyler Wells", role: "Developer & Sales Manager", initial: "T", delay: 400 }
          ].map(pilot => (
            <AnimatedSection delay={pilot.delay} key={pilot.name}>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center group hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 transform-gpu relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-700 group-hover:border-teal-400 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-xl">
                  <span className="text-3xl font-bold text-white">{pilot.initial}</span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-teal-200 transition-colors duration-500 relative z-10">{pilot.name}</h3>
                <p className="text-teal-400 group-hover:text-teal-300 transition-colors duration-500 relative z-10">{pilot.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  </section>
);