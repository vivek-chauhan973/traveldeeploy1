import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faGear,faArrowCircleLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "600px",
    minWidth: "320px",
    maxHeight: "90vh",
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    overflowY: 'auto',
    backgroundColor: 'white',
    borderRadius: '12px',
    paddingX: 4,
    paddingY: 2,
};

export default function CustomiseTour({ children }) {
    const [open, setOpen] = React.useState(false);
    const [openConfirmation, setConfirmation] = React.useState(false);
    const [bookingConfirmed, setbookingConfirmed] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        category: "",
        adults: "",
        child2_4: "",
        child5_10: "",
        city: "",
        additionalInfo: ""
    });
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        // Check-in date
        if (!formData.checkIn) {
            errors.checkIn = 'Check-in date is required';
        }
        // Check-out date
        if (!formData.checkOut) {
            errors.checkOut = 'Check-out date is required';
        }
        // Category field
        if (!formData.category) {
            errors.category = 'Package Category is required';
        }
        // Adults field
        if (!formData.adults) {
            errors.adults = 'Adults is required';
        }
        // Child 2-4 field
        if (!formData.child2_4) {
            errors.child2_4 = 'Child 2-4 is required';
        }
        // Child 5-10 field
        if (!formData.child5_10) {
            errors.child5_10 = 'Child 5-10 is required';
        }
        //Start/End City
        if (!formData.city.trim()) {
            errors.city = 'City is required';
        }
        // Additional Information field
        if (!formData.additionalInfo.trim()) {
            errors.additionalInfo = 'Additional Information is required';
        }
        // Set form errors
        setFormErrors(errors);
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            setConfirmation(true);
        }
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div>
            <div onClick={handleOpen}>
                {/* <Button >Open modal</Button> */}
                {children}
            </div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {!openConfirmation ?
                    <Box sx={style}>
                        <div className="flex justify-end ">
                            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} className='font1 cursor-pointer' />
                        </div>
                        <div className='flex justify-center gap-2 items-center pb-1'>
                            <FontAwesomeIcon icon={faGear} className='font1' />
                            <h3 className='text-md font-semibold'>Customise Tour</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='border-l-4 border-red-400 pl-3 -ml-4'>
                                <h3 className='font-semibold'>Make a Reservation</h3>
                            </div>
                            <div className='py-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div className='flex flex-col gap-3'>
                                        {/* check in */}
                                        <div className='text-para flex flex-col items-baseline'>
                                            <label className='text-sm font-semibold' htmlFor="checkIn">Check In</label>
                                            <input
                                                className={`text-sm w-full appearance-none bg-white border ${formErrors.checkIn ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                type="date"
                                                id="checkIn"
                                                name="checkIn"
                                                value={formData.checkIn}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.checkIn && <span className="text-red-500 text-xs">{formErrors.checkIn}</span>}
                                        </div>
                                        {/* Check Out */}
                                        <div className='text-para flex flex-col items-baseline'>
                                            <label className='text-sm font-semibold' htmlFor="checkOut">Check Out</label>
                                            <input
                                                className={`text-sm w-full appearance-none bg-white border ${formErrors.checkOut ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                type="date"
                                                id="checkOut"
                                                name="checkOut"
                                                value={formData.checkOut}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.checkOut && <span className="text-red-500 text-xs">{formErrors.checkOut}</span>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Start/End City */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="city">Start/End City :</label>
                                            <input
                                                className={`text-sm w-full appearance-none bg-white border ${formErrors.city ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                            />
                                            {formErrors.city && <span className="text-red-500 text-xs">{formErrors.city}</span>}
                                        </div>
                                        {/* Category */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="category">Package Category</label>
                                            <select
                                                className={`text-sm w-full appearance-none bg-white border ${formErrors.category ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                id="category"
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Category</option>
                                                <option value="deluxe">Deluxe</option>
                                                <option value="budget">Budget</option>
                                                <option value="economy">Economy</option>
                                            </select>
                                            {formErrors.category && <span className="text-red-500 text-xs">{formErrors.category}</span>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Adults */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="adults">Adult :</label>
                                            <select
                                                className={`text-para w-full appearance-none bg-white border ${formErrors.adults ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                id="adults"
                                                name="adults"
                                                value={formData.adults}
                                                onChange={handleInputChange}
                                            >
                                                <option value=""></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            {formErrors.adults && <span className="text-red-500 text-xs">{formErrors.adults}</span>}
                                        </div>
                                        {/* Child 2-4 */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="child2_4">Child 2-4 yr :</label>
                                            <select
                                                className={`text-para w-full appearance-none bg-white border ${formErrors.child2_4 ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                id="child2_4"
                                                name="child2_4"
                                                value={formData.child2_4}
                                                onChange={handleInputChange}
                                            >
                                                <option value=""></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            {formErrors.child2_4 && <span className="text-red-500 text-xs">{formErrors.child2_4}</span>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Child 5-10 */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="child5_10">Child 5-10 yr :</label>
                                            <select
                                                className={`text-para w-full appearance-none bg-white border ${formErrors.child5_10 ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                                id="child5_10"
                                                name="child5_10"
                                                value={formData.child5_10}
                                                onChange={handleInputChange}
                                            >
                                                <option value=""></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            {formErrors.child5_10 && <span className="text-red-500 text-xs">{formErrors.child5_10}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex flex-col'>
                                        <label className='text-sm font-semibold' htmlFor="additionalInfo">Additional Information:</label>
                                        <textarea
                                            className={`text-sm w-full h-20 appearance-none bg-white border ${formErrors.additionalInfo ? 'border-red-500' : 'border-gray-400'} hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
                                            type="text"
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        {formErrors.additionalInfo && <span className="text-red-500 text-xs">{formErrors.additionalInfo}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-1'>
                                <div className='flex items-center gap-3 justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-1.5 px-4 w-32 m-auto rounded-full'>
                                    <button type="submit" className='text-base font-medium'>Submit</button>
                                    {/* <FontAwesomeIcon icon={faArrowRight} className='text-sm mt-1' /> */}
                                </div>
                            </div>
                        </form>
                    </Box>
                    :
                    <Box sx={style}>
                        <div className="w-full text-para">
                            <div onClick={() => setConfirmation(!openConfirmation)} size={20} className=" cursor-pointer text-slate-500 hover:text-primary">
                            <FontAwesomeIcon icon={faArrowCircleLeft} className='font1' />
                            </div>
                            {/* <FaArrowAltCircleLeft  /> */}
                            {bookingConfirmed ?
                                <div className="flex justify-center gap-2 pb-5 items-center">                   
                                    <p className="text-lg font-semibold text-green-500">Booking Confirmed</p>
                                </div>
                                :
                                <div className="flex justify-center gap-2 pb-5 items-center">                                 
                                    <p className="text-lg font-semibold ">Booking Confirmation</p>
                                </div>
                            }
                            <div className="grid grid-cols-2 gap-5 border-b pb-4">
                                <div className=" place-self-center">
                                    <div className=' border-l-4 border-red-400 pl-3 -ml-4 mt-4 mb-2'>
                                        <h3 className='font-semibold'>Choose Room</h3>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Check In: <span className="font-normal">03-5-2024</span></p>
                                        <p className="font-semibold">Check Out: <span className="font-normal" >03-5-2024</span></p>
                                        <p className="font-semibold">Duration: <span className="font-normal">Complete Tour Package</span></p>
                                        <p className="font-semibold">Category: <span className="font-normal">Deluxe</span></p>
                                    </div>
                                </div>
                                <div>
                                    <div className=' border-l-4 border-red-400 pl-3 -ml-4 mt-4 mb-2'>
                                        <h3 className='font-semibold'>Choose Room</h3>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Rooms: <span className="font-normal">1</span></p>
                                        <p className="font-semibold">Adults: <span className="font-normal">1</span></p>
                                        <p className="font-semibold">Child 2-4 yrs: <span className="font-normal">1</span></p>
                                        <p className="font-semibold">Child 5-10 yrs <span className="font-normal">1</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className=' border-l-4 border-red-400 pl-3 -ml-4 mt-4 mb-2'>
                                <h3 className='font-semibold'>Choose Room</h3>
                            </div>
                            <div>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="font-semibold">Name: <span className="font-normal">03-5-2024</span></p>
                                        <p className="font-semibold">Phone: <span className="font-normal">03-5-2024</span></p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email: <span className="font-normal">Complete Tour Package</span></p>
                                        <p className="font-semibold">City: <span className="font-normal">Deluxe</span></p>
                                    </div>
                                </div>
                                <p className="font-semibold">Aditional Information: <span className="font-normal">Deluxe</span></p>
                            </div>
                            <div onClick={() => setbookingConfirmed(!bookingConfirmed)} className='flex items-center gap-2 justify-center mt-5 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 m-auto rounded-full'>
                                <button className=''>Book Now</button>
                            </div>
                        </div>
                    </Box>
                }
            </Modal>
        </div >
    );
}
