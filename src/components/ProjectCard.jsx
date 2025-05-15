import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const ArrowIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="rgb(99,102,241)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-500 ease-out"
    />
  </svg>
)

export function ProjectCard({ project, className, noBackground }) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={clsx(
        "group relative overflow-hidden rounded-2xl",
        noBackground
          ? "bg-transparent"
          : "bg-white dark:bg-neutral-900",
        "transition-all duration-500",
        "focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-900",
        className
      )}
      role="article"
    >
      <Link 
        href={`/projects/${project.slug}`}
        className="block relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
        aria-label={`View project: ${project.title}`}
      >
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0">
            <Link 
              href={`/projects/${project.slug}`}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all duration-500 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(99,102,241)] focus:ring-offset-2"
              aria-label={`View project details: ${project.title}`}
            >
              <ArrowIcon className="stroke-[rgb(99,102,241)] transition-all duration-500 ease-out transform group-hover:-rotate-45" />
            </Link>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <span 
          className="text-sm font-medium text-neutral-500 dark:text-neutral-400 block mb-2 transition-colors duration-300 group-hover:text-[rgb(99,102,241)]"
          aria-label={`Project type: ${project.projectType || project.category || project.client}`}
        >
          {project.projectType ? (
            <span className="flex flex-wrap gap-2">
              {project.projectType.split(',').map((type, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                >
                  {type.trim()}
                </span>
              ))}
            </span>
          ) : (
            project.category || project.client
          )}
        </span>
        <div className="flex items-center justify-between">
          <Link 
            href={`/projects/${project.slug}`}
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-[rgb(99,102,241)] focus:ring-offset-2 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-[rgb(99,102,241)] transition-colors duration-300">
              {project.title}
            </h3>
          </Link>
        </div>
        <p 
          className="text-neutral-600 dark:text-neutral-400 mt-2 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
          aria-label={`Project description: ${project.shortDescription || project.description}`}
        >
          {project.shortDescription || project.description}
        </p>
      </div>
    </motion.div>
  )
} 