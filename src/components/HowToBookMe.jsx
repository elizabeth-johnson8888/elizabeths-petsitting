function HowToBookMe() {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">How to Book Me</h3>
      <div className="hidden sm:block">
        <ul className="m-10 ml-15 sm:ml-25 sm:mr-25 list-disc">
          <li className="mb-2 sm:text-lg">To get started, please fill out the brief form on this site with some basic details about your pets and the service you need. After that, I will send you a confirmation email with a more detailed form to gather all the important information I’ll need to care for your pets.</li>
          <li className="mb-2 sm:text-lg">Once I receive your info, I will reach out to schedule a meeting or confirm your dates.</li>
          <li className="mb-2 sm:text-lg">If this is our first time working together or if there’s anything important you want to discuss, we’ll arrange a 15-minute FaceTime, Zoom call, or in-person meeting a few days before your trip. This gives us a chance to meet your pets and go over my responsibilities.</li>
          <li className="sm:text-lg">For payment, I accept Venmo, Zelle, or check. To secure your pet’s spot, there is a $20 booking fee applied to your final charge after our meeting or confirmation. The remaining balance is due once you return home to your happy and safe pet.</li>
        </ul>
      </div>

      <div className="sm:hidden h-120 max-w-xl overflow-y-scroll snap-none mt-4 scrollable-area m-5">
        <ul className="m-5 ml-8 mr-8 list-disc">
          <li className="mb-2 regular-text">To get started, please fill out the brief form on this site with some basic details about your pets and the service you need. After that, I will send you a confirmation email with a more detailed form to gather all the important information I’ll need to care for your pets.</li>
          <li className="mb-2 regular-text">Once I receive your info, I will reach out to schedule a meeting or confirm your dates.</li>
          <li className="mb-2 regular-text">If this is our first time working together or if there’s anything important you want to discuss, we’ll arrange a 15-minute FaceTime, Zoom call, or in-person meeting a few days before your trip. This gives us a chance to meet your pets and go over my responsibilities.</li>
          <li className="regular-text">For payment, I accept Venmo, Zelle, or check. To secure your pet’s spot, there is a $20 booking fee applied to your final charge after our meeting or confirmation. The remaining balance is due once you return home to your happy and safe pet.</li>
        </ul>
      </div>
    </div>
  );
}

export default HowToBookMe;