import DropIns from "./DropIns.jsx";
import HouseSit from "./HouseSit.jsx";
import AdditionalServices from "./AdditionalServices.jsx";
import CustomButton from "./button.jsx";
import { useState } from "react";

// My Services
function MyServicesSection() {
  const [active, setActive] = useState(null);
  return (
    <div>
      <h2 className="text-4xl font-bold sm:section-header text-center">My Services:</h2>
      <div className="hidden sm:block">
        <div className="p-5 sm:p-0 sm:grid sm:grid-rows-1 sm:grid-cols-3 sm:gap-10 sm:m-8 sm:ml-25 sm:mr-25">
          <DropIns />
          <HouseSit />
          <AdditionalServices />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center text-center mt-5 sm:hidden">
        <CustomButton 
          isActive={active === "dropins"}
          onToggle={() => setActive(active === "dropins" ? null : "dropins")}
          buttonLabel="Drop Ins"
          text="For a drop in visit, I will come to your home to feed, walk, pet, and play with your animal or animals for at least an hour. I’m happy to stay longer if needed, up to a maximum of three hours. I can do up to three drop in visits per day. Prices for a general drop in start at twenty five dollars for one pet, with an additional ten dollars per extra pet."
          />

        <CustomButton 
          isActive={active === "housesit"}
          onToggle={() => setActive(active === "housesit" ? null : "housesit")}
          buttonLabel="House Sit"
          text="For house sitting, I will stay at your home to make sure your pet gets care and companionship throughout the day. I can also water plants and bring in the mail if needed. The rate for house sitting is eighty five dollars per day for one pet, with an additional ten dollars for each extra pet."
          />

        <CustomButton 
          isActive={active === "additional"}
          onToggle={() => setActive(active === "additional" ? null : "additional")}
          buttonLabel="Additional Services"
          text="If you’ve booked me for a drop in visit, I can also take care of your plants for an additional five dollars per visit. I’m also happy to bring in your mail and leave it in a designated spot for you. Just let me know what you need!"
          />
      </div>
      
    </div>
  );
}

export default MyServicesSection;