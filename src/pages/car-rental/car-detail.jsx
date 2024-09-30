import "../../app/globals.css";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import Image from 'next/image';
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CarDetail() {

    return (
        <>
            {/* CarDetailSkeleton  */}
            <div className="bg-gradient-to-r from-indigo-50 from-10% via-green-50 via-30% to-indigo-50 to-90%">
                <DesktopHeader />
                <Breadcrumbs />
            </div>
        </>
    )
}

