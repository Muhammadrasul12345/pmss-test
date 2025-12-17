import React from 'react';
import Header from '../components/Header';
import ShowCase from '../components/ShowCase';
import Services from '../components/Services';
import License from '../components/License';
import Footer from '../components/Footer';
import bgimg from "../assets/image7-min.jpg";
import SwiperComponent from '../components/SwiperComponent';

const Home = () => {
  return (
    <div
      className="
        w-full min-h-screen
        bg-center bg-cover bg-no-repeat
      "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <SwiperComponent />
      <Header />
      <ShowCase />
      <Services />
      <License />
      <Footer />
    </div>
  );
};

export default Home;
