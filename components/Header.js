import { useRouter } from "next/router";
import Navigation from "./Navigation";

const Header = () => {
    const router = useRouter();
    const { locale } = router;

    return(
        <>
            <header className="lg:pt-6 md:pt-4 sm:pt-2 pt-2">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-start-2">
                    <div className="flex items-center lg:mb-0 md:mb-0 sm:mb-0 mb-4 space-x-28">
                        <div className="h-11">
                            <a href={locale === 'uk' ? '/' : '/en'}>
                                <img src="./logo.svg" alt="DZHERELO" />
                            </a>
                            </div>
                            <div className="flex">
                                <button className="gh-burger lg:hidden md:hidden sm:block block"></button>
                            </div>
                    </div>
                    <div className="justify-end items-center lg:flex md:flex sm:hidden hidden">
                    </div>
                    <Navigation />
                </div>
                <hr className="border-brand-green" ></hr>
            </header>
        </>
    )
}

export default Header;