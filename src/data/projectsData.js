export const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind',
    shortDescription: 'Full-featured e-commerce solution',
    image: 'https://picsum.photos/1920/1080?random=1',
    slug: 'e-commerce-platform',
    client: 'ShopTech Inc.',
    timeline: 'Jan 2024 - Mar 2024',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    features: [
      'Secure user authentication and authorization system',
      'Dynamic product catalog with advanced filtering and search',
      'Real-time shopping cart with persistent storage',
      'Stripe integration for secure payment processing',
      'Order management and tracking system',
      'Responsive admin dashboard for inventory management'
    ],
    gallery: [
      'https://picsum.photos/1920/1080?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4'
    ],
    overview: "A comprehensive e-commerce solution that provides everything needed to run an online store. Built with modern technologies and best practices in mind, this platform offers a seamless shopping experience for customers and powerful management tools for store owners.",
    challenge: "The main challenge was creating a scalable and performant e-commerce platform that could handle high traffic loads while maintaining fast page load times. Additionally, implementing a secure payment system and real-time inventory management required careful consideration of data consistency and user experience.",
    solution: "We implemented a serverless architecture using Next.js and MongoDB for optimal scalability. The payment system was built using Stripe's latest API with robust error handling. Real-time updates were achieved using WebSocket connections, and we implemented aggressive caching strategies to ensure fast page loads."
  },
  {
    title: 'Portfolio Website',
    description: 'A beautiful portfolio website template for creative professionals',
    shortDescription: 'Modern portfolio template',
    image: 'https://picsum.photos/800/600?random=5',
    slug: 'portfolio-website',
    client: 'Creative Studio X',
    timeline: 'Dec 2023 - Feb 2024',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: [
      'Stunning responsive design with fluid animations',
      'Dark/light mode with system preference detection',
      'Dynamic project showcase with filtering capabilities',
      'Interactive contact form with email integration',
      'SEO optimized with meta tags and structured data',
      'Blazing fast page loads with Next.js optimization'
    ],
    gallery: [
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7',
      'https://picsum.photos/800/600?random=8'
    ],
    overview: "A modern portfolio website template that helps creative professionals showcase their work in a beautiful and engaging way. The design focuses on visual impact while maintaining excellent performance and accessibility.",
    challenge: "Creating a portfolio that stands out in a crowded market while maintaining fast load times and accessibility was the primary challenge. We also needed to ensure the site worked flawlessly across all devices and screen sizes.",
    solution: "We utilized Framer Motion for smooth animations that don't impact performance, implemented responsive images with Next.js Image optimization, and created a modular component system that makes customization easy while maintaining consistency."
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application',
    shortDescription: 'Team task management solution',
    image: 'https://picsum.photos/800/600?random=9',
    slug: 'task-management-app',
    client: 'ProductivityPro Ltd.',
    timeline: 'Oct 2023 - Jan 2024',
    technologies: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Node.js'],
    features: [
      'Real-time collaboration with live updates',
      'Intuitive drag-and-drop task organization',
      'Advanced task filtering and search capabilities',
      'Team chat and comment system',
      'File attachment and sharing',
      'Automated progress tracking and reporting'
    ],
    gallery: [
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12'
    ],
    overview: `A powerful task management application that helps teams collaborate and stay organized. The platform provides real-time updates, intuitive task organization, and comprehensive team communication tools.`,
    challenge: `Building a real-time collaboration system that remains responsive under heavy load was our main challenge. We also needed to ensure data consistency across multiple users working simultaneously.`,
    solution: `We implemented Firebase Real-time Database for instant updates and offline support, created a custom state management system for optimal performance, and used WebSocket connections for real-time chat features.`
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    shortDescription: 'Social media analytics',
    image: 'https://picsum.photos/800/600?random=13',
    slug: 'social-media-dashboard',
    client: 'SocialMetrics Inc.',
    timeline: 'Sep 2023 - Dec 2023',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    features: [
      'Interactive data visualizations with D3.js',
      'Real-time analytics tracking and updates',
      'Customizable reporting dashboard',
      'Multi-platform social media integration',
      'Automated insight generation',
      'Export capabilities for reports'
    ],
    gallery: [
      'https://picsum.photos/800/600?random=14',
      'https://picsum.photos/800/600?random=15',
      'https://picsum.photos/800/600?random=16'
    ],
    overview: `A comprehensive social media dashboard that provides real-time analytics and insights for multiple social media platforms. The dashboard helps businesses make data-driven decisions about their social media strategy.`,
    challenge: `Processing and visualizing large amounts of social media data in real-time while maintaining a responsive user interface was the main challenge. We also needed to handle multiple API integrations efficiently.`,
    solution: `We implemented a microservices architecture for data processing, used D3.js for efficient data visualization, and created a caching layer for improved performance. The dashboard updates in real-time while maintaining smooth interactions.`
  }
]; 