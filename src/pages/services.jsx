import Head from 'next/head'
import { Container } from '../components/Container'
import siteMetadata from '../data/siteMetadata'

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences through thoughtful design solutions.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing & Iteration'
      ]
    },
    {
      title: 'Web Development',
      description: 'Building modern, responsive websites that deliver exceptional user experiences.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Content Management Systems',
        'Website Maintenance'
      ]
    },
    {
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand strategies that resonate with your target audience.',
      features: [
        'Brand Identity Design',
        'Brand Guidelines',
        'Marketing Strategy',
        'Content Strategy'
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Services - {siteMetadata.title}</title>
        <meta name="description" content="Explore our range of professional services in UI/UX design, web development, and brand strategy." />
      </Head>

      <Container className="mt-16 sm:mt-20">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-base text-neutral-600 dark:text-neutral-400">
            We offer a comprehensive range of services to help bring your digital vision to life. From UI/UX design to web development and brand strategy, we're here to support your success.
          </p>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-600 dark:text-neutral-400">
                      <svg
                        className="w-5 h-5 mr-2 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Services 