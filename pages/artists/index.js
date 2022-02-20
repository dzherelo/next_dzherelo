import ArtistCard from "../../components/ArtistCard"
import { getArtists, getArtistsEn } from "../../lib/api"
import { useRouter } from "next/router";

export default function Artist({artists, artistsEn}){
    const router = useRouter();
    const { locale } = router;

    const artistCards = artists.map(artist => (<ArtistCard name={artist.title} img={artist.feature_image} url={artist.slug}/>));
    const artistCardsEn = artistsEn.map(artist => (<ArtistCard name={artist.title} img={artist.feature_image} url={artist.slug}/>));

    return(
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-3">
            {locale === 'uk' ? artistCards : artistCardsEn}
        </div>
    )
}

export async function getStaticProps(){
    const artists = await getArtists();
    const artistsEn = await getArtistsEn();

    if(!artists || !artistsEn){
        return{
            notFound: true,
          }
    }

    return {
        props:{
            artists,
            artistsEn
        }
    }

}