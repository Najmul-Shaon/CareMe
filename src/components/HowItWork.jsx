const HowItWork = () => {
  const stepsInfo = [
    {
      id: 1,
      title: "Create Account",
      content: "All you need is:",
      contentList: [
        "GSTIN (for GST sellers) or Enrolment ID / UIN (for non GST sellersI)",
        " Bank Account",
      ],
    },
    {
      id: 2,
      title: "List Products",
      content: "List the products you want to sell in your supplier panel",
    },
    {
      id: 3,
      title: "Get Orders",
      content:
        "Start getting orders from crores of Indians actively shopping on our platform.",
    },
    {
      id: 4,
      title: "Lowest Cost Shipping",
      content: "Products are shipped to customers at lowest costs",
    },
    {
      id: 5,
      title: "Receive Payments",
      content:
        "Payments are deposited directly to your bank account following a 7 day payment cycle from order delivery.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mt-18 font-open-sans">
      {/* section title  */}
      <h3 className="text-4xl font-extrabold text-primaryColor text-center leading-11">
        How it works
      </h3>
      {/* bg container  */}
      <div className="bg-secondaryColor p-8 mt-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* single content box  */}
          {stepsInfo.map((item, i) => (
            <div key={item?.id}>
              {/* serial container  */}
              <div className="flex items-center gap-4">
                <p className="w-14 h-14 bg-primaryColor text-white text-4xl font-bold rounded-full flex items-center justify-center">
                  {item?.id}
                </p>
                {i !== stepsInfo.length - 1 && (
                  <div className="h-0.5 bg-primaryColor flex-1"></div>
                )}
              </div>
              {/* content container  */}
              <div className="mt-5 space-y-2">
                <h3 className="font-bold text-xl text-textHeadingColor max-w-60">
                  {item?.title}
                </h3>
                <p className="text-base text-textHeadingColor font-medium tracking-wide">
                  {item?.content}
                </p>
                {item?.contentList && (
                  <ul className="list-disc text-textHeadingColor font-medium">
                    <li className="ml-6 tracking-wide">
                      GSTIN (for GST sellers) or Enrolment ID / UIN (for non GST
                      sellers)
                    </li>
                    <li className="ml-6 tracking-wide">Bank Account</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
