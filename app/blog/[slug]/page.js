import Header from "../../../components/header"
import matter from "gray-matter"
import fs from "fs"
import ReactMarkdown from 'react-markdown'
import Share from "../../../components/share"
import Comment from "../../../components/comment"
import Footer from "../../../components/footer"



export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  // const id = params.id

  const post = await getData(params.slug)

  const blogPage = `https://thegatewaypeople.com/blog/${params.slug}`
 
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post?.frontmatter.title,
    description: post?.frontmatter.headline,
    robots: 'noindex, follow, nocache',
    googlebot: 'index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
    alternates: {
      canonical: blogPage,
    },
    openGraph: {
      url: blogPage,
      type: 'website',
      siteName: 'The Gateway People',
      locale: 'en_US',
      images: [`https://thegatewaypeople.com/${post?.frontmatter.image}`],
    },
  }
}


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
    <>
    <section className="w-full" data-id="1">
      <Header />      
      <main className="container mx-auto px-4 md:px-6 py-8" data-id="13">
      <div className="">
          <div className="lg:w-1/2 m-auto">
            <h1 className="text-xl font-semiboold tracking-tighter mb-2 text-red-800">{post?.frontmatter.title}</h1>
            <img
              alt="Top Story"
              className="w-full h-96 object-cover object-top rounded-lg mb-1"
              height="500"
              src={post?.frontmatter.image ? `/${post?.frontmatter.image}` : `/placeholder.svg`}
              width="1000"
            />
            <div className="">
              <div className="text-sm italic text-bold text-red-800">{new Date(post?.frontmatter.date).toDateString()}</div>
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
      <Footer />
    </section>
    </>
  )
}
