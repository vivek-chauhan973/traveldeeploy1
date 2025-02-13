
import { useEffect, useState } from 'react';
import '../../../app/globals.css'
import Link from 'next/link';
import Layout from '@/components/admin/Layout';

const fetchPackages = async () => {
    const response = await fetch('/api/package/get-packages');
    const data = await response.json();
    return data.packages;
};

export default function TourPackage() {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const packagesData = await fetchPackages();
            setPackages(packagesData);
        };

        fetchData();
    }, []);

    const handleEditClick = (packageId) => {
        window.location.href = `tour-package/edit-package/${packageId}`;
    };

    return (
      
        <Layout>
        <div className="  ">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Tour Packages</h1>

                <div className="bg-white p-4 rounded-md shadow-md mb-4">
                    {packages.length > 0 ? (
                        <ul className="grid grid-cols-4 gap-4">
                            {packages.map((item, index) => (
                                <li key={index} className="flex flex-col bg-gray-200 p-4 rounded-md">
                                    <span className="font-bold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.name}</span>
                                    <span className="text-sm">Price: {item.price}</span>
                                    <span className="text-sm">Status: {item.status}</span>
                                    <span className="text-sm">Page URL: <span className='underline'>{item.pageUrl}</span> </span>
                                    <span className="text-sm">Location: {item.location?.name}</span>
                                    <button
                                        onClick={() => handleEditClick(item._id)}
                                        className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        Edit
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No tour packages available. Start by adding one!</p>
                    )}
                </div>

                <Link href="tour-package/add-package">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Add Package
                    </button>
                </Link>
            </div>
        </div>
        </Layout>
    );
}