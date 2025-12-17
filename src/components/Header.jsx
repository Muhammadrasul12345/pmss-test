import React from 'react';
import "../index.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="wrapper pt-[20px]">
        <div className="
          box bg-blue-600 w-full rounded-[20px]
          min-h-[300px] p-5
          flex flex-col justify-center
        ">
          <div className="texts flex flex-col pt-[20px] gap-[10px] mb-[40px]">
            <h1 className="
              text-white
              text-[26px] sm:text-[30px] lg:text-[35px]
            ">
              Proekt Max-Stroy
            </h1>

            <p className="
              text-white
              text-[16px] sm:text-[18px] lg:text-[20px]
            ">
              Transport infratuzilmasi va kommunikatsiyalari uchun professional loyihalash xizmatlari
            </p>
          </div>

          <div className="
            btns flex flex-col sm:flex-row
            gap-[15px] sm:gap-[30px]
          ">
            <NavLink to={"/aloqa"}>
              <button className="
                w-full sm:w-[130px] h-[50px]
                bg-white text-blue-500
                rounded-[15px] cursor-pointer
              ">
                Bog'lanish
              </button>
            </NavLink>

            <NavLink to={"/korxona-haqida"}>
              <button className="
                w-full sm:w-[130px] h-[50px]
                text-white rounded-[15px]
                border-[2px] border-gray-500
                cursor-pointer
              ">
                Batafsil
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
