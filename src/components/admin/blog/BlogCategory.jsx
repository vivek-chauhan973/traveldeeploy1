import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faArrowRightLong, faEdit, faCirclePlus, faTrash, faCancel, faSave, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function BlogCategory() {

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
            const response = await fetch('/api/cars/package-setting/category/add-category', {
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
            const categoriesList = await fetch('/api/cars/package-setting/category/get-categories')
            const categories = await categoriesList.json()
            console.log("categories is here", categories)
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

    const handleDeleteCategory = async (categoryId) => {
        try {
            const userConfirmed = confirm('Are you sure?');

            if (!userConfirmed) {
                return;
            }
            const response = await fetch(`/api/cars/package-setting/category/delete-category`, {
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
            const response = await fetch('/api/cars/package-setting/category/edit-category', {
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

        <div>
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
                <div className="text-[15px] border p-2 h-96 overflow-y-auto rounded mt-3">
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
                                            <span className="flex gap-2">
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

    );
}
