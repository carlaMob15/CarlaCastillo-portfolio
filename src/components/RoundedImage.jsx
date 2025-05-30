import OptimizedImage from './OptimizedImage'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export function RoundedImage({ alt, className, ...props }) {
  return (
    <div className={clsx('overflow-hidden rounded-lg bg-slate-100', className)}>
      <OptimizedImage
        className="object-cover"
        alt={alt}
        {...props}
        quality={85}
      />
    </div>
  )
}

RoundedImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
} 