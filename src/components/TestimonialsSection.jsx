import Image from 'next/image'
import { urlFor } from '../../lib/sanity'

const TestimonialsSection = ({ title, testimonials, showSection = true }) => {
  // Don't render if disabled or no testimonials
  if (!showSection || !testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="w-full py-20 sm:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id || `testimonial-${index}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-indigo-500 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                {testimonial.authorImage && (
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={urlFor(testimonial.authorImage).width(64).height(64).url()}
                      alt={testimonial.authorImage.alt || testimonial.author}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.author}
                  </div>
                  {testimonial.authorTitle && (
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.authorTitle}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Featured badge */}
              {testimonial.featured && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 