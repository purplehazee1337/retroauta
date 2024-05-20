import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home,Cars,Contact,About,Parts,OneCar,OnePart} from "./pages/Index";


const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/parts" element={<Parts/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cars/:slug" element={<OneCar/>}/>
          <Route path="/parts/:slug" element={<OnePart/>}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
