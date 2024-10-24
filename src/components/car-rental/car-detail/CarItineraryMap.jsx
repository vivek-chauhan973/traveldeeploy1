import Image from "next/image";
import "../../../app/globals.css";

const CarItinerarymap = ({ carPackage }) => {

    return (
        <>
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
        </>
    )
}
export default CarItinerarymap;