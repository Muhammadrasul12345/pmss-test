// import React from 'react';
// import "../index.css"
// import { Building2 } from 'lucide-react';

// const Footer = () => {
//     return (
//         <div className='bg-black w-full h-[500px] mt-[50px]'>
//             <div className="container">
//                 <div className="wrapper pt-10">
//                   <div className="top ">
//                     <div className="topp flex gap-[10px] items-center">
//   <Building2 className="bg-blue-600 text-white p-[10px] rounded-[10px]" size={50} />
//                   <h1 className='text-white text-[25px]'>Proekt Max-Stroy</h1>
//                     </div>
//                     <div className="bottomm pt-[15px]">
//                         <p className='text-[gray]'>Professional loyihalash xizmatlari va transport infratuzilmasi</p>
//                     </div>
//                   </div>
//                   <div className="center mt-[30px]">
//                     <h1 className='text-white text-[20px]'>Aloqa</h1>
//                     <ul>
//                         <li>
//                             <span className='text-[gray]'>+998 77 181 8182</span>
//                         </li>
//                         <li>
//                             <span className='text-[gray]'>+998 50 009 1881</span>
//                         </li>
//                         <li>
//                             <span className='text-[gray]'>proektmaxst@gmail.com</span>
//                         </li>
//                     </ul>
//                   </div>
//                   <div className="bottom">
//                     <h1 className='text-[20px] text-[white] pt-[20px]'>Manzil</h1>
//                     <span className='text-[gray]'>Toshkent shahri, Yangihayot tumani, 3-QURILISH, 3-uy, 49-xona</span>
//                   </div>
//                   <hr className='text-[gray] mt-[20px]' />
//                   <div className="texts text-center mt-[50px]">
//                   <p className='text-[gray]'>© 2021 "PROEKT MAX-STROY" MChJ. Barcha huquqlar himoyalangan.</p>
//                   <p className='text-[gray]'>STIR: 308 106 564 | Litsenziya: АЛ-002018</p>
//                   </div>
                 
//                 </div>
//             </div>
//       </div>
//     );
// }

// export default Footer;


import React from 'react';
import "../index.css";
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black w-full mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="pt-10 flex flex-col gap-8">

          {/* LOGO + DESC */}
          <div>
            <div className="flex gap-[10px] items-center">
              <Building2
                className="bg-blue-600 text-white p-[10px] rounded-[10px]"
                size={50}
              />
              <h1 className="text-white text-[25px]">
                Proekt Max-Stroy
              </h1>
            </div>

            <p className="text-gray-400 pt-[15px] max-w-[500px]">
              Professional loyihalash xizmatlari va transport infratuzilmasi
            </p>
          </div>

          {/* ALOQA */}
          <div>
            <h1 className="text-white text-[20px] mb-2">Aloqa</h1>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-400">+998 77 181 8182</li>
              <li className="text-gray-400">+998 50 009 1881</li>
              <li className="text-gray-400">proektmaxst@gmail.com</li>
            </ul>
          </div>

          {/* MANZIL — ALOQA OSTIDA */}
          <div>
            <h1 className="text-white text-[20px] mb-2">Manzil</h1>
            <p className="text-gray-400 max-w-[600px] leading-relaxed">
              Toshkent shahri, Yangihayot tumani,
              3-QURILISH, 3-uy, 49-xona
            </p>
          </div>

          <hr className="border-gray-700 mt-6" />

          {/* COPYRIGHT */}
          <div className="text-center py-6">
            <p className="text-gray-400">
              © 2021 "PROEKT MAX-STROY" MChJ. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-gray-400">
              STIR: 308 106 564 | Litsenziya: АЛ-002018
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

