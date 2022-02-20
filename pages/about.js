import { getSinglePage } from "../lib/api";

const About = () => {

}
export async function getStaticProps(context){
    const page = await getSinglePage(context.param.slug);

    if(!page){
        return{
            notFound: true
        }
    }

    return{
        props:{
           page
        }
    }
}
export default About;
