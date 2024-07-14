import "../../../app/globals.css";
import Image from 'next/image'
const HorizontalCard = () => {
  return (
    <div>
        <div className="shadow-lg w-[320px] border gap-5 m-2 flex items-center rounded-md shrink-0">
            <div>
                <Image className="w-20 h-16 object-cover rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1706896001583-08b5ba33e3be?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div>
                <p className="text-[12px]">Tour Package from</p>
                <p className="text-[16px] font-semibold">Ahemdabad</p>
                <p className="text-[10px]">141 tours</p>
            </div>
        </div>
    </div>
  )
}

export default HorizontalCard