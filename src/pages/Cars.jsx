import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";
import ContactBtn from "../components/ContactBtn";

const Cars = () => {
  return (
    <section className="max-container ">
        <div className="relative">
          <img src="../porsche.jpg" className="brightness-90 object-cover"></img>
          <h2 className="absolute top-5 left-5 text-white mainText text-6xl z-10">PORSCHE 911</h2>
        </div>
        
        <div className="text-sm p-3 flex flex-col gap-3 text-slate-500">
          <p>
            The Porsche 911, an icon among automotive enthusiasts, stands as a
            timeless symbol of engineering brilliance and driving passion. With
            its unmistakable silhouette, characterized by its rear-engine
            layout, sloping roofline, and round headlights, the 911 is instantly
            recognizable even to those with only a passing interest in cars.
          </p>
          <p>
            Dating back to its inception in the early 1960s, the 911 has evolved
            through several generations, each iteration refining its
            performance, handling, and design. However, it's the early models,
            often referred to as classic or vintage Porsche 911s, that hold a
            special place in the hearts of enthusiasts.
          </p>
          <p>
            The allure of an old Porsche 911 lies not just in its aesthetics but
            in its driving experience. The air-cooled flat-six engine, nestled
            behind the rear axle, emits a distinctive sound that purists
            cherish. The steering, unassisted and direct, provides a connection
            between driver and road that modern cars often struggle to
            replicate. Its manual gearbox demands driver involvement, adding to
            the feeling of being one with the machine.
          </p>
        
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

export default Cars;
