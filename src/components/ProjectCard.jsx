import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ArrowIcon = () => (
  <svg
    className="w-6 h-6"
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

export function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800/50"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          variants={{
            hover: {
              scale: 1.05,
            }
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      
      <Link 
        href={`/projects/${project.slug}`}
        className="relative z-10 flex flex-col h-full"
      >
        <div className="flex-1 p-6">
          <motion.div
            variants={{
              hover: {
                y: -8,
              }
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex items-center space-x-2 text-white"
          >
            <span className="text-sm font-medium opacity-60">View Project</span>
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

        <motion.div
          variants={{
            hover: {
              y: 0,
            }
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative p-8 pt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-white/80 line-clamp-2">{project.shortDescription}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
} 