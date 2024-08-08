import Header3 from './DesktopHeaderPages/Header3';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCab } from '@fortawesome/free-solid-svg-icons';

function DesktopHeader() {
  return (

    <div className='flex flex-col gap-0  sticky top-0  z-[9999]'>
      <div className="bg-primary pt-[0.5px]  md:h-[25px]   h-7">
        <div className="flex items-center  container-wrapper   justify-center gap-5">
          <p className=" capitalize pt-[2px] md:pt[0] text-white text-xxs md:text-xs">call us for free now</p>
          <div className="flex justify-center items-center gap-1    rounded-[17px] bg-navyblack text-white rounded-badge text-xxs md:text-xs px-4 md:py-0  md:mt-[1px]  mt-[2.5px]">
            <span className=' text-center justify-center'>
              {/* <CallIcon/> */}
              <FontAwesomeIcon icon={faPhone} className='font   h-0.5 w-0.5'
              />
            </span>
            {/* <CallIcon className="md:mt-1 md:mr-1 m-1"/> */}
            <span className=''>
              + 44 20 8068-5634
            </span> 
          </div>
        </div>
      </div>
      <Header3 />
    </div>



  );
}

export default DesktopHeader;