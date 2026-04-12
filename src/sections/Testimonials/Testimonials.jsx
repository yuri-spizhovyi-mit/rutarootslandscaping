import styles from "./Testimonials.module.css";

import { CUSTOMER_TESTIMONIALS } from "../../data/customerTestimonials";
import { useRef, useState } from "react";
import { formatTwoDigitNum } from "../../utils/helpers";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButtons from "./SliderButtons";

const SWIPER_CONFIG = {
  spaceBetween: 75,
  slidesPerView: 1,
  speed: 800,
  breakpoints: {
    524: {
      slidesPerView: 2,
    },
    854: {
      slidesPerView: 3,
    },
  },
};

function Testimonials() {
  const swiperRef = useRef(null);
  const [isFirstSlideInView, setIsFirstSlideInView] = useState(true);
  const [isLastSlideInView, setIsLastSlideInView] = useState(false);

  function handleSlideChange(slide) {
    const { isEnd, isBeginning } = slide;

    if (isFirstSlideInView !== isBeginning) {
      setIsFirstSlideInView(isBeginning);
    }

    if (isLastSlideInView !== isEnd) {
      setIsLastSlideInView(isEnd);
    }
  }

  return (
    <section className={styles.testimonials}>
      <div className="container-lg">
        <span className="sub-heading mb-xs">Testimonials</span>
        <h2 className="heading-primary mb-lg">Customer Refrences</h2>
      </div>

      <div className="container-lg">
        <Swiper
          {...SWIPER_CONFIG}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          className="mb-md"
        >
          {CUSTOMER_TESTIMONIALS.map((refrence, index) => {
            return (
              <SwiperSlide key={index} className={styles.slide}>
                <span className={styles.refrenceNum}>
                  {formatTwoDigitNum(index + 1)}
                </span>
                <h3 className="heading-tertiary--sm mb-sm">{refrence.title}</h3>
                <p className="description-sm">{refrence.message}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SliderButtons
          isFirstSlideInView={isFirstSlideInView}
          isLastSlideInView={isLastSlideInView}
          goToPrevSlide={() => swiperRef.current.slidePrev()}
          goToNextSlide={() => swiperRef.current.slideNext()}
        />
      </div>
    </section>
  );
}

export default Testimonials;
