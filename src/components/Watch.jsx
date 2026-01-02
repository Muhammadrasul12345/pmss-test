import React, { useState, useEffect } from 'react';

const Watch = () => {
    const [currentMoment, setCurrentMoment] = useState(new Date());

    useEffect(() => {
        const tick = setInterval(() => {
            setCurrentMoment(new Date());
        }, 1000);
        return () => clearInterval(tick);
    }, []);

    const tashkentMoment = new Date(currentMoment.toLocaleString('en-US', { timeZone: 'Asia/Tashkent' }));
    
    const soat = tashkentMoment.getHours();
    const daqiqa = tashkentMoment.getMinutes();
    const soniya = tashkentMoment.getSeconds();

    const soniyaBurchak = (soniya / 60) * 360;
    const daqiqaBurchak = ((daqiqa + soniya / 60) / 60) * 360;
    const soatBurchak = ((soat % 12 + daqiqa / 60) / 12) * 360;

    const haftaKunlari = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    const oyNomlari = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    const qisqaKunlar = ['Yak', 'Du', 'Se', 'Chor', 'Pay', 'Juma', 'Shan'];
    
    const bugungiKun = tashkentMoment.getDay();
    const sana = tashkentMoment.getDate();
    const oyRaqami = tashkentMoment.getMonth();
    const yilRaqami = tashkentMoment.getFullYear();

    return (
        <div className="container">
  <div className='grid mt-[30px] flex gap-[20px]  grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-12 mb-8'>
            {/* Analog Soat Qismi */}
            <div className='bg-gradient-to-br from-blue-500/90 to-blue-700/90  backdrop-blur-lg rounded-3xl p-8 md:p-10 border-2 border-blue-300/40 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 w-full mx-auto flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mb-6 relative'>
                    <div className='relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-white/30 to-blue-200/20 rounded-full shadow-2xl border-[5px] border-white/50'>
                        {/* Katta soat chiziqlar (12, 3, 6, 9) */}
                        {[0, 3, 6, 9].map((raqam) => (
                            <div
                                key={`katta-${raqam}`}
                                className='absolute top-1/2 left-1/2 origin-bottom'
                                style={{
                         
                                }}
                            />
                        ))}
                        
                        {/* Kichik soat chiziqlar */}
                        {[1, 2, 4, 5, 7, 8, 10, 11].map((raqam) => (
                            <div
                                key={`kichik-${raqam}`}
                                className='absolute top-1/2 left-1/2 origin-bottom'
                                style={{
                                
                                }}
                            />
                        ))}
                        
                        {/* Daqiqa nuqtalari */}
                        {[...Array(60)].map((_, index) => {
                            if (index % 5 === 0) return null;
                            return (
                                <div
                                    key={`nuqta-${index}`}
                                    className='absolute top-1/2 left-1/2'
                                    style={{
                                   
                                    }}
                                />
                            );
                        })}
                        
                        {/* Markaziy logo matn */}
                        {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10'>
                            <div className='text-white text-xs font-bold drop-shadow-lg whitespace-nowrap'>
                                Proekt
                            </div>
                            <div className='text-white mb-[20px] text-xs font-bold drop-shadow-lg whitespace-nowrap mt-0.5'>
                                Max-Stroy
                            </div>
                        </div> */}
                        
                        {/* Markaziy doira */}
                        <div className='absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl border-2 border-blue-600' />
                        
                        {/* Soat strelkasi */}
                        <div
                            className='absolute top-1/2 left-1/2 origin-bottom transition-transform duration-1000'
                            style={{
                                width: '4px',
                                height: '45px',
                                background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0.9))',
                                borderRadius: '3px',
                                transform: `translate(-50%, -100%) rotate(${soatBurchak}deg)`,
                                boxShadow: '0 0 12px rgba(255, 255, 255, 0.6)',
                                zIndex: 15,
                            }}
                        />
                        
                        {/* Daqiqa strelkasi */}
                        <div
                            className='absolute top-1/2 left-1/2 origin-bottom transition-transform duration-1000'
                            style={{
                                width: '3px',
                                height: '65px',
                                background: 'linear-gradient(to top, rgba(191, 219, 254, 1), rgba(191, 219, 254, 0.9))',
                                borderRadius: '2px',
                                transform: `translate(-50%, -100%) rotate(${daqiqaBurchak}deg)`,
                                boxShadow: '0 0 10px rgba(191, 219, 254, 0.6)',
                                zIndex: 16,
                            }}
                        />
                        
                        {/* Soniya strelkasi */}
                        <div
                            className='absolute top-1/2 left-1/2 origin-bottom'
                            style={{
                                width: '2px',
                                height: '80px',
                                background: 'linear-gradient(to top, rgba(96, 165, 250, 1), rgba(96, 165, 250, 0.8))',
                                borderRadius: '1px',
                                transform: `translate(-50%, -100%) rotate(${soniyaBurchak}deg)`,
                                boxShadow: '0 0 8px rgba(96, 165, 250, 0.7)',
                                zIndex: 17,
                            }}
                        />
                    </div>
                </div>
                <div className='text-center text-3xl md:text-4xl font-mono font-bold text-white drop-shadow-lg'>
                    {soat.toString().padStart(2, '0')}:{daqiqa.toString().padStart(2, '0')}:{soniya.toString().padStart(2, '0')}
                </div>
            </div>

            {/* Kalendar Qismi */}
            <div className='bg-gradient-to-br from-blue-500/90 to-blue-700/90 backdrop-blur-lg rounded-3xl p-8 md:p-10 border-2 border-blue-300/40 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 w-full mx-auto'>
                <div className='flex items-center justify-center gap-3 mb-6'>
                    <svg className='text-white drop-shadow-lg w-7 h-7' fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h2 className='text-2xl md:text-3xl text-white font-bold drop-shadow-lg'>Kalendar</h2>
                </div>
                <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-white/30'>
                    <div className='text-center mb-6'>
                        <div className='text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl'>{sana}</div>
                        <div className='text-2xl md:text-3xl text-blue-50 font-semibold drop-shadow-lg'>{oyNomlari[oyRaqami]} {yilRaqami}</div>
                        <div className='text-xl md:text-2xl text-blue-100 mt-3 font-medium drop-shadow-md'>{haftaKunlari[bugungiKun]}</div>
                    </div>
                    <div className='grid grid-cols-7 gap-1 md:gap-2 text-center text-xs md:text-sm mt-4'>
                        {qisqaKunlar.map((kunNomi, pozitsiya) => (
                            <div key={`hafta-${pozitsiya}`} className='text-white font-bold py-1.5 md:py-2 bg-white/10 rounded-lg backdrop-blur-sm text-[10px] md:text-sm'>
                                {kunNomi}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    );
}

export default Watch;