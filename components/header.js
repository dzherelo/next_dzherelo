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
            </div>
        </header>
    )
}