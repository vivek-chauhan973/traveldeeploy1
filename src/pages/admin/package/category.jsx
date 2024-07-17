import Layout from "@/components/admin/Layout"
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import TourInclusion from "@/components/admin/itineraryMaster/TourInclusion";
import ItineraryTour from "@/components/admin/itineraryMaster/ItineraryTour";
import DynamicTable from "@/components/admin/itineraryMaster/DynamicTable";
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import category from "../blog/category";



export default function Category () {

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
            const response = await fetch('/api/package-setting/add-badge', {
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
            const badgeList = await fetch('/api/package-setting/get-badges')
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
    const [isCategory, setCategory] = useState({
        category: ""
    })

    const [categoryListData, setcategoryListData] = useState();

    const isHandleCategory = (e) => {
        const { name, value } = e.target
        setCategory((prev) => {
            return { ...prev, [name]: value }
        })
        // console.log("my category show here", isCategory)
    }

    const isSubmitCategory = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/package-setting/category/add-category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(isCategory),
            });
            fetchCategories()

        } catch (error) {
            console.error('Error during form submission:', error);
        }
    }



    const fetchCategories = async () => {
        try {
            const categoriesList = await fetch('/api/package-setting/category/get-categories')
            const categories = await categoriesList.json()
            // console.log("categories is here", categories)
             setcategoryListData(categories.data.reverse())
           

        } catch (err) {
            console.log(err);
            return [];
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const fetchedCategories = await fetchCategories();

        };
        fetchData()
    }, [])

    const [editBadgeId, setEditBadgeId] = useState(null)
    const [editBadgeValue, setEditBadgeValue] = useState('')

    const toggleEditBadge = (badage_id) => {
        setEditBadgeId(badage_id == editBadgeId ? null : badage_id)
        setEditBadgeValue('')
        // console.log("badge value show is here", editBadgeValue)
    }

    const saveEditBadge = async (badge_id) => {
        try {
            const response = await fetch('/api/package-setting/edit-badge', {
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
            const response = await fetch(`/api/package-setting/delete-badge`, {
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

    const handleDeleteCategory = async (categoryId) => {
        try {
            const userConfirmed = confirm('Are you sure?');

            if (!userConfirmed) {
                return;
            }
            const response = await fetch(`/api/package-setting/category/delete-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ categoryId })
            });
            if (response.ok) {
                const fetchedCategories = await fetchCategories();
            } else {
                console.error('Failed to delete category');
            }
        } catch (error) {
            console.error(error);
        }
    }


    const saveEditCategory = async (category_id) => {
        try {
            const response = await fetch('/api/package-setting/category/edit-category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category_id, category: editCategoryValue }),
            });
            ("Value is show is here", category_id, editCategoryValue)
            toggleEditCategory(category_id)
            const fetchedCategories = await fetchCategories();
            //   setcategoryListData(fetchedCategories);
        } catch (error) {
            console.log(error);
        }
    };
    const [editCategoryValue, setEditCategoryValue] = useState('')
    const [editCategoryId, seteditCategoryId] = useState(null)


    const toggleEditCategory = (category_id) => {
        seteditCategoryId(category_id == editCategoryId ? null : category_id);
        setEditCategoryValue('')
    }





    return (
        <>
        <AppProvider>
            <Layout>
                {/* <SmartTabel/> */}
                {/* <DynamicTable/> */}
                <div>
                    <div className="flex items-center gap-5 text-primary pb-3">
                        <LuPackagePlus size={28} className="font-semibold"/>
                        <p className="text-[28px] text-black">Package Master</p>
                        <HiOutlineArrowNarrowRight size={28} className=" text-teal-700"/>
                    </div>
                    <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 rounded">
                        <div className='shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600'>
                            <form onSubmit={isSubmitBadge} className='flex items-end justify-between gap-5'>
                                <div className='grow flex flex-col  '>
                                    <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">Badges</label>
                                    <input
                                        onChange={isHandleBadge}
                                        className=' border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none'
                                        type="text" name="badge"
                                        
                                        placeholder="Enter Your Itinerary FAQ Details" />
                                </div>
                                <button type="submit">
                                    <MdOutlineAddCircle size={35} className='cursor-pointer hover:text-primary' />
                                </button>
                                
                            </form>
                            {/* data is here show */}
                            {/* <hr className='my-3 border border-slate-500' /> */}
                            
                            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                                <ul>
                                    {badgesListData?.map((item, index) => (
                                        <li key={item._id} className="even:bg-slate-50">
                                            <div className='flex justify-between  px-1'>
                                                {/* <p className='capitalize flex gap-2 leading-8'><span>{index + 1} </span>{item.badge}</p> */}
                                                <p className='capitalize truncate hover:text-clip flex gap-2 leading-8 text-[14px]'>
                                                    <span>{index + 1} </span>
                                                    {editBadgeId === item._id ? (
                                                        <input
                                                           className='border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none'
                                                            defaultValue={item.badge}
                                                            onChange={(e) => setEditBadgeValue(e.target.value)}
                                                        />
                                                    ) : item.badge}
                                                </p>
                                                <div className='flex gap-2 basis-1/3'>
                                                    {editBadgeId === item._id ? (
                                                        <span className="flex gap-2 px-2">
                                                            {editBadgeValue && <IoIosSave
                                                                size={24}
                                                                className='mt-1 hover:text-red-500 cursor-pointer'
                                                                onClick={() => saveEditBadge(item._id)}
                                                            />}
                                                            <MdCancel
                                                                size={24}
                                                                className='mt-1 hover:text-red-500 cursor-pointer'
                                                                onClick={() => toggleEditBadge(item._id)}
                                                            />
                                                        </span>
                                                    ) : (
                                                        <FaEdit onClick={() => toggleEditBadge(item._id)} size={20} className='mt-1 hover:text-red-500 cursor-pointer' />
                                                    )}

                                                    {/* <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' onClick={() => handleDeleteCategory(item._id)} /> */}
                                                    <MdDeleteForever onClick={() => handleDeleteBadge(item._id)} size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                                </div>
                                                <ToastContainer/>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                        {/* category section */}
                        <div className=' p-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600'>
                            <form onSubmit={isSubmitCategory} className='flex items-end justify-between gap-5'>
                                <div className='grow flex flex-col  '>
                                    <label htmlFor="" className="pb-2 font-semibold text-para">Category</label>
                                    <input
                                        onChange={isHandleCategory}
                                        className=' border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none'
                                        type="text" name="category"
                                        placeholder="Enter Your Itinerary FAQ Details" />
                                </div>
                                <button type="submit">
                                    <MdOutlineAddCircle size={35} className='cursor-pointer hover:text-primary' />
                                </button>
                            </form>
                            {/* data is here show */}
                            {/* <hr className='my-3' /> */}
                            <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                                <ul>
                                    {categoryListData?.map((item, index) => (
                                        <li key={item._id} className="even:bg-slate-50">
                                            <div className='flex justify-between  px-1'>
                                                <p className='capitalize flex gap-2 leading-8 text-[14px]'>
                                                    <span>{index + 1} </span>
                                                    {editCategoryId === item._id ? (
                                                        <input
                                                            className='border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none'
                                                            defaultValue={item.category}
                                                            onChange={(e) => setEditCategoryValue(e.target.value)}
                                                        />
                                                    ) : item.category}
                                                </p>
                                                <div className='flex gap-2 basis-1/3'>
                                                    {editCategoryId === item._id ? (
                                                        <span className="flex gap-2 px-2">
                                                            {editCategoryValue && <IoIosSave
                                                                size={24}
                                                                className='mt-1 hover:text-red-500 cursor-pointer'
                                                                onClick={() => saveEditCategory(item._id)}
                                                            />}
                                                            <MdCancel
                                                                size={24}
                                                                className='mt-1 hover:text-red-500 cursor-pointer'
                                                                onClick={() => toggleEditCategory(item._id)}
                                                            />
                                                        </span>
                                                    ) : (
                                                        <FaEdit
                                                            size={20}
                                                            className='mt-1 hover:text-red-500 cursor-pointer'
                                                            onClick={() => toggleEditCategory(item._id)}
                                                        />
                                                    )}

                                                    <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' onClick={() => handleDeleteCategory(item._id)} />
                                                </div>
                                                {/* <div className='flex gap-2'>
                                                    <FaEdit size={20} className='mt-1 hover:text-red-500 cursor-pointer' onClick={() => handleEditCategory(item._id)} />
                                                </div> */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* payment terms */}

                    {/* <div className="bg-white p-2">
                        <div>
                            <p className="font-semibold text-[15px]">Payment Term</p>
                        </div>
                        <div className=" border p-4 rounded">
                            <div className="flex items-center gap-2">
                                <div>
                                    <label htmlFor=""></label>
                                    <div className="flex gap-4 py-2">
                                        <input className="border h-8 rounded text-para px-2" type="text" placeholder="Days" />
                                        <input className="border h-8 rounded text-para px-2" type="text" placeholder="Percentage" />
                                    </div>
                                </div>
                                <div className="">
                                    <button className=" bg-navyblack text-white rounded px-10 py-1 ">Add</button>
                                </div>
                            </div>
                            <div>
                                <div className="text-[15px]">
                                    <hr className='my-3' />
                                    <div className='flex justify-between even:bg-slate-50 px-1'>
                                        <p className=' capitalize flex gap-2 leading-8'><span>1. </span>Day 2 | Percentage 10%</p>
                                        <div className='flex gap-2'>
                                            <FaEdit size={20} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='flex justify-between even:bg-slate-50 px-1'>
                                        <p className=' capitalize flex gap-2 leading-8'><span>2. </span>Valentine Day</p>
                                        <div className='flex gap-2'>
                                            <FaEdit size={20} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='flex justify-between even:bg-slate-50 px-1'>
                                        <p className=' capitalize flex gap-2 leading-8'><span>3. </span>Speciality Tour</p>
                                        <div className='flex gap-2'>
                                            <FaEdit size={20} className='mt-1 hover:text-red-500 cursor-pointer' />
                                            <MdDeleteForever size={24} className='mt-1 hover:text-red-500 cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-5">
                        <ItineraryTour/>
                    </div>





                </div>
            </Layout>
            </AppProvider>
        </>
    )
}