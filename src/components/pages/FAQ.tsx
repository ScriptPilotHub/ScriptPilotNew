import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-lg text-slate-600">Loading FAQs...</div>
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about working with us. Can't find what you're looking for? Just ask our chatbot or reach out directly.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-slate-600">No questions found matching your search.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 flex-1">
                    {faq.question}
                  </span>
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                {openItems.has(faq.id) && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Still have questions?</h2>
          <p className="text-slate-600 mb-6">
            Try our chatbot in the bottom right corner for instant answers, or schedule a call to discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
