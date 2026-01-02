import React from 'react';
import { Handshake } from 'lucide-react';
import "../index.css";
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import bgImg from "../assets/image7-min.jpg";

const Hamkorlar = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className="pt-5 px-4 md:px-0">
          <h1 className="font-bold  text-2xl md:text-3xl mb-4">
            Hamkorlar
          </h1>

          {/* MAIN CARD */}
          <div className="bg-blue-600 rounded-[12px] p-6 md:p-10
                          max-w-[1200px] mx-auto
                          min-h-[260px]
                          flex flex-col gap-5
                          justify-center items-center text-center">

            <Handshake size={42} className="text-white" />

            <h1 className="text-xl md:text-2xl font-bold text-white">
              Bizning hamkorlarimiz
            </h1>

            <p className="text-white text-base md:text-lg break-words">
              Orient Geodez MChJ
            </p>

            <NavLink to="/aloqa">
              <button className="w-[160px] h-[50px]
                                 bg-white text-blue-600
                                 rounded-[10px]
                                 font-medium
                                 cursor-pointer">
                Hamkor bo‘lish
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hamkorlar;
