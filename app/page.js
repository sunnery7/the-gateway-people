import Link from "next/link"
import Header from "../components/header"
import matter from "gray-matter"
import fs from "fs"


async function getData() {
  // List of files in blgos folder
  try {
    const filesInPosts = fs.readdirSync('./content/posts')

    const posts = filesInPosts.slice(0, 15).map(filename => {
      const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8')
      const matterData = matter(file)

      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })

  return posts
  } catch (error) {
    
  }
}

export default async function Home() {
    
  const posts = await getData()

  const topStory = posts?.filter((post) => post?.topstory === true)[0]

  return (
    <section className="w-full" data-id="1">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8" data-id="13">
        <section className="mb-8" data-id="14">
          {topStory && 
            <>
              <h2 className="text-2xl font-bold mb-4" data-id="15">
                Top Story
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="16">
                <div data-id="17">
                  <img
                    alt={topStory?.title}
                    className="w-full h-64 object-cover object-center rounded-lg"
                    height="400"
                    src={topStory?.image ? `/${topStory?.image}` : `/placeholder.svg`}
                    width="600"
                  />
                </div>
                <div className="flex flex-col justify-center" data-id="19">
                  <h3 className="text-xl font-bold mb-2" data-id="20">{topStory?.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400" data-id="21">{topStory?.headline}</p>
                  <Link href={`/blog/${topStory?.slug}`} className="text-blue-500 hover:text-blue-700 mt-4">
                    Read More
                  </Link>
                </div>
              </div>
            </>
          }
        </section>

        <section className="mb-8" data-id="23">
          {/* <h2 className="text-2xl font-bold mb-4" data-id="24">Politics</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="25">
            {posts?.map((post, idx) => (
              <Link key={idx} href={`/blog/${post?.slug}`}>
                <div data-id="26">
                  <img
                    alt={post?.title}
                    className="w-full h-64 object-cover object-center rounded-lg"
                    height="400"
                    src={post?.image ? `/${post?.image}` : `/placeholder.svg`}
                    width="600"
                  />
                  <h3 className="text-xl font-bold mb-2 mt-4" data-id="28">{post?.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400" data-id="29">{post?.headline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </section>
  )
}
