import { useRouter } from "next/router";
import { getSinglePost, getAllPosts, getAllEnPosts } from '../../lib/api';

export default function Post({post, postEn}) {
  const router = useRouter();
  const { locale } = router;
  const options = {year:'2-digit', month:'long', day:'numeric'};

  return (
    <div className="lg:mx-64 md:mx-32 sm:mx-0 mx-0 mb-24">
      <article class="">
        <header class="container mt-12">
          <div class="grid grid-rows-1 gap-12 lg:mx-16 md:mx-8 sm:mx-4 mx-2 mb-12">
            {locale === 'uk' ? <img class="w-full" src={post.feature_image}/> : <img class="w-full" src={postEn.feature_image}/>}
            <div className="text-center">
            {locale === 'uk' ? <h1 class="uppercase text-4xl">{post.title}</h1> : <h1 class="uppercase text-4xl">{postEn.title}</h1>}              
              <p class="text-brand-green text-sm uppercase">{new Intl.DateTimeFormat(locale, options).format(new Date(post.published_at))}</p>
            </div>
            <p class="text-xl font-light">{post.excerpt}</p>
            <hr className="border-brand-green mx-8" ></hr>
          </div>
        </header>
      <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)
  const postEn = await getSinglePost(context.params.slug+"-en")

  if (!post || !postEn) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post, postEn }
  }
}