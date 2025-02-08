import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faGear,faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { useCarPopupContext } from '../admin/context/CarPopupCalculation';

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
    const {setLoginPopup, customiseData, setCustomiseData} = useCarPopupContext();
    const [open, setOpen] = React.useState(false);
    const [check, setCheck] = React.useState(false);
    const [formErrors, setFormErrors] = useState({});
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
        //Start/End City
        if (!formData.city.trim()) {
            errors.city = 'City is required';
        }
        // Set form errors
        setFormErrors(errors);
        const isValid = Object.keys(errors).length === 0;
        return isValid;
    };

    const handleOpen = () => {
        setOpen(true);
        setFormData({
            checkIn: "",
            checkOut: "",
            category: "",
            adults: "",
            child2_4: "",
            child5_10: "",
            city: "",
            additionalInfo: ""
        });
    }

    const handleClose = () => {
        setOpen(false);
        setFormErrors((prev)=> !prev);
        setFormData({
            checkIn: "",
            checkOut: "",
            category: "",
            adults: "",
            child2_4: "",
            child5_10: "",
            city: "",
            additionalInfo: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // console.log("Form submitted:", formData);
            setCustomiseData(formData);
            setOpen(false);
            setLoginPopup(true);
        };
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
                    <Box sx={style}>
                        <div className="flex justify-end ">
                            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} className='font1 cursor-pointer' />
                        </div>
                        <div className='flex justify-center gap-2 items-center pb-1'>
                            <FontAwesomeIcon icon={faGear} className='font1' />
                            <h3 className='text-md font-semibold'>Customise Your Tour</h3>
                        </div>
                        <form>
                            <div className='py-3'>
                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-3'>
                                    <div className='flex flex-col gap-3'>
                                        {/* check in */}
                                        <div className='text-sm flex flex-col items-baseline'>
                                            <label className='text-sm font-semibold' htmlFor="checkIn">Check In<sup className='text-red-500 text-sm'>*</sup></label>
                                            <input
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                type="date"
                                                id="checkIn"
                                                name="checkIn"
                                                value={formData.checkIn}
                                                onChange={handleInputChange}
                                                min={new Date().toISOString().split("T")[0]}
                                            />
                                            {formErrors.checkIn && <span className="text-red-500 text-[10px]">{formErrors.checkIn}</span>}
                                        </div>
                                        {/* Check Out */}
                                        <div className='text-sm flex flex-col items-baseline'>
                                            <label className='text-sm font-semibold' htmlFor="checkOut">Check Out<sup className='text-red-500 text-sm'>*</sup></label>
                                            <input
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                type="date"
                                                id="checkOut"
                                                name="checkOut"
                                                value={formData.checkOut}
                                                onChange={handleInputChange}
                                                min={formData?.checkIn ? formData?.checkIn : new Date().toISOString().split("T")[0]}
                                                disabled={!formData?.checkIn}
                                            />
                                            {formErrors.checkOut && <span className="text-red-500 text-[10px]">{formErrors.checkOut}</span>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Start/End City */}
                                        <div className='flex flex-col pt-0.5'>
                                            <label className='text-sm font-semibold' htmlFor="city">Start/End City<sup className='text-red-500 text-sm'>*</sup></label>
                                            <input
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                autoComplete='off'
                                                placeholder='Enter Start/End City'
                                            />
                                            {formErrors.city && <span className="text-red-500 text-[10px] my-0.5 ">{formErrors.city}</span>}
                                        </div>
                                        {/* Category */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="category">Package Category<sup className='text-red-500 text-sm'>*</sup></label>
                                            <select
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
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
                                            {formErrors.category && <span className="text-red-500 text-[10px] my-0.5">{formErrors.category}</span>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Adults */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="adults">Adult<sup className='text-red-500 text-sm'>*</sup></label>
                                            <select
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                id="adults"
                                                name="adults"
                                                value={formData.adults}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Adults</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="3">5</option>
                                                <option value="4">6</option>
                                            </select>
                                            {formErrors.adults && <span className="text-red-500 text-[10px]">{formErrors.adults}</span>}
                                        </div>
                                        {/* Child 2-4 */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="child2_4">Child 2-4 yr</label>
                                            <select
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                id="child2_4"
                                                name="child2_4"
                                                value={formData.child2_4}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Child</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="3">5</option>
                                                <option value="4">6</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        {/* Child 5-10 */}
                                        <div className='flex flex-col'>
                                            <label className='text-sm font-semibold' htmlFor="child5_10">Child 5-10 yr</label>
                                            <select
                                                className="text-sm w-full px-4 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                                id="child5_10"
                                                name="child5_10"
                                                value={formData.child5_10}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Child</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="3">5</option>
                                                <option value="4">6</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex flex-col'>
                                        <label className='text-sm font-semibold' htmlFor="additionalInfo">Additional Information</label>
                                        <textarea
                                            className="text-sm w-full px-4 py-1.5 md:h-24 h-20 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:outline-none transition ease-in-out"
                                            type="text"
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            placeholder='Enter Your Additional Details.....'
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button
                                className='mt-1 flex items-center gap-3 justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-1.5 px-4 w-full m-auto rounded-full'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </Box>
            </Modal>
        </div >
    );
}
