import { useEffect, useState, useCallback } from "react";
import "../../../app/globals.css";

// Custom hook to fetch data
const useFetchData = (url, setState) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setState(data || []);  // Ensure data is an array or empty object
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [url, setState]);
};

const TourInformation=({ itinerary })=> {
    const [tourInclusion, setTourInclusion] = useState([]);
    const [tourExclusion, setTourExclusion] = useState([]);
    const [tourCancellation, setTourCancellation] = useState([]);
    const [paymentTerm, setPaymentTerm] = useState([]);
    const [needToKnow, setNeedToKnow] = useState([]);

    const [selectedInclusion, setSelectedInclusion] = useState(null);
    const [selectedExclusion, setSelectedExclusion] = useState(null);
    const [selectedCancellation, setSelectedCancellation] = useState(null);
    const [selectedPaymentTerm, setSelectedPaymentTerm] = useState(null);
    const [selectedNeedToKnow, setSelectedNeedToKnow] = useState(null);

    const [selectedTourInfo, setSelectedTourInfo] = useState(null);

    // Memoize the fData function
    const fData = useCallback(async () => {
        const response = await fetch('/api/package/tour-information/' + (itinerary ? itinerary.id : 'add-package'));
        const data = await response.json();
        return data;
    }, [itinerary]);

    useEffect(() => {
        fData().then(res => setSelectedTourInfo(res));
    }, [fData]);

    // Fetch data using the custom hook
    useFetchData('/api/package/tour-info/inclusion/get', (data) => setTourInclusion(data.inclusionGroupData));
    useFetchData('/api/package/tour-info/exclusion/get', (data) => setTourExclusion(data.ExclusionGroupData));
    useFetchData('/api/package/tour-info/cancellation/get', (data) => setTourCancellation(data.CancellationGroupData));
    useFetchData('/api/package/tour-info/payment-term/get', (data) => setPaymentTerm(data.PaymentTermGroupData));
    useFetchData('/api/package/tour-info/need-to-know/get', (data) => setNeedToKnow(data.NeedToKnowGroupData));

    const handleSave = async () => {
        if (selectedInclusion && selectedExclusion && selectedCancellation && selectedPaymentTerm && selectedNeedToKnow) {
            const payload = {
                inclusion: selectedInclusion,
                exclusion: selectedExclusion,
                cancellation: selectedCancellation,
                paymentTerm: selectedPaymentTerm,
                needToKnow: selectedNeedToKnow,
            };

            try {
                const response = await fetch('/api/package/tour-information/' + (itinerary ? itinerary.id : 'add-package'), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    alert('Tour information saved successfully!');
                } else {
                    alert('Failed to save tour information.');
                }
            } catch (error) {
                console.error('Error saving tour information:', error);
                alert('Error saving tour information.');
            }
        } else {
            alert("Please select all options before saving.");
        }
    };

    const handleSelectChange = (setSelectedFunction, dataArray, event) => {
        const selectedItem = dataArray.find(item => item.groupName === event.target.value);
        setSelectedFunction(selectedItem);
    };

    return (
        <div className="bg-white rounded p-3 my-5">
            <div>
                <p className="text-base font-semibold">Tour Information</p>
            </div>
            <div className="px-5 border rounded">
                <div className="flex gap-5 py-3">
                    <label htmlFor="tourInclusion" className="font-semibold">Tour Inclusion:</label>
                    <select
                        className="border"
                        id="tourInclusion"
                        value={selectedInclusion?.groupName || ""}
                        onChange={(e) => handleSelectChange(setSelectedInclusion, tourInclusion, e)}
                    >
                        <option value="" disabled>{selectedTourInfo ? selectedTourInfo?.inclusion?.groupName : "Select an option"}</option>
                        {tourInclusion.map((item) => (
                            <option key={item.id} value={item.groupName}>{item.groupName}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-5 py-3">
                    <label htmlFor="tourExclusion" className="font-semibold">Tour Exclusion:</label>
                    <select
                        className="border"
                        id="tourExclusion"
                        value={selectedExclusion?.groupName || ""}
                        onChange={(e) => handleSelectChange(setSelectedExclusion, tourExclusion, e)}
                    >
                        <option value="" disabled>{selectedTourInfo ? selectedTourInfo?.exclusion?.groupName : "Select an option"}</option>
                        {tourExclusion.map((item) => (
                            <option key={item.id} value={item.groupName}>{item.groupName}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-5 py-3">
                    <label htmlFor="cancellationPolicy" className="font-semibold">Cancellation Policy:</label>
                    <select
                        className="border"
                        id="cancellationPolicy"
                        value={selectedCancellation?.groupName || ""}
                        onChange={(e) => handleSelectChange(setSelectedCancellation, tourCancellation, e)}
                    >
                        <option value="" disabled>{selectedTourInfo ? selectedTourInfo?.cancellation?.groupName : "Select an option"}</option>
                        {tourCancellation.map((item) => (
                            <option key={item.id} value={item.groupName}>{item.groupName}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-5 py-3">
                    <label htmlFor="paymentTerm" className="font-semibold">Payment Term:</label>
                    <select
                        className="border"
                        id="paymentTerm"
                        value={selectedPaymentTerm?.groupName || ""}
                        onChange={(e) => handleSelectChange(setSelectedPaymentTerm, paymentTerm, e)}
                    >
                        <option value="" disabled>{selectedTourInfo ? selectedTourInfo?.paymentTerm?.groupName : "Select an option"}</option>
                        {paymentTerm.map((item) => (
                            <option key={item.id} value={item.groupName}>{item.groupName}</option>
                        ))}
                    </select>
                </div>
                <div className="flex gap-5 py-3">
                    <label htmlFor="needToKnow" className="font-semibold">Need To Know:</label>
                    <select
                        className="border"
                        id="needToKnow"
                        value={selectedNeedToKnow?.groupName || ""}
                        onChange={(e) => handleSelectChange(setSelectedNeedToKnow, needToKnow, e)}
                    >
                        <option value="" disabled>{selectedTourInfo ? selectedTourInfo?.needToKnow?.groupName : "Select an option"}</option>
                        {needToKnow.map((item) => (
                            <option key={item.id} value={item.groupName}>{item.groupName}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button
                className="mt-10 bg-black text-white w-full rounded py-2"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
}
export default  TourInformation
