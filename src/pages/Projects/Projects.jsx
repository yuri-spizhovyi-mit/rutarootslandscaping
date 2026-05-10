import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../../ui/PageHero/PageHero';
import FeaturedProjectShowcase from '../../sections/FeaturedProjectShowcase/FeaturedProjectShowcase';
import ProjectFilterBar from '../../sections/ProjectFilterBar/ProjectFilterBar';
import ProjectGrid from '../../sections/ProjectGrid/ProjectGrid';
import BottomCTA from '../../ui/BottomCTA/BottomCTA';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <Helmet>
        <title>Our Projects — Ruta Roots Landscaping | West Kelowna & Kelowna</title>
        <meta
          name="description"
          content="Browse before-and-after transformations from our landscaping, lawn care, hardscaping, and seasonal cleanup projects across West Kelowna and Kelowna."
        />
      </Helmet>

      <PageHero
        h1="Our work in Kelowna & West Kelowna"
        subHeading="Real results on real properties"
      />

      <FeaturedProjectShowcase />

      <ProjectFilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <ProjectGrid activeFilter={activeFilter} />

      <BottomCTA
        heading="Want results like these for your property?"
        subHeading="Get in touch to discuss your project. We'll assess your space and tell you what's possible."
        secondaryLabel="Or call us — (250) 899-4954"
      />
    </>
  );
}
