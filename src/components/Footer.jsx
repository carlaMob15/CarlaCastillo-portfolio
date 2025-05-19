import Link from 'next/link'
import { Container } from './Container'
import siteMetadata from '../data/siteMetadata'

export function Footer() {
  return (
    <footer className="mt-32">
      <div className="w-full bg-white dark:bg-neutral-900">
        <div className="max-w-[2000px] mx-auto px-8">
          <div className="flex h-16 items-center justify-center">
            <p className="text-sm text-neutral-400 transition-colors duration-300 dark:text-neutral-500">
              &copy; {new Date().getFullYear()} Carla Castillo Digital Ltd t/a Web Creativity Studio. Company number: 16000458. Registered in England and Wales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
