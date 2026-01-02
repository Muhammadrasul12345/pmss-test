import React from "react";
import Footer from "../components/Footer";
import bgImg from "../assets/image7-min.jpg";

const History = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold  mb-12">
            Korxona tarixi
          </h2>

          {/* Timeline card */}
          <div className="bg-blue-600 rounded-2xl shadow-lg p-6 md:p-10 relative">

            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-[2px] bg-white/40"></div>

            {/* ITEM 1 */}
            <div className="relative flex gap-6 md:gap-8 mb-14">
              {/* Dot */}
              <span className="hidden md:block absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></span>

              {/* Content */}
              <div className="md:pl-16">
                <p className="text-white font-semibold mb-2">
                  2021 yil
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Korxona tashkil etilishi
                </h3>
                <p className="text-white leading-relaxed">
                  21-yanvar 2021 yilda "PROEKT MAX-STROY" MChJ mas'uliyati
                  cheklangan jamiyati Yangihayot tumani davlat xizmatlari
                  markazi tomonidan rasmiy ravishda ro‘yxatdan o‘tkazildi.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative flex gap-6 md:gap-8 mb-14">
              <span className="hidden md:block absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></span>

              <div className="md:pl-16">
                <p className="text-white font-semibold mb-2">
                  2021 yil dekabr
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Litsenziya olish
                </h3>
                <p className="text-white leading-relaxed">
                  28-dekabr 2021 yilda O‘zbekiston Respublikasi Qurilish
                  vazirligi tomonidan AJ-002018 raqamli litsenziya berildi.
                  II toifadagi ob'ektlar uchun avtomobil yo‘llarini qurish,
                  rekonstruksiya qilish va ta’mirlash bo‘yicha loyiha-smeta
                  hujjatlarini yaratish huquqi berildi.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="relative flex gap-6 md:gap-8">
              <span className="hidden md:block absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></span>

              <div className="md:pl-16">
                <p className="text-white font-semibold mb-2">
                  Hozirgi kunda
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Faoliyat davom etmoqda
                </h3>
                <p className="text-white leading-relaxed">
                  Bugungi kunda korxonamiz respublika yo‘l qurilishi
                  ob'ektlarining loyiha-qidiruv tashkilotlari orasida
                  yetakchi o‘rinlardan birini egallaydi va professional
                  xizmatlar ko‘rsatishda davom etmoqda.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
