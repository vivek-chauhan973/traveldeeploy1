import ".././../../app/globals.css";
import Image from 'next/image'
// import { ShieldCheckIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
const Promises = () => {

    return (
        <>
            <div className="bg-gray-100">
                <div className="container-wrapper ">
                    <div className="text-center py-7">
                        {/* <h3 className="text-2xl leading-8 font-medium xl:mb-2">BizareXpeditionTM Difference</h3> */}
                        <h3 className="xl:text-2xl text-xl leading-8 font-medium  xl:mb-2">
                            BizareXpedition<sup className="md:text-sm text-xs mr-1">TM</sup>Difference
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-8 md:gap-5 gap-8 max-w-7xl pb-10">
                        <div className="bg-white md:p-6 p-5 rounded-lg shadow-md">
                            <div className="flex items-center justify-between md:mb-4 mb-2">
                                <h3 className="text-xl font-semibold capitalize">Best price guarantee</h3>
                                <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 mr-2 p-1.5 bg-gray-300 rounded-full" />
                            </div>
                            <p className="text-gray-600">
                                Our prices are unbeatable. We are so confident you will not find a better deal
                                elsewhere that we will{' '}
                                <u className="text-navyblack cursor-pointer">refund the difference</u>
                                {' '}within 24 hours if you do.
                            </p>
                        </div>
                        <div className="bg-white md:p-6 p-5 rounded-lg shadow-md">
                            <div className="flex items-center justify-between md:mb-4 mb-2">
                                <h3 className="text-xl font-semibold capitalize">Extraordinary experiences</h3>
                                <FontAwesomeIcon icon={faImage} className="h-6 w-6 mr-2 p-1.5 bg-gray-300 rounded-full" />
                            </div>
                            <p className="text-gray-600">
                                Our travel crafters work closely with local partners to design perfectly-balanced itineraries for small groups.
                            </p>
                        </div>
                        <div className="bg-white md:p-6 p-5 rounded-lg shadow-md">
                            <div className="flex items-center justify-between md:mb-4 mb-2">
                                <h3 className="text-xl  font-semibold capitalize">Everything taken care of</h3>
                                <FontAwesomeIcon icon={faShieldHalved} className="h-6 w-6 mr-2 p-1.5 bg-gray-300 rounded-full" />
                            </div>
                            <p className="text-gray-600">
                                We plan and book every detail of your trip for you. Our unique Travelers App is your direct line to 24/7{' '}
                                <u className="text-navyblack cursor-pointer">
                                    click-or-call support
                                </u>. That is how we look after you across the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promises;