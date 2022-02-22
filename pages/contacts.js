import { useRouter } from "next/router";
import Title from "../components/Title";
import { getSinglePage } from "../lib/api";

const Contacts = ({contacts, contactsEn}) => {
    const router = useRouter();
    const { locale } = router;

    return(
        <>
            <main>
                {locale === 'uk' ? <Title input={contacts.title} /> : <Title input={contactsEn.title} /> }
                {locale === 'uk' ? <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: contacts.html }} /> : <section className='gh-content gh-canvas container' dangerouslySetInnerHTML={{ __html: contactsEn.html }} />}
            </main>
        </>
    )
}

export default Contacts;

export async function getStaticProps(context){
    const contacts = await getSinglePage('contacts');
    const contactsEn = await getSinglePage('contacts-en');

    if(!contacts || !contactsEn){
        return{
            notFound: true
        }
    }

    return{
        props:{
            contacts,
            contactsEn
        }
    }
}
