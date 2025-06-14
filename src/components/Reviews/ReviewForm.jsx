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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
        <h2 className="text-xl font-bold">Submit a Review</h2>

        <div>
            <label className="block mb-2">Code:</label>
            <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="border p-2 mb-4 w-full"
                required
            />
        </div>

        <div>
            <label className="block mb-2">Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 mb-4 w-full"
                required
            />
        </div>
        
        <div>
            <label className="block mb-2">Review:</label>
            <textarea
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="border p-2 mb-4 w-full"
                required
            />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Review
        </button>
        </form>
    );
};

export default ReviewForm;