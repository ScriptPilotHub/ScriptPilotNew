import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface PricingOption {
  id: string;
  label: string;
  price: number;
  description: string;
}

const options: PricingOption[] = [
  { id: 'ecommerce', label: 'E-commerce Features', price: 200, description: 'Product catalog, shopping cart, checkout flow' },
  { id: 'blog', label: 'Blog / CMS', price: 150, description: 'Content management system with blog functionality' },
  { id: 'animations', label: 'Custom Animations', price: 100, description: 'Advanced micro-interactions and transitions' },
  { id: 'pages', label: 'Extra Pages (5+)', price: 100, description: 'Additional pages beyond standard 5-page site' },
  { id: 'forms', label: 'Advanced Contact Forms', price: 75, description: 'Multi-step forms with validation and integrations' },
  { id: 'social', label: 'Social Media Integration', price: 50, description: 'Social feeds, share buttons, and automation' },
];

export const PricingCalculator = () => {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const basePrice = 700;

  useEffect(() => {
    const saved = localStorage.getItem('pricingCalculatorSelections');
    if (saved) {
      setSelectedOptions(new Set(JSON.parse(saved)));
    }
  }, []);

  const toggleOption = (id: string) => {
    const newSelections = new Set(selectedOptions);
    if (newSelections.has(id)) {
      newSelections.delete(id);
    } else {
      newSelections.add(id);
    }
    setSelectedOptions(newSelections);
    localStorage.setItem('pricingCalculatorSelections', JSON.stringify(Array.from(newSelections)));
  };

  const totalPrice = basePrice + Array.from(selectedOptions).reduce((sum, id) => {
    const option = options.find(o => o.id === id);
    return sum + (option?.price || 0);
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: '#161A22',
        padding: '40px',
        border: '1px solid #2A2F3A',
        marginTop: '48px',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#F5F7FA',
          marginBottom: '8px',
          letterSpacing: '-0.01em'
        }}>
          Project Calculator
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#9AA0A6',
          lineHeight: 1.6
        }}>
          Customize your project scope and see the estimated cost
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {options.map((option) => {
          const isSelected = selectedOptions.has(option.id);
          return (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: '20px',
                backgroundColor: isSelected ? '#1F2430' : '#0F1115',
                border: `2px solid ${isSelected ? '#5B6CFF' : '#2A2F3A'}`,
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onClick={() => toggleOption(option.id)}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    gap: '8px'
                  }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleOption(option.id)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        accentColor: '#5B6CFF',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <label style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#F5F7FA',
                      cursor: 'pointer',
                    }}>
                      {option.label}
                    </label>
                    <button
                      onMouseEnter={() => setShowTooltip(option.id)}
                      onMouseLeave={() => setShowTooltip(null)}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'help',
                        padding: '2px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Info size={16} color="#9AA0A6" />
                    </button>
                  </div>
                  <AnimatePresence>
                    {showTooltip === option.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          fontSize: '13px',
                          color: '#9AA0A6',
                          lineHeight: 1.5,
                          marginTop: '8px',
                          paddingTop: '8px',
                          borderTop: '1px solid #2A2F3A',
                        }}
                      >
                        {option.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#5B6CFF',
                  marginLeft: '16px'
                }}>
                  +${option.price}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        layout
        style={{
          padding: '32px',
          backgroundColor: '#0F1115',
          border: '2px solid #5B6CFF',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{
              fontSize: '13px',
              letterSpacing: '0.05em',
              color: '#9AA0A6',
              marginBottom: '8px'
            }}>
              ESTIMATED TOTAL
            </div>
            <motion.div
              key={totalPrice}
              initial={{ scale: 1.1, color: '#7B8CFF' }}
              animate={{ scale: 1, color: '#5B6CFF' }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: '48px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              ${totalPrice}
            </motion.div>
            <div style={{
              fontSize: '12px',
              color: '#9AA0A6',
              marginTop: '4px'
            }}>
              Base price: ${basePrice} {selectedOptions.size > 0 && `+ $${totalPrice - basePrice} in add-ons`}
            </div>
          </div>
          <div>
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: '#F5F7FA',
                backgroundColor: '#5B6CFF',
                padding: '16px 32px',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4A5AE8';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5B6CFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              GET STARTED
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
