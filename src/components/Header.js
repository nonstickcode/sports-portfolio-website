import React, { useState, useRef, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header id="site-header" className="py-8 sticky top-0 w-full z-50 bg-black">
      <div className="container mx-auto relative">
        <div className="text-center w-full">
          <h1 className="text-2xl lg:text-4xl leading-tight lg:leading-loose">
            <span className="block lg:inline lg:mr-2">LAKODA</span>
            <span className="block lg:inline lg:mr-2">GARRISON</span>
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end md:hidden pr-4">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle navigation"
          >
            {!isMenuOpen && (
              <svg
                className="w-10 h-10 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Full Navigation Links for Desktop */}
        <nav className="hidden md:flex justify-center mt-6 space-x-6 text-lg font-thin">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#key-facts" className="hover:underline">
            Key Facts
          </a>
          <a href="#athletics" className="hover:underline">
            Athletics
          </a>
          <a href="#highlights" className="hover:underline">
            Highlights
          </a>
          <a href="#other-videos" className="hover:underline">
            Other Videos
          </a>
          <a href="#photos" className="hover:underline">
            Photos
          </a>
          <a href="#academics" className="hover:underline">
            Academics
          </a>
          <a href="#leadership" className="hover:underline">
            Leadership
          </a>
          <a href="#community" className="hover:underline">
            Community
          </a>
          <a href="#character" className="hover:underline">
            Character
          </a>
          <a href="#inspiration" className="hover:underline">
            Inspiration
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden flex flex-col items-center py-4 space-y-4"
          >
            <a
              href="#home"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#key-facts"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Key Facts
            </a>
            <a
              href="#athletics"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Athletics
            </a>
            <a
              href="#highlights"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Highlights
            </a>
            <a
              href="#other-videos"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Other Videos
            </a>
            <a
              href="#photos"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Photos
            </a>
            <a
              href="#academics"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Academics
            </a>
            <a
              href="#leadership"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </a>
            <a
              href="#community"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#character"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Character
            </a>
            <a
              href="#inspiration"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Inspiration
            </a>
            <a
              href="#contact"
              className="hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
