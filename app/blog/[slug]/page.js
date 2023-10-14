import Header from "../../../components/header"
import matter from "gray-matter"
import fs from "fs"
import ReactMarkdown from 'react-markdown'
import Share from "../../../components/share"
import Comment from "../../../components/comment"


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

  const url = `https://thegatewaypeople.com/blog/${slug}`

  return (
    <section className="w-full" data-id="1">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8" data-id="13">
      <div className="">
          <div className="lg:w-1/2 m-auto">
            <h2 className="text-xl font-semiboold tracking-tighter mb-2">{post?.frontmatter.title}</h2>
            <img
              alt="Top Story"
              className="w-full h-96 object-cover object-top rounded-lg mb-1"
              height="500"
              src={post?.frontmatter.image ? `/${post?.frontmatter.image}` : `/placeholder.svg`}
              width="1000"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm italic text-bold mb-2 text-purple-600">{new Date(post?.frontmatter.date).toDateString()}</span>
              <div>
                <Share url={url} />
              </div>
            </div>
            <div className="post-content">
              <ReactMarkdown>
                {post?.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Comment url={url} slug={slug} />
        </div>
      </main>
    </section>
  )
}
