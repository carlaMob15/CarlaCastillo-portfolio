import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import siteMetadata from '@/data/siteMetadata'
import { FadeIn } from '@/components/Motion'

function NavLink({ href, children }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={href}
        className="transition hover:text-primary-500 dark:hover:text-primary-400"
      >
        {children}
      </Link>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="border-t border-neutral-100 pt-10 pb-16 dark:border-neutral-700/40">
          <Container.Inner>
            <FadeIn>
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex gap-6 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {siteMetadata.siteNavLinks.map((link) => (
                    <NavLink key={link.href} href={link.href}>
                      {link.name}
                    </NavLink>
                  ))}
                </div>
                <motion.p 
                  className="text-sm text-neutral-400 dark:text-neutral-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  &copy; {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
                </motion.p>
              </div>
            </FadeIn>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
