export default function StructuredData({ type = 'Portfolio' }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Carla Castillo Portfolio',
    creator: {
      '@type': 'Person',
      name: 'Carla Castillo'
    },
    description: 'Personal portfolio showcasing web development and design projects',
    url: 'https://carlacastillo.com',
    sameAs: [
      'https://github.com/carlacastillo',
      'https://linkedin.com/in/carlacastillo'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 