import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import styles from "./BottomCTAForm.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function BottomCTAForm({ title = "Tell us about your project", subtitle = "Share a few details and we'll get back to you within 1 business day." }) {
  const navigate = useNavigate();
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40, delay: 0 });
  const formRef = useRef(null);

  useEffect(() => {
    if (!formRef.current) return;

    const formElements = formRef.current.querySelectorAll(`.${styles.formGroup}, .${styles.submitButton}`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from(formElements, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: 0.2,
          stagger: 0.08,
          ease: 'power2.out',
        });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    bestTime: "",
    honeypot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    console.log("Form submitted:", {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      bestTime: formData.bestTime,
    });

    navigate("/thank-you");
  };

  return (
    <section className={styles.bottomCTAForm}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className="sub-heading">Get Started</div>
          <h2 className="heading-secondary" ref={headingRef}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={styles.input}
              >
                <option value="">Service needed (required)</option>
                <option value="Lawn care & maintenance">Lawn care & maintenance</option>
                <option value="Landscape design & installation">Landscape design & installation</option>
                <option value="Hardscaping">Hardscaping</option>
                <option value="Seasonal cleanup">Seasonal cleanup</option>
                <option value="Irrigation">Irrigation</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="bestTime"
                placeholder="Best time to call (optional)"
                value={formData.bestTime}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <button type="submit" className={styles.submitButton}>
              Get in touch
            </button>

            <p className={styles.disclaimer}>
              No pressure. We respond within 1 business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BottomCTAForm;
