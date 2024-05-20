import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";

const About = () => {
  return (
    <section className="max-container ">
      
      <h1 className="head-text mainText text-cyan-700">HISTORY</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          KAROLIK Used Cars has a rich history that spans over three decades.
          Established in 1990 by John Doe, the company started as a small,
          family-owned dealership in a modest garage in Springfield. With a
          commitment to providing reliable vehicles and exceptional customer
          service, KAROLIK Used Cars quickly gained a loyal customer base. Over the
          years, the business expanded, moving to a larger location and
          increasing its inventory to include a wide variety of makes and
          models. Today, KAROLIK Used Cars is a well-respected name in the used car
          industry, known for its integrity, quality, and community involvement.
        </p>
      </div>

      <hr className="my-5" />

      <h1 className="head-text mainText text-cyan-700">TESTIMONIALS</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Satisfied Customers Speak Out Jane Smith: "I purchased my first car
          from KAROLIK Used Cars over ten years ago, and it’s still running great!
          The team was incredibly helpful and made sure I found a car that fit
          my budget and needs. I’ve recommended KAROLIK to all my friends and
          family." Mike Johnson: "After a bad experience with another
          dealership, I was hesitant to buy another used car. However, KAROLIK Used
          Cars restored my faith. They were transparent about the vehicle’s
          history and provided a warranty that gave me peace of mind. I couldn't
          be happier with my purchase." Emily Davis: "The customer service at
          KAROLIK Used Cars is unparalleled. From the moment I walked in, I felt
          welcomed and valued. They took the time to understand what I was
          looking for and didn’t pressure me into a sale. I love my new (to me)
          car and will definitely return for future purchases."
        </p>
      </div>

      <hr className="my-5" />

      <h1 className="head-text mainText text-cyan-700">OPINIONS</h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          In today’s competitive used car market, KAROLIK Used Cars distinguishes
          itself through a combination of customer-centric policies and
          high-quality inventory. Unlike many dealerships that prioritize quick
          sales over customer satisfaction, KAROLIK Used Cars focuses on building
          long-term relationships with their clients. Their transparent pricing,
          detailed vehicle histories, and comprehensive warranties set a new
          standard in the industry. Moreover, KAROLIK Used Cars is dedicated to
          giving back to the community. They regularly sponsor local events and
          charities, demonstrating their commitment to more than just business
          success. This community involvement fosters a sense of trust and
          loyalty among customers, making KAROLIK Used Cars not just a dealership,
          but a valued part of the local community. In conclusion, KAROLIK Used Cars
          exemplifies what a used car dealership should be. Their history of
          excellence, glowing customer testimonials, and unwavering dedication
          to quality and service make them a standout choice for anyone in the
          market for a used vehicle. Whether you’re a first-time buyer or
          looking to upgrade your current ride, KAROLIK Used Cars is a name you can
          trust.
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
