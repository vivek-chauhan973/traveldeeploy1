import Image from "next/image";
import "../../../src/app/globals.css";
// const fetchPackageImage=async (addPackage)=>{
//     const res = await fetch(`/api/package/map/${addPackage?._id}`);
//     const data = await res.json();
//     return data;

// }
const CarItinerarymap= ()=>{
    // const {addPackage}=useAppContext();
    // const [map,setMap]=useState(null);
    // useEffect(()=>{
    //     fetchPackageImage(addPackage).then(res=>setMap(res?.mapCode));
    //  },[addPackage])
    return(
        <>
            <div className='p-2 '>
                {/* {map?
                <div className="w-full md:h-80 h-72 rounded-xl  overflow-hidden" 
                dangerouslySetInnerHTML={{ __html: map }}
                />
                : */}
                <Image 
                    src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg" 
                    alt="map"  
                    width={800}
                    height={800}
                />
                {/* } */}
            </div>
        </>
    )
}
export default CarItinerarymap;