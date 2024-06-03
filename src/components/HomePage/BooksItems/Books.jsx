
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlider.css";
import { SwiperNavButtons } from "./SwiperSliderButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
};
const Books = ({ data }) => {
  return (
    <div className="pt-6 md:pt-10">
      <Swiper
        // spaceBetween={5}
        modules={[Autoplay, Navigation]}
        breakpoints={breakpoints}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        speed={3000}
        allowTouchMove={false}
      >
        {data?.map(({ image_url, _id }) => (
          <SwiperSlide
            key={_id}
            className={`text-center   py-16`}
          >
            <div className="h-[240px] md:h-[264px] mx-auto">
                  
              
                <img src={image_url} alt="books" className="!w-full  rounded-md !h-[240px] !md:h-[364px] object-contain" />
               
              
              <div className="">
              
               
                <div className="card-actions justify-center mt-4">
                  <Link to={`/books/${_id}`}>
                    <button className="btn hover:bg-warning bg-[#00897B] text-white">
                      Details
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default Books;
