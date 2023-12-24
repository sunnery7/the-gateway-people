import Link from "next/link"
import Header from "../../../components/header"
import matter from "gray-matter"
import fs from "fs"
import Footer from "../../../components/footer"

const categories = [
    {name: 'exclusive', title: 'Exclusive'},
    {name: 'news', title: 'News'},
    {name: 'politics', title: 'Politics'},
    {name: 'opinion', title: 'Opinion'},
    {name: 'interview', title: 'Interview'},
    {name: 'culture', title: 'Culture'},
]

export async function generateStaticParams() {
  const allCats = categories.map(category => {
    return {
      slug: category.name
    }
  })

  return allCats
}

async function getData(slug) {
  try {
    const filesInPosts = fs.readdirSync('./content/posts')

    const allPost = filesInPosts.map(filename => {
      const file = fs.readFileSync(`./content/posts/${filename}`, 'utf8')
      const matterData = matter(file)

      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })

    const posts = allPost?.filter((post) => post.category === slug)
    return posts
  } catch (error) {
    
  }
}

export default async function Category({params}) {
  const {slug} = params
    
  const allPost = await getData(slug)

  const posts = allPost.filter((post) => post.topstory === false).map(obj => ({...obj, date: new Date(obj.date)}))

  const sortedPost = posts.sort(
    (objA, objB) => Number(objB.date) - Number(objA.date),
  );

  if(!posts){
    return(
        <h1>Ooops</h1>
    )
  }

  return (
    <section className="w-full" data-id="1">
      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8" data-id="13">
        <section className="mb-8" data-id="14">
          <h2 className="text-2xl font-bold mb-4 capitalize" data-id="15">{params.slug}</h2>
        </section>

        <section className="mb-8" data-id="23">
          {/* <h2 className="text-2xl font-bold mb-4" data-id="24">Politics</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-id="25">
            {sortedPost?.map((post, idx) => (
              <Link key={idx} href={`/blog/${post?.slug}`}>
                <div data-id="26">
                  <img
                    alt={post?.title}
                    className="w-full h-64 object-cover object-top rounded-lg"
                    height="400"
                    src={post?.image ? `/${post?.image}` : `/placeholder.svg`}
                    width="600"
                  />
                  <h3 className="text-lg font-semibold mb-2 mt-4 hover:text-red-600 capitalize" data-id="28">{post?.title}</h3>
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
