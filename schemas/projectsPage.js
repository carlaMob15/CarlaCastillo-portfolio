export default {
  name: 'projectsPage',
  title: 'Projects Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'text',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Optional: Override the page title for SEO purposes',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search engines',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Projects Page',
        subtitle: 'Page Content'
      }
    }
  }
} 