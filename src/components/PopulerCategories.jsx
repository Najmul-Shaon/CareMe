const PopulerCategories = () => {
  const categories = [
    { id: 1, category: "Sell Sarees Online" },
    { id: 3, category: "Sell Tshirts Online" },
    { id: 5, category: "Sell Watches Online" },
    { id: 7, category: "Sell Clothes Online" },
    { id: 2, category: "Sell Jewellery Online" },
    { id: 4, category: "Sell Shirts Online" },
    { id: 6, category: "Sell Electronics Online" },
    { id: 8, category: "Sell Socks Online" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mt-18 font-open-sans px-4 md:px-0">
      {/* section title  */}
      <h3 className="text-4xl font-extrabold text-primaryColor leading-11">
        Popular Categories to Sell Online
      </h3>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category?.id}>
            <h3 className="font-normal text-lg text-textSubHeadingColor cursor-pointer">
              {category?.category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerCategories;
