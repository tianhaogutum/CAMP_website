import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from "relume-icons";
import React from "react";
import { Link } from "react-router-dom";

export function Layout25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{backgroundColor: '#f1f1f1'}}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">AI-Powered Research</p>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
              Innovating, Educating, Collaborating, Transforming
            </h2>
            <p className="mb-6 text-lg md:mb-8">
              We seek to integrate cutting-edge AI techniques into private market analysis, empowering investors and enhancing market fairness. Through groundbreaking research, strategic partnerships, and open knowledge sharing, we aim to set new standards in how private markets operate.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl">80%</h3>
                <p>of our research outputs involve real-world industry collaboration.</p>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold md:text-4xl">15+</h3>
                <p>active research projects spanning AI model development, risk prediction, and investment analytics.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-8">
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <Button title="See Our Projects" variant="secondary" className="px-8 py-3">
                  See Our Projects
                </Button>
              </Link>
              <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  title="Meet the Team"
                  variant="secondary"
                  className="px-8 py-3"
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg object-cover"
          >
            <source src="/images/ai_powered.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}