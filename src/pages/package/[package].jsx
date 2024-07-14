// Import necessary styles and components
import "../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Package1 from "@/components/ItineraryDetail/Departure&Booking/package1";
import { AppProvider } from "@/components/admin/context/Package/AddGuest";

export default function TourPackage() {

  return (
    <AppProvider>
      {/* <Package1 /> */}
      <div>HELLO WORLD</div>
    </AppProvider>
  );
}
