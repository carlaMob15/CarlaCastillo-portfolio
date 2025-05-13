import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LifeBeyondDesign() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl mb-6 text-left">
          Life Beyond Design
        </h2>
        <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300 mb-12 text-left">
          When I'm not designing, you'll find me exploring new recipes in the kitchen, getting lost in a good book, or practicing one of my many languages. Most importantly, I'm a proud mom and wife—my family inspires me and reminds me that simplicity matters, which guides me to create designs that make the digital world more accessible for everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          <div className="w-48 h-48 bg-neutral-300 rounded-2xl" />
          <div className="w-48 h-48 bg-neutral-300 rounded-2xl" />
          <div className="w-48 h-48 bg-neutral-300 rounded-2xl" />
        </div>
      </div>
    </section>
  )
} 