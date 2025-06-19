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
          text="For a drop in, I would come to the house to feed, walk, pet, and play with your animal(s) for at least an hour, or longer if asked with a max of 3 hours. I can do a drop in 3 times a day maximum. Prices for a general drop in start at $25 for one pet and an additional $10 per pet."
          />

        <CustomButton 
          isActive={active === "housesit"}
          onToggle={() => setActive(active === "housesit" ? null : "housesit")}
          buttonLabel="House Sit"
          text="For House sitting, I'd stay at your house to ensure your pet(s) is loved the entire day. Additionally, I will take care of any plants and take in the mail if needed. House sitting with one animal is $85 daily and an extra $10 per pet."
          />

        <CustomButton 
          isActive={active === "additional"}
          onToggle={() => setActive(active === "additional" ? null : "additional")}
          buttonLabel="Additional Services"
          text="If you've hired me to do a drop in, I can take care of your plants as well! Plant watering is an extra $5 per drop in. Also, if you've hired me to do a drop in, I'd be happy to take your mail inside and leave it in a designated spot for you!"
          />
      </div>
      
    </div>
  );
}

export default MyServicesSection;