export default {
  name: 'navigationLink',
  title: 'Navigation Link',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Link Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      title: 'Link URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which this link appears in navigation',
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