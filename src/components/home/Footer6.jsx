import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer6() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-lg font-semibold">Subscribe to updates</h1>
            <p>Stay informed with our latest research and insights.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email here"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-tiny">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-border-primary" />
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Quick Links</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  About Us
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Our Team
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Research Projects
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact Us
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Resources</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Blog Posts
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Events
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Partnerships
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Careers
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Follow Us</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Twitter Feed
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn Page
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Facebook Group
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Instagram Profile
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Get In Touch</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Email Us
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Call Us
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Office Location
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Feedback
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Stay Updated
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Legal Information</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Terms of Service
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Cookie Policy
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Accessibility Statement
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  User Agreement
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Stay Connected</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Join Our Community
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Subscribe to Blog
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  View Our Work
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Explore Opportunities
                </a>
              </li>
              <li className="text-sm py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-border-primary" />
        <div className="text-sm flex flex-col items-start pt-6 pb-4 sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <a href="#" className="mb-6 sm:mb-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <p className="text-sm">© 2024 Relume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}