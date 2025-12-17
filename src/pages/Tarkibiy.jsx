import React from "react";
import Footer from "../components/Footer";
import bgImg from "../assets/image7-min.jpg"


const Tarkibiy = () => {
  const workers = [
    { role: "Direktor", name: "Soliyev Murod" },
    { role: "Loyiha bosh muhandisi", name: "Ibragimov Jorabek" },
    { role: "Loyiha bosh muhandisi", name: "Abulqosimov Bekzod" },
    { role: "Loyiha bosh muhandisi", name: "Musayev Ajiniyaz" },
    { role: "Loyiha bosh muhandisi", name: "Djamalov Tulkin" },
    { role: "Bosh konsultant (professor)", name: "Abdunayim Ablakulov" },
    { role: "Yetakchi mutaxassis", name: "Dosmuxamedova Gulnara" },
    { role: "Hujjatlarni raqamlashtirish bo‘yicha mutaxassis", name: "Ibragimova Nafisa" },
    { role: "Bosh mutaxassis", name: "Egamov Siroj" },
    { role: "Mutaxassis", name: "Axmadjonov Umid" },
    { role: "Mutaxassis", name: "Saidnazarova Mohichehra" },
  ];

  return (
    <div className='bg-cover bg-center w-full h-full '
                            style={{ backgroundImage: `url(${bgImg})` }}>
   <div className="w-full max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-8 ">
        Tarkibiy tuzilma
      </h1>

      <div className="flex flex-col gap-6">
        {workers.map((worker, i) => {
          const firstLetter = worker.name.charAt(0).toUpperCase();

          return (
            <div
              key={i}
              className="w-full bg-white rounded-[20px] p-6 shadow-md 
                         flex gap-6 items-start hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{firstLetter}</span>
              </div>

              {/* Matn */}
              <div>
                <h2 className="text-[20px] font-semibold">{worker.name}</h2>
                <p className="text-blue-700 mt-1">{worker.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
    <Footer />
    </div>
   
    
  
  );
};

export default Tarkibiy;
