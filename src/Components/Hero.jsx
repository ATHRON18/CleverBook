const Hero = () => {
    return (
      <section className="bg-gray-900 text-white relative" style={{  backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center md:flex-row">
          <div className="flex-1 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Every order <span className="text-purple-400">fulfilled</span>, <span className="text-pink-400">on time</span>.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get started with CleverBooks
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="Hero Illustration" className="w-full h-auto max-w-md md:max-w-lg" />
          </div>
        </div>
      </section>
    );
  }
export default Hero;  