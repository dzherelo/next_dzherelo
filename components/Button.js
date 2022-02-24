export default function Button({children, linkPath, target}){
    return(
        <div className="w-full mt-8">
            <a href={linkPath} class="group" target={target}>
                <p className="text-center uppercase py-3 border border-brand-green text-brand-green group-hover:text-black group-hover:bg-brand-green group-hover:font-bold ease-out transition duration-15">{children}</p>
            </a>
        </div>
    )
}