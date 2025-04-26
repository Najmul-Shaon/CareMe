import { IoPlay } from "react-icons/io5";
import seller1 from "../assets/seller1.jpg";
import seller2 from "../assets/seller2.jpg";
import seller3 from "../assets/seller3.jpg";

const Blogs = () => {
  const blogsInfo = [
    {
      id: 1,
      image: seller1,
      title: "Amit and Rajat Jain",
      address: "Smartees, Tiruppur",
      content:
        "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meeshos insights.",
    },
    {
      id: 2,
      image: seller2,
      title: "Amit and Rajat Jain",
      address: "Smartees, Tiruppur",
      content:
        "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meeshos insights.",
    },
    {
      id: 3,
      image: seller3,
      title: "Amit and Rajat Jain",
      address: "Smartees, Tiruppur",
      content:
        "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meeshos insights.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mt-18">
      <h3 className="text-4xl font-extrabold text-primaryColor text-center leading-11">
        Experiences suppliers love to talk about
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
        {blogsInfo.map((item) => (
          <div
            key={item?.id}
            className="p-4 border border-gray-300 rounded-lg space-y-3 relative"
          >
            <figure className="relative">
              <img
                className="rounded-lg"
                src={item?.image}
                alt="Seller image"
              />
              <div className="absolute -bottom-9 left-8">
                <div className="bg-primaryColor border-5 border-accentColor p-3 rounded-full">
                  <span className="text-2xl text-white">
                    <IoPlay />
                  </span>
                </div>
              </div>
            </figure>

            <h3 className="text-xl font-bold text-primaryColor pt-12">
              Amit and Rajat Jain
            </h3>
            {/* author  */}

            <p className="text-textSubHeadingColor tracking-wide">
              Smartees, Tiruppur
            </p>
            <p className="text-textSubHeadingColor tracking-wide">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
