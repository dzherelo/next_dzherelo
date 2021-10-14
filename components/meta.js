import Head from 'next/head'
import { getSettings } from '../lib/api';

export default function Meta(metaTitle, metaDescriptions, ogTitle, ogImage, favIcon, facebookUrl, url){
    return(
        <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* <!-- Meta:Details --> */}
                <meta name="dzherelo.one" content="dzherelo.one"/>
                <meta name="description" content={metaDescriptions}/>
                <link rel="icon" href={favIcon} type="image/png" />
                {/* <!-- OG:Details --> */}
                <meta property="og:title" content={ogTitle} />
                <meta property="og:site_name" content={title} />
                <meta property="og:description" content={ogTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="article:publisher" content={facebookUrl} />
                {/* <!-- OG:Details --> */}
                {/* <!-- OG:Image --> */}
                <meta property="og:image" content={ogImage} />
                <meta property="twitter:image" content={ogImage} />
                <meta name="twitter:url" content={url}/>
                <meta property="og:image:secure_url" content={ogImage} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <meta property="og:image:alt" content={metaTitle} />
                <meta content="summary_large_image" name="twitter:card" />
                <link rel="alternate" type="application/rss+xml" title="DZHERELO" href="http://164.90.237.14/rss/">
                <title>{metaTitle}</title>
        </Head>
    )
}