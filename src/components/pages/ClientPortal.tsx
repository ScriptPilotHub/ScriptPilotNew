import React, { useEffect, useState } from 'react';

interface ClientPortalProps {
  navigateTo: (page: string) => void;
}

export const ClientPortal: React.FC<ClientPortalProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <section className="min-h-screen flex items-center px-4 md:px-6" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
      }}>
        <div
          className="max-w-7xl mx-auto w-full py-20 md:py-32"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div className="max-w-5xl">
            <div className="text-xs font-light tracking-widest mb-8 md:mb-12 opacity-60" style={{ color: '#475569' }}>
              CLIENT PORTAL
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter mb-8 md:mb-12 leading-none" style={{
              color: '#1E293B'
            }}>
              Payment
              <br />
              portal
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-extralight mb-12 md:mb-20 max-w-2xl leading-tight" style={{
              color: '#475569'
            }}>
              Secure payment processing.
              <br />
              Choose your service below.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#475569' }}>
              PAYMENTS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight" style={{ color: '#1E293B' }}>
              Options
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-1">
            <a
              href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 md:p-16 border no-underline block"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: '#E5E7EB',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-xs font-light tracking-widest mb-8 md:mb-12 opacity-60" style={{ color: '#475569' }}>
                START
              </div>
              <div className="text-5xl md:text-7xl font-extralight mb-4 md:mb-6" style={{ color: '#1E293B' }}>
                $160
              </div>
              <p className="text-lg md:text-xl font-extralight mb-12 md:mb-16" style={{ color: '#475569' }}>
                Strategy and planning
              </p>
              <div className="text-base md:text-lg font-light border-b-2 inline-block" style={{
                color: '#1E293B',
                borderColor: '#1E293B',
                transition: 'all 0.3s ease'
              }}>
                Begin project →
              </div>
            </a>

            <a
              href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 md:p-16 border no-underline block"
              style={{
                backgroundColor: '#1E293B',
                borderColor: '#475569',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-xs font-light tracking-widest mb-8 md:mb-12 opacity-60" style={{ color: '#CBD5E1' }}>
                LAUNCH
              </div>
              <div className="text-5xl md:text-7xl font-extralight mb-4 md:mb-6" style={{ color: '#F8FAFC' }}>
                $540
              </div>
              <p className="text-lg md:text-xl font-extralight mb-12 md:mb-16" style={{ color: '#CBD5E1' }}>
                Due at completion
              </p>
              <div className="text-base md:text-lg font-light border-b-2 inline-block" style={{
                color: '#F8FAFC',
                borderColor: '#F8FAFC',
                transition: 'all 0.3s ease'
              }}>
                Payment link →
              </div>
            </a>

            <a
              href="https://buy.stripe.com/cNibJ2drCauM0qz7cP9EI09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 md:p-16 border no-underline block"
              style={{
                backgroundColor: '#F8FAFC',
                borderColor: '#E5E7EB',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-xs font-light tracking-widest mb-8 md:mb-12 opacity-60" style={{ color: '#475569' }}>
                MAINTAIN
              </div>
              <div className="text-5xl md:text-7xl font-extralight mb-4 md:mb-6" style={{ color: '#1E293B' }}>
                $150
              </div>
              <p className="text-lg md:text-xl font-extralight mb-12 md:mb-16" style={{ color: '#475569' }}>
                Monthly maintenance
              </p>
              <div className="text-base md:text-lg font-light border-b-2 inline-block" style={{
                color: '#1E293B',
                borderColor: '#1E293B',
                transition: 'all 0.3s ease'
              }}>
                Subscribe →
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16 md:mb-32">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              SECURITY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight" style={{ color: '#F8FAFC' }}>
              Secure payments
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto">
            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4" style={{ color: '#F8FAFC' }}>
                SSL Encrypted
              </h3>
              <p className="text-base md:text-lg font-extralight" style={{ color: '#CBD5E1' }}>
                Bank-level security
              </p>
            </div>

            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4" style={{ color: '#F8FAFC' }}>
                Stripe Powered
              </h3>
              <p className="text-base md:text-lg font-extralight" style={{ color: '#CBD5E1' }}>
                Trusted globally
              </p>
            </div>

            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4" style={{ color: '#F8FAFC' }}>
                Instant Confirmation
              </h3>
              <p className="text-base md:text-lg font-extralight" style={{ color: '#CBD5E1' }}>
                Email updates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight mb-12 md:mb-16" style={{ color: '#1E293B' }}>
            Need help?
          </h2>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            <a
              href="mailto:contact@scriptpilot.us"
              className="text-xl sm:text-2xl md:text-3xl font-light no-underline"
              style={{
                color: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.color = '#475569';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#1E293B';
              }}
            >
              contact@scriptpilot.us
            </a>

            <a
              href="tel:4174010015"
              className="text-xl sm:text-2xl md:text-3xl font-light no-underline"
              style={{
                color: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.color = '#475569';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#1E293B';
              }}
            >
              (417) 401-0015
            </a>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl md:text-3xl font-light border-b-2 no-underline"
              style={{
                color: '#1E293B',
                borderColor: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px) scale(1.05)';
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Book consultation →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
