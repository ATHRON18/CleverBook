import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section bg-gradient-to-r from-[#111827] to-[#242464] text-white text-center py-20 px-4 md:px-10" id="cta">
      <h2 className="text-3xl font-bold mb-4">Grow Faster Than You Think</h2>
      <p className="text-lg mb-6">Join thousands of businesses improving their inventory management with CleverBooks.</p>
      <a href="#cta" className="cta-button bg-transparent border-4  border-[#30205d] text-[#4a3388] font-bold py-2 px-4 rounded-3xl hover:bg-[#6c46f4] hover:text-white hover:border-[#ac8dff] transition duration-300">Start Your Free Trial</a>
    </section>
  );
};

export default CTASection;
