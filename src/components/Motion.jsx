import { motion } from 'framer-motion'

export const FadeIn = ({ children, delay = 0, duration = 0.5, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const FadeInStagger = ({ children, staggerDelay = 0.1, ...props }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, delay = 0, duration = 0.5, ...props }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration,
      delay,
      ease: [0.4, 0, 0.2, 1],
    }}
    {...props}
  >
    {children}
  </motion.div>
)

export const SlideIn = ({ children, direction = 'up', delay = 0, duration = 0.5, ...props }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
} 