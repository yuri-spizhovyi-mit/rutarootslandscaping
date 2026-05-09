import { Helmet } from 'react-helmet-async';
import PageHero from '../../ui/PageHero/PageHero';
import ServiceAnchorNav from '../../sections/ServiceAnchorNav/ServiceAnchorNav';
import ServiceBlock from '../../ui/ServiceBlock/ServiceBlock';
import MidPageCTA from '../../sections/MidPageCTA/MidPageCTA';
import ServicesFAQ from '../../sections/ServicesFAQ/ServicesFAQ';
import BottomCTAForm from '../../ui/BottomCTAForm/BottomCTAForm';
import { services } from '../../data/services';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Landscaping Services in West Kelowna &amp; Kelowna | Ruta Roots</title>
        <meta
          name="description"
          content="Landscaping services in West Kelowna & Kelowna — lawn care, landscape design, hardscaping, seasonal cleanup, and irrigation. Get in touch for a consultation."
        />
      </Helmet>

      <PageHero
        h1="Landscaping services in West Kelowna & Kelowna"
        subHeading="Reliable landscaping services across West Kelowna & Kelowna. Lawn care, design, hardscaping, and seasonal cleanup."
        breadcrumbs={breadcrumbs}
      />

      <ServiceAnchorNav />

      {services.map((service, index) => {
        const altBg = index % 2 !== 0;

        if (index === 3) {
          return (
            <div key={service.id}>
              <MidPageCTA />
              <ServiceBlock service={service} altBg={altBg} />
            </div>
          );
        }

        return <ServiceBlock key={service.id} service={service} altBg={altBg} />;
      })}

      <ServicesFAQ />

      <BottomCTAForm />
    </>
  );
}
