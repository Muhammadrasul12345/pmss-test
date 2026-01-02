import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import bgImg from "../assets/image7-min.jpg"


const Aloqa = () => {
  

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