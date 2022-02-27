import { useRouter } from "next/router";
import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Link from 'next/link';

import en from "../locales/en";
import uk from "../locales/uk";

const Header = () => {
    const [ active, setActive ] = useState(false);
    const router = useRouter();
    const { locales, locale: activeLocal } = router;

    const t = activeLocal === 'uk' ? uk : en;
    const liStyles = 'my-6 bg-grey text-2xl';

    const handleClick = () => {
        setActive(!active)
    }

    return(
        <>
            <header className="lg:pt-6 md:pt-4 sm:pt-2 pt-2">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 col-start-2">
                    <div className="flex items-center lg:mb-0 md:mb-0 sm:mb-0 mb-4 justify-between">
                        <div className="h-11">
                            <a href={activeLocal === 'uk' ? '/' : '/en'}>
                                <Logo />
                            </a>
                            </div>
                            <div className="flex">
                                <button className="gh-burger lg:hidden md:hidden sm:block block" onClick={handleClick}></button>
                            </div>
                    </div>
                    <div className="justify-end items-center lg:flex md:flex sm:hidden hidden">
                    </div>
                    <Navigation />
                </div>
                <hr className="border-brand-green" ></hr>
                <nav className={`${active ? '' : 'hidden'} fixed top-36 left-0 bg-brand-background h-screen w-screen z-50 uppercase flex-col text-center`}>
                    <div className="">
                        <ul className="my-20">
                        <a href={activeLocal === 'uk' ? "/" : '/en'} className={router.route === '' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className={liStyles}>{t.home}</li>
                        </a>
                        <a href={activeLocal === 'uk' ? "/exhibitions" : '/en/exhibitions'} className={router.route === 'exhibitions' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className={liStyles}>{t.exhibitions}</li>
                        </a>
                        <a href={activeLocal === 'uk' ? "/artists" : '/en/artists'} className={router.route === 'artists' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className={liStyles}>{t.artists}</li>
                        </a>
                        <a href={activeLocal === 'uk' ? "/blog" : '/en/blog'} className={router.route === 'blog' ? 'bg-brand-green text-brand-background' : ''}>
                            <li className={liStyles}>{t.blog}</li>
                        </a>
                        </ul>
                        <ul className="mb-36">
                            <li className={liStyles}>{t.about}</li>
                            <li className={liStyles}>{t.contacts}</li>
                        </ul>
                        <div className="flex text-xl justify-center">
                            <p>{ t.language }</p>
                            <ul className="flex">
                            {locales.map((locale) => {
                                const { pathname, query, asPath } = router
                                return (
                                    <li key={locale} className={`${activeLocal === locale ? "text-brand-green underline underline-offset-4" : ""} ml-6`}>
                                    <Link href={{ pathname, query }} as={asPath} locale={locale}>
                                        <a>{locale}</a>
                                    </Link>
                                    </li>
                                )
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;