const Navigation = ({items}) => {
    return(
        <>
        <nav className="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-between">
            <ul className="flex justify-start gap-4">
                {items.map((item, index) => (
                    <a href={item.url}>
                        <li key={index}>{item.label}</li>
                    </a>
                ))}
            </ul>
        </nav>
        <nav class="lg:flex md:flex sm:hidden hidden lg:pt-6 lg:pb-4 md:pt-6 md:pb-4 sm:py-4 py-4 font-light text-xs justify-end">
                <ul class="flex justify-between gap-4">
                    <li className="uppercase"><a href="/contacts">контакти</a></li>
                    <li className="uppercase"><a href="/about-dzherelo">про джерело</a></li>
                </ul>
            </nav>  
        </>
    )
}

export default Navigation;