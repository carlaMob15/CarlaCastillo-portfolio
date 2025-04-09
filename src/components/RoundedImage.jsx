import Image from 'next/image'
import clsx from 'clsx'

export function RoundedImage({ className, alt = '', ...props }) {
  return (
    <div className={clsx('overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800', className)}>
      <Image
        {...props}
        alt={alt}
        className={clsx('object-cover transition-all duration-300', props.className)}
      />
    </div>
  )
} 