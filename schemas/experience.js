export default {
  name: 'experience',
  title: 'Experience/Education',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Work Experience', value: 'work'},
          {title: 'Education', value: 'education'},
        ]
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Job Title / Degree',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company / School Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'string',
    },
    {
      name: 'current',
      title: 'Current Position',
      type: 'boolean',
      description: 'Check if this is your current position',
    },
    {
      name: 'typeofDegree',
      title: 'Type of Degree',
      type: 'string',
      hidden: ({parent}) => parent?.type !== 'education',
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