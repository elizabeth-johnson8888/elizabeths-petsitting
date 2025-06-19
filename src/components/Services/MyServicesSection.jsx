import DropIns from "./DropIns.jsx";
import HouseSit from "./HouseSit.jsx";
import AdditionalServices from "./AdditionalServices.jsx";

// My Services
function MyServicesSection() {
  return (
    <div>
      <h2 className="text-4xl font-bold sm:section-header text-center">My Services:</h2>
      <div className="p-5 sm:p-0 sm:grid sm:grid-rows-1 sm:grid-cols-3 sm:gap-10 sm:m-8 sm:ml-25 sm:mr-25">
        <DropIns />
        <HouseSit />
        <AdditionalServices />
      </div>
    </div>
  );
}

export default MyServicesSection;