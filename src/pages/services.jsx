import Image from 'next/image'
import { Container } from '../components/Container'
import LifeBeyondDesign from '../components/LifeBeyondDesign'
import { PageSEO } from '../components/SEO'
import siteMetadata from '../data/siteMetadata'
import { Button } from '../components/Button'
import { RoundedImage } from '../components/RoundedImage'
import ContactPurpleBlock from '../components/ContactPurpleBlock'

const Services = () => {
  return (
    <>
      <PageSEO 
        title="Services"
        description="Professional design services including UX/UI design, branding, and digital product development"
      />

      {/* Hero Section */}
      <Container className="mt-24 sm:mt-40">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.5] md:leading-[2] lg:leading-[1.5] text-neutral-900 dark:text-neutral-100 mb-8 text-left">
            Clean, Inclusive, Human-Centred Design
            <span className="inline-block align-baseline ml-2 w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-[rgb(99,102,241)]" style={{ verticalAlign: 'baseline' }}></span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4 text-left">
            WC Web Creativity is a UK-based creative studio led by Carla Castillo, a Senior Product UX/UI Designer passionate about functional, inclusive, user-centred design.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4 text-left">
            We collaborate with clients across the UK and Europe to craft intuitive websites and apps, digital products, and visual identities that connect — and make a lasting impact.
          </p>
        </div>
      </Container>

      {/* Services Section with Background */}
      <div className="relative w-full mt-24">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-5xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8">
              What we do
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'UX & UI Design',
                  description: "We design digital experiences that are clear, functional, and visually engaging — tailored for real users on web and mobile.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5,16h-4a.5.5,0,0,1-.5-.5v-1A1.5,1.5,0,0,0,1.5,13,1.5,1.5,0,0,0,0,14.5v1a.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5V3.5a.5.5,0,0,1,.5-.5H-1V2.5A2.5,2.5,0,0,1,1.5,0,2.5,2.5,0,0,1,4,2.5V3h3.5a.5.5,0,0,1,.5.5V7h.5A2.5,2.5,0,0,1,11,9.5,2.5,2.5,0,0,1,8.5,12H8v3.5A.5.5,0,0,1,7.5,16ZM4,15h3V11.5a.5.5,0,0,1,.5-.5h1A1.5,1.5,0,0,0,10,9.5,1.5,1.5,0,0,0,8.5,8h-1A.5.5,0,0,1,7,7.5V4H3.5a.5.5,0,0,1-.5-.5v-1A1.5,1.5,0,0,0,1.5,1,1.5,1.5,0,0,0,0,2.5v1a.5.5,0,0,1-.5.5H-4V15h3v-.5A2.5,2.5,0,0,1,1.5,12,2.5,2.5,0,0,1,4,14.5Z" stroke="rgb(99 102 241)" strokeWidth="0.5" fill="none"/>
                    </svg>
                  )
                },
                {
                  title: 'Design Systems & Accessibility',
                  description: "From scalable design systems to accessible components, we help teams build consistent, inclusive experiences that are easy to maintain and use.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: 'Product & Platform Design',
                  description: "We specialise in UX/UI for SaaS, B2B, and e-commerce products — helping turn complex functionality into simple, intuitive interfaces.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: 'Frontend-Aware Design',
                  description: "We understand how digital products are built. Our designs are created with development in mind — meaning fewer handoff headaches and better implementation.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 18L22 12L16 6" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6L2 12L8 18" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: 'Creativity & Fun at Heart',
                  description: "We like to work with teams to learn and explore new ideas together while having fun — because work doesn't have to be serious to be successful.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9H9.01" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 9H15.01" stroke="rgb(99 102 241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-sm p-8 flex flex-col items-start transition-all duration-300 hover:shadow-md">
                  <div className="mb-6">
                    {service.icon}
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

      {/* Services Overview Section */}
      <Container className="mt-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="flex flex-col gap-8">
            <RoundedImage
              src="https://picsum.photos/800/700?random=1"
              alt="Design process"
              width={400}
              height={350}
              className="w-full h-auto"
            />
            <div className="grid grid-cols-2 gap-8">
              <RoundedImage
                src="https://picsum.photos/400/300?random=2"
                alt="UX Research"
                width={200}
                height={150}
                className="w-full h-auto"
              />
              <RoundedImage
                src="https://picsum.photos/400/300?random=3"
                alt="Design implementation"
                width={200}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Services Content */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8">
              My Approach
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              I combine user-centered design principles with strategic thinking to create digital products that not only look beautiful but also deliver exceptional user experiences.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
              Every project starts with understanding your goals and users' needs, followed by a collaborative design process that ensures we create solutions that drive real business value.
            </p>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="rounded-full bg-[rgb(99,102,241)] text-white px-6 sm:px-8 py-3 text-base font-medium shadow-sm hover:bg-[rgb(79,70,229)] transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[rgb(99,102,241)] w-fit"
            >
              Start a project
            </a>
          </div>
        </div>
      </Container>

      {/* Life Beyond Design Section */}
      <LifeBeyondDesign />

      {/* Contact Section */}
      <Container>
        <ContactPurpleBlock className="mt-24 sm:mt-32 mb-16" />
      </Container>
    </>
  )
}

export default Services
