import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";
import Car from "../components/Car";
import React from "react";
import client from "../client";
import { Link } from "react-router-dom";

const Cars = () => {
  const [carsData, setCarsData] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("sanityData") !== null)
      return setCarsData(JSON.parse(localStorage.getItem("sanityData")));

    client
      .fetch(
        `*[_type == 'samochod']{
            title,
            slug,
            marka,
            model,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body
          }`
      )
      .then((data) => {
        localStorage.setItem("sanityData", JSON.stringify(data));
        setCarsData(data);
        // console.log("data fetched");
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-container">
      {carsData &&
        carsData.map((car, index) => (
          <Link to={"/cars/" + car.slug.current} key={car.slug.current}>
            <Car key={index} name={car.title.toUpperCase()} url={car.mainImage.asset.url} />
          </Link>
        ))}

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

export default Cars;
