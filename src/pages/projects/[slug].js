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

  const nextProject = projectsData[(projectsData.findIndex((p) => p.slug === slug) + 1) % projectsData.length];

  return (
    <>
      <Head>
        <title>{project.title} - Project Details</title>
        <meta name="description" content={project.description} />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl text-zinc-100">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <Container className="mt-16 sm:mt-32">
        {/* Project Overview */}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Project Overview
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {project.overview}
            </p>
          </div>
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                CLIENT
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.client || 'Personal Project'}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                TIMELINE
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.timeline || '2024'}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                TECHNOLOGIES
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              The Challenge
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {project.challenge || 'Description of the challenges faced during the project development.'}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              The Solution
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {project.solution || 'Description of how the challenges were addressed and solved.'}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Key Features
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
              >
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  Feature {index + 1}
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Project Gallery
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {project.gallery?.map((image, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-24 mb-16">
          <div className="group relative h-[50vh] w-full overflow-hidden rounded-2xl">
            <Image
              src={nextProject.image}
              alt={nextProject.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-medium text-zinc-100">Next Project</p>
                <h3 className="mt-2 text-3xl font-bold text-white">
                  {nextProject.title}
                </h3>
                <button
                  onClick={() => router.push(`/projects/${nextProject.slug}`)}
                  className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Work Together Section */}
      <WorkTogether />
    </>
  );
} 