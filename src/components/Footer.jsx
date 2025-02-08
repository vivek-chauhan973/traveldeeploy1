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
    const tripadvisor = () => {
        window.open(`https://www.tripadvisor.in/Attraction_Review-g616028-d17412825-Reviews-BizareXpedition-Haridwar_Haridwar_District_Uttarakhand.html`, "_blank");
    };


    return (
        <>
            <div>
                {/* Footer section */}
                <div className="">
                    <div className="">
                        <footer className="">
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
                            <div className="bg-slate-100 text-black ">
                                <div className="container-wrapper grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 py-5 border-t-1 border-slate-300 ">
                                    <div>
                                        <div className="flex flex-col space-y-2 ">
                                            <h2 className=" font-semibold text-base">Company</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="/about-us" className="footer-content2">About Us</Link>
                                                <Link rel="noopener noreferrer" href="/contact-us" className="footer-content2">Contact Us</Link>
                                                <Link rel="noopener noreferrer" href="#" className="footer-content2">Blog</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <h2 className="font-semibold text-base">Help</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="/refund-cancellation" className="footer-content2">Refunds & Cancellations</Link>
                                                <Link rel="noopener noreferrer" href="/careers" className="footer-content2">Careers</Link>
                                                <Link rel="noopener noreferrer" href="/payments" className="footer-content2">Payments</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <h2 className="font-semibold text-base">Support</h2>
                                            <div className="flex flex-col space-y-2 text-sm font-extralight dark:text-gray-400">
                                                <Link rel="noopener noreferrer" href="/privacy-policy" className="footer-content2">Privacy Policy</Link>
                                                <Link rel="noopener noreferrer" href="/payment-policy" className="footer-content2">Payment Policy</Link>
                                                <Link rel="noopener noreferrer" href="/terms-and-conditions" className="footer-content2">Terms & Conditions</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div>
                                                <Image width={100} height={100} src="/assets/Logo-color.png"
                                                    className="object-cover md:w-[80%] w-full"
                                                    alt="logo"
                                                />
                                            </div>
                                            <p className="md:text-para text-sm font-medium mt-2 mb-1">Keep travelling all year round!</p>
                                            <p className="md:text-xs text-xxs font-extralight">Subscribe to our newsletter to find travel inspiration in your inbox</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-wrapper">
                                    <hr  />
                                    <div className=" py-2 ">
                                        <p className="text-xs">
                                            *Caution: Beware of Fake Promotions or Offers *Please be cautious and do not engage with any promotional emails, SMS, or web links that ask you to click on a link and provide your personal details. All authorized communications from BizareXpedition™️ Services will come exclusively from our registered domains: @bizarexpedition.com, @bizarexpedition.online, or @bizarexpedition.in. For any inquiries, you can also reach us through our official WhatsApp channel at 9897581113. *BizareXpedition™️ Services is not liable for any fraudulent or misleading communications that do not originate from our official domains.
                                        </p>
                                    </div>
                                    <hr  />

                                    <div className="md:flex md:items-center md:justify-between py-1 ">
                                        <ul className="flex items-center justify-center  flex-wrap ">
                                            <li className=" list-none">
                                                <Link href="/terms-and-conditions" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Terms and conditions
                                                </Link>
                                            </li>
                                            <li className=" list-none">
                                                <Link href="/privacy-policy" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className=" list-none">
                                                <Link href="/sitemap" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                                                    Site Map
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="flex justify-center md:space-x-6 space-x-8  md:mb-0 mb-2">
                                            <svg
                                                onClick={handleWhatsApp}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-whatsapp cursor-pointer text-gray-800 hover:text-primary mt-0.5"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                            <svg
                                                onClick={handleFacebook}
                                                className="h-5 w-5 cursor-pointer text-gray-800 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                            <svg
                                                onClick={handleInstagram}
                                                className="h-5 w-5 text-gray-800 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clip-rule="evenodd">
                                                </path>
                                            </svg>
                                            <svg
                                                onClick={handleTwitter}
                                                className="h-5 w-5 text-gray-800 hover:text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                                </path>
                                            </svg>
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                className="font1 cursor-pointer text-gray-800 hover:text-primary"
                                                onClick={handleLinkedIn}
                                            />
                                            <svg
                                                onClick={tripadvisor}
                                                className="h-5 w-5 cursor-pointer"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 1333.31 1333.31"
                                                shape-rendering="geometricPrecision"
                                                text-rendering="geometricPrecision"
                                                image-rendering="optimizeQuality"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd">
                                                <g fill-rule="nonzero">
                                                    <circle cx="666.66" cy="666.66" r="666.66" fill="#000000" />
                                                    <path d="M1078.42 536.6l80.45-87.52h-178.4c-89.31-61.01-197.17-96.54-313.81-96.54-116.5 0-224.06 35.61-313.22 96.54H174.6l80.44 87.52c-49.31 44.99-80.22 109.8-80.22 181.75 0 135.79 110.09 245.88 245.88 245.88 64.51 0 123.27-24.88 167.14-65.55l78.81 85.81 78.81-85.73c43.87 40.67 102.57 65.47 167.07 65.47 135.79 0 246.03-110.09 246.03-245.88.07-72.03-30.84-136.83-80.15-181.75zM420.77 884.75c-91.92 0-166.4-74.48-166.4-166.4s74.49-166.4 166.4-166.4c91.92 0 166.4 74.49 166.4 166.4 0 91.91-74.49 166.4-166.4 166.4zm245.96-171.24c0-109.5-79.63-203.5-184.73-243.65 56.84-23.76 119.18-36.94 184.66-36.94 65.47 0 127.89 13.18 184.73 36.94-105.02 40.23-184.65 134.15-184.65 243.65zm245.88 171.24c-91.92 0-166.4-74.48-166.4-166.4s74.49-166.4 166.4-166.4c91.92 0 166.4 74.49 166.4 166.4 0 91.91-74.49 166.4-166.4 166.4zm0-253.7c-48.2 0-87.23 39.03-87.23 87.23 0 48.19 39.03 87.22 87.23 87.22 48.19 0 87.22-39.03 87.22-87.22 0-48.12-39.03-87.23-87.22-87.23zM508 718.35c0 48.19-39.03 87.22-87.23 87.22-48.19 0-87.22-39.03-87.22-87.22 0-48.2 39.03-87.23 87.22-87.23 48.19-.07 87.23 39.03 87.23 87.23z"
                                                        fill="#FFFFFF" />
                                                </g>
                                            </svg>                            
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex md:flex-row flex-col md:items-center justify-between gap-2 py-1">
                                        <div className="flex justify-center items-center">
                                            <span className="dark:text-gray-400 md:text-sm text-xs">© Copyright 1986. All Rights Reserved.</span>
                                            <span className="dark:text-gray-400 md:text-sm text-xs md:block hidden ml-1">| Country India</span>
                                            <Image width={5} height={5} src="/assets/India.png"
                                                className="h-6 w-6 object-cover ml-2"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/swastik.png"
                                                className="h-6 w-6 object-contain ml-2"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex justify-center items-center md:gap-2 gap-3">
                                            <Image width={5} height={5} src="/assets/Affiliation 1.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 2.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 3.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 4.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 5.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 6.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
                                                alt=""
                                            />
                                            <Image width={5} height={5} src="/assets/Affiliation 7.png"
                                                className="md:h-10 md:w-10 w-8 h-8 object-cover"
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