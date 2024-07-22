import Header3 from './DesktopHeaderPages/Header3';

function DesktopHeader() {
  return (
    <div className='flex flex-col gap-0 sticky top-0 pb-4 z-[999]'>
      <div className="bg-primary h-7">
            <div className="flex items-center container-wrapper  justify-center gap-5">
                <p className=" capitalize text-white text-xxs md:text-sm   ">call us for free now</p>
                <p className="bg-navyblack py-[2px] md:mt-[2px]  mt-[5px]   rounded-[17px] px-4 text-white rounded-badge text-xxs md:text-sm">+ 44 20 8068 3176</p>
            </div>
        </div>
      < Header3/>
     </div>
     
  );
}

export default DesktopHeader;