import "../../../app/globals.css";

const CarDepartureSection = () => {

    return (
        <>
            <div>
                <div className="hidden xl:flex flex-col gap-4 border rounded-md p-3 relative bg-white h-[480px] overflow-scroll">
                    <div>
                        <div>
                            <h4 className="font-semibold text-base p-3 text-graytext uppercase">
                                1. Choose your departure date and city
                            </h4>
                        </div>
                        <hr />
                        <div className="overflow-y-auto">
                            {/* Display the current month's calendar */}
                            <div className=" ml-5">
                                <div className="my-5">
                                    <div className="flex gap-3 flex-wrap">
                                        <div className="cursor-pointer">
                                            <div className="hover:bg-gray-500 group text-white bg-gray-200 w-16 rounded-md overflow-hidden">
                                                <p className="text-center text-xxs text-white group-hover:text-white bg-navyblack uppercase">
                                                    SUN
                                                </p>
                                                <hr />
                                                <p className="text-center group:hover:text-white font-bold text-black group-hover:text-white text-xs">
                                                    11
                                                </p>
                                                <div className="flex justify-center text-black group-hover:text-white items-center mt-1 text-xxs">
                                                    ₹ 40,000
                                                </div>
                                                <div className="text-center flex justify-center gap-1 text-xxs text-white group-hover:text-white bg-navyblack">
                                                    <p>Save 10%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>                                       
                            <hr />
                            <div className="ml-2 my-4">
                                <h6 className="font-semibold text-md mb-3 text-graytext">
                                    About
                                </h6>
                                <p
                                    className="xl:ml-3 ml-0 mr-2 about-margin text-para"
                                // dangerouslySetInnerHTML={{ __html: addPackage?.about }}
                                >About Text</p>
                            </div>
                            <div className="md:mx-5 ">
                                <div className="md:my-7 my-5 overflow-x-scroll">
                                    <table className="w-full mt-3 border-collapse border border-gray-300 text-center text-para">
                                        <thead>
                                            <tr className="border-b bg-black text-white">
                                                {/* {columns.map((col, index) => ( */}
                                                <th
                                                    // key={index}
                                                    className="border border-gray-300 font-normal px-3 py-1 text-xs uppercase tracking-wider"
                                                >
                                                    {/* {col} */}
                                                    ABC
                                                </th>
                                                {/* ))} */}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-100">
                                            {/* {submittedData.map((row, rowIndex) => ( */}
                                            <tr
                                            // key={rowIndex}
                                            >
                                                {/* {columns.map((col, colIndex) => ( */}
                                                <td
                                                    // key={colIndex}
                                                    className="   border-t border-l  border-r px-2 py-2   capitalize overflow-hidden border-gray-300  text-wrap"
                                                >
                                                    {/* {row[col]} */}
                                                    XYZ
                                                </td>
                                                {/* ))} */}
                                            </tr>
                                            {/* ))} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr />
                            <div className="ml-2 my-4">
                                <h6 className="font-semibold text-md mb-5 text-graytext">
                                    Highlights
                                </h6>
                                <div>
                                    {/* {addPackage?.highlights?.map((highlight) => ( */}
                                    <ul
                                        // key={highlight._id} 
                                        className="ml-3">
                                        <li className="xl:ml-5 ml-2 mr-2 text-para">
                                            {/* {highlight.text} */}
                                            highlighted Text
                                        </li>
                                    </ul>
                                    {/* ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarDepartureSection;
