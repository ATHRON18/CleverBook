import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white text-center py-10 px-4 md:px-10">
      <div className="footer-content flex flex-col md:flex-row justify-between items-center">
        <div className="footer-logo mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">CleverBooks</h3>
          <p className="text-sm mt-2">&copy; 2024 CleverBooks. All Rights Reserved.</p>
        </div>
        <div className="footer-links flex flex-col md:flex-row mb-6 md:mb-0">
          <a href="#features" className="text-lg md:mr-6 hover:text-purple-500 transition duration-300">Features</a>
          <a href="#pricing" className="text-lg md:mr-6 hover:text-purple-500 transition duration-300">Pricing</a>
          <a href="#about" className="text-lg md:mr-6 hover:text-purple-500 transition duration-300">About Us</a>
          <a href="#contact" className="text-lg hover:text-purple-500 transition duration-300">Contact</a>
        </div>
        <div className="footer-socials flex mb-6 md:mb-0">
          <a href="https://facebook.com" className="text-lg mr-4 hover:text-purple-500 transition duration-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-lg mr-4 hover:text-purple-500 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="text-lg hover:text-purple-500 transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-address text-sm mt-6 md:mt-0">
          <p>1234 Market St, Suite 500</p>
          <p>San Francisco, CA 94103</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
