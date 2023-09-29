import Header from "../../../components/header"
import matter from "gray-matter"
import fs from "fs"
import ReactMarkdown from 'react-markdown'


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    try {
        const filesInPosts = fs.readdirSync('./content/posts')
    
        const posts = filesInPosts.map(filename => {
          return {
            slug: filename.slice(0, filename.indexOf('.'))
          }
        })
    
      return posts
      } catch (error) {
        
      }
}


async function getData(slug) {
    try {
        const fileContent = matter(fs.readFileSync(`./content/posts/${slug}.md`, 'utf8'))
        let frontmatter = fileContent.data
        const markdown = fileContent.content
        return {frontmatter, markdown }
    } catch (error) {
        // console.log(error);
    }
}

export default async function Post({params}) {
  const {slug} = params
  const post = await getData(slug)

//   const otherStory = posts.filter((post) => post.topstory === true)

  return (
    <section className="w-full" data-id="1">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8" data-id="13">
      <div className="">
          <div className="lg:w-1/2 m-auto">
            <h2 className="text-xl font-bold tracking-tighter mb-4">{post?.frontmatter.title}</h2>
            <img
              alt="Top Story"
              className="w-full h-64 object-cover rounded-lg mb-4"
              height="500"
              src={post?.frontmatter.image ? `/${post?.frontmatter.image}` : `/placeholder.svg`}
              width="1000"
            />
            {/* <h3 className="text-2xl font-bold tracking-tighter mb-2">Headline for the top story</h3> */}
            <div className="post-content">
              <ReactMarkdown>
                {post?.markdown}
              </ReactMarkdown>
            </div>
            {/* <p className="text-zinc-900 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-4">{post?.markdown}</p> */}
          </div>

          {/* <div>
            <h2 className="text-2xl font-bold tracking-tighter mb-4">Other News</h2>
            <div className="space-y-6">
              <div>
                <img
                  alt="News"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-xl font-bold tracking-tighter mb-2">Headline for the news</h3>
                <p className="text-zinc-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-zinc-400 mb-2">
                  Summary for the news. This is a brief description of the news.
                </p>
                <Link
                  className="inline-flex h-8 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Read more
                </Link>
              </div>
              <div>
                <img
                  alt="News"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <h3 className="text-xl font-bold tracking-tighter mb-2">Headline for the news</h3>
                <p className="text-zinc-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-zinc-400 mb-2">
                  Summary for the news. This is a brief description of the news.
                </p>
                <Link
                  className="inline-flex h-8 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                  href="#"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </section>
  )
}
