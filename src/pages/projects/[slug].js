import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Container } from '../../components/Container';
import { ProjectCarousel } from '../../components/ProjectCarousel';
import WorkTogether from '../../components/WorkTogether';
import { projectsData } from '../../data/projectsData';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
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
        {/* Project Header */}
        <motion.div 
          className="max-w-3xl space-y-8 mb-16 md:mb-24"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="space-y-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">
              {project.category || 'Project'}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
          </div>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4">
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

        {/* Project Overview */}
        <motion.div 
          className="max-w-3xl mx-auto space-y-16 md:space-y-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight">Project Overview</h2>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>
          </div>

          {/* Project Features */}
          <div className="space-y-16 md:space-y-24">
            <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
            {project.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden">
                  <Image
                    src={`https://picsum.photos/1600/900?random=${index + 20}`}
                    alt={`Feature ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 1200px, 100vw"
                  />
                </div>
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-medium mb-4">Feature {index + 1}</h3>
                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More Projects */}
        <motion.div 
          className="mt-24 md:mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">More projects</h2>
          </div>
          <ProjectCarousel
            projects={projectsData.filter(p => p.slug !== slug)}
          />
        </motion.div>
      </Container>

      {/* Work Together Section */}
      <WorkTogether />
    </>
  );
} 