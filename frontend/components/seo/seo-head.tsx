import React from 'react';
import { NextSeo } from 'next-seo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'article',
  twitterCard = 'summary_large_image',
}: SEOHeadProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        type: ogType,
        title,
        description,
        images: ogImage ? [{ url: ogImage, alt: title }] : undefined,
      }}
      twitter={{
        cardType: twitterCard,
        handle: '@blogcms',
        site: '@blogcms',
      }}
    />
  );
}