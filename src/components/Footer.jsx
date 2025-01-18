import "../app/globals.css";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import Image from 'next/image'
import { MdMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const fetchCatagories = async () => {
    const categoriesList = await fetch('/api/package-setting/category/get-categories');
    return await categoriesList.json();
}
const fetchCategoryPackages = async (locationId) => {
    const response = await fetch(`/api/public/category/${locationId}`);
    const data = await response.json();
    return data;
};

export default function Footer() {
    const [categoryArray, setCategoryArray] = useState([]);
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);

    const processCategories = async () => {
        try {
            const categories = await fetchCatagories();
            let uniqueCategories = [];
            for (let item of categories?.data) {
                const result = await fetchCategoryPackages(item._id);
                const data = { category: item?.category, result: result?.packages };
                const isExisting = uniqueCategories.some(
                    (entry) => entry.category === data.category
                );
                if (!isExisting) {
                    uniqueCategories.push(data);
                }
            }
            setCategoryArray(uniqueCategories);
        } catch (error) {
            console.error("Error processing categories or packages: ", error);
        }
    };
    useEffect(() => {
        processCategories();
    }, []);

    // devide categories in two section 
    const data1 = categoryArray?.slice(0, 5);
    const data2 = categoryArray?.slice(5, 10);
    //   console.log("Fetched packages1:---->", data1); 

    const handleWhatsApp = () => {
        window.open(`https://wa.me/919897581113`, "_blank");
    };
    const handleFacebook = () => {
        window.open(`https://www.facebook.com/bizareX`, "_blank");
    };
    const handleInstagram = () => {
        window.open(`https://www.instagram.com/bizarexpedition`, "_blank");
    };
    const handleTwitter = () => {
        window.open(`https://twitter.com/bizarexpedition`, "_blank");
    };
    const handleLinkedIn = () => {
        window.open(`https://www.linkedin.com/company/13630320/`, "_blank");
    };
    const handleGoogle = () => {
        window.open(`https://www.google.com`, "_blank");
    };

    return (
        <>
            <div>
                {/* Footer section */}
                <div className="">
                    <div className="">
                        <footer className="  ">
                            <div className="bg-navyblack text-white p-6">
                                <div className="container-wrapper grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                                    {categoryArray?.map((item, i) => <div key={i} className="flex flex-col gap-y-5">
                                        <div className="flex flex-col space-y-2 ">
                                            <h2 className="font-semibold text-base">{item?.category}</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                {item?.result?.map((subItem, i) => <Link key={i} href={`/package/` + subItem.pageUrl}><p rel="noopener noreferrer" href="#" className="footer-content">{subItem?.name}</p></Link>)}
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="bg-slate-100 text-black">
                                <div className="container-wrapper grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 py-5 border-t-1 border-slate-300 ">
                                    <div>
                                        <div className="flex flex-col space-y-2 ">
                                            <h2 className=" font-semibold text-base">Company</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="about" className="footer-content2">About Us</Link>
                                                <Link rel="noopener noreferrer" href="contact" className="footer-content2">Contact Us</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Blog</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <h2 className="font-semibold text-base">Help</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">FAQs</Link>
                                                <Link rel="noopener noreferrer" href="refund-cancellation" className="footer-content2">Cancellations & Returns</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Careers</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Jobs</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <h2 className="font-semibold text-base">Support</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Privacy Policy</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Payment Policy</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Terms & Conditions</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-3">
                                            <div>
                                                <Image width={100} height={100} src="/assets/Logo-color.png"
                                                    className="object-cover w-[80%]"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="text-para font-medium">Keep travelling all year round!</p>
                                            <p className="text-xs font-extralight">Subscribe to our newsletter to find travel inspiration in your inbox</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-wrapper">
                                    <hr className="container-wrapper" />
                                    <div className=" py-2 ">
                                        <p className="text-xs">
                                            *Caution: Beware of Fake Promotions or Offers *Please be cautious and do not engage with any promotional emails, SMS, or web links that ask you to click on a link and provide your personal details. All authorized communications from BizareXpedition™️ Services will come exclusively from our registered domains: @bizarexpedition.com, @bizarexpedition.online, or @bizarexpedition.in.For any inquiries, you can also reach us through our official WhatsApp channel at 9897581113. *BizareXpedition™️ Services is not liable for any fraudulent or misleading communications that do not originate from our official domains.
                                        </p>
                                    </div>
                                    <hr className="container-wrapper" />

                                    <div className="md:flex md:items-center md:justify-between py-1 ">
                                        <ul className="flex items-center  flex-wrap ">
                                            <li className=" list-none">
                                                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Terms and conditions
                                                </Link>
                                            </li>
                                            <li className=" list-none">
                                                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className=" list-none">
                                                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Site Map
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="flex sm:justify-center md:space-x-6 space-x-6 md:ml-0 ml-2 md:mb-0 mb-2">
                                            <svg
                                                onClick={handleWhatsApp}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-whatsapp cursor-pointer text-gray-500 hover:text-primary mt-0.5"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                            <svg
                                                onClick={handleFacebook}
                                                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                            <svg
                                                onClick={handleInstagram}
                                                className="h-5 w-5 text-gray-500 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                            <svg
                                                onClick={handleTwitter}
                                                className="h-5 w-5 text-gray-500 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                </path>
                                            </svg>
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                className="font1 cursor-pointer text-gray-500 hover:text-primary"
                                                onClick={handleLinkedIn}
                                            />
                                            <svg 
                                            onClick={handleGoogle}
                                            className="h-5 w-5 text-gray-500 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <hr className="container-wrapper" />
                                    <div className="flex md:flex-row flex-col items-center justify-between md:gap-0 gap-2 py-1">
                                        <div className="flex">
                                            <span className="dark:text-gray-400 md:text-sm text-xs">© Copyright 1986. All Rights Reserved. | Country India</span>
                                            <Image width={5} height={5} src="/assets/India.png"
                                                className="h-6 w-6 object-cover md:block hidden"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex justify-center items-center md:gap-2 gap-1">
                                            <Image width={5} height={5} src="/assets/Affiliation 1.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 2.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 3.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 4.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 5.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 6.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 7.png"
                                                className="h-10 w-10 object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}