import { getAllPosts } from '../lib/api';

export default function Home({posts}){
  return(
    <>
    <ul>
      {posts.map(post => (
        <a href={post.slug}>
          <li>{post.title}</li> 
        </a>
      ))}
    </ul>
    </>
  )
}

export async function getStaticProps(context){
  const posts = await getAllPosts();
  
  if (!posts){
    return{
      notFound: true,
    }
  }

  return{
    props:{
      posts
    }
  }
}