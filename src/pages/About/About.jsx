import { Helmet } from 'react-helmet-async';
import PageHero from '../../ui/PageHero/PageHero';
import FounderStory from '../../sections/FounderStory/FounderStory';
import CredibilityStats from '../../sections/CredibilityStats/CredibilityStats';
import Differentiators from '../../sections/Differentiators/Differentiators';
import WhatWeAreNot from '../../sections/WhatWeAreNot/WhatWeAreNot';
import ReviewsSection from '../../sections/Reviews/Reviews';
import Credentials from '../../sections/Credentials/Credentials';
import BottomCTA from '../../ui/BottomCTA/BottomCTA';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Why Choose Ruta Roots | Local Landscaping in West Kelowna</title>
        <meta
          name="description"
          content="Meet Alex at Ruta Roots — a locally-owned West Kelowna landscaping service. No crew rotation. No subcontractors. Just one person who shows up, does the work right, and actually answers the phone."
        />
      </Helmet>

      <PageHero
        h1="Why Kelowna homeowners choose Ruta Roots"
        subHeading="We're a small local operation — just me, my experience, and a focus on getting the job done right. No rotating crew, no subcontractors, no middlemen."
        bgImage="/images/sections/hero/hero-1920-about.webp"
      />

      <FounderStory />

      <CredibilityStats />

      <Differentiators />

      <WhatWeAreNot />

      <ReviewsSection />

      <Credentials />

      <BottomCTA />
    </>
  );
}
