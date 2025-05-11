import siteMetadata from '../data/siteMetadata';

export default function ContactCTA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl shadow-xl bg-gradient-to-br from-indigo-500 to-blue-500 p-16 min-h-[500px] text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Let's start creating together
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
        Ready to bring your vision to life? Let's collaborate and create something extraordinary.
      </p>
      <a
        href={`mailto:${siteMetadata.email}`}
        className="bg-white text-indigo-600 font-semibold rounded-full px-8 py-4 text-lg shadow hover:bg-indigo-50 transition-colors"
      >
        Let's talk
      </a>
    </div>
  );
} 