import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      aria-hidden="true" 
      className="transition-transform duration-300 group-hover:translate-x-1" 
      {...props}
    >
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={clsx(
        'group relative flex flex-col items-start transition-all duration-300',
        'hover:translate-y-[-2px] focus-within:translate-y-[-2px]',
        'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-neutral-900',
        className
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute z-0 transition-all duration-300 scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-neutral-200/50 group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
  return (
    <Component className="text-base font-semibold tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-10 mt-2 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-300">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 flex items-center mt-4 text-sm font-medium text-primary-500 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400"
    >
      {children}
      <ChevronRightIcon className="w-4 h-4 ml-1 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-500 dark:text-neutral-500 dark:group-hover:text-neutral-400',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-neutral-200 transition-colors duration-300 group-hover:bg-neutral-300 dark:bg-neutral-500 dark:group-hover:bg-neutral-400" />
        </span>
      )}
      {children}
    </Component>
  )
}
