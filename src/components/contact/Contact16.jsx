"use client";

import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact16() {
  return (
    <section className="px-[5%] py-6 md:py-8 lg:py-10">
      <div className="container">
        <div>
          <div className="mb-6 grid auto-cols-fr grid-cols-1 gap-x-6 gap-y-6 md:mb-8 md:grid-cols-[1fr_.75fr] md:gap-x-8 md:gap-y-8">
            <div className="max-w-lg text-center">
              <h2 className="mb-3 text-4xl font-bold md:mb-4 md:text-5xl">
                Get in Touch
              </h2>
              <p className="text-lg">
                We are here to assist you with any inquiries or information you
                may need.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-3 gap-y-3 py-0">
                <div className="flex flex-row">
                  <div className="mr-3 md:mb-2">
                    <Mail className="size-5 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Email</h3>
                    <a className="underline" href="#">
                      hello@relume.io
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
                <div className="flex flex-row">
                  <div className="mr-3 md:mb-2">
                    <LocationOn className="size-5 text-text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">Locations</h3>
                    <p>Find two offices in Munich</p>
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
