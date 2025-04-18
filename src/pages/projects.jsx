import { motion } from 'framer-motion'
import { PageSEO } from '../components/SEO'
import { SimpleLayout } from '../components/SimpleLayout'
import WorkTogether from '../components/WorkTogether'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  return (
    <>
      <PageSEO 
        title="Projects"
        description="Personal projects and work samples showcasing my expertise in design and development"
      />
      <SimpleLayout>
        <Container.Grid 
          cols={1} 
          smCols={1} 
          mdCols={2} 
          lgCols={2} 
          xlCols={2} 
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
      <WorkTogether />
    </>
  )
}
