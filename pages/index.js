import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getPosts } from '../lib/posts';

export default function IndexPage({posts}){
  return(
    <ul>
    {posts.map(post => (
      <li key={post.id}><Link href={`post/[slug].js`} as={`post/${post.slug}`}>{post.title}</Link><p>{post.slug}</p><p>{post.id}</p></li>
    ))}
  </ul>
      );
}
export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}