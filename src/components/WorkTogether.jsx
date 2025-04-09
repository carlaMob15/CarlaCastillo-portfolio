import { motion } from 'framer-motion'
import { Container } from './Container'
import siteMetadata from '../data/siteMetadata'

export default function WorkTogether() {
  return (
    <Container className="mt-24 sm:mt-32 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl bg-primary-500 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0.5, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-500/50 to-primary-400/30"
          />
        </div>
        
        <div className="relative px-6 py-16 sm:px-12 md:px-16 md:py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Let's start creating together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80"
            >
              Ready to bring your vision to life? Let's collaborate and create something extraordinary.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${siteMetadata.email}`}
                className="rounded-full bg-white px-6 sm:px-8 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-white/90 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              >
                Let's talk
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
} 