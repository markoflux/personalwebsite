const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Marko Bradic Homepage', // Navigation and Site Title
  siteTitleAlt: 'Marko Bradic', // Alternative Site title for SEO
  siteUrl: 'http://bradic.de/marko', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Marko Bradic Homepage',

  siteFBAppID: '', // Facebook App ID - Optional
  userTwitter: '@markoflux', // Twitter Username
  ogSiteName: 'markobradic', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
