import Blogs from "../components/Blogs";
import HowItWork from "../components/HowItWork";
import Rewards from "../components/Rewards";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <div className="font-open-sans">
      <Stats />
      <WhyUs />
      <Rewards />
      <Blogs />
      <HowItWork />
    </div>
  );
};

export default Home;
