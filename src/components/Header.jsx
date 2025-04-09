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
        'relative text-sm transition-colors duration-300',
        isActive
          ? 'text-neutral-900 dark:text-white'
          : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
      )}
    >
      {children}
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
        'block py-4 text-base font-medium transition-all duration-300 ease-in-out',
        'hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900',
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
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-neutral-800/5 ring-1 ring-neutral-900/5 backdrop-blur transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800/90 dark:ring-white/10 dark:hover:ring-white/20"
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
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white px-6 py-4 shadow-xl dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <Link 
                  href="/" 
                  className="transition-transform duration-300 hover:scale-105" 
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {siteMetadata.headerTitle}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 transition-all duration-300 hover:bg-neutral-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:bg-neutral-800"
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
              
              {/* Mobile subtitle */}
              <div className="mt-2 mb-4">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {siteMetadata.headerSubtitle}
                </span>
              </div>
              
              <nav className="mt-4">
                <div className="flex flex-col space-y-2">
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
      <ul className="flex items-center gap-2">
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
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-[2000px] mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Name */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#6366f1] font-semibold">
                {siteMetadata.headerTitle}
              </span>
            </Link>
          </div>
          
          {/* Middle section - Subtitle */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-neutral-600 dark:text-neutral-400">
              {siteMetadata.headerSubtitle}
            </span>
          </div>
          
          {/* Right section - Navigation and Social Icons */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex items-center space-x-8">
                <li>
                  <NavItem href="/projects">Work</NavItem>
                </li>
                <li>
                  <NavItem href="/about">About</NavItem>
                </li>
                <li>
                  <NavItem href="/blog">Blog</NavItem>
                </li>
              </ul>
            </nav>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-neutral-500">
                <span className="sr-only">Behance</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V2H9v5H2v15h20V7zM9 13.5c0 .8-.7 1.5-1.5 1.5H5v2H3V7h4.5C8.3 7 9 7.7 9 8.5v5zM7 9H5v3h2V9zm12 3c0 .8-.7 1.5-1.5 1.5H15v2h-2V7h4.5c.8 0 1.5.7 1.5 1.5v3.5zm-2-2h-2v3h2v-3z"/>
                </svg>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-neutral-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-neutral-500">
                <span className="sr-only">Dribbble</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
