import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import { Container } from '@/components/Container';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import WorkTogether from '@/components/WorkTogether';
import { projectsData } from '@/data/projectsData';

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

      <Container className="pt-24 pb-32">
        {/* Project Header */}
        <div className="max-w-3xl space-y-8 mb-24">
          <div className="space-y-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              {project.category || 'Project'}
            </span>
            <h1 className="text-4xl font-bold">
              {project.title}
            </h1>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Client
              </h3>
              <p className="text-base">
                {project.client || 'Personal Project'}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Year
              </h3>
              <p className="text-base">
                {project.timeline || '2024'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Project Image */}
        <div className="relative aspect-[16/9] w-full mb-24">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Overview */}
        <div className="max-w-3xl mx-auto space-y-24">
          <div className="space-y-8">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-24">
            {project.features.map((feature, index) => (
              <div key={index} className="space-y-12">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={`https://picsum.photos/1600/900?random=${index + 20}`}
                    alt={`Feature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="max-w-2xl">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div className="mt-32">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-medium">More projects</h2>
          </div>
          <ProjectCarousel
            projects={projectsData.filter(p => p.slug !== slug)}
          />
        </div>
      </Container>

      {/* Work Together Section */}
      <WorkTogether />
    </>
  );
} 