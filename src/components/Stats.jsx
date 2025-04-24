const Stats = () => {
  const stats = [
    {
      header: "11 Lakh+",
      subHeader: "Trust Care Me to sell online",
    },
    {
      header: "14 Crore+",
      subHeader: "Customers buying across Bangladesh",
    },
    {
      header: "19000+",
      subHeader: "Pincode Supported for delivery",
    },
    {
      header: "700+",
      subHeader: "Categories to sell online",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mt-18">
      {stats.map((stat) => (
        <div className="bg-secondaryColor p-4 space-y-2 rounded-lg">
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
