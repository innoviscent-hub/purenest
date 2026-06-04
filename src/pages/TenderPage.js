import React from 'react';
import SEO from '../components/SEO';
import { tenderDetails, evaluationCriteria, projectHistory } from '../models/dataModel';

const TenderPage = () => {
  const detailEntries = Object.entries(tenderDetails).map(([k, v]) => ({
    label: k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()),
    value: v,
  }));

  return (
    <div className="fade-in">
      <SEO 
        title="Completed Projects" 
        description="A track record of delivering excellence for corporate, educational, and hospitality clients across New Zealand." 
        path="/projects" 
      />

      <header style={{
        paddingTop: 'calc(var(--navbar-height, 90px) + clamp(3.5rem, 8vw, 5.5rem))',
        paddingBottom: '4rem',
        background: 'linear-gradient(160deg, #001a0e 0%, #003520 55%, #005228 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.45rem 1.2rem',
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#dfc074',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1.5rem',
          }}>
            Experience
          </span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            Completed Projects
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto' }}>
            A track record of delivering excellence for corporate, educational, and hospitality clients across New Zealand.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
      </header>

      {/* Main Content */}
      <section style={{ background: '#f8faf8', padding: '5rem 0' }}>
        <div className="container">

          {/* Project History */}
          <div style={{ marginBottom: '4rem' }}>

            
            <div className="table-wrapper" style={{ background: 'white', borderRadius: '24px', border: '1px solid rgba(0,104,55,0.1)', overflowX: 'auto' }}>
              <table className="projects-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #002818, #005228)', color: 'white', textAlign: 'left' }}>
                    <th style={{ padding: '1.25rem 1.5rem', fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Project Name</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Client</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Service Type</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Duration</th>
                    <th style={{ padding: '1.25rem 1.5rem', fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Period</th>
                  </tr>
                </thead>
                <tbody>
                  {(projectHistory || []).map((project, i, arr) => (
                    <tr 
                      key={project.id} 
                      style={{ 
                        borderBottom: i < arr.length - 1 ? '1px solid rgba(0,104,55,0.07)' : 'none',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,104,55,0.03)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <td data-label="Project Name" style={{ padding: '1.1rem 1.5rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#002818' }}>{project.name}</td>
                      <td data-label="Client" style={{ padding: '1.1rem 1.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#5a7060' }}>{project.client}</td>
                      <td data-label="Service Type" style={{ padding: '1.1rem 1.5rem' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {project.service.split('+').map((s, idx) => (
                            <span key={idx} style={{ 
                              padding: '0.25rem 0.75rem', 
                              background: '#f0fdf4', 
                              border: '1px solid rgba(0,104,55,0.15)', 
                              borderRadius: '50px', 
                              fontSize: '0.72rem', 
                              color: '#006837', 
                              fontWeight: 700,
                              whiteSpace: 'nowrap',
                              fontFamily: 'Sora, sans-serif'
                            }}>
                              {s.trim()}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td data-label="Duration" style={{ padding: '1.1rem 1.5rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#006837' }}>{project.duration}</td>
                      <td data-label="Period" style={{ padding: '1.1rem 1.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#5a7060' }}>{project.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Penalty & Compliance */}


        </div>
      </section>
    </div>
  );
};

export default TenderPage;
