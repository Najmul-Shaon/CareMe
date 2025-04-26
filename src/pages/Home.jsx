import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import HowItWork from "../components/HowItWork";
import PopulerCategories from "../components/PopulerCategories";
import Rewards from "../components/Rewards";
import SellerBanner from "../components/SellerBanner";
import Stats from "../components/Stats";
import Support from "../components/Support";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div className="font-open-sans">
      {/* <SellerBanner /> */}
      <Banner />
      <Stats />
      <WhyUs />
      <Rewards />
      <Blogs />
      <HowItWork />
      <PopulerCategories />
      <Support />
    </div>
  );
};

export default Home;
