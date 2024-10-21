import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import Layout from "@/components/admin/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCube } from "@fortawesome/free-solid-svg-icons";

export default function destinations() {

    return (
        <AppProvider>
            <Layout>
                <div className=''>
                    <div className="flex items-center gap-5 text-primary xl:mt-5 mb-10">
                        <FontAwesomeIcon icon={faCube} className="text-2xl" />
                        <p className="md:text-[28px] text-xl text-black">Selected Package</p>
                        <FontAwesomeIcon
                            icon={faArrowRightLong}
                            className=" text-teal-700 text-xl"
                        />
                    </div>
                    <div className=" w-full grid xl:grid-cols-2 grid-cols-1">
                        <div className='bg-white shadow-lg rounded-lg p-5'>
                            <div>
                                <h3 className=" font-semibold mb-1">Select Category</h3>
                                <select
                                    className="mb-4 p-2 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                                >
                                    <option value="category1">Section 1</option>
                                    <option value="category2">Section 2</option>
                                    <option value="category3">Section 3</option>
                                    <option value="category4">Section 4</option>
                                    <option value="category5">Section 5</option>
                                    <option value="category6">Popular Cities</option>
                                </select>
                            </div>
                            <div>
                                <h3 className=" font-semibold mb-1">Select State Wise Package</h3>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="p-2 mb-4 w-full border rounded-md h-10 px-2 focus:border-primary outline-none"
                                />
                            </div>
                            <div className="max-h-64 overflow-y-auto">

                                <label className="flex items-center mb-2 cursor-pointer"></label>


                            </div>
                            <p className="text-red-500 text-sm mt-2">
                                You can only select up to options.
                            </p>
                            <button
                                className="mt-4 bg-navyblack text-white px-4 py-2 rounded md:w-auto w-full"
                            >
                                Send Payload
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </AppProvider >
    );
}
