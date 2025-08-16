"use client";

import { Button } from "@relume_io/relume-ui";
import { Checkbox } from "@relume_io/relume-ui";
import { Input } from "@relume_io/relume-ui";
import { Label } from "@relume_io/relume-ui";
import { Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">

        <form className="mx-auto grid w-full max-w-md grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input type="text" id="name" />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input type="email" id="email" />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="text-sm mb-3 flex items-center space-x-2 md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the Terms
            </Label>
          </div>
          <div className="text-center">
            <Button title="Submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
