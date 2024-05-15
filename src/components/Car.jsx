import ImageGallery from "react-image-gallery";

const Car = (props) => {
  return (
    <div className="text-white my-8 w-100% relative">
      <div className="bg-cyan-700">
        <ImageGallery
          items={props.img}
          showPlayButton={false}
          showNav={false}
          showBullets={true}
        />
        <article className="p-4 bg-cyan-700">
          <h3 className="mainText text-2xl">{props.name}</h3>
          <p>{props.discription}</p>
          <h2 className="mainText text-xl mt-4">Cena: {props.price}zł</h2>
        </article>
      </div>
    </div>
  );
};

export default Car;
