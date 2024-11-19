import React, { useEffect, useState } from "react";

const BlogDetailSeo = ({setActiveTab,blogData}) => {

    //Blog seo field here
    const [title, setTitle] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");
    const [description, setDescription] = useState("");
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        setTitle(blogData?.blogSeo?.title);
        setCanonicalUrl(blogData?.blogSeo?.canonicalUrl);
        setDescription(blogData?.blogSeo?.description);
        setKeyword(blogData?.blogSeo?.keyword);
    }, [blogData]);

    const handleSaveCarSeoData = async () => {
        if (!title || !canonicalUrl || !description || !keyword) {
            return alert("Each field is required !!!!");
        }
        const seoData = { title, canonicalUrl, description, keyword };

        try {
            const data = await fetch("/api/blog/blogdetailSeo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({seoData,blog:blogData?._id}),
            });
            // console.log("seo data ----> ", data?.ok);
            if (data.ok) {
                alert(blogData?"data updated successfully":"data added successfully")
                setActiveTab("Tab4")
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.log("something went wrong");
        }
       
    };

    return (
        <div className='px-4 pt-4 rounded-md bg-white shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)]  border-l-2 border-teal-600'>
            <h2 className="text-base font-semibold mb-2">Seo Field</h2>
            <div className="px-4 py-2">
                <div>
                    <label htmlFor="title" className=" font-semibold">
                        Title
                    </label>
                    <input
                        className="py-0.5 mt-1 mb-3 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title Here"
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
                <div>
                    <label htmlFor="url" className=" font-semibold">
                        Canonical URL
                    </label>
                    <input
                        className="py-0.5 mt-1 mb-3 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                        type="text"
                        id="url"
                        value={canonicalUrl}
                        onChange={(e) => setCanonicalUrl(e.target.value)}
                        placeholder="Enter URL Here"
                    />
                </div>
                <div>
                <label htmlFor="keyword" className=" font-semibold">
                   Keyword
                    </label>
                    <input
                        className="py-0.5 mt-1 mb-2 w-full border rounded h-8 px-2 focus:border-primary outline-none"
                        type="text"
                        id="keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Enter Keyword Here"
                    />
                </div>
                <div className="flex justify-end items-center">
                    <button
                        onClick={handleSaveCarSeoData}
                        className="px-5 py-1.5 bg-navyblack text-white rounded my-3"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailSeo;