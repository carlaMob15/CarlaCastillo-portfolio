import { motion } from 'framer-motion'
import { Container } from '@/components/Container'

export default function LifeBeyondDesign() {
  return (
    <Container className="mt-24 sm:mt-32 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800/50"
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0.5, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 via-neutral-100/30 to-neutral-50/20 dark:from-neutral-800/50 dark:via-neutral-700/30 dark:to-neutral-600/20"
          />
        </div>
        
        <div className="relative px-8 py-24 sm:px-16 sm:py-32">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                Life Beyond Design
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">
                When I'm not designing, you'll find me exploring new recipes in the kitchen, getting lost in a good book, or practicing one of my many languages. Most importantly, I'm a proud mom and wife—my family inspires me and reminds me that simplicity matters, which guides me to create designs that make the digital world more accessible for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
} 