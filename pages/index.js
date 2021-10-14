import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';
import { getPosts, getSettings } from '../lib/api';

export default function Index({settings}){
  return(
    <div>
        <h1>Title: {settings.title}</h1>
        <p>Description: {settings.description}</p>
        <p>Navigation:</p>
        <ul>
          {settings.navigation.map(nav => (
            <li key={nav.url}>
              <p>label:{nav.label}, url:{nav.url}</p>
            </li>
          ))}
        </ul>
        <p>Secondary navigation:</p>
        <ul>
          {settings.secondary_navigation.map(nav => (
            <li key={nav.url}>
              <p>label:{nav.label}, url:{nav.url}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export async function getStaticProps(context){
  const settings = await getSettings();
  
  if (!settings){
    return{
      notFound: true,
    }
  }

  return{
    props:{settings}
  }
}

// export default function IndexPage({posts}){
//   return(
//     <ul>
//     {posts.map(post => (
//       <li key={post.id}>
//         <Link href={`post/[slug].js`} as={`post/${post.slug}`}>
//           <Image
//             src = {post.feature_image}
//             alt = {post.feature_image_alt}
//             width = {500}
//             height = {320}
//           />
//         </Link>
//         <div></div>
//         <Link href={`tag/[slug].js`} as={`tag/${post.primary_tag.slug}`}>
//           <a>{post.primary_tag.name}</a>
//         </Link>
//         <div></div>
//         <Link href={`post/[slug].js`} as={`post/${post.slug}`}>
//           <a>{post.title}</a>
//         </Link>
//         <div>
//           <p>{post.created_at} - Time to read {post.reading_time} minutes</p>
//         </div>
//       </li>
//     ))}
//   </ul>
//       );
// }
// export async function getStaticProps(context) {
//   const posts = await getPosts()
  
//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { posts }
//   }
// }