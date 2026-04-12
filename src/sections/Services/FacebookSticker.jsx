import styles from "./FacebookSticker.module.css";

function FacebookSticker() {
  return (
    <a
      href="https://www.facebook.com/people/Ruta-Roots-Landscaping/61566799927246/?rdid=0KPw2m3lovzObN1A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9GpB2B93Xvo9fZ9u%2F"
      target="_blank"
      rel="noreferrer"
      className={styles.facebookSticker}
    >
      <img
        src="/images/sections/services/facebook-sticker.png"
        alt="Facebook sticker"
      />
    </a>
  );
}

export default FacebookSticker;
