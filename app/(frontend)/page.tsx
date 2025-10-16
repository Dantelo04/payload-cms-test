import { getPayload } from "payload";
import buildConfig from "../../payload.config";
import { BlocksRenderer } from "../../components/blocks-renderer";
import Link from "next/link";

export default async function Home() {
  const payload = await getPayload({
    config: buildConfig,
  })
  
  const pages = await payload.find({
    collection: 'pages',
    limit: 10,
  })

  const blogs = await payload.find({
    collection: 'blogs',
    limit: 3,
  })

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Payload CMS Demo</h1>
            <div className="flex gap-4">
              <Link 
                href="/admin/collections/pages" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Manage Pages
              </Link>
              <Link 
                href="/admin/collections/blogs" 
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Manage Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Render all pages with their blocks */}
      {pages.docs.length > 0 ? (
        pages.docs.map((page) => (
          <BlocksRenderer key={page.id} page={page} />
        ))
      ) : (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Pages Yet</h2>
            <p className="text-gray-600 mb-6">Create your first page with custom blocks to get started!</p>
            <Link 
              href="/admin/collections/pages/create" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your First Page
            </Link>
          </div>
        </div>
      )}

      {/* Blogs section */}
      {blogs.docs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.docs.map((blog) => (
                <div key={blog.id} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                  <div className="text-gray-600 text-sm mb-4">
                    By {typeof blog.author === 'object' ? blog.author?.email : 'Unknown Author'}
                  </div>
                  <div className="text-gray-700 line-clamp-3">
                    {/* Simple text preview - you could use RichTextConverter here if needed */}
                    {typeof blog.content === 'object' && blog.content.root?.children 
                      ? blog.content.root.children
                          .filter((child: any) => child.type === 'paragraph')
                          .slice(0, 1)
                          .map((child: any) => 
                            child.children?.map((textChild: any) => textChild.text).join('')
                          ).join('')
                      : 'No content preview available'
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/admin/collections/blogs" 
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                View All Blogs
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}