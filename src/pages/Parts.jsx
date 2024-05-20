import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";
import React from "react";
import client from "../client";
import { Link } from "react-router-dom";
import Part from "../components/Part";

const Parts = () => {

  const [partsData, setpartsData] = React.useState(null);

  React.useEffect(() => {
    if (sessionStorage.getItem("sanityData") !== null)
      return setpartsData(JSON.parse(sessionStorage.getItem("sanityData")).filter((el) => el._type === 'czesc'));

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
        setpartsData(data.filter((el) => el._type === 'czesc'));
        console.log(data.filter((el) => (el._type === 'czesc')));
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <section className="max-container h-screen">
      <h1 className="mainText head-text text-cyan-700">PARTS</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
      {partsData &&
        partsData.map((part, index) => (
          <Link to={"/parts/" + part.slug.current} key={part.slug.current}>
            <Part key={index} name={part.title.toUpperCase()} url={part.mainImage.asset.url} amount={part.amount}/>
          </Link>
        ))}
        
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

export default Parts;
