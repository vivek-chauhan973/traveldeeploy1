import ".././../../app/globals.css";
import Image from 'next/image'

const Card2 = () => {
return (
<div className="relative text-center w-full  h-40 md:h-52 lg:h-44 xl:h-52  overflow-hidden rounded-2xl">
    <Image className="absolute w-full h-full object-cover "
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
        <div className="text-white w-11/12 md:w-[80%] lg:w-[60%] xl:w-[50%]">
            {/* Adjust the width values based on your design preferences */}
            <h1 className="text-4xl font-bold">Japan</h1>
            <button className="shadow-md px-3 py-2 bg-white text-black rounded-badge text-[12px] mt-5">7 Days</button>
        </div>
    </div>
</div>

)
}

export default Card2