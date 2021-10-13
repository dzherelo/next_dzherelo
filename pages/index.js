import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getPosts } from '../lib/posts';

const IndexPage = (props) => (
  <ul>
    {props.posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  }
}

export default IndexPage;