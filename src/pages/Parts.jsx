import React from "react";
import client from "../client";

const Parts = () => {
  const [AllPostsData, setAllPostsData] = React.useState(null);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllPostsData(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(AllPostsData);

  return (
    <section className="max-container h-screen">
      <h1 className="mainText head-text text-cyan-700">PARTS</h1>
    </section>
  );
};

export default Parts;
