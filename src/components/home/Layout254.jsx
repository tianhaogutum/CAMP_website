"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout254() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
              Empowering Investors Through Insightful Research
            </h2>
            <p className="text-lg leading-relaxed">
              Our mission is to advance methodological and empirical knowledge in the application of AI and advanced analytics to private markets.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4">
                Innovate
              </h3>
              <p>
                Explore and develop cutting-edge analytical frameworks and methodologies that leverage AI to not only improve investment decision-making, but also to systematically redefine how stakeholders navigate and engage with private markets.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="size-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4">
                Educate
              </h3>
              <p>
                Disseminate insights and best practices to investors, practitioners, and stakeholders, while fostering interdisciplinary collaboration among students and professionals from finance, economics, mathematics, physics, computer science, ethics, and related fields.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/center.jpg"
              alt="Research and analysis"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="size-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4">
                Collaborate
              </h3>
              <p>
                Build global partnerships with academic institutions, industry leaders, and technology providers to drive research and practical applications that address the unique challenges of private markets. This includes supporting open-source infrastructure for code, models, and (synthetic) data to broaden access and accelerate innovation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="size-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4">
                Transform
              </h3>
              <p>
                Advocate for the adoption of data-driven strategies in private market investing, empowering smaller investors, promoting a fairer distribution of opportunities and returns, and engaging with policymakers to champion evidence-based, forward-looking reforms that enable inclusive and sustainable private market growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
