import React from 'react';

const KeyProblems = () => {
  return (
    <section className="key-problems  bg-gradient-to-br from-[#b7bdfb] to-[#757bb8] text-center py-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Four key questions answered by CleverBooks</h2>
      <div className="problems-list flex flex-col md:flex-row justify-around flex-wrap">
        <div className="problem-item w-full md:w-1/5 p-4 mb-5 bg-purple-100 rounded-lg shadow-md ">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="What to order" className="mx-auto mb-4 w-1/4" />
          <h3 className="text-xl font-semibold mb-2 text-purple-800">What to order</h3>
          <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
        </div>
        <div className="problem-item w-full md:w-1/5 p-4 mb-5 bg-purple-100 rounded-lg shadow-md ">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="When to order" className="mx-auto mb-4 w-1/4" />
          <h3 className="text-xl font-semibold mb-2 text-purple-800">When to order</h3>
          <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you’re never left guessing.</p>
        </div>
        <div className="problem-item w-full md:w-1/5 p-4 mb-5 bg-purple-100 rounded-lg shadow-md ">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="How much to stock" className="mx-auto mb-4 w-1/4" />
          <h3 className="text-xl font-semibold mb-2 text-purple-800">How much to stock</h3>
          <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
        </div>
        <div className="problem-item w-full md:w-1/5 p-4 mb-5 bg-purple-100 rounded-lg shadow-md ">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="Where to place" className="mx-auto mb-4 w-1/4" />
          <h3 className="text-xl font-semibold mb-2 text-purple-800">Where to place</h3>
          <p>Our tool suggests how to move stock within your supply chain. So you’ll always have products available across cities.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyProblems;
