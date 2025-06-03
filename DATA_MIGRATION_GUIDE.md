# Data Migration Guide

## 🎯 **Goal:** Move your current content to Sanity while keeping everything working

Your site now has **smart fallbacks** - it will use Sanity data when available, but fall back to your current content if Sanity is empty.

## 📋 **Step-by-Step Migration**

### **Step 1: Site Settings**
Go to **http://localhost:3333** → Click **"Site Settings"** → **"Create"**

Copy this data from your current site:

```
Site Title: "Web Creativity Studio | Thoughtful UX & UI Design"
Header Title: "Web Creativity Studio"
Header Subtitle: "Senior UX/UI Designer"
Description: "Web Creativity Studio helps brands, artists, and founders solve complex problems through beautiful, thoughtful digital design. We craft websites, web apps, and SaaS platforms with clean UI, smart UX, and clarity at the core."
Author Headline: "Senior UX/UI Designer, passionate about creating beautiful digital experiences"
Email: "wcwebcreativity@gmail.com"
Phone: "+44 (0) 123 456 7890"
Contact Title: "Let's Work Together"
Contact Subtitle: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through the contact form below."

Social Links:
- LinkedIn: "https://www.linkedin.com/company/wcwebcreativity/"
- Dribbble: "https://dribbble.com/wcwebcreativity"
- Medium: "https://medium.com/@wcwebcreativity"

Site Repo: "https://github.com/carlaMob15/nextjs-tailwind-portfolio"
```

**Click "Publish"**

### **Step 2: Navigation Links**
Click **"Navigation Link"** → **"Create"** for each:

1. **First Link:**
   - Name: "Work"
   - URL: "/projects"
   - Order: 1
   - **Publish**

2. **Second Link:**
   - Name: "Services"
   - URL: "/services"
   - Order: 2
   - **Publish**

3. **Third Link:**
   - Name: "Contact"
   - URL: "/contact"
   - Order: 3
   - **Publish**

### **Step 3: Home Page Content**
Click **"Home Page"** → **"Create"**

#### **Animated Phrases Section:**
Add each phrase (click "Add Item" for each):

**Phrase 1:**
- Phrase: "In a world where brilliant is boring..."
- Order: 1

**Phrase 2:**
- Phrase: `Make <span style='color: rgb(99 102 241)'>boring brilliant</span>`
- Order: 2

**Phrase 3:**
- Phrase: `Thoughtful digital products, built with purpose<span style='color: rgb(99 102 241)'>.</span>`
- Order: 3

#### **Page Content:**
```
Scroll Cue Text: "Scroll to explore"
Hero Title: "Design that makes sense"
Hero Description: "At Web Creativity Studio, we help brands, artists, and founders solve complex problems through beautiful, thoughtful digital design. From websites to web apps and SaaS platforms, we craft intuitive experiences that turn complexity into clarity."
Featured Work Title: "Featured Work"
Featured Work Description: (leave empty)
```

**Click "Publish"**

### **Step 4: Projects Page**
Click **"Projects Page"** → **"Create"**

```
Page Title: "Work"
Page Description: "Our Work – UX/UI Projects Across Web, Mobile & SaaS"
SEO Title: "Work" 
SEO Description: "Work samples and case studies showcasing my expertise in design and development"
```

**Click "Publish"**

### **Step 5: Project Migration Example - OSD Website Redesign**
Click **"Project"** → **"Create"**

```
Title: "OSD Website Redesign"
Generate Slug: Click "Generate" button (will create: osd-website-redesign)

Description: "A complete redesign of OSD's healthcare website, improving accessibility, navigation, and user experience across devices."

Long Description: 
"This project focused on transforming a complex healthcare website into an accessible, user-friendly platform. Working closely with OSD's team, we redesigned the information architecture, improved navigation flows, and ensured compliance with healthcare accessibility standards.

Key challenges included simplifying medical terminology for patients while maintaining clinical accuracy, creating intuitive patient portals, and designing responsive interfaces that work seamlessly across all devices.

The result was a 40% improvement in user engagement and significantly better accessibility scores, making healthcare information more accessible to all users."

Technologies: 
- "Website"
- "B2C" 
- "Healthcare"
- "Accessibility"
- "Responsive Design"

Featured: ✓ Check this box
Order: 1
Live URL: (leave empty if not available)
GitHub URL: (leave empty)
```

**Upload Images:**
- Main Image: Upload your main project screenshot
- Gallery: Add 2-3 additional screenshots showing different pages/features

**Click "Publish"**

### **Step 6: Services Page Content**
Click **"Services Page"** → **"Create"**

#### **Hero Section:**
```
Hero Title: "Clean, Inclusive, Human-Centred Design"
Hero Description: 
"Web Creativity Studio is a UK-based creative studio led by Carla Castillo, a Senior Product UX/UI Designer passionate about functional, inclusive, user-centred design.

We collaborate with clients across the UK and Europe to craft intuitive websites and apps, digital products, and visual identities that connect — and make a lasting impact."
```

#### **Services Section:**
```
Services Section Title: "What we do"
```

Add each service (click "Add Item" for each):

**Service 1:**
- Title: "UX & UI Design"
- Description: "We design digital experiences that are clear, functional, and visually engaging — tailored for real users on web and mobile."
- Icon Type: "UX & UI Design"
- Order: 1

**Service 2:**
- Title: "Design Systems & Accessibility"
- Description: "From scalable design systems to accessible components, we help teams build consistent, inclusive experiences that are easy to maintain and use."
- Icon Type: "Design Systems"
- Order: 2

**Service 3:**
- Title: "Product & Platform Design"
- Description: "We specialise in UX/UI for SaaS, B2B, and e-commerce products — helping turn complex functionality into simple, intuitive interfaces."
- Icon Type: "Product & Platform"
- Order: 3

**Service 4:**
- Title: "Frontend-Aware Design"
- Description: "We understand how digital products are built. Our designs are created with development in mind — meaning fewer handoff headaches and better implementation."
- Icon Type: "Frontend-Aware"
- Order: 4

**Service 5:**
- Title: "Creativity & Fun at Heart"
- Description: "We like to work with teams to learn and explore new ideas together while having fun — because work doesn't have to be serious to be successful."
- Icon Type: "Creativity & Fun"
- Order: 5

#### **How We Work Section:**
```
How We Work Title: "How We Work"
How We Work Description:
"Design should feel effortless for the user — but getting there takes collaboration, curiosity, and clarity.

We start each project by understanding your goals, mapping out real user journeys, and sketching ideas by hand. From there, we iterate, prototype, and refine until the experience feels just right."
```
Upload the sketch image (`/images/services/Sketch.jpg`)

#### **About Section:**
```
About Section Title: "About Carla"
About Description:
"I'm a Senior Product UX/UI Designer originally from Panama, now based in the UK.

My path into design began by exploring how things work under the hood. I started my career as a front-end designer before moving into design fully — a journey that gave me a strong foundation for creating practical, buildable solutions.

Over the years, I've worked with start-ups, studios, and organisations across Italy, Germany, and the UK — shaping digital products and strategies that put people first. While I enjoy the full design process, I have a particular love for visual design (UI) and inclusive systems that scale.

And although I spend my days in the digital world, I still start every project the old-school way: pen and paper first, always.

When I'm not designing, you'll probably find me experimenting in the kitchen, learning a new language, or chasing after my daughter.

My family is at the centre of everything I do. They remind me daily that simplicity matters — and that maintaining a healthy work/life balance is key to showing up as my best self in both worlds."
```

Upload images:
- About Main Image: `/images/services/Carla.jpg`
- About Secondary Images: `/images/services/Familia.jpg` and `/images/services/carla-sketch.jpg`

**Click "Publish"**

## ✅ **Testing Your Migration**

1. **Before adding to Sanity:**
   - Your site shows current content (fallback)

2. **After adding to Sanity:**
   - Go to http://localhost:3000
   - You should see the same content, but now it's coming from Sanity!

3. **Test editing:**
   - Change something in Sanity Studio
   - Refresh your site - you should see the change

4. **Test the animation:**
   - Edit the animated phrases in "Home Page" 
   - Watch your homepage intro animation update with new text!

## 🎉 **What You've Achieved**

- ✅ **Current site still works** perfectly
- ✅ **All content now editable** through Sanity Studio (Home, Services, Projects pages!)
- ✅ **Animation text is CMS-controlled** - edit those intro phrases anytime!
- ✅ **Projects are manageable** - easy to add, edit, and reorder
- ✅ **Future-proof** - you can edit anything without touching code
- ✅ **Ready for deployment** with automatic updates

## 🚀 **Next Steps**

Once migration is complete:
1. **Deploy to Vercel** (your studio will be at `/studio`)
2. **Set up webhook** for automatic updates
3. **Edit content anytime** through Sanity Studio
4. **Add new projects** easily through the CMS
5. **Update animation text** for seasonal campaigns or new messaging

Your site is now **fully CMS-powered** including the beautiful intro animation! 🎯 