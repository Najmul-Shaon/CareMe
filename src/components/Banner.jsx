import p_man from "../assets/p_man2.png";

const Banner = () => {
  return (
    <div className="bg-bannerPrimaryColor">
      <div className="relative">
        {/* Right side background */}
        <div className="absolute right-0 top-0 h-full w-1/2 md:bg-bannerSecondaryColor rounded-tl-full z-0" />

        {/* Content + Image inside container */}
        <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center px-4 lg:px-0">
          {/* Content section */}
          <div className="space-y-8">
            <h3 className="text-4xl font-extrabold text-textHeadingColor leading-11">
              Sell online to 14 Cr+ customers at{" "}
              <span className="text-primaryColor">0% Commission</span>
            </h3>
            <p className="leading-7 tracking-wide w-full md:max-w-[550px]">
              Become a Care Me seller and grow your business across Bangladesh{" "}
              <span className="px-2 py-1 bg-bannerSecondaryColor text-white font-bold rounded-lg">
                New!
              </span>{" "}
              Don’t have a GSTIN? You can still sell on Meesho.{" "}
              <span className="text-bannerSecondaryColor font-semibold">
                Know more
              </span>
            </p>
            <div className="join w-full">
              <input
                className="input join-item w-[55%] shadow-none"
                placeholder="Enter your mobile number"
              />
              <button className="btn join-item bg-primaryColor text-white text-md shadow-none">
                Start Selling
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="flex items-center justify-center md:justify-start">
            <figure>
              <img src={p_man} alt="delivery man" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
