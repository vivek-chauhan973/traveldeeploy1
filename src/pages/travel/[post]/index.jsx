import "../../../app/globals.css";
import React, { useState, useEffect } from "react";
import { CancelIcon } from "@/components/icons/index";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import Footer from "@/components/Footer";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import BlogPromoFilter from "@/components/Blog/Blog-Promo/BlogPromoFilter";
import BlogPromoPackageList from "@/components/Blog/Blog-Promo/BlogPromoPackageList";
import PhoneFilter from "@/components/Blog/Blog-Promo/PhoneFilter";
import { useRouter } from "next/router";
import BlogBredcrumb from "@/components/Blog/BlogBredcrumb";
import { useCarPopupContext } from "@/components/admin/context/CarPopupCalculation";
import Head from "next/head";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
const fetchBlogPromoBanner = async (id) => {
  return await (
    await fetch(`/api/blog?selectType=${id}`, { method: "GET" })
  ).json();
};
const fetchBlogs = async (id) => {
  return await (await fetch(`/api/blog/getallblogs?selectType=${id}`)).json();
};

const fetchFilteredBlogs = async (id, category) => {
  return await (
    await fetch(`/api/blog/blog-filter?selectType=${id}&category=${category}`)
  ).json();
};
export default function Promo(pageprops) {
  const { setServerSideProps } = useCarPopupContext();
  useEffect(() => {
    if (pageprops) {
      setServerSideProps(pageprops || {});
    }
  }, [pageprops]);
  const router = useRouter();
  // console.log("router .........................",router?.query?.post)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogHero, setBlogHero] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResize = () => {
    // Check if window width is 1200 pixels or less
    if (window.innerWidth <= 1200) {
      setIsModalOpen(false); // Close modal if window width is 1200 or less
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup by removing event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (router?.query?.post) {
      fetchBlogPromoBanner(router?.query?.post).then((res) => {
        setBlogHero(res?.data || {});
      });
      fetchBlogs(router?.query?.post).then((res) => {
        setBlogs(res?.data || []);
      });
    }
    setSelectedCategories([]);
  }, [router?.query?.post]);

  useEffect(() => {
    if (selectedCategories?.length > 0) {
      fetchFilteredBlogs(router?.query?.post, selectedCategories).then(
        (res) => {
          // console.log("filtered data of blogs is here ----> ",res)
          if (res?.message === "not found") {
            setFilteredBlog(["not found"]);
          } else {
            setFilteredBlog(res?.data);
          }
        }
      );
    } else {
      fetchBlogs(router?.query?.post).then((res) => {
        setBlogs(res?.data || []);
      });
    }
  }, [router?.query?.post, selectedCategories?.length]);

  useEffect(() => {
    if (filteredBlog?.length > 0) {
      setBlogs(filteredBlog);
    }
  }, [filteredBlog]);
//   console.log("blogs", blogs);
  console.log("blogHero", blogHero);

  return (
    <>
        <Head>
        <title>{blogHero?.title || blogHero?.seo?.title} | BizareXpedition™️</title>
        <meta name="description"
          content={blogHero?.seo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."}
        />
        <meta
          name="keywords"
          content={ blogHero?.seo?.keyword || "travel blog, travel guide, travel news, destination tips, travel insights, BizareXpedition, adventure travel, cultural exploration, travel excellence"}
        />
        {/* Author and Robots */}
        <meta name="author" content="BizareXpedition" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph for Social Media */}
        <meta property="og:title" content={blogHero?.title || blogHero?.seo?.title} />
        <meta property="og:description" content={blogHero?.seo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."} />
        <meta property="og:image" content={`https://www.bizarexpedition.com/${blogHero?.filename} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        <meta property="og:url" content={`https://www.bizarexpedition.com/travel/${blogHero?.selectType}`} />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogHero?.title || blogHero?.seo?.title} />
        <meta name="twitter:description" content={blogHero?.seo?.description || "Your go-to source for travel inspiration, expert guides, and the latest travel news. Join BizareXpedition™️ to explore unforgettable destinations and stay updated on travel trends."} />
        <meta name="twitter:image" content={`https://www.bizarexpedition.com/${blogHero?.filename} || 'https://www.bizarexpedition.com/default-meta-image.jpg'}`} />
        {/* Organization Schema */}
        <OrganizationSchema />
      </Head>
      {/* CarPromoSkeleton */}
      <div className="bg-slate-100">
        <DesktopHeader />
        <BlogBredcrumb />
        {/* <CarPromoHeroSection/> */}
        <div className="mb-10">
          <div className="relative w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
            <Image
              className=" top-0 left-0 w-full h-full object-cover object-center"
              src={
                blogHero?.videoPath ||
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Favit.ac.in%2Fcontact%2F&psig=AOvVaw2a30A9-VUVeov-cz3KWFaz&ust=1729578845164000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCwxbntnokDFQAAAAAdAAAAABAE"
              }
              alt=""
              width={100}
              height={100}
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
              }
            />
          </div>
          <div className="container-wrapper py-5">
            <h4 className="md:text-2xl text-md font-medium mb-2 capitalize">
              {blogHero?.title}
            </h4>
            <p className="text-para line-clamp-5">{blogHero?.description}</p>
          </div>
        </div>
        <div className="container-wrapper flex justify-between pb-5 items-center">
          <div>
            <div className=" md:flex gap-2 items-center">
              <p className="text-[16px]">
                {" "}
                Havelock Tour Package Blog Packages
              </p>
            </div>
            <p className="text-[13px]">Lorem ipsum dolor sit amet .</p>
          </div>
          <div>
            <select className="select w-full max-w-xs hidden  select-sm text-[13px]">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <button
              className="border rounded-sm border-gray-400 text-sm px-2 py-0.5 hover:bg-white xl:hidden block"
              onClick={handleOpenModal}
            >
              Filter
            </button>
          </div>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2 mt-7">
              <div className="relative bg-white px-6 py-8 rounded-lg w-full max-w-md md:h-[75%] h-[65%] max-h-[95vh] overflow-y-auto">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-2 text-gray-500 hover:text-gray-700"
                >
                  <CancelIcon />
                </button>
                <PhoneFilter
                  setSelectedCategories={setSelectedCategories}
                  selectedCategories={selectedCategories}
                  handleCloseModal={handleCloseModal}
                />
              </div>
            </div>
          </Modal>
        </div>
        <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[300px,2fr] gap-5 relative">
          <div className="relative">
            <div className="hidden xl:block">
              <BlogPromoFilter
                setSelectedCategories={setSelectedCategories}
                selectedCategories={selectedCategories}
              />
            </div>
          </div>
          <div>
            <BlogPromoPackageList blogs={blogs} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
