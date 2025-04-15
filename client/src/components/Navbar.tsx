import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount] = useState(3); // Replace with real cart state later

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-pink-600">Little Vintage Florist</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right-side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FiShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <FiUser className="h-6 w-6 text-gray-700" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-gray-700 hover:text-pink-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-2">
            <Link to="/cart" className="flex items-center">
              <FiShoppingCart className="h-5 w-5 mr-1" />
              {cartItemsCount > 0 && (
                <span className="bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="flex items-center">
              <FiUser className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;