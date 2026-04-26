import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./QuoteForm.module.css";

const VALID_SERVICES = [
  "lawn-care",
  "landscape-design",
  "hardscaping",
  "seasonal-cleanup",
  "irrigation",
];

const SERVICE_LABELS = {
  "lawn-care": "Lawn care & maintenance",
  "landscape-design": "Landscape design & installation",
  hardscaping: "Hardscaping",
  "seasonal-cleanup": "Seasonal cleanup",
  irrigation: "Irrigation",
};

function QuoteForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const defaultService = VALID_SERVICES.includes(serviceParam)
    ? serviceParam
    : "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      service: defaultService,
    },
  });

  const onSubmit = async (data) => {
    if (data.website) {
      navigate("/thank-you");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          bestTime: data.bestTime,
        }),
      });

      if (response.ok) {
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Your name
        </label>
        <input
          id="name"
          type="text"
          placeholder="First & last name"
          className={styles.input}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Best number to reach you"
          className={styles.input}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\+?1?\s*\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="We'll send confirmation here"
          className={styles.input}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service" className={styles.label}>
          Service needed
        </label>
        <select
          id="service"
          className={styles.select}
          {...register("service", {
            required: "Please select a service",
          })}
        >
          <option value="">Select a service</option>
          <option value="lawn-care">Lawn care & maintenance</option>
          <option value="landscape-design">Landscape design & installation</option>
          <option value="hardscaping">Hardscaping</option>
          <option value="seasonal-cleanup">Seasonal cleanup</option>
          <option value="irrigation">Irrigation</option>
          <option value="not-sure">Not sure yet</option>
        </select>
        {errors.service && (
          <span className={styles.error}>{errors.service.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="bestTime" className={styles.label}>
          Best time to call
        </label>
        <input
          id="bestTime"
          type="text"
          placeholder="e.g. Weekday mornings"
          className={styles.input}
          {...register("bestTime")}
        />
      </div>

      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
      />

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Get in touch"}
      </button>

      <div className={styles.disclaimer}>
        No pressure. We respond within 1 business day.
      </div>
    </form>
  );
}

export default QuoteForm;
