import { useRouter } from "next/router";

import uk from '../../locales/uk';
import en from '../../locales/en';



export default function Small({ slug, imgUrl, title, publishedAt, readingTime, additionalStyles, featured }){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uk' ? uk : en;

    return(
        <div className={additionalStyles + " container overflow-hidden w-1/2 "}>
            <a href={`blog/${slug}`} className="group">
                <div className="relative">
                    <img 
                        className="w-full group-hover:scale-125 transform-gpu ease-out transition duration-150"
                        src={ imgUrl }
                    />
                    {featured === true ? <div className="absolute top-4 right-2 px-4 py-1 bg-brand-green rounded rotate-6 group-hover:rotate-2 transform-gpu ease-out transition duration-150"> <p className="text-base text-brand-background">{t.featured}</p></div> : ""}
                    <div className="absolute bottom-0 left-0 mt-2 bg-brand-background w-full pt-2">
                        <h1 class="text-3xl uppercase">{ title }</h1>
                        <p className="text-brand-green text-base uppercase">{ publishedAt } – <span class="text-gray-400">{ readingTime }</span></p>
                    </div>
                </div>
            </a>
        </div>
    )
}