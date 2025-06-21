function HowToBookMe() {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">How to Book Me</h3>
      <div className="hidden sm:block">
        <ul className="m-10 ml-15 sm:ml-25 sm:mr-25 list-disc">
          <li className="mb-2 sm:text-lg">Fill out my form below to tell me about your pets, what service you'd like, and any other information you'd like to share with me</li>
          <li className="mb-2 sm:text-lg">I will contact you to find out a time for a meeting, or to confirm the dates.</li>
          <li className="mb-2 sm:text-lg">If this is our first time working together or have something of importance you'd like to share with me, we will do a 15 minute Facetime/Zoom call or 15 min in-person meeting to meet your pets and further discuss my responsibilities a few days before your trip.</li>
          <li className="sm:text-lg">For payment, I accept Venmo, Zelle, or check. To finish booking me, there is a $20 charge(from the final charge, not additional) to guarantee your pets spot after the meeting or confirmation, and the rest of the payment is due when you get back home to see your pet(s) safe and sound.</li>
        </ul>
      </div>

      <div className="sm:hidden h-120 max-w-xl overflow-y-scroll snap-none mt-4 scrollable-area m-5">
        <ul className="m-5 ml-8 mr-8 list-disc">
          <li className="mb-2 regular-text">Fill out my form below to tell me about your pets, what service you'd like, and any other information you'd like to share with me</li>
          <li className="mb-2 regular-text">I will contact you to find out a time for a meeting, or to confirm the dates.</li>
          <li className="mb-2 regular-text">If this is our first time working together or have something of importance you'd like to share with me, we will do a 15 minute Facetime/Zoom call or 15 min in-person meeting to meet your pets and further discuss my responsibilities a few days before your trip.</li>
          <li className="regular-text">For payment, I accept Venmo, Zelle, or check. To finish booking me, there is a $20 charge(from the final charge, not additional) to guarantee your pets spot after the meeting or confirmation, and the rest of the payment is due when you get back home to see your pet(s) safe and sound.</li>
        </ul>
      </div>
    </div>
  );
}

export default HowToBookMe;