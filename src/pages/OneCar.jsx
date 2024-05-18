import { useParams } from "react-router-dom";
import React from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const OneCar = () => {
  const { slug } = useParams();

  const [carsData, setCarsData] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("sanityData") !== null)
      return setCarsData(
        JSON.parse(localStorage.getItem("sanityData")).filter(
          (el) => el.slug.current === slug
        )
      );

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
        setCarsData(data.filter((el) => el.slug.current === slug));
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
      <BlockContent
        blocks={carsData && carsData[0].body}
        projectId= {import.meta.env.VITE_SANITY_PROJECT_ID}
        dataset={import.meta.env.VITE_SANITY_DATASET}
      />
    </section>
  );
};

export default OneCar;
