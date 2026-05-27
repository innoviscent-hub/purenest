import React from 'react';
import { tenderDetails, evaluationCriteria } from '../models/dataModel';

const TenderSection = () => {
  return (
    <section id="tender" className="section-padding" style={{
      background: 'white',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, #006837 0%, #c9a84c 50%, #006837 100%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-200px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,104,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-header fade-in">
          <span className="label-badge">Opportunities</span>
          <div className="divider-gold" />
          <h2 style={{ color: '#002818' }}>Institutional Excellence</h2>
          <p>
            We specialize in meeting the rigorous technical and operational requirements
            of institutional and corporate facility management in Auckland.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: '#5a7060', maxWidth: '600px', margin: '0 auto' }}>
            Our commitment to precision, security, and aesthetic perfection ensures that every facility we manage meets the highest international standards of care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TenderSection;
