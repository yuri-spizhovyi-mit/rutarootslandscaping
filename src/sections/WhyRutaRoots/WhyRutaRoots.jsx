import { useRef } from "react";
import styles from "./WhyRutaRoots.module.css";
import { useCursorGlow } from "../../hooks/useCursorGlow";

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="10 14 12 16 16 12" />
  </svg>
);

const CheckmarkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="10 14 12 16 16 12" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M22 20.857v-1.807a4 4 0 0 0-4-4 3.992 3.992 0 0 0-1.347.226" />
    <circle cx="18" cy="7" r="4" />
  </svg>
);

function WhyRutaRoots() {
  const gridRef = useRef(null);
  useCursorGlow(gridRef, `.${styles.block}`);

  const differentiators = [
    {
      id: 1,
      icon: <ChatIcon />,
      title: "Clear communication throughout the project",
      description: "You have direct communication from start to finish and know what to expect every step of the way.",
    },
    {
      id: 2,
      icon: <ShieldIcon />,
      title: "Properly insured and responsible",
      description: "Ruta Roots carries liability insurance and operates with proper business practices that protect your property.",
      accent: true,
    },
    {
      id: 3,
      icon: <CheckmarkIcon />,
      title: "Focus on doing the job right",
      description: "Work is done properly with proper preparation, careful execution, and attention to detail that makes projects last.",
    },
    {
      id: 4,
      icon: <HandshakeIcon />,
      title: "Reliable from start to finish",
      description: "You can count on consistent service, follow-through, and commitment to completing projects you're satisfied with.",
      accent: true,
    },
  ];

  return (
    <section className={styles.whyRutaRoots}>
      <div className={styles.container}>
        <div className="sub-heading">Why Choose Us</div>
        <h2 className="heading-secondary">Why homeowners choose Ruta Roots</h2>

        <div className={styles.grid} ref={gridRef}>
          {differentiators.map((diff) => (
            <div key={diff.id} className={styles.block}>
              <div className={`${styles.iconWrapper} ${diff.accent ? styles.iconWrapperAccent : ''}`}>{diff.icon}</div>
              <h3 className={styles.blockTitle}>{diff.title}</h3>
              <p className={styles.blockDescription}>{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRutaRoots;
