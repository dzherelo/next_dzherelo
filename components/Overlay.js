import Navigation from "./Navigation";

const Overlay = () => {
    return(
        <div className="overlay-class hidden fixed bg-brand-background h-screen w-screen inset-0 top-16 flex-col space-y-8 text-center text-lg z-40">
            <Navigation />
        </div>
    )
}

export default Overlay;