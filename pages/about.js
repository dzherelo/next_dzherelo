import { useRouter } from "next/router";
import { getSinglePage } from "../lib/api";

const About = ({about, aboutEn}) => {
    const router = useRouter();
    const { locale } = router;

    return(
        <>
            {locale === 'uk' ? <h1>{about.title}</h1> : <h1>{aboutEn.title}</h1> } 
        </>
    )
}

export default About;

export async function getStaticProps(context){
    const about = await getSinglePage("about");
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
