// import React from 'react';
// import "../index.css"
//  import { ChevronRight } from 'lucide-react';

// const Services = () => {
//     return (
//         <div className='container'>
//              <div className="wrapper  mt-[50px]">
//              <h1 className='text-[30px] font-bold'>Bizning Xizmatlar</h1>
//                <div className="cards">
//                 <div className="cardd "><ChevronRight className='text-[blue]' size={20} /> Transport infratuzilmasi va kommunikatsiyalari uchun loyihalash </div>
//                <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Texnik-iqtisodiy asoslashni ishlab chiqish</div>
//                <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Izlanish (geodeziya, geologiya, gidrologiya)</div>
//                <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Batafsil loyihalash</div>
//                 <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Iqtisodiy va moliyaviy tahlil</div>
//                 <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Qurilish nazorati</div>
//                <div className="cardd"><ChevronRight className='text-[blue]' size={20} /> Loyihani boshqarish xizmatlari</div>
//               </div>
//            </div>
//        </div>
//     );
// }

// export default Services;


import React from "react";
import "../index.css";
import { ChevronRight } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="wrapper mt-[50px]">
        <h1 className="text-[24px] text-white sm:text-[28px] lg:text-[30px] font-bold mb-6">
          Bizning Xizmatlar
        </h1>

        <div className="cards w-full flex flex-col gap-4">

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Transport infratuzilmasi va kommunikatsiyalari uchun loyihalash
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
           
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Texnik-iqtisodiy asoslashni ishlab chiqish
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
           
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Izlanish (geodeziya, geologiya, gidrologiya)
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
           
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Batafsil loyihalash
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
           
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Iqtisodiy va moliyaviy tahlil
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
           
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Qurilish nazorati
            </p>
          </div>

          <div className="cardd
            w-full
            bg-blue-600
            rounded-[20px]
            px-5 py-4
            flex items-start gap-3
            
            overflow-visible
          ">
            <ChevronRight
              size={20}
              className="text-blue-900 mt-1 flex-shrink-0"
            />
            <p className="text-white break-words whitespace-normal">
              Loyihani boshqarish xizmatlari
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;

