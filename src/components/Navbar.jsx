import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className="md:text-lg text-textHeadingColor font-semibold hover:text-primaryColor"
          to="/"
        >
          Sell Online
        </NavLink>
      </li>
      <li>
        <NavLink
          className="md:text-lg text-textHeadingColor font-semibold hover:text-primaryColor"
          to="/"
        >
          How it Works
        </NavLink>
      </li>
      <li>
        <NavLink
          className="md:text-lg text-textHeadingColor font-semibold hover:text-primaryColor"
          to="/"
        >
          Pricing & Commission
        </NavLink>
      </li>
      <li>
        <NavLink
          className="md:text-lg text-textHeadingColor font-semibold hover:text-primaryColor"
          to="/"
        >
          Shipping & Return
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-backgroundColor">
      <div className="navbar font-open-sans max-w-screen-xl mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <h3 className="text-2xl font-bold">Care Me</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-4">
            <Link
              to={"/"}
              className="btn btn-sm btn-outline py-0 px-5 hover:bg-primaryColor border-primaryColor text-primaryColor hover:text-white"
            >
              Login
            </Link>
            <Link to={"/"} className="btn btn-sm bg-primaryColor text-white">
              Start Selling
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
