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
    answer: 'Our websites start at $700 total, with $160 to start and $540 on delivery. This covers everything: design, development, hosting setup, and launch. Monthly maintenance is optional at $150/month.',
    keywords: ['price', 'cost', 'payment', 'how much', 'expensive', 'cheap', 'budget', '$', 'dollar', 'money', 'affordable']
  },
  {
    id: '2',
    question: 'How long does it take to build a website?',
    answer: 'Most projects take 1-4 weeks from start to launch, depending on complexity. Simple business sites typically take 1-2 weeks, while e-commerce stores may take 3-4 weeks.',
    keywords: ['time', 'duration', 'how long', 'timeline', 'schedule', 'when', 'weeks', 'days', 'fast', 'quick']
  },
  {
    id: '3',
    question: 'Do you offer payment plans?',
    answer: 'Yes! We split payments into two parts: $160 to start your project, and the remaining $540 when we deliver your completed website. This makes it easier to get started.',
    keywords: ['payment plan', 'installment', 'split', 'pay', 'financing', 'deposit', 'upfront']
  },
  {
    id: '4',
    question: 'Can I update the website myself?',
    answer: 'Yes! We can build your site with a content management system that makes it easy to update text and images without technical knowledge. Or you can choose our maintenance plan where we handle all updates for you.',
    keywords: ['update', 'edit', 'change', 'modify', 'cms', 'content', 'myself', 'manage']
  },
  {
    id: '5',
    question: 'What is included in the maintenance plan?',
    answer: 'Our $150/month maintenance plan includes unlimited edits, 24/7 hosting, security updates, regular backups, and priority support. You can request changes anytime and we handle everything.',
    keywords: ['maintenance', 'hosting', 'support', 'updates', 'monthly', 'ongoing', 'care']
  },
  {
    id: '6',
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. Your site will look great on any screen size.',
    keywords: ['mobile', 'responsive', 'phone', 'tablet', 'device', 'smartphone', 'iphone', 'android']
  },
  {
    id: '7',
    question: 'Do you help with SEO?',
    answer: 'Yes! All our websites are built with SEO best practices, including fast loading, proper structure, and mobile optimization. We also offer SEO audits to help improve your search rankings.',
    keywords: ['seo', 'google', 'search', 'ranking', 'optimization', 'traffic', 'visibility', 'found']
  },
  {
    id: '8',
    question: 'What do I need to provide?',
    answer: 'We need your branding materials (logo, colors), content (text, images), and any specific features you want. Don\'t worry if you don\'t have everything ready - we can help create content too!',
    keywords: ['need', 'provide', 'required', 'logo', 'content', 'images', 'text', 'branding']
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
        "Hi! I'm here to help answer your questions about our web design services. Try asking me about pricing, timelines, or anything else you'd like to know."
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
        "I'm not sure about that specific question, but I'd love to help! You can browse our FAQ page for more details, or reach out directly and we'll get back to you right away. Feel free to ask me something else too!",
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
    'How long does it take?',
    'Do you offer payment plans?',
    'Can I update it myself?'
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
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-slate-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat Assistant</h3>
                <p className="text-xs text-blue-100">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-800 p-3 rounded-lg rounded-bl-none shadow-sm border border-slate-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-slate-500 text-center mb-2">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left text-sm p-3 bg-white hover:bg-blue-50 rounded-lg border border-slate-200 transition-colors text-slate-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
