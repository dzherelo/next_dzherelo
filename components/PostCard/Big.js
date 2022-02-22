export default function Big({ slug, imgUrl, primaryTag, title, excerpt, publishedAt, readingTime }){
    return (
        <div className="container relative overflow-hidden mb-10">
            <a href={slug}>
                <img 
                    className="w-full m-0 hover:scale-95 motion-reduce:transform-none"
                    src={imgUrl}
                />
                 <div className="mt-2">
                    <h1 className="text-4xl uppercase">{ title }</h1>
                    <p class="my-4 font-light text-base">{ excerpt }</p>
                    <p className="text-brand-green text-base uppercase">{ publishedAt } – <span class="text-gray-400">{ readingTime }</span></p>
                 </div>
            </a>
        </div>
    )
}