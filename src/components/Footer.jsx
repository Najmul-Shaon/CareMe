const Footer = () => {
  return (
    <footer className="bg-primaryColor mt-18 text-footerTextColor">
      <div className="max-w-screen-xl mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-56 gap-y-12">
          {/* site info  */}
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold">Care Me</h1>
            <p className="text-lg md:max-w-58">
              Sell your products to crores of customers on Meesho at 0%
              commission
            </p>
            <button className="btn btn-sm px-4 py-2 bg-accentColor border-0 text-white text-lg">
              Start Selling
            </button>
          </div>
          {/* details about care me */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl">Sell on Care Me</h3>

            <ul className="space-y-3 text-lg">
              <li className="hover:underline cursor-pointer">Sell Online</li>
              <li className="hover:underline cursor-pointer">
                Pricing & Commission
              </li>
              <li className="hover:underline cursor-pointer">How it works</li>
              <li className="hover:underline cursor-pointer">
                Shipping & Returns
              </li>
              <li className="hover:underline cursor-pointer">
                Grow Your Business
              </li>
              <li className="hover:underline cursor-pointer">Learning Hub</li>
            </ul>
          </div>

          {/* support  */}
          <div className="space-y-5">
            <h3 className="font-bold text-xl">Sell on Care Me</h3>
            <p className="text-lg">support@caremebd.com</p>
            <div className="flex items-center gap-1">
              <p className="bg-backgroundColor text-primaryColor w-8 h-8 flex items-center justify-center text-2xl font-bold rounded-lg">
                F
              </p>
              <p className="bg-backgroundColor text-primaryColor w-8 h-8 flex items-center justify-center text-2xl font-bold rounded-lg">
                I
              </p>
              <p className="bg-backgroundColor text-primaryColor w-8 h-8 flex items-center justify-center text-2xl font-bold rounded-lg">
                Y
              </p>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-backgroundColor my-12"></div>
        <div className="footer sm:footer-horizontal footer-center">
          <aside>
            <p className="text-xl">
              © {new Date().getFullYear()} Care Me. All Rights Reserved.
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
