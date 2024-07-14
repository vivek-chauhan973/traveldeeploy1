import React, { useState } from 'react';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { MdOutlineAddCircle } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';
import { useAppContext } from '../context/Package/AddGuest';

const FixedDeparture = ({ itinerary }) => {
    const [basePrice, setBasePrice] = useState(itinerary?.prices?.basePrice || 0);
    const [rate, setRate] = useState(itinerary?.prices?.perRate|| 0);
    const [inventory, setInventory] = useState(itinerary?.prices?.inventory || 0);
    const [weightOptional, setWeightOptional] = useState(itinerary?.prices?.weight|| 0);
    const {pricingManagement}=useAppContext();
    // State for Age Policy
    const [agePolicy, setAgePolicy] = useState(itinerary?.prices?.agePolicy || []);
    const [inputAgePolicy, setInputAgePolicy] = useState('');
    const [agePolicyValidate, setAgePolicyValidate] = useState('');
    
    // State for Notes
    const [notes, setNotes] = useState(itinerary?.prices?.notes || []);
    const [inputNotes, setInputNotes] = useState('');
    const [notesValidate, setNotesValidate] = useState('');

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // Age Policy Handlers
    const handleAgePolicyChange = (e) => {
        setInputAgePolicy(e.target.value);
    };

    const addAgePolicy = () => {
        if (!inputAgePolicy) {
            setAgePolicyValidate("Age Policy is required");
            return;
        }
        setAgePolicy([...agePolicy, { text: inputAgePolicy, edit: false }]);
        setInputAgePolicy('');
        setAgePolicyValidate('');
    };

    const handleAgePolicyEditChange = (text, index) => {
        const newAgePolicy = [...agePolicy];
        newAgePolicy[index].text = text;
        setAgePolicy(newAgePolicy);
    };

    const toggleEditAgePolicy = (index) => {
        const newAgePolicy = [...agePolicy];
        newAgePolicy[index].edit = !newAgePolicy[index].edit;
        setAgePolicy(newAgePolicy);
    };

    const saveAgePolicy = (index) => {
        const newAgePolicy = [...agePolicy];
        newAgePolicy[index].edit = false;
        setAgePolicy(newAgePolicy);
    };

    const handleRemoveAgePolicy = (index) => {
        const newAgePolicy = [...agePolicy];
        newAgePolicy.splice(index, 1);
        setAgePolicy(newAgePolicy);
    };

    // Notes Handlers
    const handleNotesChange = (e) => {
        setInputNotes(e.target.value);
    };

    const addNotes = () => {
        if (!inputNotes) {
            setNotesValidate("Note is required");
            return;
        }
        setNotes([...notes, { text: inputNotes, edit: false }]);
        setInputNotes('');
        setNotesValidate('');
    };

    const handleNotesEditChange = (text, index) => {
        const newNotes = [...notes];
        newNotes[index].text = text;
        setNotes(newNotes);
    };

    const toggleEditNotes = (index) => {
        const newNotes = [...notes];
        newNotes[index].edit = !newNotes[index].edit;
        setNotes(newNotes);
    };

    const saveNotes = (index) => {
        const newNotes = [...notes];
        newNotes[index].edit = false;
        setNotes(newNotes);
    };

    const handleRemoveNotes = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    };

    const handleSubmit = async () => {
        const payload = {
            prices: {
                basePrice,
                rate,
                inventory,
                weightOptional,
            },
            agePolicy,
            notes,
            departure1:pricingManagement,
        };

        try {
            const res = await fetch('/api/package/price/departures/' + itinerary.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            // setActiveTab("NextTab"); // Assuming there's a function to set the next tab
            console.log("Data submitted", data);
        } catch (error) {
            console.log("Error submitting data", error);
        }
    };

    return (
        <div>
            <div className='bg-white m-2 rounded p-2'>
                <div>
                    <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                        <label className="font-semibold w-40" htmlFor="basePrice">
                            Base Price :
                        </label>
                        <div className="flex gap-1 items-center">
                            <LiaRupeeSignSolid size={18} />
                            <input
                                className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                name="basePrice"
                                value={basePrice}
                                onChange={handleInputChange(setBasePrice)}
                                type="number"
                                min={0}
                            />
                        </div>
                    </div>
                    <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                        <label className="font-semibold w-40" htmlFor="rate">
                            Rate :
                        </label>
                        <div className="flex gap-1 items-center">
                            <LiaRupeeSignSolid size={18} />
                            <input
                                className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                name="rate"
                                value={rate}
                                onChange={handleInputChange(setRate)}
                                type="number"
                                min={0}
                            />
                        </div>
                    </div>
                    <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                        <label className="font-semibold w-40" htmlFor="inventory">
                            Inventory :
                        </label>
                        <div className="flex gap-1 items-center">
                            <LiaRupeeSignSolid size={18} />
                            <input
                                className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                name="inventory"
                                value={inventory}
                                onChange={handleInputChange(setInventory)}
                                type="number"
                                min={0}
                            />
                        </div>
                    </div>
                    <div className="text-para flex flex-col sm:flex-row items-baseline mb-5">
                        <label className="font-semibold w-40" htmlFor="weightOptional">
                            Weight Optional :
                        </label>
                        <div className="flex gap-1 items-center">
                            <LiaRupeeSignSolid size={18} />
                            <input
                                className="h-8 appearance-none bg-white border px-4 py-2 pr-8 rounded leading-tight focus:outline"
                                name="weightOptional"
                                value={weightOptional}
                                onChange={handleInputChange(setWeightOptional)}
                                type="number"
                                min={0}
                            />
                        </div>
                    </div>
                </div>

                {/* Age Policy Section */}
                <div className="mt-5">
                    <label htmlFor="agePolicy" className="pb-2 font-semibold text-para">Age Policy</label>
                    <div>
                        <div className='w-full mt-2 flex gap-5 items-center'>
                            <input
                                onChange={handleAgePolicyChange}
                                value={inputAgePolicy}
                                className='w-full border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none'
                                type="text"
                                placeholder="Enter an Age Policy"
                            />
                            <MdOutlineAddCircle onClick={addAgePolicy} size={35} className='cursor-pointer hover:text-primary' />
                        </div>
                        <div className="border h-48 w-full overflow-y-auto py-2 rounded-md mt-2">
                            {agePolicy.map((item, index) => (
                                <div key={index} className='flex justify-between even:bg-slate-50 px-5'>
                                    {item.edit ? (
                                        <input
                                            type="text"
                                            value={item.text}
                                            onChange={(e) => handleAgePolicyEditChange(e.target.value, index)}
                                            className="border rounded-md h-8 px-2"
                                        />
                                    ) : (
                                        <p className='capitalize flex gap-2 leading-8'><span>{index + 1}.</span>{item.text}</p>
                                    )}
                                    <div className='flex gap-2'>
                                        {item.edit ? (
                                            <IoIosSave onClick={() => saveAgePolicy(index)} size={24} className='mt-1 hover:text-primary cursor-pointer' />
                                        ) : (
                                            <>
                                                <FaEdit onClick={() => toggleEditAgePolicy(index)} size={20} className='mt-1 hover:text-primary cursor-pointer' />
                                                <MdDeleteForever onClick={() => handleRemoveAgePolicy(index)} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className="text-xs text-red-700 capitalize">{agePolicyValidate}</span>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="mt-5">
                    <label htmlFor="notes" className="pb-2 font-semibold text-para">Notes</label>
                    <div>
                        <div className='w-full mt-2 flex gap-5 items-center'>
                            <input
                                onChange={handleNotesChange}
                                value={inputNotes}
                                className='w-full border rounded-md h-8 px-2 text-para grow focus:border-primary outline-none'
                                type="text"
                                placeholder="Enter a Note"
                            />
                            <MdOutlineAddCircle onClick={addNotes} size={35} className='cursor-pointer hover:text-primary' />
                        </div>
                        <div className="border h-48 w-full overflow-y-auto py-2 rounded-md mt-2">
                            {notes.map((item, index) => (
                                <div key={index} className='flex justify-between even:bg-slate-50 px-5'>
                                    {item.edit ? (
                                        <input
                                            type="text"
                                            value={item.text}
                                            onChange={(e) => handleNotesEditChange(e.target.value, index)}
                                            className="border rounded-md h-8 px-2"
                                        />
                                    ) : (
                                        <p className='capitalize flex gap-2 leading-8'><span>{index + 1}.</span>{item.text}</p>
                                    )}
                                    <div className='flex gap-2'>
                                        {item.edit ? (
                                            <IoIosSave onClick={() => saveNotes(index)} size={24} className='mt-1 hover:text-primary cursor-pointer' />
                                        ) : (
                                            <>
                                                <FaEdit onClick={() => toggleEditNotes(index)} size={20} className='mt-1 hover:text-primary cursor-pointer' />
                                                <MdDeleteForever onClick={() => handleRemoveNotes(index)} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className="text-xs text-red-700 capitalize">{notesValidate}</span>
                        </div>
                    </div>
                </div>

            </div>
            <button onClick={handleSubmit} className="bg-black text-white w-full rounded py-2 mt-4">
                Submit All Data
            </button>
        </div>
    );
};

export default FixedDeparture;
