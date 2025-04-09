import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const ArrowIcon = () => (
  <svg
    className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function ProjectCard({ project, className }) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={clsx(
        "group relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800/50",
        "transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-500/10",
        "focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-900",
        className
      )}
    >
      <div className="relative aspect-[16/10]">
        <motion.div
          variants={{
            hover: {
              scale: 1.05,
            },
            tap: {
              scale: 0.98,
            }
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </div>
      
      <Link 
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 flex flex-col justify-end"
      >
        <div className="relative p-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
          <div className="relative space-y-2">
            <h3 className="text-xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">{project.title}</h3>
            <p className="text-white/80 line-clamp-2 transition-opacity duration-300 group-hover:text-white/90">{project.shortDescription || project.description}</p>
            <motion.div
              variants={{
                hover: {
                  y: -4,
                }
              }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex items-center space-x-2 text-white mt-2"
            >
              <span className="text-sm font-medium opacity-60 transition-opacity duration-300 group-hover:opacity-100">View Project</span>
              <motion.div
                variants={{
                  hover: {
                    x: 4,
                  }
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <ArrowIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 