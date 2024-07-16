import Header3 from './DesktopHeaderPages/Header3';

function DesktopHeader() {
  return (
    <div className='flex flex-col gap-0 '>
      <div className="bg-primary">
            <div className="flex items-center p-2 container-wrapper justify-center gap-5">
                <p className=" capitalize text-white text-xxs md:text-sm  ">call us for free now</p>
                <p className="bg-navyblack py-[3px]   rounded-[17px] px-4 text-white rounded-badge text-xxs md:text-sm">+ 44 20 8068 3176</p>
            </div>
        </div>
      < Header3/>
     </div>
     
  );
}

export default DesktopHeader;