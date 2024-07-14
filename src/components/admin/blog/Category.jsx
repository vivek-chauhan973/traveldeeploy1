import Layout from "@/components/admin/Layout";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Category() {
    const [isCategory, setCategory] = useState({
        category: ""
    });

    const [categoryListData, setCategoryListData] = useState([]);
    const [editCategoryValue, setEditCategoryValue] = useState('');
    const [editCategoryId, setEditCategoryId] = useState(null);

    const isHandleCategory = (e) => {
        const { name, value } = e.target;
        setCategory((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const isSubmitCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/package-setting/category/add-category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(isCategory),
            });
            fetchCategories();
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const categoriesList = await fetch('/api/package-setting/category/get-categories');
            const categories = await categoriesList.json();
            setCategoryListData(categories.data);
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const toggleEditCategory = (category_id) => {
        setEditCategoryId(category_id === editCategoryId ? null : category_id);
        setEditCategoryValue('');
    };

    const saveEditCategory = async (category_id) => {
        try {
            const response = await fetch('/api/package-setting/category/edit-category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category_id, category: editCategoryValue }),
            });
            toggleEditCategory(category_id);
            fetchCategories();
        } catch (error) {
            console.log(error);
        }
    };

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
                fetchCategories();
            } else {
                console.error('Failed to delete category');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Layout>
            <div>
                <div className="flex items-center gap-5 text-primary pb-3">
                    <LuPackagePlus size={28} className="font-semibold" />
                    <p className="text-[28px] text-black">Package Master</p>
                    <HiOutlineArrowNarrowRight size={28} className="text-teal-700" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded">
                    <div className='p-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] border-l-2 border-teal-600'>
                        <form onSubmit={isSubmitCategory} className='flex items-end justify-between gap-5'>
                            <div className='grow flex flex-col'>
                                <label htmlFor="" className="pb-2 font-semibold text-para">Category</label>
                                <input
                                    onChange={isHandleCategory}
                                    className='border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none'
                                    type="text" name="category"
                                    placeholder="Enter Your Itinerary FAQ Details" />
                            </div>
                            <button type="submit">
                                <MdOutlineAddCircle size={35} className='cursor-pointer hover:text-primary' />
                            </button>
                        </form>
                        <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
                            <ul>
                                {categoryListData?.map((item, index) => (
                                    <li key={item._id} className="even:bg-slate-50">
                                        <div className='flex justify-between px-1'>
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
                                                <MdDeleteForever
                                                    size={24}
                                                    className='mt-1 hover:text-red-500 cursor-pointer'
                                                    onClick={() => handleDeleteCategory(item._id)}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
