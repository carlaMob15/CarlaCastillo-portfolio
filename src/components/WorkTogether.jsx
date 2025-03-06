import { Container } from '@/components/Container'

const WorkTogether = () => {
  return (
    <Container className="mt-24 sm:mt-32 mb-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
          Let's work together
        </h2>
        <p className="mt-6 text-lg text-primaryText-600 dark:text-primaryText-400">
          I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primaryText-900 rounded-full hover:bg-primaryText-700 dark:bg-primaryText-100 dark:text-primaryText-900 dark:hover:bg-primaryText-200"
          >
            Contact me
          </a>
        </div>
      </div>
    </Container>
  )
}

export default WorkTogether 