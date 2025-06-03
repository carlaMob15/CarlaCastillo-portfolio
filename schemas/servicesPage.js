export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Hero Section
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    
    // Services Section
    {
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text',
            },
            {
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'UX & UI Design', value: 'uxui' },
                  { title: 'Design Systems', value: 'systems' },
                  { title: 'Product & Platform', value: 'product' },
                  { title: 'Frontend-Aware', value: 'frontend' },
                  { title: 'Creativity & Fun', value: 'creativity' },
                  { title: 'Custom', value: 'custom' }
                ]
              }
            },
            {
              name: 'customIcon',
              title: 'Custom Icon (SVG)',
              type: 'text',
              description: 'Paste SVG code here if using custom icon',
              hidden: ({ parent }) => parent?.iconType !== 'custom'
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
            },
          ],
          preview: {
            select: {
              title: 'title',
              order: 'order'
            },
            prepare({ title, order }) {
              return {
                title: title,
                subtitle: `Order: ${order || 'Not set'}`
              }
            }
          }
        }
      ]
    },
    
    // Testimonials Section
    {
      name: 'testimonialsTitle',
      title: 'Testimonials Section Title',
      type: 'string',
      description: 'Leave empty to hide testimonials section',
    },
    {
      name: 'showTestimonials',
      title: 'Show Testimonials Section',
      type: 'boolean',
      description: 'Toggle to show/hide testimonials on services page',
      initialValue: true,
    },
    {
      name: 'testimonialsToShow',
      title: 'Testimonials to Display',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }]
        }
      ],
      description: 'Select specific testimonials to show, or leave empty to show all featured testimonials',
      hidden: ({ parent }) => !parent?.showTestimonials
    },
    
    // How We Work Section
    {
      name: 'howWeWorkTitle',
      title: 'How We Work Title',
      type: 'string',
    },
    {
      name: 'howWeWorkDescription',
      title: 'How We Work Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'howWeWorkImage',
      title: 'How We Work Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    
    // About Section
    {
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'aboutMainImage',
      title: 'About Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'aboutSecondaryImages',
      title: 'About Secondary Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        }
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Services Page',
        subtitle: 'Page Content'
      }
    }
  }
} 