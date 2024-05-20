import { useParams } from "react-router-dom";
import React from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import ContactBtn from "../components/ContactBtn";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const OnePart = () => {
  const { slug } = useParams();

  const [partsData, setPartsData] = React.useState(null);

  React.useEffect(() => {
    if (sessionStorage.getItem("sanityData") !== null)
      return setPartsData(
        JSON.parse(sessionStorage.getItem("sanityData")).filter(
          (el) => (el.slug.current === slug && el._type === 'czesc')
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
        setPartsData(data.filter((el) => (el.slug.current === slug && el._type === 'czesc')));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-container ">
      <h1 className="mainText head-text text-cyan-700">
        {partsData && partsData[0].title.toUpperCase()}
      </h1>
      <h2>Dostępna ilość: {partsData && partsData[0].amount}</h2>
      <img
        src={partsData && partsData[0].mainImage.asset.url}
        className="w-full h-full object-cover brightness-90 mb-3"
      ></img>
      <BlockContent
        blocks={partsData && partsData[0].body}
        projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
        dataset={import.meta.env.VITE_SANITY_DATASET}
      />

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

export default OnePart;
