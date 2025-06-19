import React, { useEffect, useState } from 'react';

function AirtableReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://petsitting-backend.onrender.com/reviews')
      .then((res) => res.json())
      .then(setReviews)
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <section className='flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold text-center mb-4 sm:mb-0'>Client Reviews</h2>
      <ul className='w-full p-10'>
        {reviews.map((r, i) => (
          <li key={i} className='regular-text mb-2'><strong>{r.name}</strong>: {r.review}</li>
        ))}
      </ul>
    </section>
  );
}

export default AirtableReviews;