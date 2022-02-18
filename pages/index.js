import { getAllPosts, getSettings } from '../lib/api';
import { useRouter } from 'next/router';

export default function Home({settings, posts}){
  // TODO: Locale detection and switching 👇
  // const router = useRouter();
  // const { locale, locales, defaultLocale } = router;

  return(
    <div>
      <h1>{settings.title}</h1>
    </div>
  )
}

export async function getStaticProps(context){
  const settings = await getSettings();
  const posts = await getAllPosts();
  
  if (!settings || !posts){
    return{
      notFound: true,
    }
  }

  return{
    props:{
      settings,
      posts
    }
  }
}