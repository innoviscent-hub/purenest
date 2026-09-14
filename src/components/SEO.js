import React from 'react';
import { Helmet } from 'react-helmet-async';
import { company } from '../models/dataModel';

export default function SEO({ title, description, path = '', type = 'website', schema, image = '/logo-icon.png' }) {
  const siteUrl = 'https://purenestcleaning.co.nz';
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const fullTitle = `${title} | PureNest Cleaning`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "PureNest Cleaning",
        "url": siteUrl,
        "logo": `${siteUrl}/logo-icon.png`,
        "email": company.email,
        "telephone": company.phone
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        "name": "PureNest Cleaning",
        "url": siteUrl,
        "image": `${siteUrl}/logo-icon.png`,
        "telephone": company.phone,
        "email": company.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "89-92 Victoria Street West",
          "addressLocality": "Auckland CBD",
          "addressRegion": "Auckland",
          "postalCode": "1010",
          "addressCountry": "NZ"
        }
      }
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="PureNest Cleaning" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
