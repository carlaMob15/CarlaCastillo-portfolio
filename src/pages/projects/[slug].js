import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/ProjectCard';
import ContactPurpleBlock from '../../components/ContactPurpleBlock';
import BackToTop from '../../components/BackToTop';
import { projectsData } from '../../data/projectsData';
import { SiFigma, SiReact, SiTailwindcss, SiNextdotjs, SiMongodb, SiStripe } from 'react-icons/si';
import { HiMagnifyingGlass } from 'react-icons/hi2';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Head>
        <title>{project.title} - Project Details</title>
        <meta name="description" content={project.description} />
      </Head>

      <Container className="pt-24 pb-32 md:pt-32 md:pb-40 px-4 sm:px-8 md:px-12">
        <BackToTop />
        {/* Project Header */}
        <motion.div 
          className="max-w-3xl space-y-16 mb-24 md:mb-32 mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.projectType.split(',').map((type, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {type.trim()}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight md:leading-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>
            <div className="mt-6">
              <a 
                href="https://onestophospital.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
              >
                Visit the live site
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pt-4">
            <div>
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
                Client
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.client || 'Personal Project'}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
                Year
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.timeline || '2024'}
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
                Services
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.services || 'UX/UI Design, Interactive Design, Prototyping, Responsive Design'}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
                Tools
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                {project.tools ? (
                  project.tools.split(',').map((tool, index) => {
                    const Icon = techIcons[tool.trim()];
                    return Icon ? (
                      <span key={index} className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {tool.trim()}
                      </span>
                    ) : null;
                  })
                ) : (
                  <>
                    <SiFigma className="w-4 h-4" />
                    Figma
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Project Image */}
        <motion.div 
          className="relative aspect-[16/10] w-full mb-24 md:mb-32 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <HiMagnifyingGlass className="w-8 h-8 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div 
          className="space-y-20 md:space-y-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Challenge & Solution */}
          <div className="space-y-24">
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
            {/* Image Grid 1 - Large image above, two below */}
            <div className="space-y-12">
              <div className="space-y-12">
                {/* Large image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick(0)}
                >
                  <Image
                    src={project.gallery[0]}
                    alt="Solution overview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 1200px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <HiMagnifyingGlass className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
                {project.galleryCaptions?.[0] && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4 mb-2 px-4">
                    {project.galleryCaptions[0]}
                  </p>
                )}
                {/* Two smaller images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.gallery.slice(1, 3).map((image, index) => (
                    <div key={index}>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => handleImageClick(index + 1)}
                      >
                        <Image
                          src={image}
                          alt={`Solution detail ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1280px) 600px, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <HiMagnifyingGlass className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </motion.div>
                      {project.galleryCaptions?.[index + 1] && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4 mb-2 px-4">
                          {project.galleryCaptions[index + 1]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {project.solutionDetails && (
                <div className="max-w-2xl mx-auto text-center mt-8">
                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.solutionDetails}
                  </p>
                  {project.solutionCaption && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-500 italic">
                      {project.solutionCaption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Technical Approach */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Technical Approach</h2>
            <div className="space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.technicalApproach ? (
                project.technicalApproach.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    We retained the existing brand identity while giving it a fresh, contemporary feel. The responsive design performs smoothly across devices—from mobile to desktop—and incorporates accessible typography, clear headings, and responsive video content.
                  </p>
                  <p>
                    Working closely with the product owner and development team, we ensured the design met both user needs and technical requirements. The result is a visually appealing, technically sound experience that helps users find what they're looking for more easily.
                  </p>
                </>
              )}
            </div>
            {/* Two large images stacked */}
            <div className="space-y-12 mt-8">
              {project.gallery.slice(3, 5).map((image, index) => (
                <div key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => handleImageClick(index + 3)}
                  >
                    <Image
                      src={image}
                      alt={`Technical detail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1280px) 1200px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <HiMagnifyingGlass className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  {project.galleryCaptions?.[index + 3] && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4 mb-2 px-4">
                      {project.galleryCaptions[index + 3]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {project.technicalDetails && (
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-8">
                {project.technicalDetails}
              </p>
            )}
          </div>

          {/* Project Impact & Reflection */}
          <div className="space-y-8 mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Project Impact & Reflection</h2>
            <div className="space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.impact ? (
                project.impact.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>
                  This was a genuinely enjoyable project to work on. Collaborating with a former colleague on the development side added a personal layer to the experience. I particularly loved the challenge of turning dense medical content into something practical, clear, and engaging. The interactive features brought real value, making the site feel informative without being overwhelming.
                </p>
              )}
            </div>
            {/* Large image below the text */}
            {project.gallery[5] && (
              <div className="mt-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick(5)}
                >
                  <Image
                    src={project.gallery[5]}
                    alt="Project highlight"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 1200px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <HiMagnifyingGlass className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
                {project.galleryCaptions?.[5] && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4 mb-2 px-4">
                    {project.galleryCaptions[5]}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </Container>

      {/* More Projects Section with Background */}
      <div className="relative w-full mt-40 md:mt-48">
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

      {/* Lightbox Gallery */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={project.gallery.map((image) => ({ src: image }))}
        carousel={{
          padding: "16px",
          spacing: "16px",
        }}
        animation={{ fade: 500 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
          slide: {
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "64px",
            "@media (max-width: 768px)": {
              padding: "16px",
            },
          },
          slideImage: {
            borderRadius: "24px",
            overflow: "hidden",
          },
          button: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "50%",
            padding: "12px",
            color: "white",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "scale(1.05) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            },
            "&:active": {
              transform: "scale(0.98) translateY(0)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            },
            "@media (max-width: 768px)": {
              padding: "8px",
            },
          },
          close: {
            position: "absolute",
            top: "16px",
            right: "16px",
            padding: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "50%",
            color: "white",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 1px 1px rgba(0, 0, 0, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              transform: "scale(1.05) translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              color: "rgba(255, 255, 255, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            },
            "&:active": {
              transform: "scale(0.98) translateY(0)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            },
            "&::after": {
              content: '"Close"',
              position: "absolute",
              bottom: "-24px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "12px",
              whiteSpace: "nowrap",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
            },
            "@media (max-width: 768px)": {
              padding: "8px",
            },
          },
          navigation: {
            container: {
              position: "absolute",
              bottom: "32px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "160px",
              padding: "0 32px",
              "@media (max-width: 768px)": {
                bottom: "24px",
                gap: "120px",
                padding: "0 24px",
              },
            },
            prev: {
              position: "relative",
              left: "auto",
              transform: "none",
            },
            next: {
              position: "relative",
              left: "auto",
              transform: "none",
            },
          },
        }}
      />
    </>
  );
} 