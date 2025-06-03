export default {
  name: 'offering',
  title: 'Offering/Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    },
    {
      name: 'testimonialAuthor',
      title: 'Testimonial Author',
      type: 'string',
    },
    {
      name: 'testimonialAuthorTitle',
      title: 'Testimonial Author Title',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
} 