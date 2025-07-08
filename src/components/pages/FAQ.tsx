import React, { useState } from 'react';
import { ChevronDown, Clock, DollarSign, Shield, Users, Zap, CheckCircle, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  category?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, category }) => (
  <div className="border border-slate-700/50 rounded-xl mb-4 overflow-hidden group hover:border-teal-400/30 transition-all duration-300 bg-slate-800/30">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left py-6 px-6 hover:bg-slate-700/30 transition-colors duration-300"
    >
      <div className="flex-1">
        {category && (
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide mb-2 block">
            {category}
          </span>
        )}
        <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors duration-300 pr-4">
          {question}
        </span>
      </div>
      <ChevronDown 
        className={`w-6 h-6 text-slate-400 transform transition-all duration-300 group-hover:text-teal-400 flex-shrink-0 ${
          isOpen ? 'rotate-180' : ''
        }`} 
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-700/30 pt-4">
        {answer}
      </div>
    </div>
  </div>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      category: "Getting Started",
      question: "What is your process for starting a new project?",
      answer: "Our process begins with a comprehensive discovery call to understand your business goals, target audience, and specific requirements. We then create a detailed project proposal with timeline and pricing. Once approved, we move through four key phases: 1) Planning & Strategy (defining scope, creating wireframes), 2) Design & Prototyping (visual mockups and user experience design), 3) Development & Testing (building your site with rigorous quality assurance), and 4) Launch & Support (deployment, training, and ongoing assistance). Throughout the process, we maintain regular communication with progress updates and opportunities for feedback."
    },
    {
      category: "Pricing & Investment",
      question: "How much does a custom website cost?",
      answer: "Our pricing is tailored to each project's unique requirements and complexity. Starter websites typically range from $850-$1,400, while full e-commerce solutions range from $2,500-$6,000. Enterprise custom solutions start at $8,000+. The final cost depends on factors like the number of pages, custom functionality, e-commerce features, integrations, and design complexity. We provide detailed, transparent quotes with no hidden fees. Every project includes responsive design, SEO optimization, security features, and one month of free support. Contact us for a free consultation and personalized quote."
    },
    {
      category: "Payment & Timeline",
      question: "What's the typical payment schedule and project timeline?",
      answer: "We structure payments to align with project milestones: typically 30-40% upfront to begin work, 30-40% at the design approval stage, and the remaining balance upon completion and launch. This protects both parties and ensures steady progress. Timeline varies by project scope: basic websites take 2-3 weeks, e-commerce sites require 4-8 weeks, and custom applications need 10+ weeks. We provide detailed timelines in your project proposal and send regular progress updates. Rush projects may be accommodated for an additional fee."
    },
    {
      category: "Timeline & Delivery",
      question: "How long does it take to build a website?",
      answer: "Project timelines depend on complexity and scope. Here's our typical breakdown: Starter websites (up to 5 pages) take 2-3 weeks, E-commerce sites with full functionality require 4-8 weeks, and Custom applications or complex integrations need 10+ weeks. Factors that can extend timelines include: custom design requirements, third-party integrations, content creation needs, and client feedback cycles. We build buffer time into our schedules and communicate any potential delays immediately. Rush delivery is available for urgent projects with adjusted pricing."
    },
    {
      category: "Support & Maintenance",
      question: "What kind of support do you offer after my site is live?",
      answer: "Every project includes one month of comprehensive free support covering bug fixes, minor content updates, and technical assistance. This ensures a smooth transition and addresses any post-launch issues. Beyond the free period, we offer flexible monthly maintenance plans starting at $99/month that include: security monitoring and updates, regular backups, performance optimization, content updates (up to 2 hours monthly), priority support, and detailed monthly reports. We also provide training sessions to help you manage basic content updates independently."
    },
    {
      category: "Technical Details",
      question: "What technologies do you use and will my site be mobile-friendly?",
      answer: "We use modern, industry-standard technologies including React, TypeScript, Tailwind CSS, and Node.js for optimal performance and maintainability. All websites are built with a mobile-first approach, ensuring perfect functionality across all devices and screen sizes. We implement responsive design principles, fast loading speeds (under 3 seconds), SEO optimization, security best practices, and accessibility standards. Your site will be hosted on reliable, fast servers with SSL certificates and regular backups included."
    },
    {
      category: "Content & Design",
      question: "Do you help with content creation and branding?",
      answer: "Yes! We offer comprehensive content and branding support. Our services include: copywriting for web pages, professional photography coordination, logo design and brand identity development, content strategy and SEO optimization, and social media integration. We can work with your existing brand guidelines or help develop new branding from scratch. Our team includes experienced copywriters who understand how to create compelling, conversion-focused content that resonates with your target audience."
    },
    {
      category: "E-commerce & Features",
      question: "Can you integrate payment processing and inventory management?",
      answer: "Absolutely! We specialize in full e-commerce solutions including secure payment processing (Stripe, PayPal, Square), inventory management systems, order tracking and fulfillment, customer account portals, automated email notifications, tax calculation, shipping integration, and detailed analytics and reporting. We ensure PCI compliance and implement robust security measures. Our e-commerce sites are designed for scalability, allowing your business to grow without technical limitations."
    },
    {
      category: "SEO & Marketing",
      question: "Will my website be optimized for search engines?",
      answer: "Yes, SEO optimization is included in every project. We implement: technical SEO (fast loading, clean code, proper structure), on-page optimization (meta tags, headers, keyword optimization), local SEO setup (Google Business Profile, local directories), analytics and tracking setup (Google Analytics, Search Console), mobile optimization and Core Web Vitals, and schema markup for rich snippets. We also provide SEO training and ongoing optimization recommendations to help improve your search rankings over time."
    },
    {
      category: "Ownership & Control",
      question: "Will I own my website and have full control over it?",
      answer: "Yes, you retain complete ownership of your website, domain, hosting accounts, and all associated assets. We provide full access credentials and documentation upon project completion. You're never locked into our services - you can take your site elsewhere at any time. We believe in transparency and client empowerment. We also provide training on how to make basic updates and can recommend other developers if needed. Your success and independence are our priorities."
    }
  ];

  const categories = [
    { name: "Getting Started", icon: Users, color: "blue" },
    { name: "Pricing & Investment", icon: DollarSign, color: "green" },
    { name: "Timeline & Delivery", icon: Clock, color: "purple" },
    { name: "Support & Maintenance", icon: Shield, color: "teal" },
    { name: "Technical Details", icon: Zap, color: "yellow" },
    { name: "Content & Design", icon: CheckCircle, color: "pink" }
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-25%] left-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-[-25%] right-[-25%] w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-delayed"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-[length:200%_200%] animate-gradient-x mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Everything you need to know about working with Script Pilot. Can't find what you're looking for? We're here to help.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-teal-400">100+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400">2-8</div>
                <div className="text-sm text-slate-400">Weeks Delivery</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">Site Performance</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-2xl font-bold text-green-400">30</div>
                <div className="text-sm text-slate-400">Days Free Support</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Overview */}
        <AnimatedSection delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={category.name} className={`bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50 hover:border-${category.color}-400/50 transition-all duration-300 group hover:scale-105`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                  <div className={`text-sm font-medium text-${category.color}-300 group-hover:text-${category.color}-200 transition-colors duration-300`}>
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* FAQ Items */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                category={faq.category}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Still Have Questions Section */}
        <AnimatedSection delay={500}>
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 text-center">
            <HelpCircle className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We're here to help! Get in touch with our team for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Send a Message
              </a>
              <a
                href="https://calendly.com/t6ckmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-purple-400/20 transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection delay={600}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-green-300 mb-2">Secure & Reliable</h4>
              <p className="text-slate-400 text-sm">SSL certificates, regular backups, and enterprise-grade security for all projects.</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-300 mb-2">Dedicated Support</h4>
              <p className="text-slate-400 text-sm">Personal attention from our experienced team throughout your project and beyond.</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
              <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Proven Results</h4>
              <p className="text-slate-400 text-sm">Hundreds of successful projects helping businesses grow their online presence.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};