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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const faqs = [
    {
      category: "Getting Started",
      question: "What is your process for starting a new project?",
      answer: "Our process begins with a comprehensive discovery call to understand your business goals, target audience, and specific requirements. We then create a detailed project proposal with timeline and pricing. Once approved, we move through four key phases: 1) Planning & Strategy (defining scope, creating wireframes), 2) Design & Prototyping (visual mockups and user experience design), 3) Development & Testing (building your site with rigorous quality assurance), and 4) Launch & Support (deployment, training, and ongoing assistance). Throughout the process, we maintain regular communication with progress updates and opportunities for feedback."
    },
    {
      category: "Getting Started",
      question: "Do I need to have technical knowledge to work with you?",
      answer: "Not at all! We handle all the technical aspects while keeping you informed in plain English. Our team translates complex technical concepts into easy-to-understand terms. We provide training on how to manage basic content updates, but you'll never need to worry about coding, server management, or technical maintenance. We're here to be your technical partners, not to overwhelm you with jargon."
    },
    {
      category: "Getting Started",
      question: "What information do you need from me to get started?",
      answer: "To begin, we'll need: your business goals and target audience, any existing branding materials (logos, colors, fonts), content for your website (text, images, or we can help create them), examples of websites you like, your domain name preferences, and any specific functionality requirements. Don't worry if you don't have everything ready - we'll guide you through gathering what's needed and can help with content creation."
    },
    {
      category: "Pricing & Investment",
      question: "How much does a custom website cost?",
      answer: "Our pricing is tailored to each project's unique requirements and complexity. Starter websites typically range from $850-$1,400, while full e-commerce solutions range from $2,500-$6,000. Enterprise custom solutions start at $8,000+. The final cost depends on factors like the number of pages, custom functionality, e-commerce features, integrations, and design complexity. We provide detailed, transparent quotes with no hidden fees. Every project includes responsive design, SEO optimization, security features, and one month of free support. Contact us for a free consultation and personalized quote."
    },
    {
      category: "Pricing & Investment",
      question: "Are there any hidden fees or ongoing costs?",
      answer: "We believe in complete transparency. Our quotes include everything needed to launch your website. The only ongoing costs are optional: domain registration ($10-15/year), hosting ($10-50/month depending on your needs), and our optional maintenance plans ($99+/month). We'll clearly explain all costs upfront and help you choose the most cost-effective hosting solution. There are never any surprise fees or hidden charges."
    },
    {
      category: "Pricing & Investment",
      question: "Do you offer payment plans or financing options?",
      answer: "Yes! We offer flexible payment plans to make professional web design accessible to businesses of all sizes. Our standard payment structure spreads costs across project milestones, and we can discuss extended payment plans for larger projects. We want to work with you to find a payment structure that fits your budget and cash flow needs."
    },
    {
      category: "Payment & Timeline",
      question: "What's the typical payment schedule and project timeline?",
      answer: "We structure payments to align with project milestones: typically 30-40% upfront to begin work, 30-40% at the design approval stage, and the remaining balance upon completion and launch. This protects both parties and ensures steady progress. Timeline varies by project scope: basic websites take 2-3 weeks, e-commerce sites require 4-8 weeks, and custom applications need 10+ weeks. We provide detailed timelines in your project proposal and send regular progress updates. Rush projects may be accommodated for an additional fee."
    },
    {
      category: "Payment & Timeline",
      question: "What happens if my project takes longer than expected?",
      answer: "If delays are on our end, we absorb any additional costs and work to get back on schedule. If delays are due to client feedback cycles or content provision, we'll communicate any timeline adjustments immediately. We build reasonable buffer time into our schedules and always keep you informed. Our goal is to deliver quality work on time, and we take responsibility for managing the project timeline effectively."
    },
    {
      category: "Timeline & Delivery",
      question: "How long does it take to build a website?",
      answer: "Project timelines depend on complexity and scope. Here's our typical breakdown: Starter websites (up to 5 pages) take 2-3 weeks, E-commerce sites with full functionality require 4-8 weeks, and Custom applications or complex integrations need 10+ weeks. Factors that can extend timelines include: custom design requirements, third-party integrations, content creation needs, and client feedback cycles. We build buffer time into our schedules and communicate any potential delays immediately. Rush delivery is available for urgent projects with adjusted pricing."
    },
    {
      category: "Timeline & Delivery",
      question: "Can you work with tight deadlines or rush projects?",
      answer: "Yes, we can accommodate urgent projects when possible. Rush delivery typically requires a 25-50% premium and depends on our current workload and project complexity. We'll assess your timeline needs during our initial consultation and let you know if we can meet your deadline. For the best results and pricing, we recommend allowing our standard timeline, but we understand business needs sometimes require faster delivery."
    },
    {
      category: "Timeline & Delivery",
      question: "How do you handle revisions and feedback during development?",
      answer: "We include reasonable revisions at each project phase. During design, you get 2-3 rounds of revisions to perfect the look and feel. During development, we provide staging sites for you to review and provide feedback. We encourage feedback early and often to ensure the final product exceeds your expectations. Major scope changes may require timeline and budget adjustments, which we'll discuss transparently."
    },
    {
      category: "Support & Maintenance",
      question: "What kind of support do you offer after my site is live?",
      answer: "Every project includes one month of comprehensive free support covering bug fixes, minor content updates, and technical assistance. This ensures a smooth transition and addresses any post-launch issues. Beyond the free period, we offer flexible monthly maintenance plans starting at $99/month that include: security monitoring and updates, regular backups, performance optimization, content updates (up to 2 hours monthly), priority support, and detailed monthly reports. We also provide training sessions to help you manage basic content updates independently."
    },
    {
      category: "Support & Maintenance",
      question: "What's included in your maintenance plans?",
      answer: "Our maintenance plans include: security monitoring and updates, regular automated backups, performance optimization, uptime monitoring, content updates (2-4 hours monthly depending on plan), priority email support, monthly performance reports, plugin/software updates, and emergency support for critical issues. We also provide quarterly strategy calls to discuss improvements and growth opportunities for your website."
    },
    {
      category: "Support & Maintenance",
      question: "What happens if my website goes down or has issues?",
      answer: "We monitor all sites we maintain and typically detect issues before you do. For maintenance plan clients, we provide emergency support and work to resolve critical issues within 2-4 hours. For all clients, we offer priority support and can quickly diagnose and fix most issues. We also maintain regular backups, so we can quickly restore your site if needed. Our goal is to minimize any downtime and keep your business running smoothly."
    },
    {
      category: "Technical Details",
      question: "What technologies do you use and will my site be mobile-friendly?",
      answer: "We use modern, industry-standard technologies including React, TypeScript, Tailwind CSS, and Node.js for optimal performance and maintainability. All websites are built with a mobile-first approach, ensuring perfect functionality across all devices and screen sizes. We implement responsive design principles, fast loading speeds (under 3 seconds), SEO optimization, security best practices, and accessibility standards. Your site will be hosted on reliable, fast servers with SSL certificates and regular backups included."
    },
    {
      category: "Technical Details",
      question: "How do you ensure my website is secure?",
      answer: "Security is built into every project. We implement: SSL certificates for encrypted data transmission, regular security updates and patches, secure hosting environments, protection against common vulnerabilities (SQL injection, XSS, etc.), regular backups stored securely off-site, strong password policies, and security monitoring. For e-commerce sites, we ensure PCI compliance and use trusted payment processors like Stripe for maximum security."
    },
    {
      category: "Technical Details",
      question: "Will my website be fast and perform well?",
      answer: "Absolutely! We optimize every site for speed and performance. Our techniques include: image optimization and compression, clean, efficient code, content delivery networks (CDNs), caching strategies, database optimization, and regular performance monitoring. We aim for loading speeds under 3 seconds and regularly test on various devices and connection speeds. Fast websites improve user experience and search engine rankings."
    },
    {
      category: "Technical Details",
      question: "Can you integrate with my existing business tools?",
      answer: "Yes! We can integrate with most popular business tools including: CRM systems (Salesforce, HubSpot), email marketing platforms (Mailchimp, Constant Contact), accounting software (QuickBooks), booking systems, inventory management, social media platforms, analytics tools, and payment processors. We'll discuss your specific integration needs during our consultation and provide solutions that streamline your workflow."
    },
    {
      category: "Content & Design",
      question: "Do you help with content creation and branding?",
      answer: "Yes! We offer comprehensive content and branding support. Our services include: copywriting for web pages, professional photography coordination, logo design and brand identity development, content strategy and SEO optimization, and social media integration. We can work with your existing brand guidelines or help develop new branding from scratch. Our team includes experienced copywriters who understand how to create compelling, conversion-focused content that resonates with your target audience."
    },
    {
      category: "Content & Design",
      question: "What if I don't like the initial design?",
      answer: "No problem! We include multiple design revisions to ensure you love the final result. We start with a detailed discovery process to understand your preferences, then create initial mockups based on your input. If the first design isn't quite right, we'll revise it until it perfectly captures your vision. We want you to be completely satisfied with your website's design before we move to development."
    },
    {
      category: "Content & Design",
      question: "Can you help me write content for my website?",
      answer: "Absolutely! Our team includes experienced copywriters who specialize in web content that converts visitors into customers. We can help with: homepage copy that clearly communicates your value proposition, service/product descriptions that sell, about pages that build trust, blog content for SEO, and calls-to-action that drive results. We understand how to write for both search engines and human readers."
    },
    {
      category: "Content & Design",
      question: "Do you provide photography or graphic design services?",
      answer: "We can coordinate professional photography and create custom graphics as needed. For photography, we work with trusted local photographers or can guide you on taking effective photos yourself. For graphics, we create custom icons, infographics, and visual elements that match your brand. We can also help you source high-quality stock photography that fits your brand and message."
    },
    {
      category: "E-commerce & Features",
      question: "Can you integrate payment processing and inventory management?",
      answer: "Absolutely! We specialize in full e-commerce solutions including secure payment processing (Stripe, PayPal, Square), inventory management systems, order tracking and fulfillment, customer account portals, automated email notifications, tax calculation, shipping integration, and detailed analytics and reporting. We ensure PCI compliance and implement robust security measures. Our e-commerce sites are designed for scalability, allowing your business to grow without technical limitations."
    },
    {
      category: "E-commerce & Features",
      question: "Can customers create accounts and track their orders?",
      answer: "Yes! Our e-commerce solutions include full customer account functionality: account creation and login, order history and tracking, saved payment methods and addresses, wishlist functionality, reorder capabilities, and personalized recommendations. Customers receive automated emails for order confirmations, shipping updates, and delivery notifications. This creates a professional shopping experience that encourages repeat business."
    },
    {
      category: "E-commerce & Features",
      question: "How do you handle shipping and tax calculations?",
      answer: "We integrate with major shipping carriers (UPS, FedEx, USPS) for real-time shipping calculations based on weight, dimensions, and destination. For taxes, we can integrate with services like TaxJar or Avalara for automatic tax calculation based on your business location and customer location. We'll help you set up shipping zones, rates, and tax rules that comply with your local and state requirements."
    },
    {
      category: "E-commerce & Features",
      question: "Can you set up subscription or recurring billing?",
      answer: "Yes! We can implement subscription billing for products or services using Stripe's subscription features. This includes: recurring monthly/yearly billing, trial periods, plan upgrades/downgrades, automatic payment retries, dunning management for failed payments, and customer self-service portals. This is perfect for membership sites, software services, or subscription box businesses."
    },
    {
      category: "SEO & Marketing",
      question: "Will my website be optimized for search engines?",
      answer: "Yes, SEO optimization is included in every project. We implement: technical SEO (fast loading, clean code, proper structure), on-page optimization (meta tags, headers, keyword optimization), local SEO setup (Google Business Profile, local directories), analytics and tracking setup (Google Analytics, Search Console), mobile optimization and Core Web Vitals, and schema markup for rich snippets. We also provide SEO training and ongoing optimization recommendations to help improve your search rankings over time."
    },
    {
      category: "SEO & Marketing",
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. You may see some improvements in 1-3 months, but significant results typically take 3-6 months or longer. We implement technical SEO and on-page optimization from day one, which provides a strong foundation. For ongoing SEO success, we recommend regular content creation, link building, and optimization - services we can provide through our maintenance plans or SEO packages."
    },
    {
      category: "SEO & Marketing",
      question: "Do you help with Google Ads or social media marketing?",
      answer: "While our primary focus is web development, we can help set up Google Analytics, Google Business Profile, and basic social media integration. For ongoing digital marketing, we work with trusted partners and can provide referrals to experienced marketing professionals. We ensure your website is optimized for conversions so that any marketing efforts you pursue will be more effective."
    },
    {
      category: "SEO & Marketing",
      question: "Can you help me track website performance and analytics?",
      answer: "Absolutely! We set up comprehensive analytics including: Google Analytics for traffic and user behavior, Google Search Console for search performance, conversion tracking for goals and sales, performance monitoring for site speed, and custom dashboards for easy reporting. We can provide monthly reports and help you understand what the data means for your business growth."
    },
    {
      category: "Ownership & Control",
      question: "Will I own my website and have full control over it?",
      answer: "Yes, you retain complete ownership of your website, domain, hosting accounts, and all associated assets. We provide full access credentials and documentation upon project completion. You're never locked into our services - you can take your site elsewhere at any time. We believe in transparency and client empowerment. We also provide training on how to make basic updates and can recommend other developers if needed. Your success and independence are our priorities."
    },
    {
      category: "Ownership & Control",
      question: "What happens if I want to make changes after the website is complete?",
      answer: "You have several options: make basic content changes yourself using the training we provide, request changes through our support (included free for one month), hire us for additional development work, or work with any other developer since you own all the code. We're always happy to help with updates and improvements, and we offer competitive rates for ongoing development work."
    },
    {
      category: "Ownership & Control",
      question: "Can I update my website content myself?",
      answer: "Yes! We build user-friendly content management systems that allow you to easily update text, images, and basic content without technical knowledge. We provide comprehensive training and documentation on how to make updates. For more complex changes, we're always available to help or you can work with any developer since you own the code."
    },
    {
      category: "Ownership & Control",
      question: "What if I'm not satisfied with the final result?",
      answer: "Your satisfaction is our top priority. We work closely with you throughout the project with regular check-ins and approval stages to ensure we're meeting your expectations. If you're not satisfied, we'll work with you to make it right. We include revisions in our process and won't consider a project complete until you're happy with the result. Our goal is to exceed your expectations, not just meet them."
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

  // Filter FAQs based on selected category
  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  // Reset open index when category changes
  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
      setOpenIndex(null);
    }
  };

  const handleShowAll = () => {
    setSelectedCategory(null);
    setOpenIndex(null);
  };

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

        {/* Category Filter */}
        <AnimatedSection delay={200}>
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">Browse by Category</h2>
              <button
                onClick={handleShowAll}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  !selectedCategory 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                Show All ({faqs.length})
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const categoryCount = faqs.filter(faq => faq.category === category.name).length;
                const isSelected = selectedCategory === category.name;
                
                return (
                  <button
                    key={category.name}
                    onClick={() => handleCategorySelect(category.name)}
                    className={`bg-slate-800/50 rounded-lg p-4 text-center border transition-all duration-300 group hover:scale-105 ${
                      isSelected 
                        ? `border-${category.color}-400 bg-${category.color}-500/20` 
                        : `border-slate-700/50 hover:border-${category.color}-400/50`
                    }`}
                  >
                    <category.icon className={`w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 ${
                      isSelected 
                        ? `text-${category.color}-300` 
                        : `text-${category.color}-400`
                    }`} />
                    <div className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isSelected 
                        ? `text-${category.color}-200` 
                        : `text-${category.color}-300 group-hover:text-${category.color}-200`
                    }`}>
                      {category.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {categoryCount} question{categoryCount !== 1 ? 's' : ''}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Active Filter Indicator */}
            {selectedCategory && (
              <div className="mt-6 flex items-center justify-center">
                <div className="bg-slate-800/50 rounded-full px-6 py-2 border border-slate-700/50">
                  <span className="text-slate-300">Showing </span>
                  <span className="text-teal-400 font-semibold">{selectedCategory}</span>
                  <span className="text-slate-300"> questions ({filteredFaqs.length})</span>
                  <button
                    onClick={handleShowAll}
                    className="ml-3 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
        
        {/* FAQ Items */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQItem
                  key={`${selectedCategory}-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  category={selectedCategory ? undefined : faq.category}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No questions found for this category.</p>
              </div>
            )}
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