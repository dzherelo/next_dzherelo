import { getSettings } from '../lib/api';

export default function Home({settings}){
  return(
    <>
      
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