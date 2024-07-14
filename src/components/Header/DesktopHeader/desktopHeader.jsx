;
import Header3 from './DesktopHeaderPages/Header3';

function DesktopHeader() {
  return (
    <div className='flex flex-col gap-0 '>
      <div className="bg-primary">
            <div className="flex items-center p-2 container-wrapper justify-center gap-5">
                <p className=" capitalize text-white text-xxs">call us for free now</p>
                <p className="bg-navyblack py-[2px] rounded-full px-4 text-white rounded-badge text-xxs">+44 20 8068 3176</p>
            </div>
        </div>
      <Header3/>
     </div>
     
  );
}

export default DesktopHeader;