import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { AlignJustify, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UnderlineBtn from "./shared/UnderlineBtn";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollYRef = useRef(0);
  const location = useLocation();

  //   handle the overflow of mobile header.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const navlinks = [
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Hide-on-scroll logic (applies to both desktop & mobile headers)
  useEffect(() => {
    const THRESHOLD = 8;
    const HIDE_AFTER = 80;

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        // keep header visible while drawer is open
        setShowHeader(true);
        return;
      }

      const y = window.scrollY;
      setScrolled(y > 10);

      const delta = y - lastScrollYRef.current;

      if (Math.abs(delta) > THRESHOLD) {
        if (delta > 0 && y > HIDE_AFTER) setShowHeader(false); // scrolling down
        else if (delta < 0) setShowHeader(true); // scrolling up
        lastScrollYRef.current = y;
      }
      if (y <= 0) setShowHeader(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[transform,background-color] duration-300 hidden xl:block
    ${scrolled ? "bg-white py-[20px] shadow-lg" : "bg-transparent py-[20px]"}
    ${showHeader ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        <div className="container mx-auto pr-16 flex justify-between items-center">
          <Link to="/" className=" h-16 shrink-0 w-[160px] overflow-hidden">
            <img
              src={logo}
              alt="Site Logo"
              className="h-full w-full object-contain "
            />
          </Link>

          <ul className="flex items-center gap-10">
            {navlinks.map((link) => (
              <li key={link.path}>
                <UnderlineBtn
                  to={link.path}
                  text={link.name}
                  lineColor={scrolled ? "bg-black" : "bg-white"}
                  textColor={scrolled ? "text-black" : "text-white"}
                />
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`sticky top-0 z-40 py-4  transition-all duration-300 xl:hidden flex justify-between items-center shadow-sm  px-4       ${
          scrolled ? "bg-white gradient-shadow-mobile" : "bg-[#f7f6f6]"
        }`}
      >
        <Link to="/">
          <div className="h-13 w-[120px]">
            <img
              src={logo}
              alt="Site Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Link>
        {/* responsive lg device searchbar   */}

        <div className="flex items-center gap-1">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-textBlack" />
            ) : (
              <AlignJustify className="w-6 h-6 text-textBlack" />
            )}
          </button>
        </div>

        {/* mobile menu  */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed inset-y-0 min-h-screen right-0 z-50 w-full bg-white shadow-lg "
              >
                <div className="relative flex flex-col h-full p-6">
                  <div className="absolute right-4">
                    <button
                      onClick={toggleMobileMenu}
                      className="p-2 rounded-full focus:outline-none border"
                    >
                      <X />
                    </button>
                  </div>

                  <nav className="flex-1 ">
                    <Link to="/" className="w-fit inline-block">
                      <div className="h-12 w-32">
                        <img
                          onClick={toggleMobileMenu}
                          src={logo}
                          alt="Site Logo"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </Link>

                    <ul className="space-y-4 mt-5 bg-white w-full">
                      {navlinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            onClick={toggleMobileMenu}
                            className={`text-lg block py-2 border-b ${
                              location.pathname === link.path
                                ? "text-primary font-semibold"
                                : "text-textBlack hover:text-primary"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </motion.div>
              <div
                className="fixed inset-0 z-40 bg-black bg-opacity-50"
                onClick={toggleMobileMenu}
              />
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
