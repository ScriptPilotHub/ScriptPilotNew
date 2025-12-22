import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

const fallbackFaqs: FAQ[] = [
  {
    id: '1',
    question: 'How much does a website cost?',
    answer: '$700 total. We split it into two payments: $160 to start your project, and $540 when we deliver your completed website. This covers everything - design, development, SEO setup, and 30 days of support. No hidden fees.',
    keywords: ['price', 'cost', 'payment', 'how much', 'expensive', 'cheap', 'budget', '$', 'dollar', 'money', 'affordable', 'fee', 'charge']
  },
  {
    id: '2',
    question: 'How long does it take to build a website?',
    answer: 'Most projects take 1-4 weeks from start to launch. Simple business sites typically take 1-2 weeks, while e-commerce stores may take 3-4 weeks. We give you regular progress updates throughout.',
    keywords: ['time', 'duration', 'how long', 'timeline', 'schedule', 'when', 'weeks', 'days', 'fast', 'quick', 'deliver', 'ready']
  },
  {
    id: '3',
    question: 'What services do you offer?',
    answer: 'We build complete websites for $700 - whether you need a business site, e-commerce store, or both. We handle the whole deal from start to finish. We also offer free demos (see your site before committing), free site audits (performance and SEO analysis), and optional monthly maintenance ($150/month).',
    keywords: ['services', 'offer', 'provide', 'what do you', 'build', 'make', 'do', 'types', 'options', 'ecommerce', 'store', 'shop']
  },
  {
    id: '4',
    question: 'What is your process?',
    answer: 'Four simple steps: 1) Discovery call (30 min to discuss your needs), 2) Strategy & approval (we create a plan for you to review), 3) Build & review (we build your site with progress updates), 4) Launch & handoff (site goes live with full training and support).',
    keywords: ['process', 'how it works', 'steps', 'workflow', 'procedure', 'method', 'approach', 'start', 'begin', 'getting started']
  },
  {
    id: '5',
    question: 'What is included in the maintenance plan?',
    answer: 'Our $150/month maintenance plan includes: managed hosting, unlimited content updates, security updates, daily backups, uptime monitoring, and priority support. You can request changes anytime and we handle everything.',
    keywords: ['maintenance', 'hosting', 'support', 'updates', 'monthly', 'ongoing', 'care', 'manage', 'upkeep', 'included']
  },
  {
    id: '6',
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely! Every website we build is fully responsive and optimized for mobile devices, tablets, and desktops. Your site will look professional and load fast on any screen size.',
    keywords: ['mobile', 'responsive', 'phone', 'tablet', 'device', 'smartphone', 'iphone', 'android', 'screen']
  },
  {
    id: '7',
    question: 'Do you help with SEO?',
    answer: 'Yes! All our websites include SEO setup: fast loading speeds (under 2 seconds), proper site structure, mobile optimization, and clean code. We also offer free site audits to analyze your current SEO performance.',
    keywords: ['seo', 'google', 'search', 'ranking', 'optimization', 'traffic', 'visibility', 'found', 'search engine']
  },
  {
    id: '8',
    question: 'Can I update the website myself?',
    answer: 'Yes! We can build your site with a content management system that makes it easy to update text and images yourself. Or choose our maintenance plan where we handle all updates for you - whichever you prefer.',
    keywords: ['update', 'edit', 'change', 'modify', 'cms', 'content', 'myself', 'manage', 'own']
  },
  {
    id: '9',
    question: 'Do I own the website?',
    answer: 'Yes, 100%! You own everything - the code, design, content, and domain. No platform lock-in. No recurring fees unless you want maintenance. You can take your site anywhere, switch hosts anytime.',
    keywords: ['own', 'ownership', 'mine', 'rights', 'license', 'transfer', 'keep', 'property']
  },
  {
    id: '10',
    question: 'Where are you located?',
    answer: 'We are based in Missouri but serve clients nationwide. All communication happens remotely via video calls, email, and project management tools. Location does not matter - we make the process seamless.',
    keywords: ['location', 'where', 'based', 'local', 'area', 'missouri', 'nationwide', 'remote', 'state']
  },
  {
    id: '11',
    question: 'What do I need to provide?',
    answer: 'We need your branding materials (logo, colors), content (text, images), and ideas for features you want. If you do not have everything ready, no problem - we can help you create content and make recommendations.',
    keywords: ['need', 'provide', 'required', 'logo', 'content', 'images', 'text', 'branding', 'materials', 'supply']
  },
  {
    id: '12',
    question: 'Do you use templates or page builders?',
    answer: 'No. We build everything custom with clean code. No templates, no page builders like WordPress, Wix, or Squarespace. This means your site loads faster, ranks better in search, and gives you complete control.',
    keywords: ['template', 'wordpress', 'wix', 'squarespace', 'builder', 'platform', 'custom', 'code', 'from scratch']
  },
  {
    id: '13',
    question: 'What if I need revisions?',
    answer: 'You get unlimited revisions during the build phase. We send you progress updates and review links, you request changes, and we iterate until you are completely satisfied. We do not launch until you are 100% happy.',
    keywords: ['revisions', 'changes', 'edits', 'modifications', 'unlimited', 'redo', 'fix', 'adjust']
  },
  {
    id: '14',
    question: 'Can you build an e-commerce store?',
    answer: 'Yes! For $700 we build complete e-commerce solutions from start to finish: product catalog, shopping cart, secure payment processing with Stripe, inventory management, order tracking, and customer accounts. We can also combine e-commerce with your business site - all for the same price.',
    keywords: ['ecommerce', 'e-commerce', 'store', 'shop', 'sell', 'products', 'payment', 'stripe', 'cart', 'online store']
  },
  {
    id: '15',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes! If we do not deliver what we promised, you get your money back. We also offer free demos so you can see a working version of your site before fully committing. No risk.',
    keywords: ['guarantee', 'refund', 'money back', 'risk', 'safe', 'secure', 'promise', 'warranty']
  },
  {
    id: '16',
    question: 'How do I get started?',
    answer: 'Book a free 30-minute discovery call at calendly.com/contact-scriptpilot/30min or email us at contact@scriptpilot.us. We will discuss your business, goals, and see if we are a good fit. No pressure, no sales pitch.',
    keywords: ['start', 'begin', 'contact', 'get started', 'book', 'call', 'meeting', 'consultation', 'first step', 'reach out']
  },
  {
    id: '17',
    question: 'What makes you different from other web designers?',
    answer: 'We focus on revenue, not decoration. No bloated WordPress sites. No expensive monthly subscriptions. Just fast, clean websites built to convert visitors into paying customers. $700 flat rate. 1-4 weeks delivery. You own everything.',
    keywords: ['different', 'why', 'better', 'unique', 'compare', 'versus', 'stand out', 'special']
  },
  {
    id: '18',
    question: 'Do you offer free demos?',
    answer: 'Yes! We can build a working demo of your site before you commit to the full project. This lets you see exactly what you will get - no obligation, no risk. It is a great way to test our work first.',
    keywords: ['demo', 'preview', 'sample', 'example', 'test', 'try', 'free', 'mockup', 'prototype']
  },
  {
    id: '19',
    question: 'Do you offer site audits?',
    answer: 'Yes, and they are free! We provide a detailed analysis of your current website including: performance testing, SEO evaluation, security scan, usability review, and a prioritized action plan for improvements.',
    keywords: ['audit', 'analysis', 'review', 'check', 'evaluate', 'assess', 'existing site', 'current website']
  },
  {
    id: '20',
    question: 'What happens after the 30-day support period?',
    answer: 'After 30 days, you can continue managing the site yourself, or sign up for our maintenance plan ($150/month) for ongoing support, hosting, updates, and unlimited edits. It is completely optional.',
    keywords: ['after', 'support', '30 days', 'ongoing', 'continued', 'later', 'future']
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hi! I'm here to help answer your questions about ScriptPilot's web design services. We build professional websites for $700 flat rate, delivered in 1-4 weeks. Ask me anything!"
      );
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchFaqs = async () => {
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('faqs')
          .select('id, question, answer, keywords');

        if (error) throw error;
        if (data && data.length > 0) {
          setFaqs(data);
          return;
        }
      }

      setFaqs(fallbackFaqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setFaqs(fallbackFaqs);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string, delay = 0) => {
    setTimeout(() => {
      setIsTyping(false);
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase();
    const words = input.split(/\s+/).filter(word => word.length > 2);

    let bestMatch: FAQ | null = null;
    let highestScore = 0;

    for (const faq of faqs) {
      let score = 0;

      if (faq.keywords && Array.isArray(faq.keywords)) {
        for (const keyword of faq.keywords) {
          if (input.includes(keyword.toLowerCase())) {
            score += 2;
          }
        }
      }

      for (const word of words) {
        if (faq.question.toLowerCase().includes(word)) {
          score += 1;
        }
        if (faq.answer.toLowerCase().includes(word)) {
          score += 0.5;
        }
      }

      if (score > highestScore && score > 1) {
        highestScore = score;
        bestMatch = faq;
      }
    }

    return bestMatch;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const match = findBestMatch(inputValue);

    if (match) {
      addBotMessage(match.answer, 1000);
    } else {
      addBotMessage(
        "I'm not sure about that specific question, but I'd love to help! You can book a free call at calendly.com/contact-scriptpilot/30min or check our FAQ page for more details. Feel free to ask me something else too!",
        1000
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'How much does a website cost?',
    'What services do you offer?',
    'How long does it take?',
    'How do I get started?'
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#5B6CFF',
            color: '#F5F7FA',
            padding: '16px',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 10px 25px rgba(91, 108, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s',
            zIndex: 50
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4A5AE8';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5B6CFF';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] flex flex-col z-50" style={{
          backgroundColor: '#0F1115',
          border: '1px solid #2A2F3A',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            backgroundColor: '#5B6CFF',
            color: '#F5F7FA',
            padding: '16px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: '#4A5AE8',
                padding: '8px',
                borderRadius: '50%'
              }}>
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 style={{ fontWeight: 600, fontSize: '15px' }}>ScriptPilot Assistant</h3>
                <p style={{ fontSize: '12px', color: '#E0E5FF' }}>Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#F5F7FA',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A5AE8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            backgroundColor: '#161A22'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      padding: '12px',
                      borderRadius: '8px',
                      backgroundColor: message.sender === 'user' ? '#5B6CFF' : '#0F1115',
                      color: '#F5F7FA',
                      border: message.sender === 'bot' ? '1px solid #2A2F3A' : 'none',
                      borderBottomRightRadius: message.sender === 'user' ? '2px' : '8px',
                      borderBottomLeftRadius: message.sender === 'bot' ? '2px' : '8px'
                    }}
                  >
                    <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    borderBottomLeftRadius: '2px',
                    backgroundColor: '#0F1115',
                    border: '1px solid #2A2F3A'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9AA0A6', animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9AA0A6', animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9AA0A6', animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ fontSize: '12px', color: '#9AA0A6', textAlign: 'center', marginBottom: '8px' }}>Quick questions:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        fontSize: '14px',
                        padding: '12px',
                        backgroundColor: '#0F1115',
                        color: '#F5F7FA',
                        border: '1px solid #2A2F3A',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1A1E28';
                        e.currentTarget.style.borderColor = '#5B6CFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0F1115';
                        e.currentTarget.style.borderColor = '#2A2F3A';
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div ref={messagesEndRef} />
          </div>

          <div style={{
            padding: '16px',
            borderTop: '1px solid #2A2F3A',
            backgroundColor: '#0F1115',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  backgroundColor: '#161A22',
                  color: '#F5F7FA',
                  border: '1px solid #2A2F3A',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#5B6CFF'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#2A2F3A'}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                style={{
                  backgroundColor: inputValue.trim() ? '#5B6CFF' : '#2A2F3A',
                  color: '#F5F7FA',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  transition: 'background-color 0.2s',
                  opacity: inputValue.trim() ? 1 : 0.5
                }}
                onMouseEnter={(e) => {
                  if (inputValue.trim()) {
                    e.currentTarget.style.backgroundColor = '#4A5AE8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (inputValue.trim()) {
                    e.currentTarget.style.backgroundColor = '#5B6CFF';
                  }
                }}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
