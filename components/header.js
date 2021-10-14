import { Link, Image } from 'next/link';
import svgLogo from '../public/logo.svg';

export default function Header({navigation}){
    return(
        <header>
            <div>
                <div>
                    <Link href="/">
                        <a><Image 
                                src={svgLogo}
                                alt="dzherelo-logo"
                            />
                        </a>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {navigation.map(nav => (
                            <li key={nav.slug}>
                                <Link href={`page/[slug].js`} as={`page/${nav.slug}`}/>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}