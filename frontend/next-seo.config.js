export default {
  title: 'BlogCMS - Modern Content Management Platform',
  description: 'A modern content management system for bloggers and content creators with multi-author support and analytics.',
  canonical: 'https://blogcms.example.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blogcms.example.com',
    siteName: 'BlogCMS',
    images: [
      {
        url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
        width: 1200,
        height: 630,
        alt: 'BlogCMS - Modern Content Management Platform',
      },
    ],
  },
  twitter: {
    handle: '@blogcms',
    site: '@blogcms',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
};