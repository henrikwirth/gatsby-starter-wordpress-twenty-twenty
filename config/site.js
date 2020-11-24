module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Example Company', // Navigation and Site Title
  titleAlt: 'Example Company', // Title for JSONLD
  description: 'Example Company',
  url: 'https://mobius.digital', // Domain of your site. No trailing slash!
  siteUrl: 'https://mobius.digital', // url + pathPrefix
  blogUri: '/blog',
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'devsite', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Example Author', // Author for schemaORGJSONLD
  themeColor: '#ff6363',
  backgroundColor: '#ff6363',
  twitter: '', // Twitter Username
  // EXTRA
  company: 'Example Company LLC',
  hoursOfOperation: '',
  address: '123 Example St, Exampletown, USA',
  phone: '123.123.1234',
  email: 'me@example.com',
};
