import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Rewards = () => {
  return (
    <div className="bg-secondaryColor">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-22 items-center max-w-screen-xl mx-auto px-4 lg:px-0 relative">
        <div className="space-y-2">
          <h3 className="text-4xl font-extrabold text-primaryColor max-w-xl leading-11">
            Exclusive Supplier+ Rewards for the first 30 days
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="p-6 bg-backgroundColor rounded-lg border border-gray-200 space-y-2 md:relative md:-top-8">
            <figure>
              <img className="w-12" src={icon5} alt="icon" />
            </figure>
            <h3 className="text-xl font-bold text-textHeadingColor">
              Free catalog visibility of ₹600
            </h3>
            <p className="text-textSubHeadingColor tracking-wide">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
          <div className="p-6 bg-backgroundColor rounded-lg border border-gray-200 md:relative md:top-8">
            <figure>
              <img className="w-12" src={icon6} alt="icon" />
            </figure>
            <h3 className="text-xl font-bold text-textHeadingColor">
              Free catalog visibility of ₹600
            </h3>
            <p className="text-textSubHeadingColor tracking-wide">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
