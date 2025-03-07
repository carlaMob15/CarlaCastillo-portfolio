import Head from 'next/head';
import siteMetadata from '@/data/siteMetadata';

export function PageSEO({ title, description }) {
  const pageTitle = title ? `${title} - ${siteMetadata.author}` : siteMetadata.title;
  const pageDesc = description || siteMetadata.description;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}

export const BlogSEO = ({ title, description, publishedAt, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="article:published_time" content={publishedAt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}; 