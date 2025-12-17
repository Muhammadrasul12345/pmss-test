import React from 'react';
import { Dot, MapPin } from 'lucide-react';
import Footer from '../components/Footer';
import bgImg from "../assets/image7-min.jpg"

const About = () => {
  return (
    <div className="div bg-center bg-cover" 
    style={{ backgroundImage: `url(${bgImg})` }}>
       <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            Korxona haqida
          </h1>

          {/* MAIN CARD */}
          <div className="w-full mt-4 sm:mt-6">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto">
              
              {/* TITLE TEXT */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 leading-snug">
                  "Proekt Max-Stroy" MCHJ
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 break-words leading-relaxed">
                  respublika yo'l qurilish ob'ektlarining loyiha-qidiruv
                  tashkilotlari orasida yetakchi o'rinlardan birini egallaydi.
                </p>
              </div>

              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                Xizmatlarimiz
              </h1>

              {/* SERVICES LIST */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Transport infratuzilmasi va kommunikatsiyalari uchun loyihalash",
                  "Texnik-iqtisodiy asoslashni ishlab chiqish",
                  "Izlanish (geodeziya, geologiya, gidrologiya)",
                  "Batafsil loyihalash",
                  "Iqtisodiy va moliyaviy tahlil",
                  "Qurilish nazorati",
                  "Loyihani boshqarish xizmatlari",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg sm:rounded-xl flex items-start gap-2 sm:gap-3 p-3 sm:p-4 min-h-[50px] shadow-md"
                  >
                    <Dot size={28} className="text-blue-200 shrink-0 mt-0.5 sm:mt-1" />
                    <p className="text-white text-sm sm:text-base lg:text-lg break-words leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* YURIDIK MA'LUMOT */}
          <div className="w-full mt-8 sm:mt-10 lg:mt-12">
            <div className="bg-blue-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-4 sm:mb-6">
                Yuridik ma'lumotlar
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 sm:p-4">
                  <p className="text-blue-200 text-xs sm:text-sm mb-1">To'liq nomi</p>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium break-words">
                    "Proekt Max-Stroy" MCHJ
                  </p>
                </div>

                <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 sm:p-4">
                  <p className="text-blue-200 text-xs sm:text-sm mb-1">STIR</p>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                    308 106 564
                  </p>
                </div>

                <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 sm:p-4">
                  <p className="text-blue-200 text-xs sm:text-sm mb-1">Ro'yxatga olingan</p>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                    21.01.2021
                  </p>
                </div>

                <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 sm:p-4">
                  <p className="text-blue-200 text-xs sm:text-sm mb-1">Litsenziya</p>
                  <p className="text-white text-sm sm:text-base lg:text-lg font-medium">
                    АЛ-002018
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MANZIL */}
          <div className="w-full mt-8 sm:mt-10 lg:mt-12 mb-6 sm:mb-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
                Manzil
              </h1>

              <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MapPin size={24} className="text-blue-600 shrink-0 mt-1 sm:mt-0" />
                <h2 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">
                  Ofis manzili
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg break-words leading-relaxed pl-0 sm:pl-8">
                Toshkent shahri, Yangihayot tumani, 3-QURILISH,
                3-uy, 49-xona
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
   
  );
};

export default About;
