"use client";

import React from "react";
import { Call, Mail } from "relume-icons";

export function Contact16() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-6 grid auto-cols-fr grid-cols-1 gap-x-6 gap-y-6 md:mb-8 md:grid-cols-[1fr_.75fr] md:gap-x-8 md:gap-y-8">
            <div className="max-w-lg text-center py-4 md:py-6 px-4 md:px-6">
              <h2 className="mb-4 text-4xl font-bold md:mb-6 md:text-5xl">
                Contact Information
              </h2>
              <p className="text-lg">
                We welcome your inquiries and are happy to help via email or phone.
              </p>
            </div>
            <div className="flex flex-col px-4 md:px-6">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-3 gap-y-3 py-0 mt-4 md:mt-6">
                <div className="flex flex-row">
                  <div className="mr-3 md:mb-2">
                    <Mail className="size-5 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Email</h3>
                    <a className="underline" href="mailto:karin.papavlassopoulos@tum.de">
                      karin.papavlassopoulos@tum.de
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-3 md:mb-2">
                    <Call className="size-5 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Phone</h3>
                    <a className="underline" href="#">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
