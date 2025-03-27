import Link from 'next/link'
import { Container } from './Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from './SocialIcons'
import siteMetadata from '../data/siteMetadata'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-neutral-500 transition group-hover:fill-neutral-600 dark:fill-neutral-400 dark:group-hover:fill-neutral-300" />
    </Link>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-neutral-600 dark:hover:text-neutral-300"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-neutral-100 pb-16 pt-10 dark:border-neutral-700">
          <Container>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {siteMetadata.siteNavLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <div className="flex gap-6">
                {siteMetadata.socials.twitter && (
                  <SocialLink
                    href={siteMetadata.socials.twitter}
                    aria-label="Follow on Twitter"
                    icon={TwitterIcon}
                  />
                )}
                {siteMetadata.socials.github && (
                  <SocialLink
                    href={siteMetadata.socials.github}
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                )}
                {siteMetadata.socials.linkedin && (
                  <SocialLink
                    href={siteMetadata.socials.linkedin}
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  />
                )}
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">
                &copy; {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
              </p>
            </div>
          </Container>
        </div>
      </Container>
    </footer>
  )
}
