import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/ProjectCard';
import ContactPurpleBlock from '../../components/ContactPurpleBlock';
import BackToTop from '../../components/BackToTop';
import { projectsData } from '../../data/projectsData';
import { SiFigma, SiReact, SiTailwindcss, SiNextdotjs, SiMongodb, SiStripe } from 'react-icons/si';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Technology icons mapping
const techIcons = {
  'Figma': SiFigma,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'MongoDB': SiMongodb,
  'Stripe': SiStripe,
};

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - Project Details</title>
        <meta name="description" content={project.description} />
      </Head>

      <Container className="pt-16 pb-32 md:pt-24">
        <BackToTop />
        {/* Project Header */}
        <motion.div 
          className="max-w-3xl space-y-8 mb-16 md:mb-24"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="space-y-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">
              {project.category || 'Digital Product Design'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>
          </div>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4">
            <div>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mb-2">
                Client
              </h3>
              <p className="text-base">
                {project.client || 'Personal Project'}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mb-2">
                Year
              </h3>
              <p className="text-base">
                {project.timeline || '2024'}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mb-2">
                Services
              </h3>
              <p className="text-base">
                UX Design • App Design • Development
              </p>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => {
              const Icon = techIcons[tech];
              return (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-full flex items-center gap-2"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {tech}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Main Project Image */}
        <motion.div 
          className="relative aspect-[16/10] w-full mb-16 md:mb-24 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
        </motion.div>

        {/* Project Content */}
        <motion.div 
          className="space-y-20 md:space-y-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Project Description */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Project Description</h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-20">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                {project.challenge}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Features */}
          <div className="space-y-20 md:space-y-32">
            <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
            {project.features.map((feature, index) => {
              // Special layout for feature 2 (index 1)
              if (index === 1) {
                return (
                  <motion.div 
                    key={index} 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Big full width image */}
                    <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden">
                      <Image
                        src={project.gallery[index] || `https://picsum.photos/1600/900?random=${index + 20}`}
                        alt={`Feature ${index + 1} - Main Image`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 1200px, 100vw"
                      />
                    </div>
                    {/* Two smaller images side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                        <Image
                          src={project.gallery[index + 1] || `https://picsum.photos/800/600?random=${index + 30}`}
                          alt={`Feature ${index + 1} - Sub Image 1`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 640px) 400px, 100vw"
                        />
                      </div>
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                        <Image
                          src={project.gallery[index + 2] || `https://picsum.photos/800/600?random=${index + 40}`}
                          alt={`Feature ${index + 1} - Sub Image 2`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 640px) 400px, 100vw"
                        />
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-medium mb-4">Feature {index + 1}</h3>
                      <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                        {feature}
                      </p>
                    </div>
                  </motion.div>
                );
              }
              // Default/random layout for other features
              const hasTwoImages = Math.random() > 0.5;
              return (
                <motion.div 
                  key={index} 
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {hasTwoImages ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden">
                        <Image
                          src={project.gallery[index] || `https://picsum.photos/1600/900?random=${index + 20}`}
                          alt={`Feature ${index + 1} - Image 1`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 600px, 100vw"
                        />
                      </div>
                      <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden">
                        <Image
                          src={project.gallery[index + 1] || `https://picsum.photos/1600/900?random=${index + 21}`}
                          alt={`Feature ${index + 1} - Image 2`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1280px) 600px, 100vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden">
                      <Image
                        src={project.gallery[index] || `https://picsum.photos/1600/900?random=${index + 20}`}
                        alt={`Feature ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 1200px, 100vw"
                      />
                    </div>
                  )}
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl font-medium mb-4">Feature {index + 1}</h3>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      {/* More Projects Section with Background - moved outside Container for full width */}
      <div className="relative w-full mt-32 md:mt-40">
        {/* Full width background */}
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50" aria-hidden="true" />
        {/* Content aligned with main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16 md:mb-20">
              <h2 className="text-2xl font-semibold tracking-tight">More projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projectsData
                .filter(p => p.slug !== slug)
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard 
                    key={project.slug} 
                    project={project}
                    noBackground
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Work Together Section */}
      <Container>
        <ContactPurpleBlock className="mt-24 sm:mt-32 mb-16" />
      </Container>
    </>
  );
} 