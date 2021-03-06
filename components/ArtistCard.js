const ArtistCard = ({name, img, url}) => {
    return(
            <div className="group container relative text-center overflow-hidden">
                <a className="group-hover:text-brand-green" href={ `artists/${url}` }>
                    <img className="group-hover:scale-125 filter brightness-50 object-cover w-full h-full transform-gpu ease-out transition duration-150" src={ img }/>
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