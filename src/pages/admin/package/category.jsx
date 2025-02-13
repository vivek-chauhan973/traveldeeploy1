import Layout from "@/components/admin/Layout"
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const MdOutlineAddCircle = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineAddCircle));
const MdDeleteForever = dynamic(() => import('react-icons/md').then(mod => mod.MdDeleteForever));
const FaEdit = dynamic(() => import('react-icons/fa').then(mod => mod.FaEdit));
const IoIosSave = dynamic(() => import('react-icons/io').then(mod => mod.IoIosSave));
const MdCancel = dynamic(() => import('react-icons/md').then(mod => mod.MdCancel));
import ItineraryTour from "@/components/admin/itineraryMaster/ItineraryTour";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gst from "@/components/admin/dashboard/Gst";
import TermsAndCondition from "@/components/admin/itineraryMaster/TermsAndCondition";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faEdit, faCirclePlus, faTrash, faCancel, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";

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

                <Layout>
                    {/* <SmartTabel/> */}
                    {/* <DynamicTable/> */}
                    <div>
                        <div className="flex items-center gap-5 text-primary py-5">
                            <FontAwesomeIcon icon={faCube} className="text-2xl" />
                            <p className="md:text-[28px] text-xl text-black">Package Master</p>
                            <FontAwesomeIcon
                                icon={faArrowRightLong}
                                className=" text-teal-700 text-xl"
                            />
                        </div>
                        <div className=" grid  grid-cols-1 xl:grid-cols-2 gap-5 rounded">
                            <div className='shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600'>
                                <form onSubmit={isSubmitBadge} className='flex items-end justify-between gap-3'>
                                    <div className='grow flex flex-col  '>
                                        <label htmlFor="" className="mb-2 pl-2 text-para font-semibold">Badges</label>
                                        <input
                                            onChange={isHandleBadge}
                                            className=' border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none'
                                            type="text" name="badge"

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
                                                                className='border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none'
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
                            </div>
                            {/* category section */}
                            <div className=' p-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600'>
                                <form onSubmit={isSubmitCategory} className='flex items-end justify-between gap-3'>
                                    <div className='grow flex flex-col  '>
                                        <label htmlFor="" className="pb-2 font-semibold text-para">Category</label>
                                        <input
                                            onChange={isHandleCategory}
                                            className=' border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none'
                                            type="text" name="category"
                                            placeholder="Enter Your Category" />
                                    </div>
                                    <button type="submit">
                                        <FontAwesomeIcon
                                            icon={faCirclePlus}
                                            className="text-xl hover:text-primary cursor-pointer mb-1"
                                        />
                                    </button>
                                </form>
                                {/* data is here show */}
                                {/* <hr className='my-3' /> */}
                                <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                                    <div>
                                        {categoryListData?.map((item, index) => (
                                            <div key={item._id} className="even:bg-slate-50">
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
                                                    <div className='flex gap-2'>
                                                        {!editCategoryValue &&
                                                            <FontAwesomeIcon
                                                                icon={faTrash}
                                                                onClick={() => handleDeleteCategory(item._id)}
                                                                className="mt-2 hover:text-primary cursor-pointer"
                                                            />
                                                        }
                                                        {editCategoryId === item._id ? (
                                                            <span className="flex gap-2 px-2">
                                                                <FontAwesomeIcon
                                                                    icon={faXmark}
                                                                    onClick={() => toggleEditCategory(item._id)}
                                                                    className="mt-2 font1 hover:text-primary cursor-pointer"
                                                                />
                                                                {editCategoryValue &&
                                                                    <FontAwesomeIcon
                                                                        icon={faSave}
                                                                        onClick={() => saveEditCategory(item._id)}
                                                                        className="mt-2 hover:text-primary cursor-pointer"
                                                                    />
                                                                }
                                                            </span>
                                                        ) : (
                                                            <FontAwesomeIcon
                                                                icon={faEdit}
                                                                onClick={() => toggleEditCategory(item._id)}
                                                                className="mt-2 hover:text-primary cursor-pointer"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <ItineraryTour />
                        </div>
                        <div>
                            <TermsAndCondition />
                        </div>
                        <div className="mt-10">
                            <Gst />
                        </div>

                    </div>
                </Layout>
   
        </>
    )
}