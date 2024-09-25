import machupicchu from "../../assets/machu-picchu.jpg";

import styles from "./hero.module.css";

const hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={styles.title}>Explore Inca Citadel</h1>
        <div className={styles.nav}>
          <p>Travel Guide</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <img src={machupicchu} className={styles.hero_photo} alt="machu-picchu" />
    </section>
  );
};

hero.displayName = "Hero Component";

export default hero;
