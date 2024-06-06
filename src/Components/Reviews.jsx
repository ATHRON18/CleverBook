import React from 'react';

const Reviews = () => {
  return (
    <section className="reviews bg-gradient-to-br from-[#b7bdfb] to-[#757bb8]  text-center py-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">What Our Customers Say</h2>
      <div className="review-list flex flex-col md:flex-row justify-around flex-wrap">
        <div className="review-item w-full md:w-1/2 p-4 bg-blue-100 rounded-lg shadow-md m-2">
          <p className="mb-4">"CleverBooks transformed our inventory management, making it more efficient and accurate."</p>
          <h4 className="font-semibold text-blue-800">John Doe, CEO of TechCorp</h4>
        </div>
        <div className="review-item w-full md:w-1/2 p-4 bg-green-100 rounded-lg shadow-md m-2">
          <p className="mb-4">"We saw a significant reduction in stock-outs after implementing CleverBooks."</p>
          <h4 className="font-semibold text-green-800">Jane Smith, Operations Manager at RetailCo</h4>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
