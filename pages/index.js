import Header  from '../components/Header';
import { getSettings } from '../lib/api';

export default function Home({settings}){
  // TODO: Locale detection and switching 👇
  // const router = useRouter();
  // const { locale, locales, defaultLocale } = router;
  return(
    <>
      <Header nav={settings.navigation} path="/"/>
    </>
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
    props:{
      settings
    }
  }
}