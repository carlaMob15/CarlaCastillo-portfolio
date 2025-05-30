import Image from 'next/image'
import PropTypes from 'prop-types'

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  quality = 85,
  sizes = "100vw",
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
        '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/></svg>'
      ).toString('base64')}`}
      {...props}
    />
  )
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
  quality: PropTypes.number,
  sizes: PropTypes.string,
}

export default OptimizedImage 