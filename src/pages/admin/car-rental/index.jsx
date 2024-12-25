import Layout from "@/components/admin/Layout"
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const MdOutlineAddCircle = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineAddCircle));
const MdDeleteForever = dynamic(() => import('react-icons/md').then(mod => mod.MdDeleteForever));
const FaEdit = dynamic(() => import('react-icons/fa').then(mod => mod.FaEdit));
const IoIosSave = dynamic(() => import('react-icons/io').then(mod => mod.IoIosSave));
const MdCancel = dynamic(() => import('react-icons/md').then(mod => mod.MdCancel));
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faEdit, faCirclePlus, faTrash, faCancel, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";
import CarItineraryTour from "@/components/admin/itineraryMaster/CarItineraryTour";
import CarTermsAndCondition from "@/components/admin/itineraryMaster/Car/CarTermsAndCondition";
import CarGst from "@/components/admin/dashboard/CarGst";
import CarTime from "@/components/admin/itineraryMaster/Car/CarTime";
import CarLocation from "@/components/admin/itineraryMaster/Car/CarLocation";
import CarPricingManagement from "@/components/admin/itineraryMaster/Car/CarPricingManagement";


export default function Category() {

    const [isBadge, setBadge] = useState({
        badge: ""
    })

    // badges List Data
    const [badgesListData, setBadgesListData] = useState()

    // console.log("badage list data show is here", badgesListData)

    const isHandleBadge = (e) => {
        const { name, value } = e.target

        setBadge((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const isSubmitBadge = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/cars/package-setting/add-badge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(isBadge),
            });

            fetchBadges()


        } catch (error) {
            console.error('Error during form submission:', error);
        }
    }

    // get method
    const fetchBadges = async () => {
        try {
            const badgeList = await fetch('/api/cars/package-setting/get-badges')
            const badges = await badgeList.json()
            // console.log("badeges is here", badges)
            setBadgesListData(badges.PackageBadges.reverse())

        } catch (err) {
            console.log(err);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedBadges = await fetchBadges();

        };
        fetchData()
    }, [])



    // category Section making
    // const [isCategory, setCategory] = useState({
    //     category: ""
    // })

    // const [categoryListData, setcategoryListData] = useState();

    // const isHandleCategory = (e) => {
    //     const { name, value } = e.target
    //     setCategory((prev) => {
    //         return { ...prev, [name]: value }
    //     })
    //     // console.log("my category show here", isCategory)
    // }

    // const isSubmitCategory = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await fetch('/api/cars/package-setting/category/add-category', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(isCategory),
    //         });
    //         fetchCategories()

    //     } catch (error) {
    //         console.error('Error during form submission:', error);
    //     }
    // }



    // const fetchCategories = async () => {
    //     try {
    //         const categoriesList = await fetch('/api/cars/package-setting/category/get-categories')
    //         const categories = await categoriesList.json()
    //         console.log("categories is here", categories)
    //         setcategoryListData(categories.data.reverse())


    //     } catch (err) {
    //         console.log(err);
    //         return [];
    //     }
    // }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const fetchedCategories = await fetchCategories();

    //     };
    //     fetchData()
    // }, [])

    const [editBadgeId, setEditBadgeId] = useState(null)
    const [editBadgeValue, setEditBadgeValue] = useState('')

    const toggleEditBadge = (badage_id) => {
        setEditBadgeId(badage_id == editBadgeId ? null : badage_id)
        setEditBadgeValue('')
        // console.log("badge value show is here", editBadgeValue)
    }

    const saveEditBadge = async (badge_id) => {
        try {
            const response = await fetch('/api/cars/package-setting/edit-badge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ badge_id, badge: editBadgeValue }),
            });

            toggleEditBadge(badge_id)
            const fetchedBadge = await fetchBadges();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteBadge = async (badgeId) => {
        try {
            // const userConfirmed = confirm('Are you sure?');

            // if (!userConfirmed) {
            //     return;
            // }
            const response = await fetch(`/api/cars/package-setting/delete-badge`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ badgeId })
            });
            // console.log("badge id show for delete", badgeId)
            if (response.ok) {
                const fetchedBadge = await fetchBadges();

            } else {
                console.error('Failed to delete badge');
            }
        } catch (error) {
            console.error(error);
        }
        toast.success("Success Notification !", {
            position: "top-center"
        });
    }

    // const handleDeleteCategory = async (categoryId) => {
    //     try {
    //         const userConfirmed = confirm('Are you sure?');

    //         if (!userConfirmed) {
    //             return;
    //         }
    //         const response = await fetch(`/api/cars/package-setting/category/delete-category`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ categoryId })
    //         });
    //         if (response.ok) {
    //             const fetchedCategories = await fetchCategories();
    //         } else {
    //             console.error('Failed to delete category');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    // const saveEditCategory = async (category_id) => {
    //     try {
    //         const response = await fetch('/api/cars/package-setting/category/edit-category', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ category_id, category: editCategoryValue }),
    //         });
    //         ("Value is show is here", category_id, editCategoryValue)
    //         toggleEditCategory(category_id)
    //         const fetchedCategories = await fetchCategories();
    //         //   setcategoryListData(fetchedCategories);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // const [editCategoryValue, setEditCategoryValue] = useState('')
    // const [editCategoryId, seteditCategoryId] = useState(null)


    // const toggleEditCategory = (category_id) => {
    //     seteditCategoryId(category_id == editCategoryId ? null : category_id);
    //     setEditCategoryValue('')
    // }
    const [isActive, setIsActive] = useState(true);

    const handleToggle = () => {
        setIsActive((prev) => !prev); // Toggles between true and false
    };

    return (
        <>
            <AppProvider>
                <Layout>
                    {/* <SmartTabel/> */}
                    {/* <DynamicTable/> */}
                    <div>
                        <div className="flex items-center gap-5 text-primary py-5">
                            <FontAwesomeIcon icon={faCube} className="text-2xl" />
                            <p className="md:text-[28px] text-xl text-black">Car Package Master</p>
                            <FontAwesomeIcon
                                icon={faArrowRightLong}
                                className=" text-teal-700 text-xl"
                            />
                        </div>
                        <div className=" grid  grid-cols-1 xl:grid-cols-2 gap-5 rounded">
                            <div className='shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600'>
                                <form onSubmit={isSubmitBadge} className='flex items-end justify-between gap-3'>
                                    <div className='grow flex flex-col  '>
                                        <label htmlFor="badges" className="mb-2 pl-2 text-para font-semibold">Badges</label>
                                        <input
                                            onChange={isHandleBadge}
                                            className=' border rounded-md h-8 px-2 text-para grow focus:border-primary font-sans outline-none'
                                            type="text" name="badge"
                                            id="badges"
                                            placeholder="Enter Your Badges" />
                                    </div>
                                    <button type="submit">
                                        <FontAwesomeIcon
                                            icon={faCirclePlus}
                                            className="text-xl hover:text-primary cursor-pointer mb-1"
                                        />
                                    </button>
                                </form>
                                {/* data is here show */}
                                {/* trial code */}
                                <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                                    <div>
                                        {badgesListData?.map((item, index) => (
                                            <div key={item._id} className="even:bg-slate-50">
                                                <div className='flex justify-between  px-1'>
                                                    <p className='capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]'>
                                                        <span>{index + 1} </span>
                                                        {editBadgeId === item._id ? (
                                                            <input
                                                                className='border ml-2 rounded-md h-8 px-2 capitalize focus:border-primary font-sans outline-none'
                                                                defaultValue={item.badge}
                                                                onChange={(e) => setEditBadgeValue(e.target.value)}
                                                            />
                                                        ) : item.badge}
                                                    </p>
                                                    <div className='flex gap-2'>
                                                        {!editBadgeValue &&
                                                            <FontAwesomeIcon
                                                                icon={faTrash}
                                                                onClick={() => handleDeleteBadge(item._id)}
                                                                className="mt-2 hover:text-primary cursor-pointer"
                                                            />
                                                        }
                                                        {editBadgeId === item._id ? (
                                                            <span className="flex gap-2">
                                                                <FontAwesomeIcon
                                                                    icon={faXmark}
                                                                    onClick={() => toggleEditBadge(item._id)}
                                                                    className="mt-2 font1 hover:text-primary cursor-pointer"
                                                                />
                                                                {editBadgeValue &&
                                                                    <FontAwesomeIcon
                                                                        icon={faSave}
                                                                        onClick={() => saveEditBadge(item._id)}
                                                                        className="mt-2 hover:text-primary cursor-pointer"
                                                                    />
                                                                }
                                                            </span>
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={faEdit}
                                                                onClick={() => toggleEditBadge(item._id)}
                                                                className="mt-2 hover:text-primary cursor-pointer"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div >
                            {/* <CarGst /> */}
                            {/* Active Option / Inactive Option toggle */}
                            <div className='shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600'>
                                <h5 className="mb-2 pl-2 text-para font-semibold">Car Booking Status</h5>
                                <div className="flex justify-center items-center border p-2 xl:h-72 md:h-24 h-16 rounded">
                                    <div className="flex items-center space-x-2">
                                        <p className={`md:text-base md:font-semibold font-medium  text-para transition duration-300 ${isActive ? "text-black" : "text-gray-400 blur-none"}`}>Active</p>
                                        <div className="w-10 h-5 flex justify-between items-center rounded-full bg-white border-2 border-black"
                                            onClick={handleToggle}
                                        >
                                            <div
                                                className={`flex items-center justify-center w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${isActive ? "bg-navyblack shadow-md" : "bg-white text-gray-500"
                                                    }`}
                                            >
                                            </div>
                                            <div
                                                className={`flex items-center justify-center w-5 h-4 cursor-pointer rounded-full transition-all duration-300 ${!isActive ? "bg-navyblack  shadow-md" : "bg-white text-red-500"
                                                    }`}
                                            >
                                            </div>
                                        </div>
                                        <p className={`md:text-base md:font-semibold font-medium text-para transition duration-300 ${!isActive ? "text-black" : "text-gray-400 blur-none"}`}>Inactive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <CarItineraryTour />
                        </div>
                        <div>
                            <CarTermsAndCondition />
                        </div>
                        <div className="mt-5 mb-10">
                            <CarTime />
                        </div>
                        <div className="mt-5 mb-10">
                            <CarPricingManagement />
                        </div>
                        <div className="mt-5 mb-10">
                            <CarLocation />
                        </div>
                    </div>
                </Layout>
            </AppProvider>
        </>
    )
}