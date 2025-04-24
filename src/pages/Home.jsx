import Rewards from "../components/Rewards";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
import SupplierRewards from "../components/SupplierRewards";

const Home = () => {
  return (
    <div className="font-open-sans">
      <Stats />
      <WhyUs />
      <Rewards />
      {/* <SupplierRewards/> */}
    </div>
  );
};

export default Home;
