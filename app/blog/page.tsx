import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Carla Castillo',
  description: 'Thoughts, ideas, and insights about software development and technology.',
}

const placeholderPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: 'Some nice intro text goes here',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: 'December 2024',
}))

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 pt-16 flex-1">
        <h1 className="text-4xl font-bold mb-12">Blog posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {placeholderPosts.map((post) => (
            <div key={post.id} className="flex items-start gap-6">
              <div className="w-32 h-20 bg-gray-300 rounded-md flex-shrink-0" />
              <div>
                <div className="font-semibold mb-1">{post.title}</div>
                <div className="text-gray-500 mb-2 text-sm">{post.excerpt}</div>
                <div className="text-gray-400 text-xs">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#635BFF] rounded-3xl max-w-5xl mx-auto mt-24 mb-8 py-20 px-6 flex flex-col items-center text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform your ideas<br />into intuitive experiences</h2>
        <p className="mb-8 max-w-xl mx-auto text-base md:text-lg">
          Have a project in mind? Let's talk about it. I'm available for new opportunities and eager to tackle fresh design challenges.
        </p>
        <button className="bg-white text-[#635BFF] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">Get in touch</button>
      </div>
    </div>
  )
} 