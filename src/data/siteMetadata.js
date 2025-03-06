const siteMetadata = {
  title: 'Carla Castillo Portfolio',
  author: 'Carla Castillo',
  headerTitle: 'Carla Castillo',
  description: 'Senior UI/UX Designer with over 10 years of experience',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://your-portfolio-url.com', // This will be your deployed site URL
  siteRepo: '', // We can leave this empty for now
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'wcwebcreativity@gmail.com',
  socials: {
    github: '',
    linkedin: 'https://www.linkedin.com/in/carla-castillo-32751176/',
    twitter: ''
  },
  locale: 'en-US',
  // Adding navigation links that are referenced in the Header component
  siteNavLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ],
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
  },
}

module.exports = siteMetadata 