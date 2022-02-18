import Navigation from "./Navigation";

const Overlay = () => {
    return(
        <div class="overlay-class hidden fixed bg-brand-background h-screen w-screen inset-0 top-16 flex-col space-y-8 text-center text-lg z-40">
        <Navigation />
        <ul class="nav justify-between">
            <li><a href="/contacts">КОНТАКТИ</a></li>
            <li><a href="/about-dzherelo">ПРО ДЖЕРЕЛО</a></li>
        </ul>
        <div class="fixed bottom-6 left-0 right-0">

        </div>
        
</div>
    )
}

default export Overlay;