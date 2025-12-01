import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className={`${darkMode ? "bg-gray-800" : "bg-blue-200"} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className={`${darkMode ? "text-white" : "text-blue-900"} text-lg font-semibold`}
        >
          MyWebsite
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"}`}>Home</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"}`}>About</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"}`}>Services</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"}`}>Contact</a></li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-2 py-1 rounded bg-gray-600 text-white hover:bg-gray-500 md:block"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"} md:hidden focus:outline-none`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"} block`}>Home</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"} block`}>About</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"} block`}>Services</a></li>
          <li><a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-blue-700 hover:text-blue-900"} block`}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
