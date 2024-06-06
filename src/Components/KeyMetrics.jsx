import React from 'react';
import { FaCheckCircle, FaShippingFast, FaCogs } from 'react-icons/fa';

const KeyMetrics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#b7bdfb] to-[#757bb8]  min-h-fit">
      <div className="container mx-auto px-4 h-fit">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose CleverBooks?</h2>
        <div className="flex flex-wrap mx-4 h-fit">
          <div className="w-full md:w-1/3 px-4 mb-8 h-[200px]">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-500 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">95% Demand Fulfillment</h3>
              </div>
              <p className="text-gray-600">Ensuring high levels of demand fulfillment with precision.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 h-[200px]">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-4">
                <FaShippingFast className="text-green-500 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">3% Daily Stock-out</h3>
              </div>
              <p className="text-gray-600">Minimizing daily stock-out rates with accurate predictions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 h-[200px]">
            <div className="bg-purple-100 p-6 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-4">
                <FaCogs className="text-purple-500 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">Seamless Integration</h3>
              </div>
              <p className="text-gray-600">Integrates effortlessly with your existing systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
