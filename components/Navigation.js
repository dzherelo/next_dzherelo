import { useRouter } from "next/router";

import uk from '../locales/uk';
import en from '../locales/en';

import { route } from "next/dist/server/router";

const Navigation = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uk' ? uk : en;

    const changeLanguage = (e) =>{
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
        
    };
    
    return(
        <>
            <nav className="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-between">
                <ul className="flex justify-start gap-4">
                        <a href={locale === 'uk' ? "/" : '/en'} className={router.route === '' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className="uppercase">{t.home}</li>
                        </a>
                        <a href={locale === 'uk' ? "/exhibitions" : '/en/exhibitions'} className={router.route === 'exhibitions' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className="uppercase">{t.exhibitions}</li>
                        </a>
                        <a href={locale === 'uk' ? "/artists" : '/en/artists'} className={router.route === 'artists' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className="uppercase">{t.artists}</li>
                        </a>
                        <a href={locale === 'uk' ? "/blog" : '/en/blog'} className={router.route === 'blog' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className="uppercase">{t.blog}</li>
                        </a>
                </ul>
            </nav>
            <nav className="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-end">
                    <ul className="flex justify-between gap-4">
                        <li className="uppercase"><a href={locale === 'uk' ? "/contacts" : '/en/contacts'}>{t.contacts}</a></li>
                        <li className="uppercase"><a href={locale === 'uk' ? "/about" : '/en/about'}>{t.about}</a></li>
                        <select onChange={changeLanguage} defaultValue={locale} className="bg-transparent">
                            <option value="uk">??????</option>
                            <option value="en">EN</option>
                        </select>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;