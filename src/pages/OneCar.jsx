import { useParams } from "react-router-dom";
import React from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

import ContactBtn from "../components/ContactBtn";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const OneCar = () => {
  const { slug } = useParams();

  const [carsData, setCarsData] = React.useState(null);

  React.useEffect(() => {
    if (sessionStorage.getItem("sanityData") !== null)
      return setCarsData(
        JSON.parse(sessionStorage.getItem("sanityData")).filter(
          (el) => (el.slug.current === slug && el._type === 'samochod')
        )
      );

    client
    .fetch(
      `*[_type in ['czesc', 'samochod']]{
        title,
        slug,
        _type,
        marka,
        model,
        amount,
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
        sessionStorage.setItem("sanityData", JSON.stringify(data));
        setCarsData(data.filter((el) => (el.slug.current === slug && el._type === 'samochod')));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-container ">
      <h2>{carsData && carsData[0].publishedAt.slice(0, 10)}</h2>
      <h1 className="mainText head-text text-cyan-700">
        {carsData && carsData[0].title.toUpperCase()}
      </h1>
      <img
        src={carsData && carsData[0].mainImage.asset.url}
        className="w-full h-full object-cover brightness-90 mb-3"
      ></img>
      <div className="text-slate-500">
      <BlockContent
        blocks={carsData && carsData[0].body}
        projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
        dataset={import.meta.env.VITE_SANITY_DATASET}
      />
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

export default OneCar;
