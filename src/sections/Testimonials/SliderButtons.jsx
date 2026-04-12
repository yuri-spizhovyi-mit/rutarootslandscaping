import Icon from "../../ui/Icon/Icon";
import styles from "./SliderButtons.module.css";

function SliderButtons({
  isFirstSlideInView,
  isLastSlideInView,
  goToNextSlide,
  goToPrevSlide,
}) {
  const nextButtonClass = !isLastSlideInView
    ? styles.swiperBtnActive
    : styles.swiperBtnDisabled;

  const prevButtonClass = !isFirstSlideInView
    ? styles.swiperBtnActive
    : styles.swiperBtnDisabled;

  return (
    <div className={styles.swiperBtnContainer}>
      <button
        className={`${styles.swiperBtn} ${prevButtonClass}`}
        aria-label="Previous Slide"
        onClick={goToPrevSlide}
      >
        <Icon name="icon--swiper-arrow-prev" />
      </button>

      <button
        className={`${styles.swiperBtn} ${nextButtonClass}`}
        aria-label="Next Slide"
        onClick={goToNextSlide}
      >
        <Icon name="icon--swiper-arrow-next" />
      </button>
    </div>
  );
}

export default SliderButtons;
