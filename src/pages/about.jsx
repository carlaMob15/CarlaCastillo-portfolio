import Image from 'next/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import WorkTogether from '@/components/WorkTogether'
import siteMetadata from '@/data/siteMetadata'

const About = () => {
  return (
    <>
      <Head>
        <title>About - {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>

      {/* Hero Section */}
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl mb-6">
            Create Your Dream Website With The Free Framer Template
          </h1>
          <p className="text-xl text-primaryText-600 dark:text-primaryText-400">
            We redefine possibility by combining imagination with precision to shape extraordinary experiences.
          </p>
        </div>
      </Container>

      {/* Image Grid Section */}
      <Container className="mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="col-span-2">
                <div className="aspect-square relative rounded-3xl overflow-hidden bg-primaryText-100">
                  <Image
                    src="https://picsum.photos/800/800?random=1"
                    alt="Large square image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden bg-primaryText-100">
                <Image
                  src="https://picsum.photos/400/300?random=2"
                  alt="Small image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-3xl overflow-hidden bg-primaryText-100">
                <Image
                  src="https://picsum.photos/400/300?random=3"
                  alt="Small image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl mb-6">
                About Our Vision
              </h2>
              <p className="text-lg text-primaryText-600 dark:text-primaryText-400 mb-6">
                We believe in the power of design to inspire and make a meaningful impact. Our approach combines creativity with technical expertise to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-primaryText-600 dark:text-primaryText-400">
                We strive to bring creativity and functionality together, crafting solutions that resonate with your audience and drive real results for your business.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Services Section Header */}
      <Container className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl mb-6">
            Services
          </h2>
          <p className="text-xl text-primaryText-600 dark:text-primaryText-400">
            Services are designed with simplicity and effectiveness in mind. We offer a comprehensive range of solutions tailored to meet your design needs.
          </p>
        </div>
      </Container>

      {/* Services Grid */}
      <Container className="mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Branding',
                description: "Logo Design / Brand Guidelines / Collateral Design / Rebranding Services"
              },
              {
                title: 'UX & UI Design',
                description: "User Research and Analysis / Wireframing and Prototyping / User Interface Design"
              },
              {
                title: 'Motion & Animation',
                description: "Motion Graphics Design / Animated Explainer Videos / Interactive Presentations"
              },
              {
                title: 'Mobile',
                description: "iOS App Development / Android App Development / App Prototyping and Testing"
              }
            ].map((service, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 rounded-full bg-accent-500 mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100 mb-4">
                  {service.title}
                </h3>
                <p className="text-primaryText-600 dark:text-primaryText-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Full-width Image Section with Text */}
      <div className="relative mb-24">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/600?random=4"
            alt="Full-width background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <Container>
          <div className="relative py-24 sm:py-32">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Designing Success Together
              </h2>
              <p className="text-xl text-white/90">
                See how we've turned ideas into reality. Dive into the stories of successful product designs that make a difference.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Work Together Section */}
      <WorkTogether />
    </>
  )
}

export default About
