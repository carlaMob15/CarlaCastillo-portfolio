import { PageSEO } from '../components/SEO';
import siteMetadata from '../data/siteMetadata';
import ContactPurpleBlock from '../components/ContactPurpleBlock';

export default function ContactPage() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen flex flex-col justify-center items-center">
        <ContactPurpleBlock className="w-full" />
      </div>
    </>
  );
}
