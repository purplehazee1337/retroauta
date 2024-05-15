import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <div className="w-full  text-cyan-700 flex justify-center">
      <p className=" text-xl overflow-hidden">
        <NavLink to="/contact">GET IN TOUCH</NavLink>
      </p>
    </div>
  );
};

export default ContactBtn;
