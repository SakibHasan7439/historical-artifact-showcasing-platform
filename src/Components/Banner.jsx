/* eslint-disable react/prop-types */
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";

import slider1 from "../assets/first_slide.webp";
import slider2 from "../assets/second_slide.webp";
import slider3 from "../assets/third_slide.webp";

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
            <Slider 
            image={slider1}
            text={"The Antikythera Mechanism is widely regarded as the world’s first analog computer, dating back to circa 100 BCE. It was discovered in 1901 among the wreckage of a Roman ship off the coast of the Greek island of Antikythera."}></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider 
                image={slider2}
                text={"The Rosetta Stone is one of the most significant archaeological discoveries in history, as it was the key to deciphering Egyptian hieroglyphs, a script that had been unreadable for nearly 1,400 years."}>
            </Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider 
                image={slider3}
                text={"The Rosetta Stone unlocked the history, culture, and knowledge of ancient Egypt by enabling the translation of thousands of hieroglyphic inscriptions.."}>
            </Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
