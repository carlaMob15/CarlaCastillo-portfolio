import { motion } from 'framer-motion'
import { PageSEO } from '../components/SEO'
import { SimpleLayout } from '../components/SimpleLayout'
import ContactPurpleBlock from '../components/ContactPurpleBlock'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  return (
    <>
      <PageSEO 
        title="Work"
        description="Work samples and case studies showcasing my expertise in design and development"
      />
      <SimpleLayout>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mb-8">
          Work
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          Our Work – UX/UI Projects Across Web, Mobile & SaaS
        </p>
        <Container.Grid 
          cols={1} 
          smCols={1} 
          mdCols={2} 
          lgCols={2} 
          gap={8}
          className="mx-auto max-w-7xl"
        >
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
            />
          ))}
        </Container.Grid>
      </SimpleLayout>
      <Container>
        <ContactPurpleBlock className="mt-24 sm:mt-32 mb-16" />
      </Container>
    </>
  )
}
