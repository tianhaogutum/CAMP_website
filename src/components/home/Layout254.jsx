"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout254() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Our Mission
            </div>

            <h2 className="mb-6 text-5xl font-display font-bold text-gray-900 tracking-tight md:mb-8 md:text-6xl lg:text-7xl">
              Empowering Investors Through
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insightful Research
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Our mission is to advance methodological and empirical knowledge in the application of AI and advanced analytics to private markets.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-16 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-16 md:gap-y-20">
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 md:mb-8 relative">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 size-4 bg-blue-200 rounded-full animate-ping"></div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:mb-6">
                Innovate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore and develop cutting-edge analytical frameworks and methodologies that leverage AI to not only improve investment decision-making, but also to systematically redefine how stakeholders navigate and engage with private markets.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 md:mb-8 relative">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 size-4 bg-green-200 rounded-full animate-ping"></div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:mb-6">
                Educate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Disseminate insights and best practices to investors, practitioners, and stakeholders, while fostering interdisciplinary collaboration among students and professionals from finance, economics, mathematics, physics, computer science, ethics, and related fields.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1 group">
            <div className="relative overflow-hidden rounded-3xl shadow-large">
              <img
                src="/images/center.jpg"
                alt="Research and analysis"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                AI Research
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-16 md:gap-y-20">
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 md:mb-8 relative">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 size-4 bg-purple-200 rounded-full animate-ping"></div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:mb-6">
                Collaborate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build global partnerships with academic institutions, industry leaders, and technology providers to drive research and practical applications that address the unique challenges of private markets. This includes supporting open-source infrastructure for code, models, and (synthetic) data to broaden access and accelerate innovation.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 md:mb-8 relative">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="size-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 size-4 bg-orange-200 rounded-full animate-ping"></div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:mb-6">
                Transform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advocate for the adoption of data-driven strategies in private market investing, empowering smaller investors, promoting a fairer distribution of opportunities and returns, and engaging with policymakers to champion evidence-based, forward-looking reforms that enable inclusive and sustainable private market growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
