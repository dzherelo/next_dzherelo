import { useRouter } from "next/router";

import BigPostCard from "../../components/PostCard/Big";
import { getAllPosts, getAllEnPosts } from '../../lib/api';

export default function Blog({posts, postsEn}){
  const router = useRouter();
  const { locale } = router;
  const options = {year:'2-digit', month:'long', day:'numeric'};

  const allPostsCards = posts.map(post =>( 
    <BigPostCard 
                  slug={ post.slug }
                  imgUrl={ post.feature_image } 
                  title={ post.title }
                  excerpt={ post.excerpt }
                  publishedAt={ new Intl.DateTimeFormat(locale, options).format(new Date(post.published_at)) }
                  readingTime={ "1m to read" }
    />
  ))

  const allPostsCardsEn = postsEn.map(post =>( 
    <BigPostCard 
                  slug={ post.slug }
                  imgUrl={ post.feature_image } 
                  title={ post.title }
                  excerpt={ post.excerpt }
                  publishedAt={ new Intl.DateTimeFormat(locale, options).format(new Date(post.published_at)) }
                  readingTime={ "1m to read" }
    />
  ))

  return(
    <div className="grid lg:grid-cols-1 lg:mx-64 grid-cols-1 gap-24 my-12 mx-0">
      { locale === 'uk' ? allPostsCards : allPostsCardsEn }
    </div>
  )
}

export async function getStaticProps(context){
  const posts = await getAllPosts();
  const postsEn = await getAllEnPosts();
  
  if (!posts || !postsEn){
    return{
      notFound: true,
    }
  }

  return{
    props:{
      posts,
      postsEn
    }
  }
}