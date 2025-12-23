import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { SEO } from '../SEO';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  display_order: number;
}

const fallbackFaqs: FAQ[] = [
  {
    id: '1',
    question: 'How much does a website cost?',
    answer: 'Our websites start at $700 total, with $160 to start and $540 on delivery. This covers everything: design, development, hosting setup, and launch. Monthly maintenance is optional at $150/month.',
    category: 'pricing',
    display_order: 1
  },
  {
    id: '2',
    question: 'How long does it take to build a website?',
    answer: 'Most projects take 1-4 weeks from start to launch, depending on complexity. Simple business sites typically take 1-2 weeks, while e-commerce stores may take 3-4 weeks.',
    category: 'process',
    display_order: 2
  },
  {
    id: '3',
    question: 'What do I need to provide?',
    answer: 'We need your branding materials (logo, colors), content (text, images), and any specific features you want. We can help create content if needed.',
    category: 'process',
    display_order: 3
  },
  {
    id: '4',
    question: 'Do you offer website maintenance?',
    answer: 'Yes! Our optional maintenance plan is $150/month and includes unlimited edits, 24/7 hosting, security updates, and priority support.',
    category: 'services',
    display_order: 4
  },
  {
    id: '5',
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. All our websites are fully responsive and optimized for mobile devices, tablets, and desktops.',
    category: 'technical',
    display_order: 5
  },
  {
    id: '6',
    question: 'Can I update the website myself?',
    answer: 'Yes! We can build your site with a content management system that makes it easy to update text and images without technical knowledge.',
    category: 'technical',
    display_order: 6
  },
  {
    id: '7',
    question: 'Do you provide hosting?',
    answer: 'Yes, all our websites include enterprise-level hosting with 99.9% uptime, automatic backups, and SSL certificates.',
    category: 'services',
    display_order: 7
  },
  {
    id: '8',
    question: 'What if I need changes after launch?',
    answer: 'With our maintenance plan, you get unlimited edits. Without it, we offer hourly support or per-project pricing for updates.',
    category: 'support',
    display_order: 8
  },
  {
    id: '9',
    question: 'Do you help with SEO?',
    answer: 'Yes! All our websites are built with SEO best practices, including fast loading, proper structure, and mobile optimization. We also offer SEO audits.',
    category: 'services',
    display_order: 9
  },
  {
    id: '10',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and PayPal. Payment is split into two parts: $160 to start and the remaining balance on delivery.',
    category: 'pricing',
    display_order: 10
  }
];

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchFaqs();
  }, []);

  useEffect(() => {
    filterFaqs();
  }, [searchTerm, selectedCategory, faqs]);

  const fetchFaqs = async () => {
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('faqs')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) throw error;
        if (data && data.length > 0) {
          setFaqs(data);
          setFilteredFaqs(data);
          setLoading(false);
          return;
        }
      }

      setFaqs(fallbackFaqs);
      setFilteredFaqs(fallbackFaqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setFaqs(fallbackFaqs);
      setFilteredFaqs(fallbackFaqs);
    } finally {
      setLoading(false);
    }
  };

  const filterFaqs = () => {
    let filtered = faqs;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search)
      );
    }

    setFilteredFaqs(filtered);
  };

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'process', label: 'Process' },
    { value: 'services', label: 'Services' },
    { value: 'technical', label: 'Technical' },
    { value: 'support', label: 'Support' },
    { value: 'legal', label: 'Legal' },
    { value: 'general', label: 'General' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F1115' }}>
        <div className="text-lg" style={{ color: '#9AA0A6' }}>Loading FAQs...</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="FAQ"
        description="Script Pilot frequently asked questions. Learn about pricing, process, timeline, and services for professional web development."
        path="/faq"
      />
      <div className="min-h-screen" style={{ backgroundColor: '#0F1115' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F5F7FA' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#9AA0A6' }}>
              Everything you need to know about working with us. Can't find what you're looking for? Just ask our chatbot or reach out directly.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#9AA0A6' }} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none"
                style={{
                  backgroundColor: '#161A22',
                  border: '1px solid #2A2F3A',
                  color: '#F5F7FA',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#5B6CFF'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#2A2F3A'}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: selectedCategory === category.value ? '#5B6CFF' : '#161A22',
                    color: selectedCategory === category.value ? '#F5F7FA' : '#9AA0A6',
                    border: selectedCategory === category.value ? 'none' : '1px solid #2A2F3A'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {filteredFaqs.length === 0 ? (
            <motion.div
              className="text-center py-12 rounded-lg"
              style={{ backgroundColor: '#161A22', border: '1px solid #2A2F3A' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p style={{ color: '#9AA0A6' }}>No questions found matching your search.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="rounded-lg overflow-hidden transition-all"
                  style={{
                    backgroundColor: '#161A22',
                    border: '1px solid #2A2F3A'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ borderColor: '#5B6CFF' }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A1F2B'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span className="text-lg font-semibold flex-1" style={{ color: '#F5F7FA' }}>
                      {faq.question}
                    </span>
                    {openItems.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#5B6CFF' }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#9AA0A6' }} />
                    )}
                  </button>

                  {openItems.has(faq.id) && (
                    <motion.div
                      className="px-6 pb-5 leading-relaxed"
                      style={{ color: '#9AA0A6' }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="mt-12 text-center rounded-lg p-8"
            style={{
              backgroundColor: '#161A22',
              border: '1px solid #2A2F3A'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#F5F7FA' }}>
              Still have questions?
            </h2>
            <p className="mb-6" style={{ color: '#9AA0A6' }}>
              Try our chatbot in the bottom right corner for instant answers, or schedule a call to discuss your project.
            </p>
            <motion.div style={{ display: 'inline-block' }}>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors"
                style={{
                  backgroundColor: '#5B6CFF',
                  color: '#F5F7FA',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A5AE8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5B6CFF'}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
