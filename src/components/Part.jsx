const Part = (props) => {
  return (
    <div className="text-white">
    <div className="h-44">
    <img 
        src={props.url}
        className="w-full h-full object-cover brightness-90"
      ></img>
    </div>
      
      <div className="border-2 p-3 bg-cyan-700">
      <h2 className=" text-xl mainText z-10">{props.name}</h2>
      <p>Dostępna ilość: {props.amount}</p>
      </div>
      
    </div>
  );
};

export default Part;
