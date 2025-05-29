import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import { ProjectCard } from '../../components/ProjectCard';
import ContactPurpleBlock from '../../components/ContactPurpleBlock';
import BackToTop from '../../components/BackToTop';
import { projectsData } from '../../data/projectsData';
import { SiFigma, SiReact, SiTailwindcss, SiNextdotjs, SiMongodb, SiStripe, SiStorybook, SiConfluence, SiJira, SiSketch, SiInvision, SiMiro } from 'react-icons/si';
import { HiMagnifyingGlass, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

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
  'Storybook': SiStorybook,
  'Confluence': SiConfluence,
  'Jira': SiJira,
  'Sketch': SiSketch,
  'InVision': SiInvision,
  'Miro': SiMiro
};

// Expanded color palette for tags
const tagColors = [
  'bg-indigo-100 text-indigo-800',
  'bg-violet-100 text-violet-800',
  'bg-pink-100 text-pink-800',
  'bg-amber-100 text-amber-800',
  'bg-teal-100 text-teal-800',
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-rose-100 text-rose-800',
  'bg-cyan-100 text-cyan-800',
  'bg-fuchsia-100 text-fuchsia-800',
  'bg-orange-100 text-orange-800',
  'bg-lime-100 text-lime-800',
];

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect to handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Sort other projects by most recent year (descending)
  const otherProjects = projectsData
    .filter(p => p.slug !== slug)
    .sort((a, b) => {
      const getYear = (timeline) => {
        if (!timeline) return 0;
        const match = timeline.match(/\d{4}/g);
        return match ? parseInt(match[match.length - 1], 10) : 0;
      };
      return getYear(b.timeline) - getYear(a.timeline);
    });

  const projectsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(otherProjects.length / projectsPerPage);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute',
      width: '100%',
      scale: 0.95,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
      width: '100%',
      scale: 1,
      zIndex: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: 'absolute',
      width: '100%',
      scale: 0.95,
      zIndex: 0
    })
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const currentProjects = otherProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

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
            {project.slug === 'personal-trainer-app' && (
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-4">
                The task was to create a fresh brand identity and final UI for a personal trainer app. The goal? To provide an easy and intuitive way for personal trainers to manage their clients, streamline bookings, and keep track of payments effortlessly. It needed to be sleek, modern, and user-friendly.
              </p>
            )}
            {project.liveUrl && (
              <div className="mt-6">
                <a 
                  href={project.liveUrl}
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
            )}
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
            {project.tools && (
              <div>
                <h3 className="text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold mb-2">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.tools) ? project.tools : project.tools.split(','))
                    .map((tool, index) => {
                      const Icon = techIcons[tool.trim()];
                      // Assign a color from the expanded palette for each tag
                      const colorClass = tagColors[index % tagColors.length];
                      return (
                        <span
                          key={index}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-sm ${colorClass}`}
                        >
                          {Icon && <Icon className="h-4 w-4 mr-2" />}
                          <span>{tool.trim()}</span>
                        </span>
                      );
                    })}
                </div>
              </div>
            )}
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
            alt={project.imageAlt || project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1280px) 1200px, (min-width: 768px) 768px, 100vw"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
              '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/></svg>'
            ).toString('base64')}`}
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
          {project.slug === 'personal-trainer-app' ? (
            <>
              {/* Our Solution */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Our Solution</h2>
                <div className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 space-y-4">
                  {project.solution.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
              {/* Project Impact & Reflection */}
              <div className="space-y-6 mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">Project Impact & Reflection</h2>
                <div className="space-y-4">
                  {project.impact.split(/\n\s*\n/).map((para, idx) => (
                    para.trim() && (
                      <p key={idx} className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-4">{para.trim()}</p>
                    )
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Project Overview */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Project overview</h2>
                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">{project.overview}</p>
              </div>
              {/* Project Content */}
              <div className="space-y-24">
                {/* Challenge & Solution */}
                <div className="space-y-24">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight">The Challenge</h2>
                    <div className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                      {project.challenge.split('\n\n').map((section, idx) => {
                        // Special handling for 'We set out to explore:'
                        if (section.includes('We set out to explore:')) {
                          const [title, rest] = section.split('We set out to explore:');
                          const items = rest.split('•').map(item => item.trim()).filter(Boolean);
                          return (
                            <div key={idx}>
                              <p className="mb-2 font-medium">We set out to explore:</p>
                              <ul className="list-disc pl-6 space-y-2 mt-1">
                                {items.map((item, itemIdx) => (
                                  <li key={itemIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        if (section.includes('•')) {
                          const items = section.split('•').map(item => item.trim()).filter(Boolean);
                          if (items.length === 1) {
                            return <p key={idx} className="mb-4">{items[0]}</p>;
                          }
                          return (
                            <ul key={idx} className="list-disc pl-6 space-y-2 mt-4">
                              {items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={idx} className="mb-4">{section}</p>;
                      })}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
                    <div className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 space-y-4">
                      {(() => {
                        // Split by double line breaks, then process for subheaders
                        const subheaderTitles = [
                          'Social & Shared Viewing',
                          'Emotion-Based Recommendations',
                          'Smart Home Hub'
                        ];
                        const lines = project.solution.split('\n\n');
                        let elements = [];
                        lines.forEach((line, idx) => {
                          const trimmed = line.trim();
                          const matchedHeader = subheaderTitles.find(title => trimmed.startsWith(title));
                          if (matchedHeader) {
                            // Split header and the rest
                            const [header, ...rest] = trimmed.split(/(?<=^[^:]+):?/);
                            elements.push(
                              <h3 key={`header-${idx}`} className="text-lg font-semibold mt-6 mb-2">{matchedHeader}</h3>
                            );
                            if (rest.join('').trim()) {
                              elements.push(
                                <p key={`para-${idx}`}>{rest.join('').replace(matchedHeader, '').replace(/^:/, '').trim()}</p>
                              );
                            }
                          } else {
                            elements.push(
                              <p key={`para-${idx}`}>{trimmed}</p>
                            );
                          }
                        });
                        return elements;
                      })()}
                    </div>
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
                          alt={project.galleryAlt?.[0] || "Solution overview"}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1280px) 1200px, (min-width: 768px) 768px, 100vw"
                          quality={85}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                            '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/></svg>'
                          ).toString('base64')}`}
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
                                alt={project.galleryAlt?.[index + 1] || `Solution detail ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(min-width: 1280px) 600px, (min-width: 768px) 384px, 100vw"
                                quality={80}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                                  '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/></svg>'
                                ).toString('base64')}`}
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
                  </div>
                </div>

                {/* Technical Approach */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold tracking-tight">Technical Approach</h2>
                  <div className="space-y-6 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                    {project.slug === 'my-sky-app-companion' ? (
                      <>
                        <p>We designed with modularity in mind, using familiar Sky UI patterns to help new features slot into the existing structure.</p>
                        <p>Each concept was considered with technical feasibility and rollout in mind—especially for more experimental features like face scan, which were framed as future-facing options rather than immediate releases.</p>
                      </>
                    ) : (
                      project.technicalApproach ? (
                        project.technicalApproach.map((paragraph, index) => (
                          paragraph.startsWith('-') ? (
                            <ul key={index} className="list-disc pl-6 space-y-2">
                              <li>{paragraph.substring(1).trim()}</li>
                            </ul>
                          ) : (
                            <p key={index}>{paragraph}</p>
                          )
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
                      )
                    )}
                  </div>
                  {/* Last image */}
                  {project.gallery[3] && (
                    <div className="mt-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => handleImageClick(3)}
                      >
                        <Image
                          src={project.gallery[3]}
                          alt={project.galleryAlt?.[3] || "Technical detail"}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 1280px) 1200px, (min-width: 768px) 768px, 100vw"
                          quality={85}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                            '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/></svg>'
                          ).toString('base64')}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <HiMagnifyingGlass className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </motion.div>
                      {project.galleryCaptions?.[3] && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4 mb-2 px-4">
                          {project.galleryCaptions[3]}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Impact & Reflection */}
                <div className="space-y-8 mt-16">
                  <h2 className="text-2xl font-semibold tracking-tight">Project Impact & Reflection</h2>
                  <div className="space-y-6">
                    {project.impact.split(/\n\s*\n/).map((para, idx) => (
                      para.trim() && (
                        <p key={idx} className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-4">{para.trim()}</p>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
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
            <div className="relative">
              <div className="min-h-[400px] md:min-h-[600px] relative overflow-hidden">
                <AnimatePresence initial={false} custom={currentPage} mode="sync">
                  <motion.div
                    key={currentPage}
                    custom={currentPage}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { 
                        type: "spring", 
                        stiffness: 150, 
                        damping: 20,
                        mass: 1
                      },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 }
                    }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                  >
                    {currentProjects.map((project, index) => (
                      <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5,
                          delay: isMobile ? 0 : index * 0.1,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="h-full"
                      >
                        <ProjectCard 
                          project={project}
                          noBackground
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation Arrows */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-4">
                  <motion.button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      currentPage === 0
                        ? 'text-zinc-400 cursor-not-allowed'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                    }`}
                    aria-label="Previous projects"
                  >
                    <HiChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.span 
                    className="text-sm text-zinc-600 dark:text-zinc-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {currentPage + 1} of {totalPages}
                  </motion.span>
                  <motion.button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      currentPage === totalPages - 1
                        ? 'text-zinc-400 cursor-not-allowed'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                    }`}
                    aria-label="Next projects"
                  >
                    <HiChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              )}
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
        slides={[
          { src: project.image, alt: project.imageAlt || project.title },
          ...project.gallery.map((image, index) => ({ 
            src: image,
            alt: project.galleryAlt?.[index] || `Gallery image ${index + 1}`
          }))
        ]}
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