import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import GalleryIntro from "../../sections/Gallery/Gallery";
import TechnicalEquipment from "../../sections/TechnicalEquipment/TechnicalEquipment";
import Services from "../../sections/Services/Services";
import Poster from "../../sections/Poster/Poster";
import Testimonials from "../../sections/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <GalleryIntro />
      <TechnicalEquipment />
      <Services />
      <Poster />
      <Testimonials />
    </>
  );
}

export default Home;
