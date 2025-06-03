export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Animated Tagline Section
    {
      name: 'animatedPhrases',
      title: 'Animated Intro Phrases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'phrase',
              title: 'Phrase',
              type: 'text',
              description: 'Use HTML for styling: <span style="color: rgb(99 102 241)">colored text</span>',
            },
            {
              name: 'order',
              title: 'Order',
              type: 'number',
            },
          ],
          preview: {
            select: {
              title: 'phrase',
              order: 'order'
            },
            prepare({ title, order }) {
              return {
                title: title?.replace(/<[^>]*>/g, ''), // Strip HTML for preview
                subtitle: `Order: ${order || 'Not set'}`
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.max(5).error('Maximum 5 phrases allowed'),
    },
    {
      name: 'scrollCueText',
      title: 'Scroll Cue Text',
      type: 'string',
      initialValue: 'Scroll to explore',
    },
    
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
      type: 'text',
    },
    
    // Featured Work Section
    {
      name: 'featuredWorkTitle',
      title: 'Featured Work Section Title',
      type: 'string',
      initialValue: 'Featured Work',
    },
    {
      name: 'featuredWorkDescription',
      title: 'Featured Work Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Home Page',
        subtitle: 'Page Content'
      }
    }
  }
} 