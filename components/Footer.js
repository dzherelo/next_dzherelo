import { useRouter } from "next/router";

import uk from '../locales/uk';
import en from '../locales/en';

const Footer = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uk' ? uk : en;

    const getCurrentYear = () => {
        return new Date().getFullYear(); 
    }

    return(
        <footer className="text-xs">
            <hr className="border-brand-green w-full"/>
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center justify-between">
                    <span className="uppercase">{t.siteTitle} © {getCurrentYear()}</span>
                </div>    
                <div className="flex space-x-2 items-center">
                    <p className="text-xs uppercase">{t.supportedBy}</p>
                    <img src={t.ucfImgPath} alt={t.ucf} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;