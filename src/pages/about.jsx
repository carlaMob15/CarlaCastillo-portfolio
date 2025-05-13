import Image from 'next/image'
import { Container } from '../components/Container'
import WorkTogether from '../components/WorkTogether'
import LifeBeyondDesign from '../components/LifeBeyondDesign'
import { PageSEO } from '../components/SEO'
import siteMetadata from '../data/siteMetadata'
import { Button } from '../components/Button'
import { RoundedImage } from '../components/RoundedImage'

const About = () => {
  return (
    <>
      <PageSEO 
        title="About"
        description={siteMetadata.description}
      />

      {/* Hero Section */}
      <Container className="mt-24 sm:mt-40">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl mb-8 text-left">
            About Carla Castillo
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-4 text-left">
            Creating intuitive, accessible digital experiences that solve complex problems through beautiful design.
          </p>
        </div>
      </Container>

      {/* Image & Vision Section */}
      <Container className="mt-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="flex flex-col gap-8">
            <RoundedImage
              src="https://picsum.photos/800/700?random=1"
              alt="Carla at work"
              width={400}
              height={350}
              className="w-full h-auto"
            />
            <div className="grid grid-cols-2 gap-8">
              <RoundedImage
                src="https://picsum.photos/400/300?random=2"
                alt="Design process"
                width={200}
                height={150}
                className="w-full h-auto"
              />
              <RoundedImage
                src="https://picsum.photos/400/300?random=3"
                alt="Team collaboration"
                width={200}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Vision Content */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8">
              About My Vision
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              I believe in the power of design to inspire and make a meaningful impact. My approach combines creativity with technical expertise to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
              I strive to bring creativity and functionality together, crafting solutions that resonate with your audience and drive real results for your business.
            </p>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="rounded-full bg-[rgb(99,102,241)] text-white px-6 sm:px-8 py-3 text-base font-medium shadow-sm hover:bg-[rgb(79,70,229)] transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[rgb(99,102,241)] w-fit"
            >
              Let's talk
            </a>
          </div>
        </div>
      </Container>

      {/* Services Section with Background */}
      <div className="relative w-full mt-32 md:mt-40">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8">
              Services
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Services are designed with simplicity and effectiveness in mind. I offer a comprehensive range of solutions tailored to meet your design needs.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
                <div key={index} className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-sm p-8 flex flex-col items-start transition-all duration-300 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-primary-500 mb-6 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/20" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Life Beyond Design Section */}
      <LifeBeyondDesign />

      {/* Work Together Section */}
      <WorkTogether />
    </>
  )
}

export default About
