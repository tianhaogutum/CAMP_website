import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const joinUsRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleJoinUs = () => setIsJoinUsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (joinUsRef.current && !joinUsRef.current.contains(event.target)) {
        setIsJoinUsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    isJoinUsOpen,
    toggleJoinUs,
    joinUsRef,
  };
};

export function Navbar3() {
  const useActive = useRelume();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed top-0 left-0 right-0 z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between bg-background-primary px-[5%] md:min-h-18 transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-white' : 'bg-background-primary'
    }`}>
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
      >
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
      </button>
      
      {/* Simplified mobile menu without animations */}
      <div
        className={`${
          useActive.isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-background-primary px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0`}
      >
        <Link to="/" className="mt-10 mb-8 flex shrink-0 lg:hidden">
          <span className="text-xl font-bold text-text-primary">CEFS</span>
        </Link>
        <Link
          to="/"
          className="text-base relative block py-3 lg:px-4 lg:py-2"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="text-base relative block py-3 lg:px-4 lg:py-2"
        >
          Our Projects
        </Link>
        <Link
          to="/team"
          className="text-base relative block py-3 lg:px-4 lg:py-2"
        >
          Our Team
        </Link>
        <Link
          to="/contact"
          className="text-base relative block py-3 lg:px-4 lg:py-2"
        >
          Contact Us
        </Link>
        <Button className="mt-6 w-full lg:hidden" title="Menu" size="sm">
          Menu
        </Button>
      </div>
      
      {/* Simplified overlay */}
      {useActive.isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-darkest bg-opacity-50 lg:hidden"
          onClick={useActive.toggleMobileMenu}
        />
      )}
      
      <Link to="/" className="flex min-h-16 shrink-0 items-center">
        <span className="text-xl font-bold text-text-primary">CEFS</span>
      </Link>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div className="relative" ref={useActive.joinUsRef}>
          <Button
            title="Join us"
            size="sm"
            className="px-4 py-1 md:px-6 md:py-2"
            onClick={useActive.toggleJoinUs}
          >
            Join us
          </Button>
          
          {/* Dropdown menu */}
          {useActive.isJoinUsOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <a
                href="https://www.fa.mgt.tum.de/en/ef/career/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                onClick={() => useActive.toggleJoinUs()}
              >
                At TUM
              </a>
              <a
                href="https://www.equationcap.com/company/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                onClick={() => useActive.toggleJoinUs()}
              >
                At Equation
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}