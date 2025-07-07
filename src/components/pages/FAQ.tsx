import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-slate-700/50 group">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left py-6 px-6 hover:bg-slate-800/30 transition-colors duration-300 rounded-t-lg"
    >
      <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
        {question}
      </span>
      <ChevronDown 
        className={`w-6 h-6 text-slate-400 transform transition-all duration-300 group-hover:text-teal-400 ${
          isOpen ? 'rotate-180' : ''
        }`} 
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is your process for starting a new project?",
      answer: "Our process begins with a friendly chat to understand your vision, what you want to achieve, and who your customers are. Then, we plan and sketch out the design. Once you're happy with how it looks, we start building your project, keeping you in the loop with regular updates. We finish with thorough testing and launch, making sure everything runs smoothly."
    },
    {
      question: "How much does a custom website cost?",
      answer: "Since every project is unique, we provide personalized quotes based on your specific needs and goals. This ensures you only pay for what you truly need. Please reach out via our contact page for a free, no-obligation estimate for your project. We're happy to discuss options that fit your budget."
    },
    {
      question: "What's the typical payment schedule for a project?",
      answer: "For most web design projects, we ask for an initial payment of 30-40% upfront to kick things off. The rest of the payments are spaced out as we complete key parts of the project, with the final payment due upon completion. All the details will be clearly laid out in your custom project proposal."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A basic informational website might be ready in 2-3 weeks, while a full e-commerce store could take 4-8 weeks or longer. After our first chat, we'll give you a clear timeline for your specific project."
    },
    {
      question: "What kind of support do you offer after my site is live?",
      answer: "We include one month of free support after your website launches to make sure everything is perfect and fix any unexpected issues. For ongoing peace of mind, we also offer monthly maintenance plans. These plans cover regular updates, backups, security monitoring, and small content changes to keep your site running smoothly and safely."
    }
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 animate-pulse">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300 mt-4">Have questions? We've got answers.</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};