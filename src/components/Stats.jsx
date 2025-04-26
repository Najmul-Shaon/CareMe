const Stats = () => {
  const stats = [
    {
      id: 1,
      header: "11 Lakh+",
      subHeader: "Trust Care Me to sell online",
    },
    {
      id: 2,
      header: "14 Crore+",
      subHeader: "Customers buying across Bangladesh",
    },
    {
      id: 3,
      header: "19000+",
      subHeader: "Pincode Supported for delivery",
    },
    { id: 4, header: "700+", subHeader: "Categories to sell online" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-18 max-w-screen-xl mx-auto px-4 lg:px-0">
      {stats.map((stat) => (
        <div
          key={stat?.id}
          className="bg-secondaryColor p-4 space-y-2 rounded-lg"
        >
          <h3 className="text-4xl font-extrabold text-primaryColor">
            {stat?.header}
          </h3>
          <p className="font-bold text-xl text-textSubHeadingColor max-w-60">
            {stat?.subHeader}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
