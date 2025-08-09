import { Button } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
  };
};

export function Navbar3() {
  const useActive = useRelume();
  return (
    <section className="z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
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
        <a href="#" className="mt-10 mb-8 flex shrink-0 lg:hidden">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </a>
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
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
          alt="Logo image"
        />
      </Link>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <Button
            title="Join us"
            size="sm"
            className="px-4 py-1 md:px-6 md:py-2"
          >
            Join us
          </Button>
        </div>
      </div>
    </section>
  );
}