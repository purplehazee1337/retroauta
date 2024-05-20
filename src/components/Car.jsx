
const Car = (props) => {
  return (
    <div className="relative mb-5 cursor-pointer overflow-hidden hover:opacity-95 h-48 sm:h-72">
        <img src={props.url} className="w-full h-full object-cover brightness-90"></img>
        <h2 className="absolute top-3 left-3 text-white mainText text-4xl sm:text-6xl z-10">
          {props.name}
        </h2>
      </div>
  );
};

export default Car;
 