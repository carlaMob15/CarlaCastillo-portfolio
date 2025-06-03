export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
    },
    {
      name: 'headerSubtitle',
      title: 'Header Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'authorHeadline',
      title: 'Author Headline',
      type: 'string',
    },
    {
      name: 'authorAbout',
      title: 'About (Short)',
      type: 'text',
    },
    {
      name: 'authorAboutExtended',
      title: 'About (Extended)',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'contactTitle',
      title: 'Contact Section Title',
      type: 'string',
    },
    {
      name: 'contactSubtitle',
      title: 'Contact Section Subtitle',
      type: 'text',
    },
    {
      name: 'socials',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'github', title: 'GitHub', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'medium', title: 'Medium', type: 'url' },
        { name: 'dribbble', title: 'Dribbble', type: 'url' },
      ],
    },
    {
      name: 'siteRepo',
      title: 'Site Repository URL',
      type: 'url',
    },
    {
      name: 'featureSectionTitle',
      title: 'Feature Section Title',
      type: 'string',
    },
    {
      name: 'featureSectionDescription',
      title: 'Feature Section Description',
      type: 'text',
    },
    {
      name: 'experienceTitle',
      title: 'Experience Section Title',
      type: 'string',
    },
    {
      name: 'experienceIntro',
      title: 'Experience Section Intro',
      type: 'text',
    },
  ],
} 