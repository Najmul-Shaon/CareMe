import p_man from "../assets/p_man2.png";

const SellerBanner = () => {
  return (
    <div className="bg-[#f5f2f2]">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 py-12 gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sell online to 14 Cr+ customers at <br />
            <span className="text-[#6d0036]">0% Commission</span>
          </h1>
          <p className="text-gray-700 mb-4">
            Become a Care Me seller and grow your business across Bangladesh
          </p>
          <div className="flex items-center mb-4">
            <span className="bg-[#6d0036] text-white text-xs font-semibold px-2 py-1 rounded mr-2">
              New!
            </span>
            <p className="text-gray-700 text-sm">
              Don't have a GSTIN? You can still sell on Meesho.{" "}
              <span className="text-[#6d0036] font-semibold cursor-pointer">
                Know more
              </span>
            </p>
          </div>
          {/* Mobile Number Input */}
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#6d0036] text-white px-4 py-2 rounded-r-md font-semibold">
              Start Selling
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="bg-[#4b000f] rounded-full w-80 h-80 absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 z-0"></div>
          <img
            src={p_man} // replace with your image URL
            alt="Seller holding boxes"
            className="relative z-10 w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SellerBanner;
