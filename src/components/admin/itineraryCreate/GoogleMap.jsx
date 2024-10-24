import React, { useState, useEffect } from 'react';

const GoogleMap = ({ setActiveTab, itinerary, setMapDot }) => {
    const [mapCode, setMapCode] = useState(null);

    const handleChange = (e) => {
        setMapCode(e.target.value);
    };

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await fetch(`/api/cars/package/map/${itinerary?._id}`);
                const mapData = await response.json();
                setMapCode(mapData?.mapCode || `<iframe src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1775308.9495838394!2d76.49413919267015!3d29.65015654236281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x390ce65f77cae949%3A0x7c768dbb3f78e57!2sBadarpur%2C%20New%20Delhi%2C%20Delhi!3m2!1d28.5102495!2d77.2985884!4m5!1s0x390d1d8ac24be307%3A0xa330ba8a64a3496!2sDeer%20Park%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi!3m2!1d28.5549523!2d77.1916497!4m5!1s0x390ce18b0710088f%3A0x99748c2a6daa196f!2sTresor%2C%20Saket%20-%20Apple%20Authorised%20Service%20Provider%2C%20Shop%20No.144%2C%20GF%2C%20South%20Court%20Mall%2C%20Saket%2C%20New%20Delhi%2C%20Delhi%20110017!3m2!1d28.528387199999997!2d77.22020309999999!4m5!1s0x390ce65f77cae949%3A0x7c768dbb3f78e57!2sBadarpur%2C%20New%20Delhi%2C%20Delhi!3m2!1d28.5102495!2d77.2985884!4m5!1s0x3908ed2ff38e31ef%3A0x7fdeebfe93c9add1!2sUttarkashi%2C%20Uttarakhand!3m2!1d30.726830699999997!2d78.4354042!4m5!1s0x3908bbff103db101%3A0x41b1a0ecb9af8513!2sBarkot%2C%20Uttarakhand%20249141!3m2!1d30.8096653!2d78.20916129999999!5e0!3m2!1sen!2sin!4v1713600662509!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

                setActiveTab("Tab6");
                if (mapData?.mapCode) {
                    setMapDot(true);
                }
            } catch (error) {
                console.error('Error fetching map data:', error);
            }
        };

        if (itinerary?._id) {
            fetchMapData();
        }

    }, [itinerary]);

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/cars/package/map/${itinerary?._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mapCode })
            });

            if (res.ok) {
                setActiveTab("Tab6");
                setMapDot(true);
                console.log("Map code successfully embedded");
            } else {
                console.error('Failed to embed map code');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            {/* <div>Code Render</div> */}
            <div className='md:grid grid-cols-2 gap-5 items-center'>
                <div>
                    <p>Code Render</p>
                    <textarea
                        value={mapCode}
                        onChange={handleChange}
                        className='p-2 w-full h-80 resize-none rounded-md'
                    ></textarea>
                    <div className='md:flex justify-between px-3'>
                        <p className='text-xs mb-2'>Confirm you Enter width=100% & height=100%</p>
                        <button
                            onClick={handleSubmit}
                            className="bg-navyblack text-white rounded px-10 py-1 md:w-auto w-full"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className='md:mt-0 mt-5'>
                    <p className='font-semibold text-xs'>Google Map show is here</p>
                    <div
                        className='border-black border w-full h-72 rounded-md overflow-hidden'
                        dangerouslySetInnerHTML={{ __html: mapCode }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default GoogleMap;
