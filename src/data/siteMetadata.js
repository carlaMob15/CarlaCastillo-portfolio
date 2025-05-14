const siteMetadata = {
  title: 'WC Web Creativity',
  author: 'Carla Castillo',
  headerTitle: 'WC Web Creativity',
  headerSubtitle: 'Senior UX/UI Designer',
  description: 'WC Web Creativity is a digital design studio crafting intuitive, user-first websites and digital products for brands, artists, and founders. Experienced in web design, SaaS platforms, and mobile app design.',
  authorHeadline: 'Senior UX/UI Designer, passionate about creating beautiful digital experiences',
  authorAbout: "Hi, I'm Carla Castillo, a Senior UX/UI Designer with over 10 years of experience in creating beautiful and functional digital products. I specialize in user-centered design, creating intuitive interfaces that solve real user problems.",
  authorAboutExtended: "With a strong background in both design and development, I bring a unique perspective to every project. I believe in creating designs that are not only visually appealing but also highly functional and accessible. My approach combines creative thinking with technical expertise to deliver exceptional user experiences.",
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://wcwebcreativity.vercel.app', // Vercel deployment URL
  siteRepo: 'https://github.com/carlaMob15/nextjs-tailwind-portfolio',
  siteLogo: '/images/logo.png',
  image: '/images/avatar.jpg',
  socialBanner: '/images/social-banner.jpg',
  email: 'wcwebcreativity@gmail.com',
  phoneNumber: '+1 (555) 123-4567', // Update with your actual phone number
  contactTitle: 'Let\'s Work Together',
  contactSubtitle: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through the contact form below.",
  socials: {
    github: '',
    linkedin: 'https://www.linkedin.com/company/wcwebcreativity/',
    twitter: '',
    dribbble: 'https://dribbble.com/Calaca15',
    medium: 'https://medium.com/@wcwebcreativity'
  },
  locale: 'en-US',
  // Adding navigation links that are referenced in the Header component
  siteNavLinks: [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ],
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    googleAnalyticsId: '', // Add your Google Analytics ID when ready
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