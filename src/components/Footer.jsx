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

