# Vercel Deployment Guide with Sanity CMS

## 🚀 Deploying Your Portfolio to Vercel

### **1. Environment Variables Setup**

#### In Vercel Dashboard:
1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:

```env
# Required for Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID = dvy4l5vj
NEXT_PUBLIC_SANITY_DATASET = production

# Optional: For automatic revalidation (generate a random string)
SANITY_REVALIDATE_SECRET = your_random_secret_here
```

**To generate a random secret:**
```bash
openssl rand -base64 32
```

### **2. Automatic Content Updates (Webhooks)**

#### Setting up Sanity Webhooks:
1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project (`dvy4l5vj`)
3. Go to **API** → **Webhooks**
4. Click **Create webhook**

**Webhook Configuration:**
- **Name:** Vercel Revalidation
- **URL:** `https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET`
- **Dataset:** production
- **Trigger on:** Create, Update, Delete
- **Filter:** Leave empty (or customize if needed)
- **HTTP method:** POST
- **API version:** 2021-03-25

Replace:
- `your-site.vercel.app` with your actual Vercel domain
- `YOUR_SECRET` with the secret you added to environment variables

### **3. Build Configuration**

Your site should build automatically with these settings. If you need a custom build configuration, create `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "pages/api/**/*.js": {
      "maxDuration": 10
    }
  }
}
```

### **4. Incremental Static Regeneration (ISR)**

Your pages will use ISR for optimal performance. When you update content in Sanity:

1. **Automatic:** Webhook triggers revalidation
2. **Manual:** Visit `/api/revalidate?secret=YOUR_SECRET`
3. **Fallback:** Pages automatically rebuild after 60 seconds (if configured)

### **5. Content Delivery**

#### Production Setup:
- **CDN:** Sanity images served via Sanity's global CDN
- **Caching:** Static pages cached at Vercel edge
- **Revalidation:** On-demand when content changes

#### Performance Optimizations:
```javascript
// In your lib/sanity.js, for production:
export const client = createClient({
  projectId: 'dvy4l5vj',
  dataset: 'production',
  useCdn: true, // Enable CDN for faster image delivery
  apiVersion: '2023-05-03',
})
```

### **6. Deployment Process**

#### First Deployment:
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically

#### Content Updates:
1. Edit content in Sanity Studio (http://localhost:3333)
2. Publish changes
3. Webhook automatically updates your live site
4. Changes appear within seconds

### **7. Multiple Environments**

#### For staging/preview:
```env
# Production
NEXT_PUBLIC_SANITY_PROJECT_ID = dvy4l5vj
NEXT_PUBLIC_SANITY_DATASET = production

# Preview/Staging (if needed)
NEXT_PUBLIC_SANITY_PROJECT_ID = dvy4l5vj
NEXT_PUBLIC_SANITY_DATASET = preview
```

### **8. Testing Your Setup**

1. **Deploy to Vercel**
2. **Add content in Sanity Studio**
3. **Publish changes**
4. **Check your live site** (should update automatically)

### **9. Domain Configuration**

1. In Vercel, go to **Settings** → **Domains**
2. Add your custom domain
3. Update webhook URL to use your custom domain

### **10. Monitoring**

#### Vercel Dashboard shows:
- Build logs
- Function logs
- Performance metrics
- Error tracking

#### Sanity Dashboard shows:
- Webhook delivery status
- API usage
- Content activity

## 🔧 Troubleshooting

### Common Issues:

1. **Images not loading:** Check Sanity project ID in environment variables
2. **Content not updating:** Verify webhook URL and secret
3. **Build failures:** Check environment variables are set correctly
4. **Slow loading:** Enable CDN in Sanity client configuration

### Debug Commands:
```bash
# Test Sanity connection locally
npm run dev

# Test revalidation endpoint
curl "https://your-site.vercel.app/api/revalidate?secret=YOUR_SECRET" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"_type": "siteSettings"}'
```

## ✅ Deployment Checklist

- [ ] Environment variables added to Vercel
- [ ] Webhook configured in Sanity
- [ ] Content added to Sanity Studio
- [ ] Site deployed successfully
- [ ] Automatic updates working
- [ ] Custom domain configured (if applicable)
- [ ] Performance optimized 