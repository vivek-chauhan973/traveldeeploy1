import Header3 from './DesktopHeaderPages/Header3';
import { MdCall } from "react-icons/md";

function DesktopHeader() {
  return (
    <div className='flex flex-col gap-0 sticky top-0 pb-4 z-[999]'>
      <div className="bg-primary md:h-5 h-7">
            <div className="flex items-center container-wrapper  justify-center gap-5">
                <p className=" capitalize text-white text-xxs md:text-xs   ">call us for free now</p>
                <div className="flex justify-center iutems-center rounded-[17px] bg-navyblack text-white rounded-badge text-xxs md:text-xs px-4 md:py-0 py-[2px] md:mt-[1px]  mt-[5px]">
                  <MdCall className="md:mt-1 md:mr-1 m-0.5"/>
                  <p>+ 44 20 8068 3176</p>
                </div>
            </div>
        </div>
      <Header3/>
    </div>
     
  );
}

export default DesktopHeader;