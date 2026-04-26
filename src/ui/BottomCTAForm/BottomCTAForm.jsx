import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BottomCTAForm.module.css";

function BottomCTAForm({ title = "Tell us about your project", subtitle = "Share a few details and we'll get back to you within 1 business day." }) {
  const navigate = useNavigate();
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
          <h2 className="heading-secondary">{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <form onSubmit={handleSubmit} className={styles.form}>
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
