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
    <div className="flex flex-col items-start space-y-4">
      <button
        onClick={() => setVisible(!visible)}
        className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-700 transition-colors"
      >
        Toggle Text
      </button>

      {visible && (
        <p className="flex flex-wrap max-w-md">
          {words.map((word, index) => (
            <span
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default StaggeredTextToggle;
