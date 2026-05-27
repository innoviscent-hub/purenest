import React from 'react';
import ContactForm from '../components/ContactForm';
import { company } from '../models/dataModel';

const contactItems = [
  { icon: '📍', label: 'Global Headquarters', value: company.address, sub: 'Auckland CBD, NZ' },
  { icon: '📞', label: 'Direct Line', value: company.phone, sub: 'Available Mon-Fri, 8am-6pm' },
  { icon: '✉️', label: 'Email Support', value: company.email, sub: 'Inquiries & Proposals' },
  { icon: '🕒', label: 'Response Time', value: 'Within 24 Hours', sub: 'Guaranteed turnaround' },
];

const ContactPage = () => {
  return (
    <div className="fade-in" style={{ background: '#ffffff' }}>

      {/* Hero Section */}
      <header className="hero-header" style={{ paddingTop: 'calc(var(--navbar-height, 90px) + clamp(5.5rem, 10vw, 7.5rem))', paddingBottom: '8rem' }}>
        <div style={{
          position: 'absolute', inset: 0,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-badge label-badge-gold" style={{ marginBottom: '2rem', animation: 'fadeIn 1s ease-out' }}>
            Get in Touch
          </span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Let's Start a <span style={{ color: '#dfc074' }}>Conversation</span>
          </h1>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '1.25rem', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Professional facility management and cleaning solutions tailored to your institution's specific needs.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section style={{ 
        background: '#f8faf8', 
        padding: 'clamp(4rem, 10vw, 8rem) 0 clamp(6rem, 12vw, 10rem)', 
        position: 'relative' 
      }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }}>
            
            {/* Left Column: Info */}
            <div className="fade-in">
              <div style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  color: '#002818',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                  wordBreak: 'break-word'
                }}>
                  Auckland Office
                </h2>
                <p style={{ color: '#5a7060', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.8, maxWidth: '100%' }}>
                  Our headquarters is located in the heart of Auckland. We welcome scheduled visits and are always ready to discuss new partnerships or existing service contracts.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1.25rem', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    background: 'white',
                    borderRadius: '20px',
                    border: '1px solid rgba(0,104,55,0.06)',
                    boxShadow: '0 4px 12px rgba(0,40,24,0.02)',
                    transition: 'all 0.3s var(--ease-out)',
                    width: '100%',
                    overflow: 'hidden'
                  }}
                    onMouseOver={(e) => {
                      if (window.innerWidth > 768) {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,40,24,0.06)';
                        e.currentTarget.style.borderColor = 'rgba(0,104,55,0.15)';
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,40,24,0.02)';
                      e.currentTarget.style.borderColor = 'rgba(0,104,55,0.06)';
                    }}
                  >
                    <div style={{
                      width: '44px', height: '44px',
                      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#006837',
                        marginBottom: '4px',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                        color: '#002818',
                        fontWeight: 600,
                        marginBottom: '2px',
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#5a7060', fontWeight: 400 }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Card */}
              <div style={{
                background: 'linear-gradient(135deg, #002818 0%, #004d2a 100%)',
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,40,24,0.2)'
              }}>
                <div style={{ 
                  position: 'absolute', top: '-20%', right: '-10%', width: '150px', height: '150px', 
                  background: 'rgba(255,255,255,0.03)', borderRadius: '50%' 
                }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', 
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <span style={{ fontSize: '1rem' }}>🔒</span>
                  </div>
                  <h4 style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1rem',
                    color: 'white',
                    fontWeight: 700,
                    margin: 0,
                  }}>
                    Secure & Confidential
                  </h4>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  Your privacy is our priority. All communications are strictly confidential and protected by New Zealand's highest data protection standards.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ 
              position: window.innerWidth > 1024 ? 'sticky' : 'relative', 
              top: window.innerWidth > 1024 ? '100px' : '0' 
            }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

