import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Rewards = () => {
  return (
    <div className="bg-secondaryColor font-open-sans mt-18">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-w-screen-xl mx-auto px-4 md:px-0 py-24">
        <div className="space-y-2">
          <h3 className="text-4xl font-extrabold text-primaryColor max-w-xl leading-11">
            Care Me Supplier Support Available 24/7
          </h3>
        </div>
        <div className="space-y-6">
          <p className="text-textSubHeadingColor md:max-w-lg text-lg leading-7">
            Meesho supplier support is available to solve all your doubts and
            issues before and after you start your online selling business.
          </p>
          <div className="flex items-center gap-4">
            <span className="bg-primaryColor px-4 py-2.5 rounded-lg">
              <FaRegEnvelope className="text-white text-2xl" />
            </span>
            <div>
              <p className="text-primaryColor text-lg">You can reach out to</p>
              <p className="text-textSubHeadingColor text-lg">
                support@caremebd.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
