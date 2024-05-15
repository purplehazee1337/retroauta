import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text mainText text-cyan-700">ABOUT</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>

        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <hr className="my-5" />

      <h1 className="head-text mainText text-cyan-700">HISTORY</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>

        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <hr className="my-5" />

      <h1 className="head-text mainText text-cyan-700">TESTIMONIALS</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>

        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <hr className="my-5" />

      <h1 className="head-text mainText text-cyan-700">OPINIONS</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>

        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className="flex flex-col mt-4 mb-4">
        <button
          className="text-cyan-700"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
      <ContactBtn />
      <Footer />
    </section>
  );
};

export default About;
