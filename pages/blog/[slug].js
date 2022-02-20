import { getSinglePost, getAllPosts } from '../../lib/api';

export default function Post({post}) {
  return (
    <div>
      <h1>{post.title}</h1>
      <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}