// import { useState } from 'react';

// function FadeToggleText() {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className="flex flex-col items-start space-y-4">
//       <button
//         onClick={() => setVisible(!visible)}
//         className="bg-pink-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-pink-700"
//       >
//         Toggle Info
//       </button>

//       <p
//         className={`transition-opacity duration-500 ${
//           visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
//         }`}
//       >
//         🐾 I am a recent graduate from James Madison University with a BS in Computer Science...
//       </p>
//     </div>
//   );
// }

// export default FadeToggleText;

import { useState } from "react";

function StaggeredTextToggle() {
  const [visible, setVisible] = useState(false);

  const text =
    "I am a recent graduate from James Madison University with a BS in Computer Science.";
  const words = text.split(" ");

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className="h-screen snap-start bg-pink-100 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Intro Section</h1>
      </section>

      <section className="h-screen snap-start bg-white flex flex-col items-center justify-start pt-10">
        <h2 className="text-xl font-semibold mb-2">Scrollable Content Area</h2>

        {/* Scrollable content box */}
        <div className="h-128 w-full max-w-xl overflow-y-scroll snap-none border border-gray-300 rounded p-4">
          {/* <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...Fill out my form below to tell me about your pets, what service you'd like, and any other information you'd like to share with me I will contact you to find out a time for a meeting, or to confirm the dates. If this is our first time working together or have something of importance you'd like to share with me, we will do a 15 minute Facetime/Zoom call or 15 min in-person meeting to meet your pets and further discuss my responsibilities a few days before your trip. For payment, I accept Venmo, Zelle, or check. To finish booking me, there is a $20 charge(from the final charge, not additional) to guarantee your pets spot after the meeting or confirmation, and the rest of the payment is due when you get back home to see your pet(s) safe and sound.
          </p> */}
          <ul className="m-10 ml-15 sm:ml-25 sm:mr-25 list-disc">
        <li className="mb-2 sm:text-lg">Fill out my form below to tell me about your pets, what service you'd like, and any other information you'd like to share with me</li>
        <li className="mb-2 sm:text-lg">I will contact you to find out a time for a meeting, or to confirm the dates.</li>
        <li className="mb-2 sm:text-lg">If this is our first time working together or have something of importance you'd like to share with me, we will do a 15 minute Facetime/Zoom call or 15 min in-person meeting to meet your pets and further discuss my responsibilities a few days before your trip.</li>
        <li className="sm:text-lg">For payment, I accept Venmo, Zelle, or check. To finish booking me, there is a $20 charge(from the final charge, not additional) to guarantee your pets spot after the meeting or confirmation, and the rest of the payment is due when you get back home to see your pet(s) safe and sound.</li>
      </ul>
          {/* Add a lot of text or a long list here to see the scroll in action */}
          {/* {[...Array(50)].map((_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))} */}
        </div>
      </section>

      <section className="h-screen snap-start bg-pink-200 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Another Section</h1>
      </section>
    </div>
  );
}

export default StaggeredTextToggle;
