import { useRouter } from "next/router";

import { getFeaturedPost, getFeaturedPostEn } from '../lib/api';
import Button from '../components/Button';
import SmallPostCard from "../components/PostCard/Small";

import uk from '../locales/uk';
import en from '../locales/en';

export default function Home({ feature,featureEn }){
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'uk' ? uk : en;

  const options = {year:'2-digit', month:'long', day:'numeric'};
  const addtionalStyles = "grow w-full mr-16 lg:mb-0 mb-10";

  const featuredPost = feature.map(post=>(
    <SmallPostCard additionalStyles={ addtionalStyles }
                   slug={ post.slug }
                   imgUrl={ post.feature_image } 
                   title={ post.title }
                   publishedAt={ new Intl.DateTimeFormat(locale, options).format(new Date(post.published_at)) }
                   readingTime={ t.readingTime }
                   featured={true}
    />
  ))

  const featuredPostEn = featureEn.map(post=>(
    <SmallPostCard additionalStyles={ addtionalStyles }
                   slug={ post.slug }
                   imgUrl={ post.feature_image } 
                   title={ post.title }
                   publishedAt={ new Intl.DateTimeFormat(locale, options).format(new Date(post.published_at)) }
                   readingTime={ t.readingTime }
                   featured={true}
    />
  ))

  return(
    <div className="block">
      <div className="w-full">
        <a className="group" href="https://send.monobank.ua/jar/A6Rw5cFPj7" target="_blank">
          <p className="uppercase text-center font-bold bg-brand-green  text-brand-background py-4 group-hover:text-brand-green group-hover:bg-transparent border border-brand-green ease-out transition duration-150">{t.support}</p>
        </a>
      </div>
      <div className="lg:flex flex-row my-12 w-full">
        { locale === 'uk' ? featuredPost : featuredPostEn }
        <div className="lg:block hidden border border-brand-green "></div>
        <div className="lg:w-1/2 w-full lg:ml-16 ml-0">
          <h1 className="uppercase text-center text-3xl mb-6">{ t.findDzherelo }</h1>
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2540.6766868715763!2d30.5142672!3d50.4471226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf68249798fb%3A0xfb0cb56a64765e9c!2sDZHERELO!5e0!3m2!1sen!2sua!4v1636010483105!5m2!1sen!2sua" width="300" height="300" allowfullscreen="" loading="lazy"></iframe>
          <Button linkPath={ t.locationLink } target={ "_blank" }>{t.toDzherelo}</Button>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context){
  const feature = await getFeaturedPost();
  const featureEn = await getFeaturedPostEn();
  
  if (!feature || !featureEn){
    return{
      notFound: true,
    }
  }

  return{
    props:{
      feature,
      featureEn
    }
  }
}