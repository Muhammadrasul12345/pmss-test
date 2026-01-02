import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from "../assets/image-min.jpg"
import img2 from "../assets/image2-min.jpg"
import img3 from "../assets/image3-min.jpg"
import img4 from "../assets/image4-min.jpg"
import img6 from "../assets/image6-min.jpg"

const SwiperComponent = () => {
    return (
      <div className="v">
 <div className="w-full ">
             <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <img 
                    className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover' 
                    src={img1} 
                    alt="Slide 1" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover' 
                   src={img2} 
                    alt="Slide 2" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover' 
                     src={img3} 
                    alt="Slide 3" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover' 
                     src={img4}  
                    alt="Slide 4" 
                  />
                </SwiperSlide>
                 <SwiperSlide>
                  <img 
                    className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover' 
                     src={img6} 
                    alt="Slide 5" 
                  />
                </SwiperSlide>
              </Swiper>
        </div>
      </div>
       
    );
}

export default SwiperComponent;