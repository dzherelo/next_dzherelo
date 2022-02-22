import { useRouter } from "next/router";
import Title from "../components/Title";
import { getSinglePage } from "../lib/api";

const About = ({about, aboutEn}) => {
    const router = useRouter();
    const { locale } = router;

    return(
        <>
            <main>
                {locale === 'uk' ? <Title input={about.title} /> : <Title input={aboutEn.title} /> } 
                {locale === 'uk' ? <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: about.html }} /> : <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: aboutEn.html }} />}
            </main>
        </>
    )
}

export default About;

export async function getStaticProps(context){
    const about = await getSinglePage('about');
    const aboutEn = await getSinglePage('about-en');

    if(!about || !aboutEn){
        return{
            notFound: true
        }
    }

    return{
        props:{
            about,
            aboutEn
        }
    }
}
