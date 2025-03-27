import { Fragment, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from './Container'
import avatarImage from '../images/avatar.jpg'
import siteMetadata from '../data/siteMetadata'

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'relative py-3 px-4 text-sm transition-colors duration-300',
        isActive
          ? 'text-primary-500'
          : 'text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400'
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-x-1 -bottom-px h-px bg-primary-500"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )
}

function MobileNavItem({ href, children, onClick }) {
  let isActive = useRouter().pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'block py-4 text-base transition-colors duration-300',
        isActive
          ? 'text-primary-500'
          : 'text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400'
      )}
    >
      {children}
    </Link>
  )
}

function MobileNav() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur dark:bg-neutral-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        aria-label="Toggle Menu"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 stroke-neutral-900 dark:stroke-neutral-200"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            as={motion.div}
            static
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={isOpen}
            onClose={setIsOpen}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <Dialog.Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white px-6 py-4 dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <Image
                    src={avatarImage}
                    alt=""
                    className="h-9 w-9 rounded-full"
                    width={36}
                    height={36}
                  />
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {siteMetadata.author}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label="Close Menu"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 text-neutral-900 dark:text-neutral-200"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="mt-8">
                <div className="flex flex-col">
                  {siteMetadata.siteNavLinks.map((link) => (
                    <MobileNavItem
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </MobileNavItem>
                  ))}
                </div>
              </nav>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-1">
        {siteMetadata.siteNavLinks.map((link) => (
          <li key={link.href}>
            <NavItem href={link.href}>{link.name}</NavItem>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80"
    >
      <Container className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={avatarImage}
              alt=""
              className="h-9 w-9 rounded-full"
              width={36}
              height={36}
            />
            <span className="font-semibold text-neutral-900 dark:text-white">
              {siteMetadata.author}
            </span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </motion.header>
  )
}
