import ".././../../app/globals.css";
import Image from 'next/image'

const Card2 = () => {
    const countryData = [
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Japan",
            days: "7"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Austria",
            days: "10"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "South Africa",
            days: "7"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "America",
            days: "5"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Bankok",
            days: "7"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Thailand",
            days: "11"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "SriLanka",
            days: "7"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Dubai",
            days: "2"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Germany",
            days: "7"
        },
        {
            img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            country: "Austtrailia",
            days: "3"
        },
    ]
    return (
        <div className="py-5 md:py-6">
            {countryData?.length > 0 &&
                <div className="container-wrapper  text-center pb-5 md:pb-10">
                    <p className='md:text-[25px] text-xl font-medium mb-1'>
                        Start Your journey
                    </p>
                    <p className="md:text-md text-para font-normal">
                        A perdonalized adventure that begins with one steps towards unforgettable experiences.
                    </p>
                </div>
            }
            <div className="container-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {countryData?.length > 0 && countryData.map((data, i) => {
                    return (
                        <div key={i}>
                            <div className="relative text-center w-full h-40 md:h-52 lg:h-44 xl:h-52 overflow-hidden rounded-xl">
                                <Image className="absolute object-cover "
                                    layout="fill"
                                    src={data.img}
                                    alt="country" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
                                    <div className="text-white w-11/12 md:w-[80%]">
                                        <h1 className="md:text-xl text-lg font-bold ">{data.country}</h1>
                                        <button className="shadow-md px-3 py-2 bg-white text-black rounded-full md:text-[12px] text-xxs mt-3">{data.days}Days</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Card2;