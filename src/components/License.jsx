import React from 'react';
import "../index.css";
import { Award } from 'lucide-react';

const License = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="wrapper2 bg-blue-600 mt-[40px] rounded-[10px] p-3 sm:p-4">

        {/* TOP */}
        <div className="top flex items-center gap-[15px] sm:gap-[20px] p-[10px]">
          <Award size={42} className="text-[blue] flex-shrink-0" />
          <div className="texts">
            <h1 className="text-[22px] text-white sm:text-[26px] lg:text-[30px]">
              Litsenziyalangan korxona
            </h1>
            <p className="text-gray-300 text-[16px] sm:text-[18px] lg:text-[20px]">
              II toifadagi ob'ektlar uchun
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="card-ota p-[10px] sm:p-[15px] flex flex-col gap-[15px]">

          <div
            className="
              carddd
              w-full
              bg-white
              flex items-center
              gap-[20px]
              p-[15px]
              rounded-[10px]
              box-border
            "
          >
            <p className="break-words whitespace-normal">
              Litsenziya raqami:{" "}
              <span className="font-light">АЛ-002018</span>
            </p>
          </div>

          <div
            className="
              carddd
              w-full
              bg-white
              flex items-center
              gap-[20px]
              p-[15px]
              rounded-[10px]
              box-border
            "
          >
            <p className="break-words whitespace-normal">
              STIR:{" "}
              <span className="font-light">308 106 564</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default License;
