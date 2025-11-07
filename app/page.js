import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import matter from "gray-matter"
import fs from "fs"


async function getData() {
  // List of files in blgos folder
  try {
    const filesInPosts = fs.readdirSync('./content/posts')

    const posts = filesInPosts.map(filename => {
      const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8')
      const matterData = matter(file)

      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })

    const sortedPost = posts
      .map(obj => ({...obj, date: new Date(obj.date)}))
      .sort((objA, objB) => objB.date - objA.date)
      .slice(0, 39);

    return sortedPost

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
                  <Link href={`/blog/${topStory?.slug}`} className=" hover:text-red-600 mt-4">
                    <img
                      alt={topStory?.title}
                      className="w-full object-cover object-top rounded-lg h-96"
                      height="400"
                      src={topStory?.image ? `/${topStory?.image}` : `/placeholder.svg`}
                      width="600"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-center" data-id="19">
                  <h3 className="text-xl font-bold mb-2" data-id="20">{topStory?.title}</h3>
                  <p className="text-zinc-500" data-id="21">{topStory?.headline}</p>
                  <Link href={`/blog/${topStory?.slug}`} className=" hover:text-red-600 mt-4">
                    Read More
                  </Link>
                </div>
              </div>
            </>
          }
        </section>

        <section className="mb-8" data-id="23">
          {/* <h2 className="text-2xl font-bold mb-4" data-id="24">Politics</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12" data-id="25">
            {posts?.filter((post) => post?.topstory === false).map((post, idx) => (
              <Link key={idx} href={`/blog/${post?.slug}`}>
                <div>
                  <div data-id="26" className="w-[250] h-[250px]">
                    <img
                      alt={post?.title}
                      className="w-full h-full rounded-lg object-contain bg-gray-200"
                      src={post?.image ? `/${post?.image}` : `/placeholder.svg`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 mt-4 capitalize hover:text-red-600" data-id="28">{post?.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-600" data-id="29">{post?.headline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </section>
  )
}
