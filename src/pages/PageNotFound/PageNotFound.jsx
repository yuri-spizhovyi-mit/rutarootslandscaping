import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.pageNotFoundContainer}>
        <img
          src="/images/error/error.webp"
          alt="404 is not found"
          className={styles.errorImage}
        />
        <h1 className={styles.errorMessage}>Page not found</h1>
      </div>
    </div>
  );
}

export default PageNotFound;
