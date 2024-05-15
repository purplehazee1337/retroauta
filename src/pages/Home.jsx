import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Model from "../models/model";
import { Stats, OrbitControls, SpotLight } from "@react-three/drei";
import ContactBtn from "../components/ContactBtn";

const Home = () => {
  const adjustForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -2, 0];
    let rotation = [0, 0, 0];
    let mainTextSize = 8;

    if (window.innerWidth < 768) {
      screenScale = [2.5, 2.5, 2.5];
    } else {
      screenScale = [3, 3, 3];
      mainTextSize = 9;
    }

    return [screenScale, screenPosition, rotation];
  };

  const [modelScale, modelPosition, modelRotation, mainTextSize] =
    adjustForScreenSize();

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* <div className="w-full text-cyan-700 absolute mt-60 sm:mt-80 left-0 right-0 z-11 flex justify-center">
        <p className="text-8xl mainText overflow-hidden">
          SPRZEDAZ AUT I CZESCI
        </p>
      </div> */}

      <div className="w-full z-11 absolute top-100 sm:top-68 text-cyan-700">

      <div className="flex logos-slide">
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
      </div>     

      <div className="flex logos-slide2">
        <p className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </p>
        <p className="text-9xl mainText  text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </p>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
      </div>

      <div className="flex logos-slide3">
        <p className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </p>
        <p className="text-9xl mainText  text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </p>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
        <div className="text-9xl mainText text-nowrap mx-10">
          SPRZEDAZ AUT I CZESCI
        </div>
      </div>

      </div>
      


      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [5, 7, 0] }}
      >
        <Suspense fallback={<Loader />} />

        <directionalLight position={[1, 1, 1]} intensity={40} />
        <directionalLight position={[-1, 1, -1]} intensity={40} />

        <ambientLight intensity={5} />

        <Model
          position={modelPosition}
          scale={modelScale}
          rotation={modelRotation}
        />
        <OrbitControls
          minDistance={5}
          maxDistance={10}
          minPolarAngle={1.3}
          maxPolarAngle={1.3}
          target={[0, 0, 2]}
          autoRotate={true}
          enablePan={false}
          autoRotateSpeed={1.5}
        />
      </Canvas>
      <div className="absolute bottom-24 sm:bottom-40 left-0 right-0 z-15">
        <ContactBtn />
      </div>
      <div className="absolute bottom-5 left-0 right-0 z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
