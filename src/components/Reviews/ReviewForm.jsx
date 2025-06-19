// ReviewForm.jsx
import React, { useState } from "react";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    review: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend.onrender.com/submit-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        alert(result.message || "Invalid code or failed to submit.");
        return;
      }

      alert(`Thanks for your review, ${formData.name}!`);
      setFormData({ code: "", name: "", review: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2 className="section-header">Submit a Review</h2>

        <div className="">
            <label className="regular-text font-bold mr-4">Code:</label>
            <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="border p-2 mb-2 w-full border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                required
            />
        </div>

        <div className="">
            <label className="regular-text font-bold mr-4">Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 mb-2 w-full border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                required
            />
        </div>
        
        <div className="">
            <label className="regular-text font-bold mr-4">Review:</label>
            <textarea
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="border p-2 mb-2 w-full border-pink-xtra-dark rounded-full border-2 bg-pink-light"
                required
            />
        </div>

        <button type="submit" className="button border-pink-xtra-dark rounded-full border-2">
            Submit
        </button>
        </form>
    );
};

export default ReviewForm;