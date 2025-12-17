
// import React from 'react';
// import "../index.css"
// import { Mail, Phone, MapPin } from 'lucide-react';
// import Footer from '../components/Footer';
// import bgImg from "../assets/image7-min.jpg"

// const Aloqa = () => {
//     return (

//         <div className='bg-cover bg-center w-full h-full'
//                 style={{ backgroundImage: `url(${bgImg})` }}>
//          <div className='container'>
//             <h1 className='text-[30px] '>Aloqa</h1>
//             <div className='aloqa-box bg-gradient-to-br from-blue-500 to-blue-600 w-[1220px] h-[400px] p-[20px] flex flex-col gap-[20px] rounded-[10px] mt-[20px]'>
//                 <h1 className='text-[24px] text-white'>Biz bilan bog'laning</h1>
//                 <div className="tel">
//                     <div className="tel-wrapper flex gap-[20px] items-center">
//                           <div className="bg-white/20 hover:bg-white/30 active:bg-white/40  rounded-xl p-[10px] shadow-lg transition-all duration-200 hover:shadow-xl border border-white/30 inline-block cursor-pointer">
//                         <Phone className=' text-white' strokeWidth={2} />
//                     </div>
//                     <p className='text-gray-300'>Telefon raqamlar</p>
//                     </div>
//                     <div className="wrappper pt-[10px] text-white !font-light">
//                             <p>+998 77 181 8182</p>
//                             <p>+998 50 009 1881</p>
//                     </div>
              
//                 </div>
//                <div className="email">
//                   <div className="email-wrapper flex gap-[20px] items-center">
//                           <div className="bg-white/20 hover:bg-white/30 active:bg-white/40  rounded-xl p-[10px] shadow-lg transition-all duration-200 hover:shadow-xl border border-white/30 inline-block cursor-pointer">
//                         <Mail className=' text-white' strokeWidth={2} />
//                     </div>
//                     <p className='text-gray-300'>Email</p>
//                     </div>
//                     <div className="wrappper pt-[10px] text-white !font-light">
//                             <p>proektms@gmail.com</p>
//                     </div>
              
//                </div>

//                <div className="location">
//                   <div className="loc-wrapper flex gap-[20px] items-center">
//                           <div className="bg-white/20 hover:bg-white/30 active:bg-white/40  rounded-xl p-[10px] shadow-lg transition-all duration-200 hover:shadow-xl border border-white/30 inline-block cursor-pointer">
//                         <MapPin className=' text-white' strokeWidth={2} />
//                     </div>
//                     <p className='text-gray-300'>Manzil</p>
//                     </div>
//                     <div className="wrappper pt-[10px] text-white !font-light">
//                             <p>Manzil Toshkent shahri, Yangihayot tumani, 3-QURILISH, 3-uy, 49-xona</p>
//                     </div>
              
//                </div>
//             </div>
//         </div>
//         <Footer />
//         </div>
       

    
//     );
// }

// export default Aloqa;


import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import bgImg from "../assets/image7-min.jpg"


const Aloqa = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const uzbekistanTime = new Date(time.toLocaleString('en-US', { timeZone: 'Asia/Tashkent' }));
    
    const hours = uzbekistanTime.getHours();
    const minutes = uzbekistanTime.getMinutes();
    const seconds = uzbekistanTime.getSeconds();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

    const days = ['Yak', 'Du', 'Se', 'Chor', 'Pay', 'Juma', 'Shan'];
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    
    const currentDay = uzbekistanTime.getDay();
    const currentDate = uzbekistanTime.getDate();
    const currentMonth = uzbekistanTime.getMonth();
    const currentYear = uzbekistanTime.getFullYear();

    return (
        <>
            <div className=' bg-cover bg-center w-full  min-h-screen' style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='bg-black/40 backdrop-blur-sm w-full min-h-screen py-6 px-4 sm:py-8 sm:px-6 lg:py-12'>
                    <div className='max-w-7xl mx-auto'>
                        {/* Sarlavha */}
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-12  drop-shadow-2xl'>
                            Aloqa
                        </h1>
                        
                        {/* Soat va Kalendar */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12'>
                            {/* Analog Soat */}
                            <div className='bg-gradient-to-br from-blue-500/90 to-blue-700/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-300/40 shadow-2xl transform  transition-transform duration-300'>
                                <h2 className='text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 text-center font-bold drop-shadow-lg'>
                                    O'zbekiston vaqti
                                </h2>
                                <div className='flex justify-center items-center mb-4 sm:mb-6'>
                                    <div className='relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-gradient-to-br from-white/30 to-blue-200/20 rounded-full shadow-2xl border-4 sm:border-[6px] border-white/50'>
                                        {/* Soat belgilari */}
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={i}
                                                className='absolute top-1/2 left-1/2 origin-bottom'
                                            />
                                        ))}
                                        
                                        {/* Markaziy nuqta */}
                                        <div className='absolute top-1/2 left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl border-2 border-blue-600' />
                                        
                                        {/* Soat strelkasi */}
                                        <div
                                            className='absolute top-1/2 left-1/2 origin-bottom transition-transform duration-1000'
                                            style={{
                                                width: '5px',
                                                height: '50px',
                                                background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0.9))',
                                                borderRadius: '3px',
                                                transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
                                                boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
                                                zIndex: 15,
                                            }}
                                        />
                                        
                                        {/* Minut strelkasi */}
                                        <div
                                            className='absolute top-1/2 left-1/2 origin-bottom transition-transform duration-1000'
                                            style={{
                                                width: '4px',
                                                height: '70px',
                                                background: 'linear-gradient(to top, rgba(191, 219, 254, 1), rgba(191, 219, 254, 0.9))',
                                                borderRadius: '2px',
                                                transform: `translate(-50%, -100%) rotate(${minuteDegrees}deg)`,
                                                boxShadow: '0 0 12px rgba(191, 219, 254, 0.6)',
                                                zIndex: 16,
                                            }}
                                        />
                                        
                                        {/* Sekund strelkasi */}
                                        <div
                                            className='absolute top-1/2 left-1/2 origin-bottom'
                                            style={{
                                                width: '2px',
                                                height: '85px',
                                                background: 'linear-gradient(to top, rgba(96, 165, 250, 1), rgba(96, 165, 250, 0.8))',
                                                borderRadius: '1px',
                                                transform: `translate(-50%, -100%) rotate(${secondDegrees}deg)`,
                                                boxShadow: '0 0 10px rgba(96, 165, 250, 0.7)',
                                                zIndex: 17,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='text-center text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-white drop-shadow-lg'>
                                    {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                                </div>
                            </div>

                            {/* Kalendar */}
                            <div className='bg-gradient-to-br from-blue-500/90 to-blue-700/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-300/40 shadow-2xl transform  transition-transform duration-300'>
                                <div className='flex items-center justify-center gap-3 mb-4 sm:mb-6'>
                                    <Calendar className='text-white drop-shadow-lg' size={28} strokeWidth={2.5} />
                                    <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold drop-shadow-lg'>Kalendar</h2>
                                </div>
                                <div className='bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/30'>
                                    <div className='text-center mb-4 sm:mb-6'>
                                        <div className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl'>{currentDate}</div>
                                        <div className='text-xl sm:text-2xl lg:text-3xl text-blue-50 font-semibold drop-shadow-lg'>{months[currentMonth]} {currentYear}</div>
                                        <div className='text-lg sm:text-xl lg:text-2xl text-blue-100 mt-2 sm:mt-3 font-medium drop-shadow-md'>{days[currentDay === 0 ? 6 : currentDay - 1]}shanba</div>
                                    </div>
                                    <div className='grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm lg:text-base mt-4'>
                                        {days.map((day, idx) => (
                                            <div key={idx} className='text-white font-bold py-2 bg-white/10 rounded-lg backdrop-blur-sm'>
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aloqa ma'lumotlari */}
                        <div className='bg-gradient-to-br from-blue-600/95 to-blue-800/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-blue-400/40'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-6 sm:mb-8 lg:mb-10 text-center drop-shadow-lg'>
                                Biz bilan bog'laning
                            </h2>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                                {/* Telefon */}
                                <div className='bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-300 transform'>
                                    <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
                                        <div className="bg-white/25 hover:bg-white/35 rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-200 border-2 border-white/30">
                                            <Phone className='text-white drop-shadow-lg' strokeWidth={2.5} size={24} />
                                        </div>
                                        <p className='text-white font-bold text-base sm:text-lg lg:text-xl drop-shadow-md'>Telefon raqamlar</p>
                                    </div>
                                    <div className="pl-0 sm:pl-16 space-y-1 sm:space-y-2">
                                        <p className='text-white/95 text-sm sm:text-base lg:text-lg font-medium'>+998 77 181 8182</p>
                                        <p className='text-white/95 text-sm sm:text-base lg:text-lg font-medium'>+998 50 009 1881</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-300 transform'>
                                    <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
                                        <div className="bg-white/25 hover:bg-white/35 rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-200 border-2 border-white/30">
                                            <Mail className='text-white drop-shadow-lg' strokeWidth={2.5} size={24} />
                                        </div>
                                        <p className='text-white font-bold text-base sm:text-lg lg:text-xl drop-shadow-md'>Email</p>
                                    </div>
                                    <div className="pl-0 sm:pl-16">
                                        <p className='text-white/95 text-sm sm:text-base lg:text-lg font-medium break-all'>proektms@gmail.com</p>
                                    </div>
                                </div>

                                {/* Manzil */}
                                <div className='bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-300 transform  md:col-span-2 lg:col-span-1'>
                                    <div className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4">
                                        <div className="bg-white/25 hover:bg-white/35 rounded-xl p-3 sm:p-4 shadow-lg transition-all duration-200 border-2 border-white/30">
                                            <MapPin className='text-white drop-shadow-lg' strokeWidth={2.5} size={24} />
                                        </div>
                                        <p className='text-white font-bold text-base sm:text-lg lg:text-xl drop-shadow-md'>Manzil</p>
                                    </div>
                                    <div className="pl-0 sm:pl-16">
                                        <p className='text-white/95 text-sm sm:text-base lg:text-lg font-medium leading-relaxed'>
                                            Toshkent shahri, Yangihayot tumani, 3-QURILISH, 3-uy, 49-xona
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Aloqa;