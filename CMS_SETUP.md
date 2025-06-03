# CMS Setup with Sanity

This project now includes Sanity CMS integration for easy content management.

## Setup Instructions

### 1. Get Your Sanity Project ID
1. Go to [sanity.io](https://sanity.io) and log into your account
2. Create a new project or use an existing one
3. Copy your **Project ID** from the project dashboard

### 2. Configure Environment Variables
1. Create a `.env.local` file in your project root:
```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

2. Replace `your_project_id_here` with your actual Sanity Project ID

### 3. Update Sanity Config
1. Open `sanity.config.js`
2. Replace `YOUR_PROJECT_ID` with your actual Sanity Project ID

### 4. Initialize Sanity Studio
Run the Sanity studio locally:
```bash
npm run sanity
```

The studio will be available at `http://localhost:3333`

### 5. Import Your Existing Data
You can manually add your current site data through the Sanity Studio interface, or create a migration script.

## What You Can Edit Through CMS

### Site Settings
- Site title and descriptions
- Contact information
- Social media links
- About sections

### Navigation
- Add/edit/reorder navigation menu items
- Manage page links

### Projects
- Add portfolio projects
- Upload project images
- Manage project descriptions
- Add technology tags
- Set featured projects

### Services/Offerings
- Edit service descriptions
- Upload service images
- Manage testimonials per service

### Testimonials
- Add client testimonials
- Upload client photos
- Set featured testimonials

### Experience/Education
- Add work experience
- Add education entries
- Manage descriptions and dates

## Usage

### Running the CMS Studio
```bash
npm run sanity
```

### Running Your Next.js Site
```bash
npm run dev
```

### Updating Your Components
Your existing components will need to be updated to fetch data from Sanity instead of the static `siteMetadata.js` file. 

For example, to use site settings in a component:
```javascript
import { getSiteSettings } from '../lib/sanity-queries'

export async function getStaticProps() {
  const siteSettings = await getSiteSettings()
  
  return {
    props: {
      siteSettings,
    },
    revalidate: 60, // Revalidate every minute
  }
}
```

## Content Structure

The CMS includes the following content types:
- **Site Settings**: Global site information
- **Navigation Links**: Menu items
- **Projects**: Portfolio projects with images and details
- **Offerings**: Services with testimonials
- **Testimonials**: Client feedback
- **Experience**: Work and education history

Each content type can be managed independently through the Sanity Studio interface. 