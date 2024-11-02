import React, { useEffect, useState } from "react";

const BlogDetailBanner = () => {

    const [file, setFile] = useState(null);
    // const [preview, setPreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);

    // Function to fetch existing image
    async function fetchImage() {
        try {
            const res = await fetch("/api/home");
            const data = await res.json();
            if (data.data.length > 0) {
                const image = data.data[0];
                setSelectedImageId(image._id);
                setTitle(image.title);
                setDescription(image.description);
                // setPreview(image.path);
                setIsUpdating(true);
            }
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    }

    // Fetch existing image on component mount
    useEffect(() => {
        fetchImage();
    }, []);

    // Function to handle file input change
    function handleChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // setPreview(URL.createObjectURL(selectedFile));
    }

    // Function to handle image upload or update
    async function handleUpload() {
        if (!file && !isUpdating) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        if (!file && !title) {
            alert("Please upload file and  write title");
            return;
        }

        if (file && title) {
            formData.append("file", file);
            formData.append("title", title);
            formData.append("description", description);
        }

        if (selectedImageId) {
            formData.append("id", selectedImageId);
        }

        try {
            const res = await fetch("/api/home", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                alert(`File ${isUpdating ? "updated" : "uploaded"} successfully`);
                // Optionally, reset form fields or update state after successful upload
                setFile(null);
                // setPreview(null);
                setTitle("");
                setDescription("");
                setIsUpdating(false);
                setSelectedImageId(null);
                fetchImage(); // Fetch updated image
            } else {
                alert(`File ${isUpdating ? "update" : "upload"} failed`);
            }
        } catch (error) {
            console.error(
                `Error ${isUpdating ? "updating" : "uploading"} file:`,
                error
            );
            alert(`File ${isUpdating ? "update" : "upload"} failed`);
        }
    }

    // Function to handle image removal
    async function handleRemove() {
        if (!selectedImageId) {
            alert("No Video selected for removal.");
            return;
        }

        try {
            const res = await fetch(`/api/home?id=${selectedImageId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                alert("Video removed successfully");
                // Reset state after successful removal
                setFile(null);
                // setPreview(null);
                setTitle("");
                setDescription("")
                setIsUpdating(false);
                setSelectedImageId(null);
                fetchImage(); // Fetch updated image list
            } else {
                alert("Failed to remove Video");
            }
        } catch (error) {
            console.error("Error removing video:", error);
            alert("Failed to remove video");
        }
    }
    // console.log("preview the image", preview);

    return (
        <div className='p-4 mb-5 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600'>
            <p className="md:text-lg text-base font-semibold mb-2">
                Blog Detail Banner
            </p>
            <div className="p-4">
                <div className="flex xl:flex-row flex-col md:gap-10 gap-5 items-center xl:pl-5">
                    <div className=" flex flex-1 my-7">
                        <input type="file" className="mb-4 ml-3" onChange={handleChange} />
                        {/* <div>
                        {preview && (
                            <Image
                                className="md:w-36 w-auto h-auto shadow-md mb-4"
                                src={preview}
                                alt="Preview"
                                width={150}
                                height={200}
                            />
                        )}
                    </div> */}
                    </div>

                    <div className="flex-1 my-5">
                        <div>
                            <label htmlFor="title" className=" font-semibold">
                                Title
                            </label>
                            <input
                                className="py-0.5 mb-2 w-full  border rounded h-8 px-2 focus:border-primary outline-none"
                                type="text"
                                id="title"
                                value={title}
                                placeholder="Enter Title Here"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="textarea" className=" font-semibold">
                                Description
                            </label>
                            <textarea
                                name=""
                                id="textarea"
                                className="mt-1 mb-2 w-full border rounded h-28 px-2 focus:border-primary outline-none py-1"
                                placeholder="Enter Description Here"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-5 gap-3">
                    <button className="bg-navyblack text-white px-3 py-2 w-full md:w-auto rounded"
                        onClick={handleUpload}
                    >
                        {isUpdating ? "Update Image" : "Upload Image"}
                    </button>
                    <button className="bg-red-600 text-white px-3 py-2 w-full md:w-auto rounded"
                        onClick={handleRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailBanner;