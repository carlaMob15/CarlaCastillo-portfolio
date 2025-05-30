import OptimizedImage from './OptimizedImage'
import { siteMetadata } from '../data/siteMetadata'
import PropTypes from 'prop-types'

export function Testimonial({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
        <div className="flex-shrink-0">
          <OptimizedImage
            src={siteMetadata.testimonial.image}
            alt={siteMetadata.testimonial.author}
            width={96}
            height={96}
            className="rounded-full"
            sizes="(max-width: 768px) 96px, 96px"
            quality={85}
          />
        </div>
        <div className="mt-4 text-center md:mt-0 md:text-left">
          <blockquote className="text-lg font-medium text-gray-900 dark:text-gray-100">
            "{siteMetadata.testimonial.comment}"
          </blockquote>
          <div className="mt-4">
            <div className="text-base font-medium text-gray-900 dark:text-gray-100">
              {siteMetadata.testimonial.author}
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">
              {siteMetadata.testimonial.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  className: PropTypes.string,
}
