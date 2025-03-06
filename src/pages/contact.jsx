import emailjs from '@emailjs/browser'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { RiPhoneLine, RiMailLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // handle first name change
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  // handle last name change
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  // handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // handle phone change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  // handle subject change
  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  // handle message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhone('')
          setSubject('')
          setMessage('')
        },
        (err) => {
          console.log('FAILED...', err)
        }
      )
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: siteMetadata.socials.linkedin,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: siteMetadata.socials.github,
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Contact - {siteMetadata.author}</title>
        <meta name="description" content="Contact" />
      </Head>
      {/* Header */}
      <div className="pt-24 pb-8 lg:pt-32">
        <div className="relative z-10 pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl lg:text-6xl">
            {siteMetadata.contactTitle}
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-primaryText-500">
            {siteMetadata.contactSubtitle}
          </p>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative" aria-labelledby="contact-heading">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow-xl dark:bg-slate-900">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative px-6 py-10 overflow-hidden rounded-lg bg-gradient-to-b from-accent-500 to-accent-600 sm:px-10 xl:p-12">
                {/* Decorative angle backgrounds */}
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white dark:text-slate-800">
                  Contact information
                </h3>
                <p className="max-w-3xl mt-6 text-base text-white dark:text-slate-800">
                  Please contact me with any questions or comments you may have.
                  You can also schedule a service through the form below.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-white dark:text-slate-800">
                    <RiPhoneLine
                      className="flex-shrink-0 w-6 h-6 text-accent-200 dark:text-slate-800"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{siteMetadata.phoneNumber}</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-white dark:text-slate-800">
                    <RiMailLine
                      className="flex-shrink-0 w-6 h-6 text-accent-200 dark:text-slate-800"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{siteMetadata.email}</span>
                  </dd>
                </dl>
                <ul role="list" className="flex mt-8 space-x-12">
                  {socialLinks
                    .filter(link => link.href) // Only show links that have an href
                    .map((link) => (
                      <li key={link.name}>
                        <Link
                          className="text-accent-200 hover:text-accent-100 dark:text-slate-800 dark:hover:text-slate-700"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{link.name}</span>
                          <link.icon className="h-7 w-7" aria-hidden="true" />
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Contact form */}
              <div className="px-6 py-10 bg-white rounded-lg dark:bg-slate-900 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-primaryText-800 dark:text-primaryText-100">
                  Send me a message
                </h3>
                {/* //TODO handle submit */}
                <form
                  onSubmit={handleOnSubmit}
                  method="POST"
                  className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        value={firstName}
                        onChange={handleFirstNameChange}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        value={lastName}
                        onChange={handleLastNameChange}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        value={email}
                        onChange={handleEmailChange}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-optional"
                        className="text-sm text-primaryText-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        value={phone}
                        onChange={handlePhoneChange}
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        value={subject}
                        onChange={handleSubjectChange}
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primaryText-800 dark:text-primaryText-100"
                      >
                        Message
                      </label>
                      <span
                        id="message-max"
                        className="text-sm text-primaryText-500"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        onChange={handleMessageChange}
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-4 py-3 rounded-md shadow-sm border-primaryText-100 text-primaryText-800 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700/40 dark:bg-slate-800 dark:text-primaryText-100"
                        aria-describedby="message-max"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
