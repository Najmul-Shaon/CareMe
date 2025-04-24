import { TiTick } from "react-icons/ti";

const WhyUs = () => {
  const whyUs = [
    {
      header: "0% Commission Fee",
      content:
        "Suppliers selling on Meesho keep 100% of their profit by not paying any commission",
      icon: "/src/assets/icon1.png",
    },
    {
      header: "0 Penalty Charges",
      content:
        "Suppliers selling on Meesho keep 100% of their profit by not paying any commission",
      icon: "/src/assets/icon2.png",
    },
    {
      header: "Growth for Every Supplier",
      content:
        "From small to large and unbranded to branded, and now open for Sellers who don't have a Regular GSTIN too, Meesho fuels growth for all suppliers.",
      icon: "/src/assets/icon3.png",
    },
    {
      header: "Ease of Doing Business",
      contentList: [
        "Easy Product Listing",
        "Lowest Cost Shipping",
        "7-Day Payment Cycle from the delivery date",
      ],
      icon: "/src/assets/icon4.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-18 items-center">
      <div className="space-y-2">
        <h3 className="text-4xl font-extrabold text-primaryColor">
          Why Suppliers Love Care Me
        </h3>
        <p className="font-bold text-lg text-textSubHeadingColor max-w-lg tracking-wide">
          All the benefits that come with selling on Care Me are designed to
          help you sell more, and make it easier to grow your business.
        </p>
      </div>
      <div className="p-6 border rounded-lg border-gray-300">
        {whyUs.map((w) => (
          <div className="flex items-start gap-4 py-6 border-b-1 border-gray-300">
            <figure className="min-w-14">
              <img className="w-12" src={w?.icon} alt="icon" />
            </figure>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-textHeadingColor">
                {w?.header}
              </h3>
              {w?.content && (
                <p className="text-textSubHeadingColor tracking-wide">
                  {w?.content}
                </p>
              )}
              {w?.contentList && (
                <ul className="text-textSubHeadingColor">
                  {w.contentList.map((item, i) => (
                    <li key={i} className="list-inside flex items-start gap-1">
                      <TiTick className="text-primaryColor" /> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
