import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";

import g1 from '/src/assets/gallery/g1.jpg';
import g10 from '/src/assets/gallery/g10.jpg';
import g11 from '/src/assets/gallery/g11.jpg';
import g12 from '/src/assets/gallery/g12.jpg';
import g13 from '/src/assets/gallery/g13.jpg';
import g14 from '/src/assets/gallery/g14.jpg';
import g2 from '/src/assets/gallery/g2.jpg';
import g3 from '/src/assets/gallery/g3.jpg';
import g4 from '/src/assets/gallery/g4.jpg';
import g5 from '/src/assets/gallery/g5.jpg';
import g6 from '/src/assets/gallery/g6.jpg';
import g7 from '/src/assets/gallery/g7.jpg';
import g8 from '/src/assets/gallery/g8.jpg';
import g9 from '/src/assets/gallery/g9.jpg';

const Gallery = () => {
    const galImgs = [g1,g2,g3,g4,g5,g11,g12];

    const galImgs2 = [g6,g7,g8,g9,g10,g13,g14];
    return (
        <div className="py-8 lg:py-16 mt-8">
            <h2 className="text-lg lg:text-3xl 2xl:text-[36px] font-semibold text-[#00897B] text-center mb-6 lg:mb-10">Books Gallery</h2>
            <div>
            <Swiper
            className="sample-slider w-full"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              reverseDirection: true,
              stopOnLastSlide: false,
            }}
            // slidesPerView={5}
            speed={4000}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}

            // ,
            //   360: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //   },
            //   750: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   950: {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
          >
            {galImgs.map((imgUrl, idx) => (
              <SwiperSlide key={idx} className="m-2">
                <img
                  // width={400}
                  // height={400}

                  // className="w-auto h-52 mx-8 select-none"
                  className="object-contain w-auto h-[240px] md:h-[264px] mx-auto"
                  src={imgUrl}
                  alt="gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className="sample-slider w-full"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: false,
            }}
            // slidesPerView={5}
            speed={4000}
            allowTouchMove={false}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            // ,
            //   360: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //   },
            //   750: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   950: {
            //     slidesPerView: 4,
            //     spaceBetween: 50,
            //   },
          >
            {galImgs2.map((imgUrl, i) => (
              <SwiperSlide key={i} className="m-2 ">
                <img
                  // width={400}
                  // height={400}
                  // className="w-auto h-52 mx-8 select-none"
                  className="object-contain w-auto h-[240px] md:h-[264px] mx-auto "
                  src={imgUrl}
                  alt="gallery"
                />
              </SwiperSlide>
            ))}
          </Swiper>

            </div>
        </div>
    );
};

export default Gallery;