export default function Small({ slug, imgUrl, title, publishedAt, readingTime }){
    return(
        <>
            <a href={slug}>
                <img 
                    className="w-full h-2/3 object-cover"
                    src={ imgUrl }
                />
                <div className="mt-2">
                    <h1 class="text-3xl uppercase">{ title }</h1>
                    <p className="text-brand-green text-base uppercase">{ publishedAt } – <span class="text-gray-400">{ readingTime }</span></p>
                </div>
            </a>
        </>
    )
}