export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Testimonial Comment',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorTitle',
      title: 'Author Title/Position',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
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
      name: 'imageAttribution',
      title: 'Image Attribution',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Mark as featured to display prominently',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'authorTitle',
      media: 'authorImage'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `${title}${subtitle ? ` - ${subtitle}` : ''}`,
        subtitle: 'Testimonial'
      }
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    },
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [
        {field: '_createdAt', direction: 'desc'}
      ]
    }
  ]
} 