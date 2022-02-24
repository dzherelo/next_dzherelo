export default function Big({ slug, imgUrl, primaryTag, title, excerpt, publishedAt, readingTime, additionalStyles}){
    return (
        <div className={additionalStyles + " group container relative overflow-hidden"}>
            <a href={slug}>
                <div className="relative">
                    <img 
                        className="w-full group-hover:z-0 group-hover:scale-125 transform-gpu ease-out transition duration-150"
                        src={imgUrl}
                    />
                    <div className="absolute bottom-0 left-0 mt-2 bg-brand-background w-full pt-2">
                        <h1 className="text-4xl uppercase">{ title }</h1>
                        <p class="my-4 font-light text-base">{ excerpt }</p>
                        <p className="text-brand-green text-base uppercase">{ publishedAt } – <span class="text-gray-400">{ readingTime }</span></p>
                    </div>
                </div>
            </a>
        </div>
    )
}