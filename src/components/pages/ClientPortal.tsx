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
    <div style={{ backgroundColor: '#0A0A0A' }}>
      <section className="px-6 md:px-8 py-40 md:py-56" style={{
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.15
        }} />

        <div
          className="max-w-6xl mx-auto relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="max-w-4xl">
            <div className="text-xs font-bold tracking-wider mb-10" style={{ color: '#606060' }}>
              CLIENT PORTAL
            </div>

            <h1
              className="mb-10 leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 0.95,
                letterSpacing: '-0.02em'
              }}
            >
              Payment portal
            </h1>

            <p className="text-xl md:text-2xl mb-14 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Secure payment processing. Choose your service below.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-28 md:py-40" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Payment options
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-1">
            <a
              href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-10 md:p-12 no-underline block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#606060' }}>
                START
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                $160
              </div>
              <p className="text-lg mb-12" style={{ color: '#808080', lineHeight: 1.6 }}>
                Strategy and planning
              </p>
              <div className="text-base font-semibold inline-flex items-center gap-2" style={{
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                Begin project →
              </div>
            </a>

            <a
              href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-10 md:p-12 no-underline block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#999999' }}>
                LAUNCH
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                $540
              </div>
              <p className="text-lg mb-12" style={{ color: '#CCCCCC', lineHeight: 1.6 }}>
                Due at completion
              </p>
              <div className="text-base font-semibold inline-flex items-center gap-2" style={{
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                Payment link →
              </div>
            </a>

            <a
              href="https://buy.stripe.com/cNibJ2drCauM0qz7cP9EI09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-10 md:p-12 no-underline block"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#606060' }}>
                MAINTAIN
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                $150
              </div>
              <p className="text-lg mb-12" style={{ color: '#808080', lineHeight: 1.6 }}>
                Monthly maintenance
              </p>
              <div className="text-base font-semibold inline-flex items-center gap-2" style={{
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                Subscribe →
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-28 md:py-40" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Secure payments
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-4xl mx-auto">
            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                SSL Encrypted
              </h3>
              <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                Bank-level security
              </p>
            </div>

            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                Stripe Powered
              </h3>
              <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                Trusted globally
              </p>
            </div>

            <div className="text-center" style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                Instant Confirmation
              </h3>
              <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                Email updates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Need help?
          </h2>

          <div className="flex flex-col items-center gap-8">
            <a
              href="mailto:contact@scriptpilot.us"
              className="text-xl md:text-2xl font-semibold no-underline"
              style={{
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#999999';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              contact@scriptpilot.us
            </a>

            <a
              href="tel:4174010015"
              className="text-xl md:text-2xl font-semibold no-underline"
              style={{
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#999999';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              (417) 401-0015
            </a>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-9 py-4 no-underline inline-block mt-4"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid transparent',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
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
