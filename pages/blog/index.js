import { useRouter } from "next/router";
import { getAllPosts, getAllEnPosts } from '../../lib/api';

export default function Blog({posts, postsEn}){
  const router = useRouter();
  const { locale } = router;

  const allPosts = posts.map(post => ( <a href={`/blog/${post.slug}`}><li>{post.title}</li></a> ))
  const allPostsEn = postsEn.map(post => ( <a href={`/en/blog/${post.slug}`}><li>{post.title}</li></a> ))

  return(
    <>
    <ul>
      { locale === 'uk' ? allPosts : allPostsEn }
    </ul>
    </>
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