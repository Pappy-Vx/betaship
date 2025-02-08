import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiHelpCircle,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import {
  NavigationMenuComponent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./common/NavigationMenuComponent";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Logo from "../assets/images/Betaship2.png";
import { routePath } from "../utils/routePath";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#330066] text-white py-1 px-4">
        <div className="container mx-auto">
          <img src={Logo} alt="Jumia Logo" className="h-6 md:h-8" />
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-[#330066]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#330066] text-text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#330066] text-white p-1.5 rounded-md hover:bg-[#e67e15]">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/account"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#330066]"
            >
              <NavigationMenuComponent className="text-black">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="">
                    Account <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="navcon2">
                      <NavigationMenuLink href="/">
                        <div className="navmenulink">
                          <Link to={routePath.LOGIN}>Login</Link>
                        </div>
                        <div className="navmenulink">
                          <h4>My Account</h4>
                        </div>
                        <div className="navmenulink">
                          <h4>Orders</h4>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuComponent>
            </Link>
            <Link
              to="/help"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#330066]"
            >
              <FiHelpCircle className="w-5 h-5" />
              <span>Help</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#330066]"
            >
              <div className="relative">
                <FiShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-[#330066] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/account"
                className="flex items-center space-x-2 text-gray-600 py-2"
              >
                <FiUser className="w-5 h-5" />
                <span>Account</span>
              </Link>
              <Link
                to="/help"
                className="flex items-center space-x-2 text-gray-600 py-2"
              >
                <FiHelpCircle className="w-5 h-5" />
                <span>Help</span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-gray-600 py-2"
              >
                <div className="relative">
                  <FiShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-[#330066] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </div>
                <span>Cart</span>
              </Link>
              <div className="border-t pt-2">
                {[
                  "Supermarket",
                  "Health & Beauty",
                  "Home & Office",
                  "Phones & Tablets",
                  "Computing",
                  "Electronics",
                  "Fashion",
                ].map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category
                      .toLowerCase()
                      .replace(/ & /g, "-")}`}
                    className="block text-gray-600 py-2"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
