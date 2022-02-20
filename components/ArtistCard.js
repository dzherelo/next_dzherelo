const ArtistCard = ({name, img, url}) => {
    return(
            <div className="container relative text-center overflow-hidden">
                <a className="hover:text-brand-green" href={ url }>
                    <img className="filter brightness-50 object-cover w-full h-full" src={ img }/>
                    <div className="absolute w-full h-full inset-y-0 lg:px-56 md:px-16 sm:px-4 px-2">
                        <div className="flex h-full justify-center items-center">
                            <h1 className="lg:text-4xl text-3xl uppercase">{ name }</h1>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default ArtistCard;