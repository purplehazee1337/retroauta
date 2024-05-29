import { NavLink } from "react-router-dom";

const Navbar = () => {
  return ( 
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-6xl mx-auto fixed bg-white top-0 z-10 right-0 left-0">
    
    <NavLink
        to="/"
        className="flex text-lg font-bold mainText"
      >
        <p className="text-cyan-700 ">RETROAUTA</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive}) => isActive ? 
          'text-cyan-700' : 'text-slate-700'}>
          about
        </NavLink>
        <NavLink to="/cars" className={({isActive}) => isActive ? 
          'text-cyan-700' : 'text-slate-700'}>
          cars
        </NavLink>
        <NavLink to="/parts" className={({isActive}) => isActive ? 
          'text-cyan-700' : 'text-slate-700'}>
          parts
        </NavLink>
      </nav>
   
      
    </header>
  );
};

export default Navbar;
