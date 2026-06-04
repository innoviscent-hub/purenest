import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', type = 'website', schema }) {
  const siteUrl = 'https://www.purenestcleaning.co.nz';
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | PureNest Cleaning`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "PureNest Cleaning",
        "url": siteUrl
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        "name": "PureNest Cleaning",
        "url": siteUrl,
        "address": {
          "@type": "PostalAddress",
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
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
