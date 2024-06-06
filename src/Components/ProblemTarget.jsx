import React from 'react';

const ProblemTarget = () => {
  return (
    <section className="problem-target bg-gradient-to-br from-[#b7bdfb] to-[#757bb8] text-center py-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Features of CleverBooks</h2>
      <div className="feature-list flex flex-col md:flex-row justify-around flex-wrap">
        <div className="feature-item w-full md:w-1/3 p-4 bg-blue-100 rounded-lg shadow-md m-2">
          <h3 className="text-xl font-semibold mb-2 text-blue-800">Advanced Analytics</h3>
          <p>Advanced analytics and reporting for better decision making.</p>
        </div>
        <div className="feature-item w-full md:w-1/3 p-4 bg-green-100 rounded-lg shadow-md m-2">
          <h3 className="text-xl font-semibold mb-2 text-green-800">Real-Time Tracking</h3>
          <p>Real-time inventory tracking and updates.</p>
        </div>
        <div className="feature-item w-full md:w-1/3 p-4 bg-purple-100 rounded-lg shadow-md m-2">
          <h3 className="text-xl font-semibold mb-2 text-purple-800">Automated Recommendations</h3>
          <p>Automated purchase and restock recommendations.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemTarget;
