import { useState } from "react";
import styles from "./Reviews.module.css";

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "I'm very happy to find Alex at Ruta Roots Landscaping to redefine my garden issues having just moved to Kelowna in April. I recommend him for a thorough job! Well done Alex, I am glad to find you!",
      reviewer: "Darlene S.",
      time: "10 months ago",
      rating: 5,
    },
    {
      id: 2,
      text: "Alex and the Ruta Roots team transformed our outdoor space into a beautiful, functional garden. The professional advice and excellent service made the entire process easy. Their expertise in custom garden maintenance in West Kelowna means we can enjoy our backyard more than ever!",
      reviewer: "Sarah & Michael",
      time: "8 months ago",
      rating: 5,
    },
    {
      id: 3,
      text: "I couldn't be happier with the work Ruta Roots Landscaping did in my yard. Alex's creative ideas and planting services, especially in Peachland, completely revitalized the space. It's now my favorite part of the house!",
      reviewer: "Karen L.",
      time: "6 months ago",
      rating: 5,
    },
    {
      id: 4,
      text: "From start to finish, Ruta Roots Landscaping provided excellent service. Our new landscape design is both beautiful and practical. The team, led by Alex, was professional, punctual, and listened to all of our needs. Their knowledge of West Kelowna plant care services was outstanding.",
      reviewer: "Emma and Paul",
      time: "4 months ago",
      rating: 5,
    },
    {
      id: 5,
      text: "Ruta Roots took my vision and brought it to life. Alex and his team did a fantastic job with both planting and maintenance. My garden now looks like something out of a magazine, and their expertise in West Kelowna lawn care services was a game-changer.",
      reviewer: "David R.",
      time: "2 months ago",
      rating: 5,
    },
  ];

  const handlePrevious = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className="sub-heading">Client Testimonials</div>
        <h2 className="heading-secondary">What clients say</h2>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}
            style={{
              transform: `translateX(calc(-${currentReview * 33.333}% - ${currentReview * 2}rem))`
            }}>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={styles.reviewCard}
                data-active={index === currentReview ? "true" : "false"}
              >
                <div className={styles.stars}>
                  {"★".repeat(review.rating)}
                </div>

                <p className={styles.reviewText}>
                  "{review.text}"
                </p>

                <div className={styles.reviewer}>
                  <strong>{review.reviewer}</strong>
                  <span className={styles.date}>{review.time}</span>
                </div>

                <div className={styles.viaLabel}>via Google</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.reviewNav}>
          <button
            onClick={handlePrevious}
            className={styles.navButton}
            aria-label="Previous review"
          >
            <ChevronLeftIcon />
          </button>

          <div className={styles.reviewCounter}>
            Review {currentReview + 1} of {reviews.length}
          </div>

          <button
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next review"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <a
          href="https://www.google.com/search?q=Ruta+Roots+Landscaping"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreLink}
        >
          Read more reviews on Google →
        </a>
      </div>
    </section>
  );
}

export default ReviewsSection;
