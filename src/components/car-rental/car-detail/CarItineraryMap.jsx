import Image from "next/image";
import "../../../app/globals.css";
import Head from "next/head";

const CarItinerarymap = ({ carPackage }) => {

    const mapSchema = {
        "@context": "https://schema.org",
        "@type": "Map",
        "name": carPackage?.map?.title || "Itinerary Map",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/map`,
        "image": carPackage?.map?.image || "https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg",
        "about": {
            "@type": "Place",
            "name": carPackage?.destination || "Travel Destination",
            "address": carPackage?.location || "Location not specified"
        },
        "creator": {
        "@type": "Organization",
        "name": "BizareXpedition™",
        "url": process.env.NEXT_PUBLIC_SITE_URL
      }
    };

    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(mapSchema)}
                </script>
            </Head>
            <main>
                <div className='p-2 '>
                    {carPackage?.map?.mapCode ?
                        <div className="w-full md:h-80 h-72 rounded-xl  overflow-hidden"
                            dangerouslySetInnerHTML={{ __html: carPackage?.map?.mapCode }}
                        />
                        :
                        <Image
                            src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg"
                            className="rounded-xl"
                            alt="map"
                            width={800}
                            height={800}
                        />
                    }
                </div>
            </main>
        </>
    )
}
export default CarItinerarymap;