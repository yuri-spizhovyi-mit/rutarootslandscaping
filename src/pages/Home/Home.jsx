import Hero from "../../sections/Hero/Hero";
import TrustStrip from "../../sections/TrustStrip/TrustStrip";
import ServicesPreview from "../../sections/ServicesPreview/ServicesPreview";
import FeaturedProject from "../../sections/FeaturedProject/FeaturedProject";
import WhyRutaRoots from "../../sections/WhyRutaRoots/WhyRutaRoots";
import ReviewsSection from "../../sections/Reviews/Reviews";
import BottomCTAForm from "../../ui/BottomCTAForm/BottomCTAForm";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedProject />
      <WhyRutaRoots />
      <ReviewsSection />
      <BottomCTAForm />
    </>
  );
}

export default Home;
