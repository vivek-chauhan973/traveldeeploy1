import Image from "next/image";
import "../../../app/globals.css";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import { useEffect, useState } from "react";
import Head from "next/head";

const fetchPackageImage = async (addPackage) => {
  const res = await fetch(`/api/package/map/${addPackage?._id}`);
  const data = await res.json();
  return data;
};

const Itinerarymap = () => {
  const { addPackage } = useAppContext();
  const [map, setMap] = useState(null);
  useEffect(() => {
    fetchPackageImage(addPackage).then((res) => setMap(res?.mapCode));
  }, [addPackage]);
  //  console.log("mapcode",map);

  // Structured Data (Schema)
  const mapSchema = {
    "@context": "https://schema.org",
    "@type": "Map",
    "name": addPackage?.name || "Itinerary Map",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/package/${addPackage?._id}/map`,
    "image": addPackage?.map?.image || "https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg",
    "about": {
      "@type": "Place",
      "name": addPackage?.destination || "Travel Destination",
      "address": addPackage?.location || "Location not specified"
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
        <div className="p-2 ">
          {map ? (
            <div
              className="w-full md:h-80 h-72 rounded-xl  overflow-hidden"
              dangerouslySetInnerHTML={{ __html: map }}
            />
          ) : (
            <Image
              src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg"
              alt="map"
              width={800}
              height={800}
            />
          )}
        </div>
      </main>
    </>
  );
};
export default Itinerarymap;
