import { useRouter } from "next/router";

import uk from '../locales/uk';
import en from '../locales/en';

const Navigation = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uk' ? uk : en;

    const changeLanguage = (e) =>{
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale })
    };

    return(
        <>
        <nav className="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-between">
            <ul className="flex justify-start gap-4">
                    <a href="/">
                        <li className="uppercase">{t.home}</li>
                    </a>
                    <a href="/exhibitions">
                        <li className="uppercase">{t.exhibitions}</li>
                    </a>
                    <a href="/exhibitions">
                        <li className="uppercase">{t.artists}</li>
                    </a>
                    <a href="/exhibitions">
                        <li className="uppercase">{t.blog}</li>
                    </a>
            </ul>
        </nav>
        <nav class="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-end">
                <ul class="flex justify-between gap-4">
                    <li className="uppercase"><a href="/contacts">{t.contacts}</a></li>
                    <li className="uppercase"><a href="/about-dzherelo">{t.about}</a></li>
                    <select onChange={changeLanguage} defaultValue={locale} className="bg-transparent">
                        <option value="uk">УКР</option>
                        <option value="en">EN</option>
                    </select>
                </ul>
            </nav>  
        </>
    )
}

export default Navigation;